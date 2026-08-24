const { ClassicLevel } = require("F:/Program Files/Foundry Virtual Tabletop/resources/app/node_modules/classic-level");
const path = require("path");
(async () => {
  const db = new ClassicLevel(path.join(process.env.TEMP, "pf2e-packs-audit", "feats"), { keyEncoding: "utf8", valueEncoding: "json" });
  const conditions = /\b(frightened|dazzled|blinded|stunned|slowed|sickened|stupefied|clumsy|enfeebled|off-guard|prone|immobilized|fascinated|persistent (?:bleed|acid|fire|cold|mental|sonic|void|vitality|piercing|slashing|bludgeoning))/i;
  for await (const [, v] of db.iterator()) {
    const text = String(v?.system?.description?.value ?? "").replace(/<[^>]+>/g, " ");
    if (conditions.test(text) && !/reminder|manual/i.test(text)) console.log(`${v.name}\t${text.replace(/\s+/g, " ").slice(0, 260)}`);
  }
  await db.close();
})();
