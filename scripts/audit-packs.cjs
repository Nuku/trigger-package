const fs = require("fs");
const path = require("path");
const { ClassicLevel } = require("F:/Program Files/Foundry Virtual Tabletop/resources/app/node_modules/classic-level");

const root = process.cwd();
const main = fs.readFileSync(path.join(root, "scripts/main.js"), "utf8");
const constants = Object.fromEntries([...main.matchAll(/const (\w+_PATH) = "modules\/trigger-package\/triggers\/([^\"]+\.json)"/g)].map((m) => [m[1], m[2]]));
const files = [
  ...[...main.matchAll(/registerTriggers\([^\n]*?"modules\/trigger-package\/triggers\/([^\"]+\.json)"\)/g)].map((m) => m[1]),
  ...Object.entries(constants).filter(([name]) => main.includes(`registerTriggers("trigger-engine", "pf2e-trigger", ${name})`)).map(([, file]) => file),
];
const covered = new Set();
for (const file of files) {
  for (const trigger of [].concat(JSON.parse(fs.readFileSync(path.join(root, "triggers", file), "utf8")))) {
    for (const node of trigger.nodes ?? []) {
      for (const input of Object.values(node.inputs ?? {})) {
        if (typeof input?.value !== "string") continue;
        if (/^[a-z0-9-]+$/.test(input.value)) covered.add(input.value);
        for (const match of input.value.matchAll(/item:slug:([a-z0-9-]+)/g)) covered.add(match[1]);
      }
    }
  }
}

const clean = (value) => (value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
const effect = /\b(apply|become|becomes|blinded|dazzled|deafened|frightened|sickened|stunned|slowed|clumsy|enfeebled|stupefied|drained|immobilized|restrained|prone|confused|fascinated|off-guard|grabbed|paralyzed|petrified|persistent|bleed|unconscious|controlled|doomed|fleeing)\b/i;
const actionable = /\b(apply|become|becomes|gains|increase|reduces|deal|deals|damage|persistent|condition)\b/i;
const directCondition = /\b(become|becomes|gain|gains|reduce|reduces|increase|increases|apply|applies)\b.{0,120}\b(blinded|dazzled|deafened|frightened|sickened|stunned|slowed|clumsy|enfeebled|stupefied|drained|immobilized|restrained|prone|confused|fascinated|off-guard|grabbed|paralyzed|petrified|unconscious|doomed|fleeing)\b/i;
const saveEffect = /@Check\[[^\]]+\][\s\S]{0,500}\b(become|becomes|apply|applies|gains|gain|condition|blinded|dazzled|deafened|frightened|sickened|stunned|slowed|clumsy|enfeebled|stupefied|drained|immobilized|restrained|prone|confused|fascinated|off-guard|grabbed|paralyzed|petrified)\b/i;

(async () => {
  for (const [system, dir] of [["PF2e", "spells"], ["SF2e", "sf2e-spells"], ["PF2e", "pf2e-actions"], ["SF2e", "sf2e-actions"]]) {
    const db = new ClassicLevel(path.join(process.env.TEMP, "pf2e-packs-audit", dir), { keyEncoding: "utf8", valueEncoding: "json" });
    let count = 0;
    for await (const [, value] of db.iterator()) {
      const slug = value?.system?.slug;
      const description = clean(value?.system?.description?.value);
      if (!slug || covered.has(slug) || !effect.test(description) || !actionable.test(description) || !["spell", "action", "feat"].includes(value?.type)) continue;
      if (process.argv[2] === "actions" && !["action", "feat"].includes(value.type)) continue;
      if (process.argv[2] === "spells" && value.type !== "spell") continue;
      if (process.argv[3] === "direct" && !directCondition.test(description)) continue;
      if (process.argv[3] === "save" && !saveEffect.test(description)) continue;
      if (count++ < 120) console.log(process.env.AUDIT_NAMES === "1" ? `${system}\t${value.type}\t${value.name}\t${slug}` : `${system}\t${value.type}\t${value.name}\t${slug}\t${description.slice(0, 280)}`);
    }
    console.error(`${system} ${dir}: ${count} uncovered effect candidates`);
    await db.close();
  }
})();
