# PF2e/SF2e Automation Audit

The source-content audit uses PF2e compendium data, while the resulting Trigger Engine graphs are registered for both the `pf2e` and `sf2e` systems. Trigger Engine supplies the shared `pf2e-trigger` application for both systems.

## Scope rule: automation over reminders

Triggers whose entire flow is only an action event followed by a chat message are not the goal of this module. Those message-only reminder graphs have been removed. When an action, spell, or effect cannot be represented safely with Trigger Engine automation, it should remain documented as a manual/native limitation rather than receive a reminder-only trigger. Partial automations remain when they perform a real mechanical step and clearly identify what is still manual.

This module is intended to complement the installed PF2e Trigger Trove rather than duplicate its 85 existing triggers. The package currently reaches Batch 486.

## Implemented in this batch

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Intimidating Strike | Applies frightened 1/2 from attack outcome |
| Spell | Fear | Applies frightened 1/2/3 from save outcome |
| Spell | Blindness | Applies dazzled/blinded from save outcome |
| Spell | Sticky Fire | Applies persistent fire damage on a successful spell attack |
| Spell | Blinding Foam | Applies persistent acid damage on a successful spell attack |
| Feat | Debilitating Shot | Applies slowed 1 on a damaging hit |
| Monster ability | Petrifying Glance | Applies slowed 1 for 1 minute on a failed save |
| Feat | Staggering Blow | Applies slowed 1 on a successful attack |
| Monster ability | Devil's Howl | Applies frightened 2/3 by save outcome |
| Spell | Blinding Beauty | Applies dazzled/blinded by save outcome |
| Monster ability | Petrifying Gaze | Applies slowed 1, then petrified on a later failed save |
| Monster ability | Bloodletting | Applies 3d6 persistent bleed on a critical hit |
| Spell | Fateful Condemnation | Applies slowed 1 to the initial failed-save target |
| Equipment | Flaying Knife | Applies 1d8 persistent bleed on a successful hit |
| Monster ability | Infernal Wound | Applies 4d6 persistent bleed on a critical hit |
| Feat | Antagonize | Raises a successfully Demoralized target to frightened 2 |
| Feat | Shatter Defenses | Applies off-guard after a damaging hit against a frightened target |
| Feat | Sickening Bite | Applies sickened 1 on a critical hit |
| Equipment | Wounding | Applies 1d6 persistent bleed on a critical hit |
| Equipment | Frost | Applies slowed 1 for 1 round after a failed critical-hit save |
| Spell | Befuddle | Applies stupefied 1/2 by Will save outcome for 1 round |
| Spell | Touch of Obedience | Applies stupefied 1/2 and prone on critical failure by Will-save outcome |
| Spell | Mariner's Curse | Applies sickened 1/2 by Will save outcome |
| Spell | Mercurial Stride | Applies sickened 1/2 by Fortitude save outcome |
| Spell | Sculpt Sound | Applies stupefied 2 on a critical failure for 1 minute |
| Monster ability | Steal Breath | Applies enfeebled 1 for 1 round or 24 hours, fatigued on failure, and unconscious on critical failure |
| Monster ability | Vargouille's Shriek | Applies paralyzed for the immediate round on a failed save |
| Monster ability | Shameful Touch | Applies sickened 1 and stunned 1 by Will save outcome |
| Feat | Siren Song | Applies stupefied 1/2 for 1 round by Will save outcome |
| Spell | Dizzying Colors | Applies dazzled, stunned, and blinded by Will save outcome |
| Feat | Stunning Surprise | Applies stunned 1/3 or unconscious by Fortitude save outcome |
| Feat | Brinesoul / Salt Wound | Applies sickened 1/2 by Fortitude save outcome |
| Feat | Salt Wound | Applies 1d6/2d6 persistent acid damage on failed/critically failed Fortitude saves; once-per-day reaction gate remains with the feat |
| Equipment | Mask of the Cursed Eye | Applies sickened and dazzled by Will save outcome |
| Equipment | Dreaming Round | Applies slowed 1/2 and fatigued from Fortitude save outcome |
| Spell | You're Mine | Applies stunned 1 on success/failure and controlled for 1 round on critical failure |
| Spell | Stasis | Applies stunned 1 on a successful save |
| Monster ability | Dread Gaze | Applies frightened 1/2 and slowed 1 by Will save outcome |
| Monster ability | Jangle the Chain | Applies sickened 1/2 and stunned 1/3 by Will save outcome |
| Spell | Astral Labyrinth | Applies stunned 1/3 by Will save outcome |
| Spell | Never Mind | Applies stupefied 2 on a successful Will save |
| Spell | Heart's Desire | Applies stupefied 2 with save-dependent duration |
| Spell | Aberrant Whispers | Applies stupefied 2 on a failure and confused for 1 round on a critical failure |
| Spell | Slow | Applies slowed 1/2 with outcome-dependent duration |
| Spell | Cursed Metamorphosis | Applies sickened 1 on a successful Fortitude save |
| Spell | Enfeeble | Applies enfeebled 1/2/3 with outcome-dependent duration |
| Monster ability | Pressure Point Attack | Applies enfeebled 2 with outcome-dependent duration |
| Spell | Feast of Ashes | Applies fatigued 1 on a successful Fortitude save |
| Spell | Cup of Dust | Applies fatigued 1 on a successful Fortitude save |
| Spell | Disrupt Undead | Applies enfeebled 1 for 1 round on a critical failure |
| Spell | Synaptic Pulse | Applies stunned 1/2 or stunned for 1 round by Will save outcome |
| Spell | Roaring Applause | Applies slowed 1 for 1 round on a failed or critically failed Will save |
| Spell | Horrific Visage | Applies frightened 1/2 by Will save outcome |
| Spell | Ancestral Winds | Applies frightened 1/2 and stunned 1 by Will save outcome |
| Equipment | Thundering | Applies deafened for 1 minute or 1 hour by Fortitude save outcome |
| Monster ability | Radiant Blast | Applies blinded for 1 round on a critical failure |
| Equipment | Alghollthu Lash | Applies dazzled and stunned 1/2 by Will save outcome |
| Monster ability | Funereal Touch | Applies drained 1/2 by Fortitude save outcome, capped at drained 4 |
| Monster ability | Befuddling Lash | Applies stupefied 1/2 for 1 minute by Will save outcome |
| Equipment | Queasy Lantern | Applies sickened 1/2 by Fortitude save outcome |
| Equipment | Nexian Sealing Blade | Applies deafened for 1 round or 1 hour by Fortitude save outcome |
| Monster ability | Frightening Howl | Applies frightened 2/3 by Will save outcome |
| Monster ability | Transfixing Sunbeam | Applies stunned 1/2 by Fortitude save outcome |
| Spell | Swarm Form | Applies sickened 1/2 by Fortitude save outcome |
| Spell | Utter Destruction | Applies deafened for 1 round, 1 minute, or permanently by Fortitude save outcome |
| Feat | Scare to Death | Applies frightened 1/2 by Intimidation check outcome; handles the critical-success Fortitude-save frightened/fleeing rider |
| Feat | Dread Striker | Applies off-guard against a frightened target on the feat user's attack |
| Feat | Terrified Retreat | Applies fleeing for 1 round after a critical Demoralize; lower-level target gating remains manual |
| Feat | Remorseless Lash | Reinforces frightened 1 after a successful attack against a frightened target; exact next-turn floor remains manual |
| Feat | Agonizing Rebuke | Returns 2d4 mental nonlethal damage when a frightened attacker harms the feat holder; setup timing and non-damage actions remain manual |
| Spell | Phantom Pain | Applies sickened 1/2 and 1d4 persistent mental damage on failed saves |
| Spell | Deafness | Applies deafened for 1 round, 10 minutes, or permanently by Fortitude outcome |
| Spell | Laughing Fit | Applies slowed 1 on a failed Will save, and prone plus stunned 3 on a critical failure; sustained duration and reaction restriction remain manual |
| Spell | Painful Vibrations | Applies sickened 1 and deafened for 1 round on a failure, or sickened 2 and deafened for 1 minute on a critical failure |
| Spell | Sound Burst | Applies deafened for 1 round on a failure, or deafened for 1 minute and stunned 1 on a critical failure |
| Spell | Noise Blast | Applies deafened for 1 round on a failure, or deafened for 1 minute and stunned 1 on a critical failure |
| Monster ability | Ultrasonic Scream | Applies stunned 1 on a critical failure; the save-dependent concealment effect remains manual |
| Spell | Shockwave | Applies off-guard on a successful Reflex save and prone on a failed or critically failed save |
| Spell | Aqueous Blast | Applies prone on a critical spell attack |
| Spell | Black Tentacles | Applies grabbed after a successful spell attack; ongoing area re-grabs and damage remain manual |
| Spell | Grease | Applies prone on failed or critically failed area-mode Reflex saves; attended-object targeting remains a documented limitation |
| Spell | Tangle Vine | Applies immobilized on a critical spell attack; Speed penalty and Escape cleanup remain manual |
| Spell | Caustic Blast | Applies 1 persistent acid damage on a critical failure; area damage and heightened persistent scaling remain with the spell/manual adjustment |
| Spell | Corrosive Muck | Applies 1d6 persistent acid damage on a critical failure; sustained pool behavior and repeated-save timing remain manual |
| Spell | Gasping Marsh | Applies 1d8 persistent poison damage on a critical failure; sustained-area behavior, sickened handling, and temporary immunity remain manual |
| Spell | Gouging Claw | Applies 2 persistent bleed on a success or 4 on a critical success; heightened scaling remains manual |
| Spell | Acid Grip | Applies 1d6 persistent acid on a failed or critically failed save; movement, Speed penalty, sustain, and heightening remain manual |
| Spell | Spider Sting | Applies enfeebled 1/2 for 1 round on failed/critically failed saves; poison-stage recurrence and damage remain manual/native affliction handling |
| Spell | Vomit Swarm | Applies sickened 1 on a failed or critically failed basic Reflex save; cone damage and spell-ending behavior remain manual |
| Spell | Blistering Invective | Applies frightened 1 on a failure or frightened 2 on a critical failure; persistent fire damage scaling remains with the originating spell |
| Spell | Noxious Vapors | Applies sickened 1 on a critical failure; emanation, concealment, sustained duration, and poison damage remain with the originating spell |
| Feat | Shatter Space | Applies prone on a critical failure; aura, damage, and amp-level scaling remain with the originating feat |
| Feat | Tectonic Stomp | Applies prone on a failure or critical failure and stunned 1 on a critical failure; emanation, damage, and terrain remain manual |
| Spell | Schadenfreude | Applies stupefied 1/2 for 1 round on failed/critically failed Will saves and stunned 1 on a critical failure; reaction prerequisite remains manual |
| Spell | Control Construct | Applies stunned 1 on a successful Will save; construct control and repeat-save behavior remain manual |
| Spell | Sudden Transposition | Applies prone on a critical failure; teleportation, damage, and destination handling remain manual |
| Monster ability | Paralyzing Gaze | Applies slowed 1 for 1 round on failure and paralyzed for 1 round on critical failure; aura, visual targeting, and temporary immunity remain manual |
| Monster ability | Disruptive Breath | Applies stupefied 1/2 for 1 minute on failed/critically failed Reflex saves; cone damage and recharge remain manual |
| Monster ability | Sticky Spores | Applies immobilized after a critical Terotricus spores hit; the –10-foot status penalty to all Speeds for 1 minute remains manual |
| Monster ability | Fear of Crabs | Applies frightened 2 on a successful Will save, frightened 4 and fleeing for 1 round on a failed save; the 10-minute immunity remains manual |
| Monster ability | Steal Shadow | Increases enfeebled by 1 to a maximum of 4 when the action is used; the required preceding hit and hourly reduction remain native/manual |
| Monster ability | Grinding Bite | Applies enfeebled 1 for 1 round on success/failure or 1 minute on a critical failure; bite damage and the preceding jaws Strike requirement remain native |
| Monster ability | Weakening Gas | Applies enfeebled 3/4 for 1 minute on failed/critically failed Fortitude saves; cone targeting and recharge remain native |
| Monster ability | Enfeebling Humors | Applies enfeebled 1/2 for 1 day on failed/critically failed Fortitude saves; the second-failed-save escalation remains manual |
| Monster ability | Aura of Sobs | Applies stupefied 1 for 1 round on a failed Will save; aura activation, temporary immunity, and full while-in-aura duration remain native/manual |
| Monster ability | Distracting Gaze | Applies fascinated on failed/critically failed Will saves and slowed 1 on a critical failure; aura and leave-aura cleanup remain native/manual |
| Monster ability | Drain Life | Increases drained by 2 on failed/critically failed Fortitude saves, capped at drained 10; repeat-hit accumulation, damage, and temporary Hit Points remain native |
| Monster ability | Baleful Shriek | Applies frightened 2/3 and paralyzed for 1/4 rounds by Will-save outcome; temporary immunity and recharge remain native |
| Monster ability | Eclipse | Applies slowed 1/2 by Fortitude outcome and doomed 1 on a critical failure; cold damage, darkness-area requirements, and recharge remain native |
| Monster ability | Sever Fate | Increases drained 1/2 on failed/critically failed Fortitude saves, capped at drained 4; repeat strikes, damage, and healing remain native |
| Monster ability | Agonizing Wail | Applies slowed 1 for 1 minute on failed/critically failed Will saves; no-reactions, recovery saves, and lockout remain native/manual |
| Monster ability | Aura of Disquietude | Applies frightened 1/2/3 by Will-save outcome; Suspicious, aura activation, and temporary immunity remain native/manual |
| Monster ability | Drain Blood | Increases drained 1/2 on failed/critically failed Fortitude saves, capped at drained 4; healing and Wicked Bite sequencing remain native |
| Monster ability | Drain Vitality | Applies enfeebled 1/2 for 1 hour on failed/critically failed Fortitude saves; Wicked Bite sequencing remains native |
| Monster ability | Bloodbird | Applies 2d6 persistent bleed after a melee hit with the Bloodbird rider; curse-based stanching and removal remain native/manual |
| Monster ability | Hydraulic Asphyxiation | Applies immobilized for 1 round on failed/critically failed Fortitude saves; underwater, held-breath, and air-loss rules remain native/manual |
| Monster ability | Smother | Applies blinded on failed/critically failed Fortitude saves and clumsy 1 on a critical failure; Grab/Restrain-dependent duration and suffocation remain native/manual |
| Monster ability | Liberate the Earth | Applies prone on failed/critically failed Reflex saves and immobilized on a critical failure; rubble duration and Escape remain native/manual |
| Monster ability | Drink Essence | Increases drained and stupefied by 1 when the action is used; requirements, healing, and the repeat-use choice between conditions remain native/manual |
| Monster ability | Engulf | Applies grabbed and slowed 1 on failed/critically failed Reflex saves; damage, breath, Escape, rupture, and release cleanup remain native/manual |
| Monster ability | Greater Constrict | Applies unconscious on a failed Fortitude save; damage, grabbed/restrained prerequisites, and temporary immunity remain native/manual |
| Monster ability | Crystallize | Applies slowed on a failed Fortitude save and petrified on a critical failure when already slowed; engulfment, expulsion, and emergence remain native/manual |
| Monster ability | Serpentstone Breath | Applies slowed 1, temporary petrified, or permanent petrified by Reflex-save outcome; repeat saves and recharge remain native/manual |
| Monster ability | Necrophidic Paralysis | Applies paralyzed on a failed Fortitude save; recovery saves, cumulative DC reduction, and temporary immunity remain native/manual |
| Monster ability | Dance of Death | Applies off-guard for 1 round on any save outcome, plus stunned 1/3 on failure/critical failure; visual targeting and immunity remain native/manual |
| Monster ability | Crystallize Flesh | Applies slowed 1 on success/failure and slowed 2 on a critical failure; escalating recovery saves and petrification remain native/manual |
| Monster ability | Paralyzing Gas | Applies paralyzed for 1/3 rounds on failed/critically failed Fortitude saves; recharge and incapacitation adjustments remain native/manual |
| Monster ability | Shadow Breath | Applies slowed 1 for 1 minute on failure and slowed 2 on critical failure; critical-failure expiry, enfeebled riders, damage, cone, and recharge remain native/manual |
| Monster ability | Scintillating Aura | Applies stunned 1/3 on failed/critically failed Will saves; automatic dazzled, aura activation, and temporary immunity remain native/manual |
| Monster ability | Purge Plaguebearers | Applies doomed 1 for 1 minute and sickened 3 on failed/critically failed Fortitude saves; disease targeting, damage, and recharge remain native/manual |
| Equipment | Desiccating Scepter | Applies slowed 1/2 on failed/critically failed Fortitude saves; damage, usage limits, and water-targeting behavior remain native/manual |
| Equipment | Marking Snare | Applies blinded for 1 round on a critical failure against its Reflex save; marking and tracking benefits remain native/manual |
| Equipment | Death Coil | Applies stunned 2/4 on failed/critically failed Fortitude saves; electricity damage and activation timing remain native/manual |
| Equipment | Mudrock Snare | Applies stunned 2/3 and immobilized for 1 minute on the critical-failure Fortitude outcome; Speed penalties, Escape, and placement remain native/manual |
| Equipment | Squid Ink Sac | Applies blinded for 1 round on failure or 10 minutes on critical failure; invisibility negation, ink removal, and cloud behavior remain native/manual |
| Equipment | Blindpepper Tube | Applies blinded for 1 round on failure/critical failure and sickened 1 on a critical failure; dazzled cleanup remains native/manual |
| Monster ability | Obsidian Cage | Applies immobilized on failed/critically failed Reflex saves and off-guard on a critical failure; Escape and cage cleanup remain native/manual |
| Monster ability | Stench | Applies sickened 1 on failed/critically failed Fortitude saves and slowed 1 on a critical failure; aura timing and immunity remain native/manual |
| Monster ability | Frightful Presence | Applies frightened 1/2/4 by save outcome; aura entry timing and temporary immunity remain native/manual |
| Monster ability | Piteous Moan | Applies sickened 1/2 by Will-save outcome; aura activation and temporary immunity remain native/manual |
| Monster ability | Noxious Breath | Applies sickened 1/2 by Fortitude-save outcome; cone targeting, damage, and recharge remain native/manual |
| Monster ability | Gravechoke | Applies sickened 1/2 by Fortitude-save outcome; emanation targeting and activation remain native/manual |
| Monster ability | Evaluate Discordance | Applies stunned 1 on a critical Will-save failure; mental damage and frequency remain native/manual |
| Monster ability | Slime Trap | Applies clumsy 1 for 1 minute on a critical Reflex-save failure; speed penalty and Escape cleanup remain native/manual |
| Feat | Noxious Odor | Applies sickened 1/2 on failed/critically failed Emit Defensive Odor saves when the feat option is present |
| Monster ability | Pungent Aura | Applies sickened 1/2 by Fortitude-save outcome; aura timing, exclusions, and immunity remain native/manual |
| Monster ability | Shameful Loathing | Applies stupefied 1 on failure/critical failure and doomed 1 on critical failure; curse removal remains native/manual |
| Monster ability | Blight | Applies sickened 2/4 by Fortitude-save outcome; plant targeting, aura timing, and immunity remain native/manual |
| Monster ability | Swallow Future | Applies doomed 1/2/4 by Will-save outcome; damage, emanation targeting, and Hope Talisman exceptions remain native/manual |
| Monster ability | Drain Potential | Applies doomed 1/2 by Fortitude-save outcome; misfortune and the preceding claw Strike remain native/manual |
| Monster ability | Hajeck's Caress | Increases stupefied by 2 on failed/critically failed Will saves, capped at stupefied 4; daily decrease and curse handling remain native/manual |
| Monster ability | Consume Death | Increases drained by 1/2 by Fortitude-save outcome, capped at drained 4; temporary immunity and aura interaction remain native/manual |
| Monster ability | Mindwarping | Applies stupefied 1 by Will-save outcome and confused 1 minute on a critical failure; repeat-save escalation is capped at stupefied 4 |
| Monster ability | Shadow Touch | Applies drained 1/2 by Will-save outcome; damage and the speech restriction remain native/manual |
| Monster ability | Spell Drain | Applies stupefied 1 for 1 hour on a failed Will save; spell-slot loss and the critical-failure quickened benefit remain native/manual |
| Monster ability | Bitter Epiphany | Applies stupefied 1/2 by Will-save outcome and confused for 1 minute on a critical failure |
| Equipment | Dreaming Round | Applies initial slowed 1/2 by Fortitude-save outcome; recurring saves, sleep, and recovery remain native/manual |
| Equipment | Starless Scope | Applies slowed 1 for 1 round on failed/critically failed Will saves; starlight effects remain native/manual |
| Monster ability | Llorona's Wail | Applies stunned 1 on a successful Will save; fascination, movement compulsion, and recurring saves remain native/manual |
| Monster ability | Identity Crisis | Applies slowed 1 for 1 round on failure or 1 minute on critical failure; Steal Face prerequisite remains native/manual |
| Monster ability | Veil of Lies | Applies stupefied 1/2 for 10 minutes by Will-save outcome; aura timing and temporary immunity remain native/manual |
| Monster ability | Escape From Hell | Applies frightened 1/2 by Will-save outcome; quickened benefits and living/undead distinctions remain native/manual |
| Equipment | Vampiric Scythe | Applies drained 2/3 by the reaction's Fortitude-save outcome; disarm trigger and temporary Hit Point gain remain native/manual |
| Feat | Enchanting Shot | Applies stunned 1 on a critical hit; Strike prerequisite and mental damage remain native/manual |
| Monster ability | Self-Loathing | Applies slowed 1, fascinated, or immobilized by Will-save outcome; reflection targeting and source-based cleanup remain native/manual |
| Monster ability | Sea Hag's Bargain | Applies frightened 1/2 and slowed 1 with outcome-dependent duration; dying-target unconscious/death sequence remains manual |
| Monster ability | Empty Wail | Applies stupefied 1 on failed/critical-failed saves and stunned 1 on a critical failure; damage, cone, and recharge remain manual |
| Spell | Canticle of Everlasting Grief | Applies frightened 1/3/4 by Will save outcome |
| Feat | Litany against Sloth | Applies slowed 1/2 by Will save outcome |
| Monster ability | Frightful Moan | Applies frightened 2/3 by Will save outcome |
| Monster ability | Regurgitated Wrath | Applies sickened 1/2 by Reflex save outcome |
| Monster ability | Green Caress | Increases slowed to 1/2 by Fortitude save outcome |
| Monster ability | Blood Feast | Applies enfeebled 1 and drained 1 by Fortitude save outcome |
| Monster ability | Release Soul | Applies sickened 2/4 and drained 1/2 by Fortitude save outcome |
| Monster ability | Take Root | Increases drained by 1 on a failed Fortitude save, capped at drained 5 |
| Monster ability | Curse of Futility | Applies stupefied 1/2 with save-dependent durations and doomed 1 on critical failure |
| Spell | Arctic Rift | Applies slowed 1 on a failed or critically failed Fortitude save and immobilized for 1 minute on a critical failure |
| Monster ability | Identity Crisis | Applies slowed 1 with save-dependent duration |
| Monster ability | Steal Face | Applies dazzled on success and blinded on failure |
| Monster ability | Broken Mindscape | Applies stunned 1 on success or paralyzed for 1 round/1 minute by save outcome |
| Spell | Confusion | Applies stunned 1 on success or confused for 1 minute on failure/critical failure |
| Spell | Paralyze | Applies stunned 1 or paralyzed for 1/4 rounds by Will save outcome |
| Spell | Synesthesia | Applies clumsy 3 for the save-dependent duration and stunned 2 on critical failure |
| Spell | Hideous Laughter | Applies slowed 1 on failure/critical failure and prone on critical failure |
| Feat | Dazing Blow | Applies stunned 1/2/3 by Fortitude save outcome |
| Feat | Sleeper Hold | Applies clumsy 1 on success or unconscious for 1 minute on critical success |
| Spell | Quivering Palm | Applies stunned 1 on success or stunned 3 on failure |
| Feat | Terrifying Howl | Applies frightened 1/2 from Demoralize check outcome |
| Equipment | Dread Ampoule | Applies frightened 1 on hit or frightened 2 on a critical hit |
| Equipment | Nightmare Rune | Applies stupefied 1 on a critical hit and frightened 2 when the critical-hit target is already stupefied |
| Monster ability | Terrifying Touch | Applies frightened 2 only to non-frightened targets, plus stunned 4 on critical failure |
| Equipment | Owlbear Egg | Applies frightened 1/2/3 by Will save outcome and fleeing on critical failure |
| Equipment | Ghost Ampoule | Applies frightened 2 on failure or frightened 3 on critical failure |
| Monster ability | Aura of Doom | Applies frightened 1/2/3 from save outcome |

## Audit scope

The review compares the installed PF2e `feats`, `spells`, `equipment`, and bestiary/NPC ability packs against every registered trigger source. Candidates are added when an action, item activation, save/check outcome, aura event, condition rider, or duration can be represented without silently replacing rules that still require a Strike, counteract check, targeting decision, or GM adjudication. The package currently reaches Batch 412; entries are kept in separate category files under `triggers/` and registered from `scripts/main.js` so each batch can be audited independently.

## Batch 01 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Battle Cry | Applies frightened 1/2 from the feat's Demoralize outcome; area targeting, immunity, and exact cleanup remain manual. |
| Feat | Dazzling Display | Applies frightened 1/2 from the feat's Demoralize outcome; area targeting, immunity, and exact cleanup remain manual. |
| Feat | Combat Grab | Applies grabbed after a successful Strike; the feat's attack/prerequisite handling and Escape cleanup remain native/manual. |
| Feat | Disorienting Opening | Applies off-guard after a successful Reactive Strike; source-specific timing and cleanup remain manual. |
| Spell | Phantasmal Killer | Applies frightened 1/2 by save outcome; the critical-failure Fortitude follow-up remains manual. |
| Spell | Enervation | Applies drained 1/2 by save outcome; persistent damage and doomed rider remain manual. |
| Spell | Infectious Comedy | Applies slowed 1 on a failed save; prone and action-restriction critical-failure effects remain manual. |
| Spell | Tanglefoot | Applies immobilized for 1 round on a critical spell-attack success; Speed penalty and Escape cleanup remain manual. |
| Equipment | Bottled Lightning | Applies off-guard after a successful hit; splash, activation, and item scaling remain native/manual. |
| Equipment | Tanglefoot Bag | Applies clumsy 1 for 1 minute after a successful hit; Speed penalty and immobilization remain manual. |
| Equipment | Thunderstone | Applies deafened by Fortitude-save outcome; area targeting and activation handling remain native/manual. |
| Equipment | Alchemist's Fire | Applies persistent fire damage on a hit, doubled on a critical hit; splash and item-grade scaling remain native/manual. |
| Monster ability | Vomit Tar | Applies slowed 1 for 3 rounds on a failed Reflex save; cooldown, fire weakness, and damage remain manual. |
| Monster ability | Musk | Applies sickened 1 on a failed Fortitude save; aura timing and temporary immunity remain manual. |
| Monster ability | Disgusting Demise | Applies sickened 1/2 by Fortitude-save outcome; death/emanation timing and damage remain manual. |
| Monster ability | Roar | Applies frightened 1/2/3 by Will-save outcome; activation and temporary immunity remain manual. |

These four source files are registered from `scripts/main.js` and intentionally kept separate so later batches can be reviewed and reverted independently.

## Batch 02 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Snagging Strike | Applies grabbed after a successful Strike; the feat's attack and prerequisite handling plus Escape cleanup remain native/manual. |
| Feat | Tumble Behind | Applies off-guard after the feat's qualifying movement/attack event; positioning and exact cleanup remain manual. |
| Feat | Knockdown | Applies prone after a successful Strike; the Athletics check, attack, and prerequisite handling remain native/manual. |
| Feat | Slam Down | Applies prone after a successful Strike; the Athletics check and prerequisite handling remain native/manual. |
| Spell | Savor the Sting | Applies persistent mental damage after the qualifying failed save; spell damage, duration, and recovery remain manual/native. |
| Spell | Distracting Decoy | Applies off-guard after the qualifying attack against the decoy; decoy placement and duration remain manual. |
| Spell | Heaving Earth | Applies prone on a failed or critically failed Reflex save; area, damage, and terrain handling remain native/manual. |
| Spell | Possession | Applies controlled on a failed Will save; duration, host control, and repeat-save cleanup remain native/manual. |
| Equipment | Acid Flask | Applies persistent acid damage on a hit; splash, item-grade scaling, and activation remain native/manual. |
| Equipment | Ghost Charge | Applies its qualifying ghost-touch effect; damage, incorporeal targeting, and activation handling remain native/manual. |
| Equipment | Nauseating Snare | Applies sickened on its qualifying save outcome; placement, triggering, and recovery remain native/manual. |
| Equipment | Stunning Snare | Applies stunned on its qualifying save outcome; placement, triggering, and duration cleanup remain native/manual. |
| Monster ability | Improved Grab | Applies grabbed after the qualifying attack; the attack, reach, and release handling remain native/manual. |
| Monster ability | Web | Applies immobilized after a failed save; Escape, web cleanup, and area handling remain native/manual. |
| Monster ability | Trample | Applies prone after a failed save; movement, damage, and target selection remain native/manual. |
| Monster ability | Swallow Whole | Applies grabbed after the qualifying attack; damage, escape, and internal-space handling remain native/manual. |

Batch 02 is split into four registered source files so each category can be reviewed independently.

## Batch 03 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Surprise Strike | Applies off-guard after the qualifying Strike; stealth, positioning, and timing remain manual. |
| Feat | Polished Distraction | Applies off-guard after the qualifying action; the distraction setup and exact duration remain manual. |
| Feat | Dirty Trick | Applies dazzled on a failed save and blinded on a critical failure; the skill check, damage, and cleanup remain native/manual. |
| Feat | Irradiate | Applies sickened by the feat's save outcome; area, damage, and immunity handling remain manual. |
| Spell | Daze | Applies stunned 1 on a critical failure; damage and heightened effects remain native/manual. |
| Spell | Command | Applies stunned 1 on a successful save; action instruction and duration remain native/manual. |
| Spell | Entangling Flora | Applies immobilized for 1 round on a critical spell-attack failure; Speed penalty, terrain, and Escape remain manual. |
| Spell | Gust of Wind | Applies prone for 1 round on a failed or critically failed save; push distance and flying-target escalation remain manual. |
| Equipment | Rattling Bolt | Applies frightened on its qualifying hit/save outcome; damage, range, and item scaling remain native/manual. |
| Equipment | Setup Snare | Applies its qualifying condition after the snare triggers; placement and trigger timing remain manual. |
| Equipment | Rending Snare | Applies persistent bleed on its qualifying trigger; placement, damage scaling, and recovery remain manual. |
| Equipment | Irritating Thorn Snare | Applies its qualifying condition after the snare triggers; placement and removal remain manual. |

| Monster ability | Punishing Tail | Applies its qualifying condition after the tail attack; prerequisites, immunity timing, and damage remain native/manual. |
| Monster ability | Sinful Bite | Applies its qualifying condition after the bite; variant riders and recovery remain native/manual. |
| Monster ability | Mind Lash | Applies its save-dependent condition outcome; targeting, immunity, and duration cleanup remain manual. |
| Monster ability | Tongue Grab | Applies grabbed after the qualifying attack; reach, severing, and Escape cleanup remain native/manual. |

All four Batch 03 category files are now registered independently.

## Batch 04 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Whirling Throw | Applies prone on a critical-success Athletics check; grab, distance, damage, and release remain manual. |
| Feat | Crashing Slam | Applies prone after a successful qualifying Strike; prerequisites, damage, and MAP remain manual. |
| Feat | Head Stomp | Applies off-guard after a successful attack; prone targeting and exact cleanup remain manual. |
| Feat | Furious Grab | Applies grabbed after a successful Strike; rage, hand, and Escape handling remain manual. |
| Spell | Antlion Trap | Applies immobilized on a critical failure; area timing, damage, and Escape remain manual. |
| Spell | Grasping Grave | Applies immobilized on a critical failure; forced movement, damage, and Escape remain manual. |
| Spell | Magical Fetters | Applies slowed 1 on a failed or critically failed save; duration and heightened effects remain manual. |
| Spell | Stinking Cloud | Applies sickened 1 by save outcome; area timing, concealment, damage, and additional slowed rider remain manual. |
| Equipment | Bola Shot | Applies prone and stunned 1 on a critical success; activation and Reflex handling remain manual. |
| Equipment | Bloodseeker Beak | Applies 1d4 persistent bleed; off-guard/sneak prerequisites and precision damage remain manual. |
| Equipment | Atrophy Bomb | Applies enfeebled 1 on a hit; grade scaling, damage, and splash remain manual. |
| Equipment | Weeping Midnight | Applies dazzled on failure and sickened on critical failure; poison stages and duration remain manual. |
| Monster ability | Allergen Aura | Applies sickened 2; aura filtering and immunity remain manual. |
| Monster ability | Shrieking Charge | Applies deafened for 1 round; movement, emanation, damage, and recharge remain manual. |
| Monster ability | Wrestle (Visitant) | Applies grabbed and prone; Strike and Escape cleanup remain manual. |
| Monster ability | Seed of Doubt | Applies stunned 1/3 by Will-save outcome; Strike prerequisite and 24-hour immunity remain manual. |

All four Batch 04 category files are registered independently.

## Batch 05 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Stunning Fist | Applies stunned 1/3 by Fortitude-save outcome; prerequisites, incapacitation, and duration cleanup remain manual. |
| Feat | Vicious Debilitations | Applies clumsy 1 after the qualifying attack; damage gates, debilitation choice, and exact cleanup remain manual. |
| Feat | Unbalancing Blow | Applies off-guard on a damaging critical hit; prerequisites and timing cleanup remain manual. |
| Feat | Wolf Drag | Applies prone after a successful Strike; movement, damage, and prerequisite handling remain native/manual. |
| Spell | Accelerated Decomposition | Applies enfeebled by save outcome; damage, heightening, and duration remain native/manual. |
| Spell | Corpse Bloom | Applies sickened by save outcome; area, damage, and sustained behavior remain native/manual. |
| Spell | Dread Secret | Applies frightened by save outcome; mental damage, immunity, and duration remain native/manual. |
| Spell | Gravity Wave | Applies prone on the qualifying save outcome; area, damage, and forced movement remain native/manual. |
| Equipment | Robe of the Erinys (Major) | Applies sickened 1 on a critical-save failure; activation, targeting, and item-specific cleanup remain manual. |
| Equipment | Frost Vial (Greater) | Applies slowed 1 on a successful hit; damage, activation, and grade scaling remain native/manual. |
| Equipment | Serpent Oil | Applies sickened 1/2 by poison-save outcome; poison application, stages, immunity, and recovery remain manual. |
| Equipment | Purple Worm Venom | Applies enfeebled 2 on a failed save; application, poison stages, immunity, and recovery remain manual. |
| Monster ability | Cowering Fear | Applies frightened 1/2 by Will-save outcome; aura targeting and immunity remain manual. |
| Monster ability | Ghoul Fever | Applies sickened 1/2 by Fortitude-save outcome; disease progression and recovery remain native/manual. |
| Monster ability | Ghast Fever | Applies sickened 1/2 by Fortitude-save outcome; disease progression and recovery remain native/manual. |
| Monster ability | Caustic Pustules | Applies persistent acid damage after the qualifying attack outcome; scaling, splash, and activation remain manual. |

All four Batch 05 category files are registered independently.

## Batch 06 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Bleeding Finisher | Applies persistent bleed after the qualifying finisher outcome; attack prerequisites, damage scaling, and recovery remain manual. |
| Feat | Brutal Crush | Applies its qualifying condition after the Strike; prerequisites, damage, and exact cleanup remain manual. |
| Feat | Bloody Denial | Applies its qualifying condition after the attack; damage gating and duration cleanup remain manual. |
| Feat | Calcifying Sand | Applies its save-dependent condition; area, damage, and duration handling remain native/manual. |
| Spell | Acid Arrow | Applies persistent acid damage after the qualifying spell attack; heightened damage and recovery remain native/manual. |
| Spell | Clinging Ice | Applies immobilized on a critical failure; Speed penalties, damage, and Escape remain manual. |
| Spell | Distracting Chatter | Applies off-guard by save outcome; auditory flat checks, area, and duration remain manual. |
| Spell | Blossoming Gore | Applies drained 1 on a failed save; damage, critical-failure escalation, and duration remain manual. |
| Equipment | Glue Bomb (Greater) | Applies its qualifying condition after a hit; Speed penalties, immobilization, splash, and grade scaling remain manual. |
| Equipment | Skunk Bomb (Moderate) | Applies sickened by its qualifying save outcome; damage, area, and scaling remain native/manual. |
| Equipment | Dream Pollen Snare | Applies its save-dependent condition; placement, trigger timing, and recovery remain manual. |
| Equipment | Mud Bomb (Greater) | Applies its qualifying condition; activation, area, damage, and grade scaling remain native/manual. |
| Monster ability | Blinding Aura | Applies blinded on the qualifying save outcome; aura targeting and immunity remain manual. |
| Monster ability | Churning Gaze | Applies sickened on the qualifying save outcome; visual targeting and immunity remain manual. |
| Monster ability | Death-Stealing Gaze | Applies drained on the qualifying save outcome; aura timing, repeat saves, and recovery remain manual. |
| Monster ability | Debilitating Bite | Applies clumsy on the qualifying attack outcome; prerequisites, damage, and cleanup remain native/manual. |

All four Batch 06 category files are registered independently.

## Batch 07 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Dragging Strike | Applies off-guard after a successful hit; movement, distance, and prerequisite handling remain manual. |
| Feat | Startling Appearance | Applies off-guard and frightened 1/2 after the qualifying hit; positioning, immunity, and cleanup remain manual. |
| Feat | Parting Shot | Applies off-guard after the ranged Strike; movement, trigger timing, and cleanup remain manual. |
| Feat | Overwhelming Blow | Applies stunned 1 and off-guard after the qualifying attack; prerequisites, damage, and duration remain manual. |
| Spell | Stupefy | Applies stupefied by save outcome; damage, duration, and heightened effects remain native/manual. |
| Spell | Cloak of Colors | Applies blinded/stunned by save outcome; aura, visual targeting, damage, and immunity remain manual. |
| Spell | Power Word Stun | Applies stunned by target-level outcome; incapacitation, duration, and target restrictions remain native/manual. |
| Spell | Power Word Blind | Applies blinded by target-level outcome; incapacitation, duration, and target restrictions remain native/manual. |
| Equipment | Fearsome | Applies frightened 1 on a critical hit; weapon selection and exact fear cleanup remain manual. |
| Equipment | Greater Fearsome | Applies frightened 2 on a critical hit; weapon selection and exact fear cleanup remain manual. |
| Equipment | Giant Centipede Venom | Applies fatigued/clumsy by poison-save outcome; damage and stage progression remain manual. |
| Equipment | Lethargy Poison | Applies slowed 1 on failed poison saves; later unconscious stages and recovery remain manual. |
| Monster ability | Berserk Slam | Applies prone after a successful Strike; berserk prerequisite and extra damage remain manual. |
| Monster ability | Despairing Shriek | Applies frightened 2 on a failed Will save; filtering, damage, area, and recharge remain manual. |
| Monster ability | Euphoric Breath | Applies stupefied 2 and slowed 1 on a failed Fortitude save; duration, damage, area, and frequency remain manual. |
| Monster ability | Blight Breath | Applies 2d6 persistent bleed on a failed Fortitude save; cone, void damage, and recharge remain manual. |

All four Batch 07 category files are registered independently.

## Batch 08 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Flinging Blow | Applies prone after the failed/critically failed save; movement, damage, and prerequisites remain manual. |
| Feat | Whirling Knockdown | Applies prone after the critical-success follow-up check; positioning, damage, and timing remain manual. |
| Feat | Coordinated Distraction | Applies off-guard for the chosen ally's next Strike; ally targeting and duration cleanup remain manual. |
| Feat | Banishing Blow | Applies stunned 1 after a critical-success Athletics check; damage, banishment, and prerequisites remain manual. |
| Spell | Leaden Steps | Applies encumbered by save outcome; sustain, duration, and recovery remain manual. |
| Spell | Confusing Colors | Applies stunned on a critical failure; area, visual targeting, damage, and duration remain manual. |
| Spell | Wave of Despair | Applies slowed on failure/critical failure; damage, area, and duration remain native/manual. |
| Spell | Chroma Leach | Applies enfeebled/drained by save outcome; damage, sustain, and recovery remain manual. |
| Equipment | Thorn Triad (Greater) | Applies its qualifying condition after the item effect; activation, damage, and grade scaling remain manual. |
| Equipment | Black Adder Venom | Applies its poison condition by save outcome; application, damage, stages, immunity, and recovery remain manual. |
| Equipment | Wyvern Poison | Applies its poison condition by save outcome; application, damage, stages, immunity, and recovery remain manual. |
| Equipment | Wand of Wearying Dance | Applies its qualifying condition; activation, targeting, duration, and spell effects remain manual. |
| Monster ability | Tanglebones | Applies its qualifying condition after the ability event; targeting, damage, and cleanup remain manual. |
| Monster ability | Pained Retribution | Applies its qualifying condition after the triggering damage; targeting, damage, and duration remain manual. |
| Monster ability | Snowblind | Applies its save-dependent condition; area, damage, immunity, and recovery remain manual. |
| Monster ability | Void Shroud | Applies its save-dependent condition; aura, damage, immunity, and duration remain manual. |

All four Batch 08 category files are registered independently.

## Batch 09 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Aggressive Block | Applies off-guard after Shield Block; size, damage, timing, and prerequisite gates remain manual. |
| Feat | Flashing Shield | Applies off-guard against adjacent undead; adjacency, target type, and cleanup remain manual. |
| Feat | Cornered Fury | Applies off-guard after a larger foe critically hits; size, timing, and prerequisite gates remain manual. |
| Feat | First to Strike, Fall | Applies off-guard after the qualifying first-round Strike; timing and prerequisite gates remain manual. |
| Spell | Ghoulish Cravings | Applies sickened 1/2/3 by Fortitude outcome; disease progression and recovery remain manual. |
| Spell | Petrify | Applies slowed or petrified by Fortitude outcome; escalating saves and duration remain manual. |
| Spell | Ray of Enfeeblement | Applies enfeebled 1/2/3 by Fortitude outcome; attack and heightening remain manual. |
| Spell | Tempest Surge | Applies clumsy 2 on a failed Reflex save; damage remains native/manual. |
| Equipment | Horn of Blasting | Applies deafened on failed Fortitude saves; damage, duration, and activation remain manual. |
| Equipment | Stampede Medallion | Applies prone on a critical-failure Reflex save; area, damage, and eidolon requirements remain manual. |
| Equipment | Bloodburn Censer | Applies enfeebled 2/3 by save outcome; persistent damage and immunity remain manual. |
| Equipment | Necrobinding Serum | Applies friendly/helpful by save outcome; undead targeting, duration, and success penalty remain manual. |
| Monster ability | Bonds of Iron | Applies its qualifying condition after the ability event; targeting, damage, and cleanup remain manual. |
| Monster ability | Captivating Song | Applies its save-dependent condition; auditory targeting, duration, and immunity remain manual. |
| Monster ability | Death Gaze | Applies its save-dependent condition; visual targeting, aura timing, and recovery remain manual. |
| Monster ability | Petrifying Glance | Applies its save-dependent condition; escalating saves, petrification timing, and immunity remain manual. |

All four Batch 09 category files are registered independently.

## Batch 10 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Dazzling Bullet | Applies dazzled for 1 round after the qualifying Strike; damage and prerequisites remain manual. |
| Feat | Tiger Stance | Applies 1d4 persistent bleed on a critical tiger-claw Strike; damage confirmation remains manual. |
| Feat | Felling Strike | Applies immobilized for 1 round on a critical hit; airborne qualification and falling movement remain manual. |
| Feat | Stumbling Stance | Applies off-guard to the attacker after a qualifying melee hit; next-swing timing and stance prerequisites remain manual. |
| Spell | Divine Wrath | Applies sickened/slowed by save outcome; damage, alignment targeting, and duration remain native/manual. |
| Spell | Invoke Spirits | Applies frightened/fleeing by save outcome; area, damage, and duration remain manual. |
| Spell | Paranoia | Applies unfriendly by save outcome; action restrictions, duration, and recovery remain manual. |
| Spell | Chilling Darkness | Applies dazzled/blinded by save outcome; area, damage, darkness, and duration remain manual. |
| Equipment | Stumbling Fulu | Applies clumsy/prone by Reflex outcome; movement trigger and Interact cleanup remain manual. |
| Equipment | Blood Sap | Applies drained/slowed by poison-save outcome; onset, stages, and recovery remain manual. |
| Equipment | Beguiling Crown | Applies friendly on a failed Will save; attack sequencing and duration remain manual. |
| Equipment | Alcohol | Applies off-guard on a critical failure; later affliction stages and recovery remain manual. |
| Monster ability | Bloodcurdling Screech | Applies frightened 1/2; fleeing, aura, and immunity remain manual. |
| Monster ability | Agonized Wail | Applies frightened 1/2; fleeing, area, and immunity remain manual. |
| Monster ability | Aura of Authority | Applies stupefied 1/2/3; aura timing, filtering, and immunity remain manual. |
| Monster ability | Ashen Curse | Applies slowed 1 or frightened 1; curse duration, frequency, and recovery remain manual. |

All four Batch 10 category files are registered independently.

## Batch 11 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Twin Feint | Applies off-guard after a successful Strike; sequencing, prerequisites, and duration cleanup remain manual. |
| Feat | Twin Distraction | Applies stupefied 1 on a failed Will save; sequencing, prerequisites, and duration remain manual. |
| Feat | Disarming Twist | Applies off-guard on a failed check; disarm effect, prerequisites, and cleanup remain manual. |
| Feat | Brutish Shove | Applies off-guard after a successful Strike; size, movement, damage, and prerequisites remain manual. |
| Spell | Hypnotize | Applies fascinated by save outcome; sustain, duration, targeting, and immunity remain manual. |
| Spell | Hypnotic Pattern | Applies fascinated by save outcome; area, repeat saves, sustain, and recovery remain manual. |
| Spell | Charm | Applies friendly/helpful by save outcome; duration, target restrictions, and recovery remain manual. |
| Spell | Vibrant Pattern | Applies blinded by save outcome; area, visual targeting, damage, and duration remain manual. |
| Equipment | Warcaller's Chime of Dread | Applies frightened 1/2 by Will-save outcome; activation, area, immunity, and cleanup remain manual. |
| Equipment | Warcaller's Chime of Blasting | Applies prone on failed/critically failed Fortitude saves; activation, area, damage, and cleanup remain manual. |
| Equipment | Ice Slick Snare | Applies prone on failed/critically failed Reflex saves; placement, trigger timing, and cleanup remain manual. |
| Equipment | Spun Cloud (Red) | Applies frightened 2/3 by Will-save outcome; activation, area, damage, immunity, and cleanup remain manual. |
| Monster ability | Paralysis | Applies paralyzed on the qualifying save outcome; duration, recovery, immunity, and prerequisites remain manual. |
| Monster ability | Drink Blood | Applies its qualifying condition after the ability event; damage, requirements, and recovery remain manual. |
| Monster ability | Whip Drain | Applies its qualifying condition after the attack; damage, range, and cleanup remain manual. |
| Monster ability | Acidic Pustules | Applies persistent acid after the qualifying attack/save; damage scaling, area, and recovery remain manual. |

All four Batch 11 category files are registered independently.

## Batch 12 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Emotional Push | Applies its qualifying condition after the feat event; action sequencing, targeting, and duration remain manual. |
| Feat | Silence the Profane | Applies its save-dependent condition; target filtering, duration, and prerequisites remain manual. |
| Feat | Delay Trap | Applies its qualifying condition after the trap event; placement, trigger timing, and cleanup remain manual. |
| Feat | Bound in Ice | Applies immobilized/slowed by qualifying outcome; area, damage, Escape, and duration remain manual. |
| Spell | Deathly Scream | Applies frightened by save outcome; area, damage, and immunity remain native/manual. |
| Spell | Dread Mosquito Storm | Applies sickened by save outcome; sustained area, damage, and recovery remain manual. |
| Spell | Aromatic Lure | Applies stupefied by save outcome; area, duration, and target filtering remain manual. |
| Spell | Chrysopoetic Curse | Applies encumbered/clumsy by save outcome; curse duration, damage, and recovery remain manual. |
| Equipment | Alluring Scarf | Applies its qualifying condition by save outcome; activation, targeting, immunity, and cleanup remain manual. |
| Equipment | Growth Gun | Applies its qualifying condition after the hit; damage, growth, targeting, and duration remain manual. |
| Equipment | Injigo's Loving Embrace | Applies its qualifying condition by save outcome; activation, targeting, duration, and recovery remain manual. |
| Equipment | Murderer's Knot | Applies its qualifying condition after the attack; damage, prerequisites, and cleanup remain manual. |
| Monster ability | Freezing Blood | Applies slowed 1; cold damage, adjacency, and piercing/slashing requirements remain manual. |
| Monster ability | Slowing Gas | Applies slowed 1/2 by Fortitude outcome; area and recharge remain manual. |
| Monster ability | Ground Slam | Applies prone on failed/critically failed Reflex saves; damage and movement remain manual. |
| Monster ability | Shape Ice | Applies prone on failed/critically failed checks; alternate save path and ice/falling rules remain manual. |

All four Batch 12 category files are registered independently.

## Batch 13 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Debilitating Strike | Applies its qualifying condition after the Strike; prerequisites, damage, and duration remain manual. |
| Feat | Flensing Slice | Applies its qualifying condition after the attack; damage, prerequisites, and cleanup remain manual. |
| Feat | Animate Net | Applies its qualifying condition after the net event; placement, targeting, Escape, and cleanup remain manual. |
| Feat | Hot Foot | Applies its qualifying condition after the feat event; movement, targeting, and duration remain manual. |
| Spell | Warp Mind | Applies confused by save outcome; damage, duration, and recovery remain native/manual. |
| Spell | Crisis of Faith | Applies stupefied by save outcome; damage, alignment targeting, and duration remain manual. |
| Spell | Divine Immolation | Applies persistent fire by save outcome; damage, area, and recovery remain native/manual. |
| Spell | Enthrall | Applies fascinated by save outcome; sustained duration, targeting, and immunity remain manual. |
| Equipment | Flaming | Applies persistent fire after a critical rune hit; weapon selection, resistance, and recovery remain manual. |
| Equipment | Greater Flaming | Applies heightened persistent fire after a critical rune hit; weapon selection, resistance, and recovery remain manual. |
| Equipment | Major Rooting | Applies immobilized after a critical rune hit; Escape, weapon selection, and timing remain manual. |
| Equipment | True Rooting | Applies immobilized after a critical rune hit; Escape, weapon selection, and timing remain manual. |
| Monster ability | Corrupting Gaze | Applies stupefied 1 on failed/critically failed Will saves; visual targeting and immunity remain manual. |
| Monster ability | Death Throes | Applies drained 1 on failed/critically failed Fortitude saves; area, timing, and recovery remain manual. |
| Monster ability | Miasma | Applies concealed for 1 round; area, targeting, and cleanup remain manual. |
| Monster ability | Spit Venom | Applies sickened 1 on failed/critically failed Reflex saves; poison progression and recovery remain manual. |

All four Batch 13 category files are registered independently.

## Batch 14 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Disarming Flair | Applies its qualifying condition after the disarm event; check, prerequisites, and cleanup remain manual. |
| Feat | You're Next | Applies its qualifying condition after the qualifying attack; sequencing, targeting, and duration remain manual. |
| Feat | Sickening Strike | Applies sickened by the qualifying Strike outcome; damage, prerequisites, and recovery remain manual. |
| Feat | Pinning Fire | Applies immobilized after the qualifying ranged attack; ammunition, cover, and Escape remain manual. |
| Spell | Flesh to Stone | Applies slowed by save outcome; escalating saves and petrification remain manual. |
| Spell | Dominate | Applies stunned/controlled by save outcome; recurring saves and order restrictions remain manual. |
| Spell | Feeblemind | Applies stupefied by save outcome; magical restrictions and recovery remain manual. |
| Spell | Baleful Polymorph | Applies sickened/polymorphed by save outcome; animal-form handling and recovery saves remain manual. |
| Equipment | Dread Ampoule | Applies frightened by hit outcome; damage, splash, and duration remain manual. |
| Equipment | Thundering | Applies deafened by save outcome; damage, activation, and immunity remain manual. |
| Equipment | Flickering | Applies its qualifying condition after the item event; activation, targeting, and duration remain manual. |
| Equipment | Dreaming Round | Applies slowed/fatigued by save outcome; recurring saves and sleep remain manual. |
| Monster ability | Stunning Strike | Applies stunned 1/2 by Fortitude outcome; prerequisites, damage, and recovery remain manual. |
| Monster ability | Rotting Aura | Applies sickened 1/2 by Fortitude outcome; aura targeting and immunity remain manual. |
| Monster ability | Toxic Spores | Applies sickened 1/2 by Fortitude outcome; area, damage, frequency, and immunity remain manual. |
| Monster ability | Blood Drain | Applies drained 1/2 by Fortitude outcome; grab, damage, recovery, and immunity remain manual. |

All four Batch 14 category files are registered independently.

## Batch 15 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Confusing Commands | Applies confused by Will outcome; aura, filtering, and immunity remain manual. |
| Feat | Frightening Power | Applies frightened 1/2/3 by Will outcome; emanation, requirements, and immunity remain manual. |
| Feat | Twirling Strike | Applies off-guard on a critical success; movement and Tumble Through requirements remain manual. |
| Feat | Shove Down | Applies prone after a successful Trip check; preceding Strike and action requirements remain manual. |
| Spell | Crushing Despair | Applies frightened 1/2/3 by Will outcome; damage, area, and heightened effects remain manual. |
| Spell | Impending Doom | Applies doomed 1/2 by save outcome; damage, duration, and recovery remain manual. |
| Spell | Agonizing Despair | Applies frightened 1/2/3 by Will outcome; damage, area, and heightened effects remain manual. |
| Spell | Vampiric Exsanguination | Applies drained 1/2 by save outcome; damage, area, and recovery remain manual. |
| Equipment | Medusa's Scream | Applies its save-dependent condition; activation, area, damage, and immunity remain manual. |
| Equipment | Medusa's Scream (Greater) | Applies its heightened save-dependent condition; activation, area, damage, and immunity remain manual. |
| Equipment | Spun Cloud (Green) | Applies its save-dependent condition; activation, area, damage, and immunity remain manual. |
| Equipment | Immovable | Applies its qualifying condition; activation, targeting, and duration remain manual. |
| Monster ability | Air of Sickness | Applies sickened 1 on a failed Fortitude save; area, damage, and immunity remain manual. |
| Monster ability | Cloud of Ashes | Applies concealed for 1 round; area, targeting, and cleanup remain manual. |
| Monster ability | Consume Souls | Applies doomed 1 on failed/critically failed saves; targeting, damage, and recovery remain manual. |
| Monster ability | Corpse Bomb | Applies 2d8 fire damage on detonation; area, timing, and scaling remain manual. |

All four Batch 15 category files are registered independently.

## Batch 16 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Bon Mot | Applies stupefied 1/2 by Diplomacy outcome; immunity, linguistic/mental traits, and timing remain manual. |
| Feat | Evangelize | Applies stupefied 1/2 by check outcome; targeting, traits, and timing remain manual. |
| Feat | Goading Feint | Applies off-guard after a successful Feint; attack scope and timing remain manual. |
| Feat | Distracting Feint | Applies off-guard after a successful Feint; target scope and timing remain manual. |
| Spell | Captivating Adoration | Applies fascinated by save outcome; area, duration, sustain, and immunity remain manual. |
| Spell | Blood Vendetta | Applies persistent bleed by save outcome; damage, duration, and recovery remain manual. |
| Spell | Discomfiting Whispers | Applies its mental rider by save outcome; damage, area, and duration remain manual. |
| Spell | Compel True Name | Applies controlled by save outcome; true-name targeting, orders, and recovery remain manual. |
| Equipment | Peshpine Grenade (Major) | Applies stupefied 1 on hit; splash, damage, and scaling remain manual. |
| Equipment | Spirit-Sealing Fulu | Applies paralyzed for 1 round on a failed Will save; undead targeting and recovery remain manual. |
| Equipment | Tenderizer Grenade (Greater) | Applies off-guard on hit; critical-hit duration and damage riders remain manual. |
| Equipment | Necrotic Cap (Major) | Applies enfeebled 4; catalyst detection, void conversion, sickened rider, and persistence remain manual. |
| Monster ability | Captivating Dance | Applies fascinated on a failed Will save; targeting, duration, and immunity remain manual. |
| Monster ability | Gory Splash | Applies sickened 1 on failed/critically failed Fortitude saves; area, damage, and immunity remain manual. |
| Monster ability | Soul Siphon | Applies drained 1 on failed/critically failed Fortitude saves; damage, recovery, and immunity remain manual. |
| Monster ability | Suffocating Darkness | Applies blinded for 1 round on a failed Fortitude save; area, duration, and recovery remain manual. |

All four Batch 16 category files are registered independently.

## Batch 17 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Awesome Blow | Applies its qualifying condition after the attack; prerequisites, damage, movement, and cleanup remain manual. |
| Feat | Frightening Appearance | Applies frightened by save outcome; aura timing, immunity, and targeting remain manual. |
| Feat | Warning Shot | Applies its qualifying condition after the ranged attack; ammunition, range, and timing remain manual. |
| Feat | Wheeling Grab | Applies grabbed after the qualifying attack; movement, reach, and Escape remain manual. |
| Spell | Haste | Applies quickened 1 for 1 minute; extra-action choice and heightened effects remain manual. |
| Spell | Blur | Applies concealed for 1 minute; flat checks, targeting, and heightened duration remain manual. |
| Spell | Enlarge | Applies clumsy 1 for 5 minutes; size, reach, damage, and heightened effects remain manual. |
| Spell | Remove Fear | Reduces frightened by 1; heightened scaling and target selection remain manual. |
| Equipment | Brightbloom Posy | Applies its qualifying condition; activation, area, targeting, and duration remain manual. |
| Equipment | Cloak of Illusions | Applies its qualifying condition; activation, concealment, and duration remain manual. |
| Equipment | Puppetmaster Extract | Applies its qualifying condition by save outcome; poison stages and recovery remain manual. |
| Equipment | Temperbrand | Applies its qualifying condition after the hit; damage, activation, and cleanup remain manual. |
| Monster ability | Swarming Bites | Applies its qualifying condition after the attack; damage, targeting, and cleanup remain manual. |
| Monster ability | Twist the Hook | Applies its qualifying condition after the attack; prerequisites, damage, and recovery remain manual. |
| Monster ability | Wrathful Misfortune | Applies its save-dependent condition; aura, targeting, immunity, and duration remain manual. |
| Monster ability | Cling | Applies grabbed/immobilized after the qualifying event; movement and Escape remain manual. |

All four Batch 17 category files are registered independently.

## Batch 18 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Antler Rush | Applies its qualifying condition after the attack; prerequisites, movement, damage, and cleanup remain manual. |
| Feat | Anchoring Arrow | Applies its qualifying condition after the attack; ammunition, range, movement, and Escape remain manual. |
| Feat | Bear Hug | Applies grabbed after the qualifying attack; prerequisites, damage, and Escape remain manual. |
| Feat | Barreling Charge | Applies its qualifying condition after the charge; prerequisites, movement, damage, and cleanup remain manual. |
| Spell | Slow — Slowed | Applies slowed by save outcome; duration, action loss, targeting, and heightened effects remain manual. |
| Spell | Roaring Applause — Slowed | Applies slowed by save outcome; sustained duration, targeting, and incapacitation remain manual. |
| Spell | Hideous Laughter — Slowed/Prone | Applies slowed or prone by save outcome; sustained duration, targeting, and incapacitation remain manual. |
| Spell | Arctic Rift — Slowed/Immobilized | Applies slowed or immobilized by save outcome; area, damage, persistent effects, and heightened effects remain manual. |
| Equipment | Desiccating Scepter | Applies its qualifying condition after the activation or hit; charges, damage, range, and recovery remain manual. |
| Equipment | Marking Snare | Applies its qualifying condition after the trigger; placement, detection, duration, and targeting remain manual. |
| Equipment | Death Coil | Applies its qualifying condition by save outcome; activation, damage, targeting, and duration remain manual. |
| Equipment | Mudrock Snare | Applies its qualifying condition after the trigger; placement, area, damage, and Escape remain manual. |
| Monster ability | Stench | Applies sickened by save outcome; aura range, immunity, frequency, and recovery remain manual. |
| Monster ability | Engulf | Applies grabbed or restrained after the qualifying event; movement, damage, and Escape remain manual. |
| Monster ability | Greater Constrict | Applies its qualifying condition after the attack; damage, prerequisites, and recovery remain manual. |
| Monster ability | Grab | Applies grabbed after the qualifying attack; reach, movement, damage, and Escape remain manual. |

All four Batch 18 category files are registered independently.

## Batch 19 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Tectonic Stomp | Applies its qualifying condition by save outcome; area, damage, prerequisites, and frequency remain manual. |
| Feat | Dragon Roar | Applies frightened by save outcome; prerequisites, area, immunity, and frequency remain manual. |
| Feat | Log Roll | Applies its qualifying condition after the maneuver; movement, damage, and prerequisites remain manual. |
| Feat | Thorn in Hell’s Side | Applies its qualifying condition after the attack; prerequisites, damage, and timing remain manual. |
| Spell | Agitate — Off-Guard | Applies off-guard after the qualifying spell outcome; targeting, duration, and mental traits remain manual. |
| Spell | Animated Assault — Prone | Applies prone after the qualifying spell outcome; sustained duration, damage, and targeting remain manual. |
| Spell | Draw Ire — Frightened | Applies frightened by save outcome; targeting, duration, immunity, and heightened effects remain manual. |
| Spell | Acid Grip — Grabbed | Applies grabbed by save outcome; sustained duration, damage, and Escape remain manual. |
| Equipment | Greater Rooting | Applies its qualifying condition after activation; charges, targeting, and recovery remain manual. |
| Equipment | Nightmare | Applies its qualifying condition by save outcome; activation, damage, and duration remain manual. |
| Equipment | Greater Thundering | Applies its qualifying condition after activation; damage, area, and recovery remain manual. |
| Equipment | Greater Giant-Killing | Applies its qualifying condition after the qualifying hit; activation, damage, and targeting remain manual. |
| Monster ability | Knockdown | Applies prone after the qualifying attack; prerequisites, damage, reach, and Escape remain manual. |
| Monster ability | Retch | Applies sickened by save outcome; area, frequency, damage, and recovery remain manual. |
| Monster ability | Paralyzing Gaze | Applies paralyzed or slowed by save outcome; range, frequency, immunity, and duration remain manual. |
| Monster ability | Terrifying Croak | Applies frightened by save outcome; area, immunity, frequency, and recovery remain manual. |

All four Batch 19 category files are registered independently under the module's `triggers` package folder.

## Batch 20 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Catfolk Dance | Applies its qualifying condition after the check; prerequisites, movement, damage, and timing remain manual. |
| Feat | Death Dive | Applies its qualifying condition after the attack; prerequisites, movement, damage, and landing remain manual. |
| Feat | Demolish Defenses | Applies its qualifying condition after the qualifying attack; prerequisites, damage, and duration remain manual. |
| Feat | Frightful Aura | Applies frightened by save outcome; aura range, immunity, frequency, and recovery remain manual. |
| Spell | Fear | Applies frightened by save outcome; targeting, duration, immunity, and heightened effects remain manual. |
| Spell | Paralyze | Applies paralyzed or slowed by save outcome; incapacitation, duration, targeting, and heightened effects remain manual. |
| Spell | Befuddle | Applies stupefied by save outcome; duration, targeting, and heightened effects remain manual. |
| Spell | Blindness | Applies blinded by save outcome; duration, targeting, immunity, and heightened effects remain manual. |
| Equipment | Disrupting | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Greater Disrupting | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Frost | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Wounding | Applies its qualifying condition after the hit; activation, damage, persistent effects, and recovery remain manual. |
| Monster ability | Aerial Feint | Applies off-guard after the qualifying check; movement, prerequisites, and timing remain manual. |
| Monster ability | Appetizing Aroma | Applies its qualifying condition by save outcome; aura range, targeting, immunity, and duration remain manual. |
| Monster ability | Incite Violence | Applies its qualifying condition by save outcome; targeting, duration, immunity, and mental effects remain manual. |
| Monster ability | Tattered Soul | Applies its qualifying condition after the qualifying event; prerequisites, damage, and recovery remain manual. |

All four Batch 20 category files are registered independently under the module's `triggers` package folder.

## Batch 21 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Intimidating Strike | Applies frightened by attack outcome; prerequisites, damage, targeting, and immunity remain manual. |
| Feat | Shatter Defenses | Applies off-guard after the qualifying attack; prerequisites, duration, and targeting remain manual. |
| Feat | Frightening Indignation | Applies frightened by save outcome; prerequisites, aura, immunity, and recovery remain manual. |
| Feat | Tut-Tut | Applies its qualifying condition after the reaction; prerequisites, targeting, and timing remain manual. |
| Spell | Sleep — Unconscious | Applies unconscious by save outcome; area, duration, incapacitation, and targeting remain manual. |
| Spell | Invisibility — Invisible | Applies invisible for the qualifying duration; targeting, detection, and sustain remain manual. |
| Spell | Blink — Concealed | Applies concealed by spell timing; duration, flat checks, and targeting remain manual. |
| Spell | Displacement — Concealed | Applies concealed by spell timing; duration, flat checks, and targeting remain manual. |
| Equipment | Atrophy Bomb (Greater) | Applies its qualifying condition by save outcome; activation, damage, area, and recovery remain manual. |
| Equipment | Corrosive | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Battering Snare | Applies its qualifying condition after the trigger; placement, damage, targeting, and Escape remain manual. |
| Equipment | Bristling Spines (Moderate) | Applies its qualifying condition after the hit; activation, damage, targeting, and recovery remain manual. |
| Monster ability | Drowning Touch | Applies its qualifying condition by save outcome; range, damage, immunity, and recovery remain manual. |
| Monster ability | Blackfrost Breath | Applies its qualifying condition by save outcome; area, damage, frequency, and recovery remain manual. |
| Monster ability | Competitive Taunt | Applies its qualifying condition by save outcome; targeting, duration, immunity, and mental effects remain manual. |
| Monster ability | Empty Save for Dust | Applies its qualifying condition after the qualifying event; prerequisites, damage, and recovery remain manual. |

All four Batch 21 category files are registered independently under the module's `triggers` package folder.

## Batch 22 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Dazing Blow | Applies stunned by attack outcome; prerequisites, damage, targeting, and timing remain manual. |
| Feat | Debilitating Shot | Applies its qualifying condition after the attack; prerequisites, damage, and duration remain manual. |
| Feat | Vicious Evisceration | Applies its qualifying condition after the attack; prerequisites, damage, and recovery remain manual. |
| Feat | Staggering Blow | Applies slowed by attack outcome; prerequisites, damage, targeting, and duration remain manual. |
| Spell | Synaptic Pulse — Stunned | Applies stunned by save outcome; area, incapacitation, duration, and heightened effects remain manual. |
| Spell | Evil Eye — Sickened | Applies sickened by save outcome; sustained duration, targeting, immunity, and heightened effects remain manual. |
| Spell | Tortoise and the Hare — Slowed | Applies slowed by save outcome; targeting, duration, immunity, and heightened effects remain manual. |
| Spell | Waking Nightmare — Frightened | Applies frightened by save outcome; targeting, duration, immunity, and heightened effects remain manual. |
| Equipment | Bloodbane | Applies its qualifying condition after activation or hit; activation, damage, targeting, and recovery remain manual. |
| Equipment | Bloody Fang | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Unholy Plate | Applies its qualifying condition after activation; targeting, duration, damage, and recovery remain manual. |
| Equipment | Vorpal | Applies its qualifying condition after the qualifying hit; activation, damage, targeting, and recovery remain manual. |
| Monster ability | Buck | Applies its qualifying condition after the trigger; movement, damage, prerequisites, and recovery remain manual. |
| Monster ability | Ferocity | Applies its qualifying condition after the qualifying event; frequency, damage, and recovery remain manual. |
| Monster ability | Improved Knockdown | Applies prone after the qualifying attack; prerequisites, damage, reach, and Escape remain manual. |
| Monster ability | Aquatic Ambush | Applies its qualifying condition after the attack; movement, concealment, damage, and timing remain manual. |

All four Batch 22 category files are registered independently under the module's `triggers` package folder.

## Batch 23 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Aggressive Block | Applies its qualifying condition after the reaction; prerequisites, damage, positioning, and timing remain manual. |
| Feat | Induce Imbalance | Applies its qualifying condition after the qualifying check; prerequisites, movement, and duration remain manual. |
| Feat | Freeze It! | Applies its qualifying condition by check outcome; prerequisites, damage, targeting, and frequency remain manual. |
| Feat | Leading Dance | Applies its qualifying condition after the qualifying check; prerequisites, movement, targeting, and timing remain manual. |
| Spell | Befuddle — Stupefied | Applies stupefied by save outcome; duration, targeting, and heightened effects remain manual. |
| Spell | Blinding Beauty — Dazzled/Blinded | Applies dazzled or blinded by save outcome; area, duration, immunity, and heightened effects remain manual. |
| Spell | Aberrant Whispers — Stupefied/Confused | Applies stupefied or confused by save outcome; area, duration, immunity, and heightened effects remain manual. |
| Spell | Blinding Foam — Blinded | Applies blinded by save outcome; area, duration, immunity, and heightened effects remain manual. |
| Equipment | Jolt Coil | Applies its qualifying condition after activation; charges, damage, targeting, and recovery remain manual. |
| Equipment | Nail Bomb (Moderate) | Applies its qualifying condition by save outcome; activation, damage, area, and recovery remain manual. |
| Equipment | Gearblade | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Hexing Jar | Applies its qualifying condition by save outcome; activation, area, duration, and recovery remain manual. |
| Monster ability | Blood Drain | Applies drained after the qualifying attack; damage, prerequisites, targeting, and recovery remain manual. |
| Monster ability | Retch | Applies sickened by save outcome; area, frequency, damage, and recovery remain manual. |
| Monster ability | Spit Venom | Applies its qualifying condition by save outcome; range, damage, frequency, and recovery remain manual. |
| Monster ability | Whip Drain | Applies drained after the qualifying attack; damage, prerequisites, targeting, and recovery remain manual. |

All four Batch 23 category files are registered independently under the module's `triggers` package folder.

## Batch 24 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Scare to Death | Applies frightened or fleeing by check outcome; prerequisites, targeting, immunity, and timing remain manual. |
| Feat | Toppling Dance | Applies prone after the qualifying check; prerequisites, movement, damage, and timing remain manual. |
| Feat | Overextending Feint | Applies off-guard after the qualifying check; prerequisites, duration, and targeting remain manual. |
| Feat | Frightening Power | Applies frightened by save outcome; prerequisites, aura, immunity, and recovery remain manual. |
| Spell | Mariner's Curse — Sickened | Applies sickened by save outcome; targeting, duration, immunity, and heightened effects remain manual. |
| Spell | Phantom Pain — Sickened | Applies sickened by save outcome; targeting, duration, mental traits, and heightened effects remain manual. |
| Spell | Cursed Metamorphosis — Sickened | Applies sickened by save outcome; targeting, duration, incapacitation, and heightened effects remain manual. |
| Spell | Shadow Raid — Concealed | Applies concealed by spell outcome; area, duration, targeting, and heightened effects remain manual. |
| Equipment | Anathema Fulu | Applies its qualifying condition after activation; targeting, duration, activation, and recovery remain manual. |
| Equipment | Blindpepper Tube | Applies its qualifying condition by save outcome; activation, area, damage, and recovery remain manual. |
| Equipment | Dazing Coil | Applies its qualifying condition after activation; charges, damage, targeting, and recovery remain manual. |
| Equipment | Blightburn Bomb | Applies its qualifying condition by save outcome; activation, area, damage, and recovery remain manual. |
| Monster ability | Frightful Presence | Applies frightened by save outcome; aura range, immunity, frequency, and recovery remain manual. |
| Monster ability | Improved Push | Applies its qualifying condition after the attack; reach, movement, damage, and timing remain manual. |
| Monster ability | Power Attack | Applies its qualifying condition after the attack; action cost, damage, prerequisites, and timing remain manual. |
| Monster ability | Throw Rock | Applies its qualifying condition after the attack; range, damage, targeting, and ammunition remain manual. |

All four Batch 24 category files are registered independently under the module's `triggers` package folder.

## Batch 25 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Disorienting Opening | Applies its qualifying condition after the attack; prerequisites, damage, targeting, and duration remain manual. |
| Feat | Cautious Word | Applies its qualifying condition after the qualifying check; prerequisites, targeting, and timing remain manual. |
| Feat | Frightful Aura | Applies frightened by save outcome; aura range, immunity, frequency, and recovery remain manual. |
| Feat | Antagonize | Applies its qualifying condition after the qualifying event; prerequisites, targeting, duration, and recovery remain manual. |
| Spell | Tangle Vine — Immobilized | Applies immobilized by save outcome; area, duration, targeting, and heightened effects remain manual. |
| Spell | Bridge of Vines — Prone | Applies prone by save outcome; area, duration, targeting, and heightened effects remain manual. |
| Spell | Indolent Haze — Prone | Applies prone by save outcome; area, duration, targeting, and heightened effects remain manual. |
| Spell | Darkened Eyes — Blinded | Applies blinded by save outcome; area, duration, targeting, and heightened effects remain manual. |
| Equipment | Ashen | Applies its qualifying condition after activation or hit; activation, damage, targeting, and recovery remain manual. |
| Equipment | Greater Ashen | Applies its qualifying condition after activation or hit; activation, damage, targeting, and recovery remain manual. |
| Equipment | Anchoring | Applies its qualifying condition after activation or hit; activation, damage, targeting, and recovery remain manual. |
| Equipment | Greater Anchoring | Applies its qualifying condition after activation or hit; activation, damage, targeting, and recovery remain manual. |
| Monster ability | Constrict | Applies its qualifying condition after the qualifying attack; damage, prerequisites, and Escape remain manual. |
| Monster ability | Rend | Applies its qualifying condition after the qualifying hit; damage, prerequisites, and timing remain manual. |
| Monster ability | Reactive Strike | Applies its qualifying condition after the reaction; trigger timing, reach, damage, and prerequisites remain manual. |
| Monster ability | Sneak Attack | Applies its qualifying condition after the qualifying hit; off-guard setup, damage, and targeting remain manual. |

All four Batch 25 category files are registered independently under the module's `triggers` package folder.

## Batch 26 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Unbalancing Blow | Applies its qualifying condition after the attack; prerequisites, damage, targeting, and duration remain manual. |
| Feat | Chain of Words | Applies its qualifying condition after the qualifying check; prerequisites, targeting, and duration remain manual. |
| Feat | Ivy Playhouse Strike | Applies its qualifying condition after the attack; prerequisites, movement, damage, and timing remain manual. |
| Feat | Flinging Blow | Applies its qualifying condition after the attack; prerequisites, movement, damage, and positioning remain manual. |
| Spell | Dizzying Colors — Dazzled/Stunned/Blinded | Applies dazzled, stunned, or blinded by save outcome; area, duration, immunity, and heightened effects remain manual. |
| Spell | Coral Scourge — Clumsy | Applies clumsy by save outcome; area, duration, targeting, and heightened effects remain manual. |
| Spell | Grasping Vine — Grabbed | Applies grabbed by save outcome; area, duration, targeting, and Escape remain manual. |
| Spell | Fear the Sun — Dazzled | Applies dazzled by save outcome; area, duration, targeting, and heightened effects remain manual. |
| Equipment | Bloodburn Censer — Light Incense | Applies its qualifying condition after activation; area, duration, activation, and recovery remain manual. |
| Equipment | Ring of the Ram (Greater) — Force Blast | Applies its qualifying condition after activation; charges, damage, targeting, and recovery remain manual. |
| Equipment | Booming Bell — Clarion Crescendo | Applies its qualifying condition after activation; charges, area, damage, and recovery remain manual. |
| Equipment | Dragon's Breath (4th Level Spell) — Exhale | Applies its qualifying condition after activation; area, damage, targeting, and recovery remain manual. |
| Monster ability | Fast Healing | Applies healing after the qualifying event; timing, suppression, value, and conditions remain manual. |
| Monster ability | Disease | Applies its qualifying condition by save outcome; onset, stages, immunity, and recovery remain manual. |
| Monster ability | Aura | Applies its qualifying condition by save outcome; aura range, immunity, frequency, and recovery remain manual. |
| Monster ability | Darkvision | Applies its qualifying condition when granted; range, lighting, duration, and targeting remain manual. |

All four Batch 26 category files are registered independently under the module's `triggers` package folder.

## Batch 27 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Caustic Nectar | Applies its qualifying condition after the attack; prerequisites, damage, targeting, and timing remain manual. |
| Feat | Empyreal Aura | Applies its qualifying condition by save outcome; aura range, immunity, frequency, and recovery remain manual. |
| Feat | First to Strike, Fall | Applies its qualifying condition after the qualifying event; prerequisites, timing, movement, and targeting remain manual. |
| Feat | Towering Transformation | Applies its qualifying condition after activation; prerequisites, size, reach, and duration remain manual. |
| Spell | Torturous Trauma — Fatigued | Applies fatigued by save outcome; duration, targeting, mental traits, and heightened effects remain manual. |
| Spell | Dread Secret — Frightened 1 | Applies frightened 1 by save outcome; duration, targeting, immunity, and heightened effects remain manual. |
| Spell | Boneshaker — Enfeebled | Applies enfeebled by save outcome; duration, targeting, damage, and heightened effects remain manual. |
| Spell | Cast into Time — Sickened | Applies sickened by save outcome; duration, targeting, incapacitation, and heightened effects remain manual. |
| Equipment | Dust of Sneezing and Choking — Inhale | Applies its qualifying condition by save outcome; activation, area, frequency, and recovery remain manual. |
| Equipment | Javelin of Lightning — Lightning Bolt | Applies its qualifying condition after activation; damage, area, targeting, and recovery remain manual. |
| Equipment | Necklace of Fireballs — Detonate Bead | Applies its qualifying condition after activation; bead use, area, damage, and recovery remain manual. |
| Equipment | Decanter of Endless Water — Geyser | Applies its qualifying condition after activation; activation, area, damage, and targeting remain manual. |
| Monster ability | Regeneration | Applies healing after the qualifying event; suppression, value, timing, and conditions remain manual. |
| Monster ability | Scent | Applies its qualifying condition when detecting a target; range, concealment, targeting, and duration remain manual. |
| Monster ability | Tremorsense | Applies its qualifying condition when detecting a target; range, terrain, targeting, and duration remain manual. |
| Monster ability | Greater Darkvision | Applies its qualifying condition when granted; range, lighting, targeting, and duration remain manual. |

All four Batch 27 category files are registered independently under the module's `triggers` package folder.

## Batch 28 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Disarming Twist | Applies its qualifying condition after the attack; prerequisites, damage, targeting, and timing remain manual. |
| Feat | Dirty Trick | Applies its qualifying condition after the qualifying check; prerequisites, damage, targeting, and recovery remain manual. |
| Feat | First to Strike, First to Fall | Applies its qualifying condition after the qualifying event; prerequisites, timing, movement, and targeting remain manual. |
| Feat | Overpowering Charge | Applies its qualifying condition after the charge; prerequisites, movement, damage, and positioning remain manual. |
| Spell | Curse of Lost Time — Clumsy | Applies clumsy by save outcome; duration, targeting, immunity, and heightened effects remain manual. |
| Spell | Noxious Vapors — Sickened | Applies sickened by save outcome; area, duration, targeting, and heightened effects remain manual. |
| Spell | Blood Feast — Persistent Bleed | Applies persistent bleed by save outcome; area, damage, duration, and heightened effects remain manual. |
| Spell | Grasping Earth — Grabbed/Restrained | Applies grabbed or restrained by save outcome; area, duration, targeting, and Escape remain manual. |
| Equipment | Decaying | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Demolishing | Applies its qualifying condition after the hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Brilliant | Applies its qualifying condition after activation or hit; activation, damage, targeting, and recovery remain manual. |
| Equipment | Deathdrinking | Applies its qualifying condition after the hit; activation, damage, targeting, and recovery remain manual. |
| Monster ability | All-Around Vision | Applies its qualifying condition when granted; range, targeting, flanking, and duration remain manual. |
| Monster ability | Lifesense | Applies its qualifying condition when detecting a target; range, traits, targeting, and duration remain manual. |
| Monster ability | Light Blindness | Applies blinded or dazzled by light exposure; timing, recovery, immunity, and conditions remain manual. |
| Monster ability | Telepathy | Applies its qualifying communication condition when granted; range, languages, targeting, and duration remain manual. |

All four Batch 28 category files are registered independently under the module's `triggers` package folder.

The aggregate `pf2e-trigger-package.json` contains the validated Batch 1–27 triggers; the individual historical batch files and the redundant additional aggregate are retained as source records, while registration uses the aggregate plus the newer Batch 28–29 files to avoid duplicate runtime IDs.

## Batch 29 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Brutal Beating | Applies its qualifying condition after the attack; prerequisites, damage, targeting, and timing remain manual. |
| Feat | Death Roll | Applies its qualifying condition after the qualifying maneuver; prerequisites, damage, movement, and Escape remain manual. |
| Feat | Whirling Throw | Applies its qualifying condition after the qualifying maneuver; prerequisites, movement, damage, and positioning remain manual. |
| Feat | Sudden Terror | Applies frightened by check outcome; prerequisites, targeting, immunity, and timing remain manual. |
| Spell | Phantasmal Killer — Frightened | Applies frightened by spell outcome; damage, range, duration, and heightened effects remain manual. |
| Spell | Cacophonous Call — Deafened | Applies deafened by spell outcome; area, duration, targeting, and heightened effects remain manual. |
| Spell | Befuddling Dust — Stupefied | Applies stupefied by spell outcome; area, duration, targeting, and heightened effects remain manual. |
| Spell | Pummeling Rubble — Push | Posts a reminder for the spell's push outcome; area, damage, targeting, and heightened effects remain manual. |
| Equipment | Ghost Touch | Applies its qualifying condition after activation or hit; activation, damage, target traits, and recovery remain manual. |
| Equipment | Keen | Applies its qualifying condition after the qualifying attack; activation, critical rules, and damage remain manual. |
| Equipment | Returning | Posts a reminder after a thrown attack; retrieval timing, range, and action economy remain manual. |
| Equipment | Shifting | Posts a reminder after activation; weapon selection, traits, and duration remain manual. |
| Monster ability | Evasion | Posts a reminder for improved Reflex outcomes; save resolution and incapacitation remain manual. |
| Monster ability | Flight | Posts a reminder for aerial movement and forced landing; movement and altitude remain manual. |
| Monster ability | Invisibility | Posts a reminder for invisible state and detection exceptions; duration and concealment remain manual. |
| Monster ability | Web | Posts a reminder for webbed terrain, immobilization, and Escape; placement and recovery remain manual. |

All four Batch 29 category files are registered alongside the aggregate package.

## Batch 30 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Terrain Stalker | Posts a reminder for terrain, cover, and detection benefits; exact checks and circumstance modifiers remain manual. |
| Feat | Kip Up | Posts a reminder for the Stand action and movement benefits; action timing remains manual. |
| Feat | Roll with It | Posts a reminder for the reaction's damage and movement effects; triggering damage remains manual. |
| Feat | Experienced Smuggler | Posts a reminder for concealment and inspection modifiers; circumstance evaluation remains manual. |
| Spell | Water Breathing — Breath | Posts a reminder for breath duration and underwater limitations; timing remains manual. |
| Spell | Wall of Wind — Difficult Terrain | Posts a reminder for area, difficult terrain, and ranged interactions; placement remains manual. |
| Spell | Darkness — Concealed | Posts a reminder for concealed and lighting interactions; area and duration remain manual. |
| Spell | Jump — Leap | Posts a reminder for enhanced Leap distance and movement; checks remain manual. |
| Equipment | Bottled Sunlight | Posts a reminder for activation, illumination, and light-based effects; timing remains manual. |
| Equipment | Feather Token — Bird | Posts a reminder for activation, summoned bird, and duration; targeting remains manual. |
| Equipment | Immovable Rod | Posts a reminder for activation, load, and release conditions; timing remains manual. |
| Equipment | Rope of Climbing | Posts a reminder for commands, reach, and load; exact uses remain manual. |
| Monster ability | Burrow | Posts a reminder for underground movement, cover, and terrain; movement remains manual. |
| Monster ability | Climb | Posts a reminder for climbing movement, checks, and falling risk; checks remain manual. |
| Monster ability | Keen Smell | Posts a reminder for scent detection range and concealment; detection remains manual. |
| Monster ability | Mimicry | Posts a reminder for copied sounds, deception, and recognition; checks remain manual. |

All four Batch 30 category files are registered alongside the aggregate package.

## Batch 31 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Foil Senses | Posts a reminder for sensory protection and detection benefits; exact checks remain manual. |
| Feat | Glad-Hand | Posts a reminder for Make an Impression benefits; influence checks remain manual. |
| Feat | Group Impression | Posts a reminder for multi-target influence benefits; targeting remains manual. |
| Feat | Recognize Threat | Posts a reminder for initiative and recognition benefits; checks remain manual. |
| Spell | Blazing Bolt — Persistent Fire | Posts a reminder for persistent fire and heightened effects; damage and duration remain manual. |
| Spell | Fireball — Area Reminder | Posts a reminder for area, damage, saves, and heightened effects; targeting remains manual. |
| Spell | Fly — Flying | Posts a reminder for flying movement, duration, and concentration; movement remains manual. |
| Spell | Aquatic Adaptation | Posts a reminder for aquatic movement, breathing, and duration; terrain remains manual. |
| Equipment | Bracers of Armor | Posts a reminder for activation and armor benefits; timing remains manual. |
| Equipment | Hat of Disguise | Posts a reminder for disguise, duration, and counteracting; checks remain manual. |
| Equipment | Handy Haversack | Posts a reminder for extradimensional storage and retrieval; access remains manual. |
| Equipment | Spyglass | Posts a reminder for distance, visual detail, and circumstance bonuses; assessment remains manual. |
| Monster ability | Water Walking | Posts a reminder for water movement and terrain interactions; timing remains manual. |
| Monster ability | Clinging Shadows | Posts a reminder for the granted condition and duration; targeting remains manual. |
| Monster ability | Poison | Posts a reminder for exposure, stages, onset, and recovery; saves remain manual. |
| Monster ability | Web Walker | Posts a reminder for web terrain, movement, and Escape interactions; placement remains manual. |

All four Batch 31 category files are registered alongside the aggregate package.

## Batch 32 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Butterfly's Sting | Posts a reminder for the reaction and damage effects; trigger timing remains manual. |
| Feat | Fascinating Performance | Posts a reminder for fascinated condition and duration; targeting remains manual. |
| Feat | Lie to Me | Posts a reminder for Deception and Perception interaction; checks remain manual. |
| Feat | Quick Draw | Posts a reminder for action and item-draw benefits; action economy remains manual. |
| Spell | Mirror Image — Concealed | Posts a reminder for images, targeting, and concealment; image removal remains manual. |
| Spell | Resist Energy — Resistance | Posts a reminder for resistance value, type, and duration; damage remains manual. |
| Spell | See the Unseen — Senses | Posts a reminder for special senses, targeting, and duration; detection remains manual. |
| Spell | Levitate — Floating | Posts a reminder for vertical movement, duration, and action costs; movement remains manual. |
| Equipment | Boots of Bounding | Posts a reminder for jump distance and movement benefits; movement remains manual. |
| Equipment | Cape of the Mountebank | Posts a reminder for teleportation, targeting, and smoke; timing remains manual. |
| Equipment | Goggles of Night | Posts a reminder for darkvision range and lighting; detection remains manual. |
| Equipment | Wand of Manifold Missiles | Posts a reminder for activation, spell, charges, and frequency; use remains manual. |
| Monster ability | Acute Vision | Posts a reminder for visual detection and concealment; checks remain manual. |
| Monster ability | Amphibious | Posts a reminder for water breathing and aquatic movement; terrain remains manual. |
| Monster ability | Swallow Whole | Posts a reminder for grabbed, damage, and Escape; checks remain manual. |
| Monster ability | Melee Attack | Posts a reminder for reach, traits, damage, and targeting; attack resolution remains manual. |

All four Batch 32 category files are registered alongside the aggregate package.

## Batch 33 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Combat Climber | Posts a reminder for climbing movement and combat benefits; checks remain manual. |
| Feat | Cloud Jump | Posts a reminder for enhanced Leap and distance benefits; movement remains manual. |
| Feat | Incredible Initiative | Posts a reminder for the initiative bonus; initiative resolution remains manual. |
| Feat | Intimidating Glare | Posts a reminder for the Demoralize targeting benefit; checks remain manual. |
| Spell | Breathe Fire — Persistent Fire | Posts a reminder for persistent fire, damage, and duration; saves remain manual. |
| Spell | Chain Lightning — Area Reminder | Posts a reminder for targets, jumps, damage, and saves; targeting remains manual. |
| Spell | Dispel Magic — Counteract | Posts a reminder for counteract checks and results; resolution remains manual. |
| Spell | Longstrider — Speed | Posts a reminder for speed increase and duration; movement remains manual. |
| Equipment | Armor of the Unfeeling | Posts a reminder for resistance and activation; timing remains manual. |
| Equipment | Broom of Flying | Posts a reminder for flight, speed, and activation; movement remains manual. |
| Equipment | Ring of Sustenance | Posts a reminder for rest, nourishment, and daily benefits; timing remains manual. |
| Equipment | Shielding Ring | Posts a reminder for resistance, activation, and duration; damage remains manual. |
| Monster ability | Immunity | Posts a reminder for immunity traits and excluded effects; applicability remains manual. |
| Monster ability | Trackless Step | Posts a reminder for movement, tracking, and terrain interactions; checks remain manual. |
| Monster ability | Acute Hearing | Posts a reminder for auditory detection and concealment; checks remain manual. |
| Monster ability | Camouflage | Posts a reminder for concealment and terrain-based stealth; checks remain manual. |

All four Batch 33 category files are registered alongside the aggregate package.

## Batch 34 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Assurance — Athletics | Posts a reminder that Athletics proficiency applies without modifiers; check selection remains manual. |
| Feat | Experienced Tracker | Posts a reminder for tracking benefits and movement adjustments; checks remain manual. |
| Feat | Quiet Allies | Posts a reminder for group Stealth and movement benefits; checks remain manual. |
| Feat | Wary Disarmament | Posts a reminder for disarm and defensive benefits; checks remain manual. |
| Spell | Battle Prayer | Posts a reminder for attack, damage, and duration; resolution remains manual. |
| Spell | Bless — Status | Posts a reminder for status bonus, aura, and duration; targeting remains manual. |
| Spell | Heal — Recovery | Posts a reminder for target, action version, damage, and recovery; resolution remains manual. |
| Spell | Magic Weapon — Potency | Posts a reminder for potency, damage dice, and duration; weapon selection remains manual. |
| Equipment | Boots of Speed | Posts a reminder for activation, speed, and duration; movement remains manual. |
| Equipment | Cloak of Elvenkind | Posts a reminder for invisibility, Stealth, and duration; detection remains manual. |
| Equipment | Gloves of Thievery | Posts a reminder for item bonus and activation; checks remain manual. |
| Equipment | Periscope | Posts a reminder for line of sight and visual circumstance bonuses; assessment remains manual. |
| Monster ability | Blindsight | Posts a reminder for precise sense range and concealment; detection remains manual. |
| Monster ability | Breath Weapon | Posts a reminder for area, frequency, damage, and saves; resolution remains manual. |
| Monster ability | Engulfing Form | Posts a reminder for grabbed, movement, damage, and Escape; checks remain manual. |
| Monster ability | Venomous Bite | Posts a reminder for poison exposure, stages, and recovery; saves remain manual. |

All four Batch 34 category files are registered alongside the aggregate package.

## Batch 35 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Alchemical Crafting | Posts a reminder for formulas, reagents, and daily crafting; crafting remains manual. |
| Feat | Arcane Sense | Posts a reminder for magical detection and range; detection remains manual. |
| Feat | Assurance — Medicine | Posts a reminder that Medicine proficiency applies without modifiers; check selection remains manual. |
| Feat | Automatic Knowledge | Posts a reminder for Recall Knowledge prompts and outcomes; checks remain manual. |
| Spell | Detect Magic — Detection | Posts a reminder for detection range, auras, and duration; identification remains manual. |
| Spell | Electric Arc — Damage | Posts a reminder for targets, damage, and save outcomes; resolution remains manual. |
| Spell | Restoration — Recovery | Posts a reminder for conditions, counteract checks, and costs; resolution remains manual. |
| Spell | Concentration | Posts a reminder for spellcasting circumstance and duration interactions; timing remains manual. |
| Equipment | Demon Mask | Posts a reminder for activation, disguise, and duration; counteracting remains manual. |
| Equipment | Earring of the Deep | Posts a reminder for communication range and aquatic benefits; targeting remains manual. |
| Equipment | Potion of Healing | Posts a reminder for activation, healing amount, and item use; timing remains manual. |
| Equipment | Spear of the Hunt | Posts a reminder for activation, range, and damage benefits; targeting remains manual. |
| Monster ability | Blindsense | Posts a reminder for imprecise sense range and concealment; detection remains manual. |
| Monster ability | Energy Drain | Posts a reminder for drained value, frequency, and recovery; saves remain manual. |
| Monster ability | Frightful Moan | Posts a reminder for frightened saves, area, and frequency; resolution remains manual. |
| Monster ability | Toxic Skin | Posts a reminder for poison exposure, stages, and recovery; saves remain manual. |

All four Batch 35 category files are registered alongside the aggregate package.

## Batch 36 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Assurance — Perception | Posts a reminder that Perception proficiency applies without modifiers; check selection remains manual. |
| Feat | Battle Medicine — Recovery | Posts a reminder for target, cooldown, and healing; timing remains manual. |
| Feat | Continual Recovery | Posts a reminder for Treat Wounds cooldown and time; activity remains manual. |
| Feat | Forager | Posts a reminder for food, Survival checks, and exploration time; checks remain manual. |
| Spell | Chill Touch — Damage | Posts a reminder for damage, target traits, and saves; resolution remains manual. |
| Spell | Obscuring Mist — Concealed | Posts a reminder for area, concealment, and duration; targeting remains manual. |
| Spell | Telekinetic Projectile — Damage | Posts a reminder for object, damage, and attack resolution; targeting remains manual. |
| Spell | Mirror Image — Images | Posts a reminder for images, targeting, and duration; image removal remains manual. |
| Equipment | Amulet of Mighty Fists | Posts a reminder for potency, runes, and unarmed attacks; attack resolution remains manual. |
| Equipment | Bag of Holding | Posts a reminder for extradimensional storage, bulk, and retrieval; access remains manual. |
| Equipment | Hat of Disguise — Disguise | Posts a reminder for disguise, duration, and counteracting; checks remain manual. |
| Equipment | Traveler’s Anytool | Posts a reminder for item form, use, and proficiency; activation remains manual. |
| Monster ability | Aerial Ambush | Posts a reminder for movement, concealment, and attack benefits; resolution remains manual. |
| Monster ability | Aura of Sickness | Posts a reminder for aura range, saves, sickened, and recovery; checks remain manual. |
| Monster ability | Claw | Posts a reminder for attack traits, damage, and Grab interactions; resolution remains manual. |
| Monster ability | Weakness | Posts a reminder for damage types, values, and immunity interactions; applicability remains manual. |

All four Batch 36 category files are registered alongside the aggregate package.

## Batch 37 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Acrobatics Lore | Posts a reminder for Lore checks and trained-use benefits; checks remain manual. |
| Feat | Courtly Graces | Posts a reminder for social and etiquette benefits; influence checks remain manual. |
| Feat | Impressive Performance | Posts a reminder for Performance-based influence benefits; checks remain manual. |
| Feat | Pickpocket | Posts a reminder for item-stealing, detection, and action benefits; checks remain manual. |
| Spell | Antimagic Field — Suppressed | Posts a reminder for suppressed magic, area, and duration; interactions remain manual. |
| Spell | Floating Flame — Light | Posts a reminder for light source, movement, and duration; targeting remains manual. |
| Spell | Resist Poison — Resistance | Posts a reminder for resistance value, poison type, and duration; damage remains manual. |
| Spell | Grim Tendrils — Persistent Damage | Posts a reminder for targets, damage, and persistent effects; resolution remains manual. |
| Equipment | Dancing Scarf | Posts a reminder for activation, movement, and circumstance benefits; timing remains manual. |
| Equipment | Figurine of a Duskleaf | Posts a reminder for activation, form, and duration; targeting remains manual. |
| Equipment | Lantern of Empty Light | Posts a reminder for illumination, activation, and darkness; area remains manual. |
| Equipment | Ring of the Weeping Willow | Posts a reminder for activation, resistance, and duration; timing remains manual. |
| Monster ability | Acid Breath | Posts a reminder for area, damage, frequency, and saves; resolution remains manual. |
| Monster ability | Counterattack | Posts a reminder for trigger, attack, and damage; timing remains manual. |
| Monster ability | Grabby Hands | Posts a reminder for grabbed, reach, damage, and Escape; checks remain manual. |
| Monster ability | Regeneration — Suppression | Posts a reminder for suppression, healing, and conditions; timing remains manual. |

All four Batch 37 category files are registered alongside the aggregate package.

## Batch 38 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Armor Assist | Posts a reminder for Aid, circumstance bonuses, and armor interactions; checks remain manual. |
| Feat | Assurance — Survival | Posts a reminder that Survival proficiency applies without modifiers; check selection remains manual. |
| Feat | Battle Cry — Frightened | Posts a reminder for frightened outcomes and initiative timing; checks remain manual. |
| Feat | Crushing Grab | Posts a reminder for Grab, damage, and Escape interactions; checks remain manual. |
| Spell | Disintegrate — Destruction | Posts a reminder for targets, damage, saves, and object destruction; resolution remains manual. |
| Spell | Freedom of Movement — Unimpeded | Posts a reminder for movement, restraints, and duration; targeting remains manual. |
| Spell | Sanctuary — Protected | Posts a reminder for targeting restrictions, saves, and duration; resolution remains manual. |
| Spell | True Strike — Fortune | Posts a reminder for fortune effect, attack roll, and duration; timing remains manual. |
| Equipment | Aegis of the Heart | Posts a reminder for activation, resistance, and duration; timing remains manual. |
| Equipment | Alchemist’s Goggles | Posts a reminder for activation, damage, and targeting; resolution remains manual. |
| Equipment | Bracers of Missile Deflection | Posts a reminder for reaction, attack, and damage; timing remains manual. |
| Equipment | Wand of Widening | Posts a reminder for activation, area, spell, and charges; use remains manual. |
| Monster ability | Ambush | Posts a reminder for initiative, concealment, and attack benefits; resolution remains manual. |
| Monster ability | Claw Frenzy | Posts a reminder for multiple attacks, damage, and conditions; resolution remains manual. |
| Monster ability | Disease — Onset | Posts a reminder for onset, stages, saves, and recovery; checks remain manual. |
| Monster ability | Swarm | Posts a reminder for area, resistances, immunity, and damage; resolution remains manual. |

All four Batch 38 category files are registered alongside the aggregate package.

## Batch 39 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Acrobatic Performer | Posts a reminder for Acrobatics performance benefits; checks remain manual. |
| Feat | Adroit Manipulation | Posts a reminder for manipulation and action benefits; timing remains manual. |
| Feat | Alchemical Savant | Posts a reminder for formulas, item bonuses, and crafting; checks remain manual. |
| Feat | Dubious Knowledge | Posts a reminder for Recall Knowledge outcomes and false information; checks remain manual. |
| Spell | Aqueous Orb — Grabbed | Posts a reminder for area, grabbed, movement, and duration; resolution remains manual. |
| Spell | Darkness — Area | Posts a reminder for area, lighting, concealment, and duration; targeting remains manual. |
| Spell | Mage Armor — Protection | Posts a reminder for armor benefit, duration, and targeting; resolution remains manual. |
| Spell | Vital Beacon — Healing | Posts a reminder for healing, targets, and duration; action timing remains manual. |
| Equipment | Belt of Good Health | Posts a reminder for item bonus, activation, and duration; timing remains manual. |
| Equipment | Gloves of Storage | Posts a reminder for storage, activation, and retrieval; access remains manual. |
| Equipment | Lens of Truth | Posts a reminder for detection, counteracting, and visual benefits; checks remain manual. |
| Equipment | Singing Bow | Posts a reminder for activation, sound, attack, and duration; resolution remains manual. |
| Monster ability | Aura of Fear | Posts a reminder for range, frightened saves, immunity, and recovery; checks remain manual. |
| Monster ability | Electric Arc | Posts a reminder for targets, damage, and saves; resolution remains manual. |
| Monster ability | Pounce | Posts a reminder for movement, attack sequence, and damage; resolution remains manual. |
| Monster ability | Swoop | Posts a reminder for movement, concealment, attack, and damage; resolution remains manual. |

All four Batch 39 category files are registered alongside the aggregate package.

## Batch 40 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Alchemical Discoveries | Posts a reminder for discoveries, formulas, and crafting; checks remain manual. |
| Feat | Assurance — Crafting | Posts a reminder that Crafting proficiency applies without modifiers; check selection remains manual. |
| Feat | Bargain Hunter | Posts a reminder for item search and purchasing benefits; assessment remains manual. |
| Feat | Charming Liar | Posts a reminder for Deception and audience benefits; checks remain manual. |
| Spell | Color Spray — Dazzled | Posts a reminder for dazzled, stunned, area, and saves; resolution remains manual. |
| Spell | Paralyze — Stunned | Posts a reminder for stunned, paralyzed, duration, and saves; resolution remains manual. |
| Spell | Summon Elemental — Summoned | Posts a reminder for summoned creature, duration, and actions; control remains manual. |
| Spell | Find the Path — Compass | Posts a reminder for direction, target, and duration; navigation remains manual. |
| Equipment | Animated Armor | Posts a reminder for activation, armor, and duration; timing remains manual. |
| Equipment | Cognitive Mutagen | Posts a reminder for item bonus, penalties, and duration; checks remain manual. |
| Equipment | Dusty Rose Prism | Posts a reminder for activation, resistance, and duration; timing remains manual. |
| Equipment | Magic Compass | Posts a reminder for activation, direction, and duration; navigation remains manual. |
| Monster ability | Acid Splash | Posts a reminder for area, damage, and saves; resolution remains manual. |
| Monster ability | Claw — Grab | Posts a reminder for attack, Grab, damage, and Escape; checks remain manual. |
| Monster ability | Darkvision — Sense | Posts a reminder for range, lighting, and concealment; detection remains manual. |
| Monster ability | Paralyzing Gaze — Save | Posts a reminder for area, saves, paralyzed, and immunity; resolution remains manual. |

All four Batch 40 category files are registered alongside the aggregate package.

## Batch 41 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Assurance — Acrobatics | Posts a reminder that Acrobatics proficiency applies without modifiers; check selection remains manual. |
| Feat | Connections — Influence | Posts a reminder for influence and social benefits; checks remain manual. |
| Feat | Experienced Professional — Crafting | Posts a reminder for Crafting and professional benefits; checks remain manual. |
| Feat | Fascinating Performance — Fascinate | Posts a reminder for fascinated targets and duration; resolution remains manual. |
| Spell | Animate Dead — Minion | Posts a reminder for summoned minion, duration, and actions; control remains manual. |
| Spell | Banishment — Dismissal | Posts a reminder for target, counteract, and dismissal; resolution remains manual. |
| Spell | Enlarge — Size | Posts a reminder for size, reach, clumsy, and duration; targeting remains manual. |
| Spell | Remove Curse — Counteract | Posts a reminder for target, counteract, and recovery; checks remain manual. |
| Equipment | Cavalier’s Saddle | Posts a reminder for mounted benefits, activation, and movement; timing remains manual. |
| Equipment | Coin of Comfort | Posts a reminder for activation, morale, and duration; timing remains manual. |
| Equipment | Wand of Shardstorm | Posts a reminder for activation, spell, charges, and frequency; use remains manual. |
| Equipment | Ring of the Ram | Posts a reminder for activation, force blast, range, and charges; resolution remains manual. |
| Monster ability | Blazing Breath | Posts a reminder for area, damage, frequency, and saves; resolution remains manual. |
| Monster ability | Cold Snap | Posts a reminder for area, damage, and conditions; resolution remains manual. |
| Monster ability | Distraction | Posts a reminder for targets, concealment, and checks; resolution remains manual. |
| Monster ability | Vicious Rend | Posts a reminder for attack sequence, damage, and conditions; resolution remains manual. |

All four Batch 41 category files are registered alongside the aggregate package.

## Batch 42 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Alchemical Savant — Crafting | Posts a reminder for crafting, item bonuses, and formulas; checks remain manual. |
| Feat | Battlefield Surveyor | Posts a reminder for initiative, terrain, and tactical benefits; checks remain manual. |
| Feat | Field Discovery | Posts a reminder for exploration, gathering, and skill benefits; checks remain manual. |
| Feat | Mounted Combatant | Posts a reminder for mounted actions, movement, and attacks; resolution remains manual. |
| Spell | Baldur’s Blessing — Status | Posts a reminder for status bonus, target, and duration; resolution remains manual. |
| Spell | Cloudkill — Sickened | Posts a reminder for area, damage, sickened, and duration; saves remain manual. |
| Spell | Polymorph — Form | Posts a reminder for form, statistics, and duration; transformations remain manual. |
| Spell | Spiritual Weapon — Weapon | Posts a reminder for weapon, attacks, damage, and duration; resolution remains manual. |
| Equipment | Hood of the Forgotten | Posts a reminder for activation, concealment, and duration; targeting remains manual. |
| Equipment | Keepsake Token | Posts a reminder for activation, memory, and circumstance benefits; timing remains manual. |
| Equipment | Mirror of Misdirection | Posts a reminder for activation, target, and duration; resolution remains manual. |
| Equipment | Staff of the Magi | Posts a reminder for activation, charges, spells, and frequency; use remains manual. |
| Monster ability | Black Tentacles | Posts a reminder for area, grabbed, damage, and Escape; checks remain manual. |
| Monster ability | Echolocation | Posts a reminder for auditory detection and concealment; checks remain manual. |
| Monster ability | Fast Swimmer | Posts a reminder for aquatic movement and terrain; movement remains manual. |
| Monster ability | Resistances | Posts a reminder for damage types, values, and immunity interactions; applicability remains manual. |

All four Batch 42 category files are registered alongside the aggregate package.

## Batch 43 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Assurance — Stealth | Posts a reminder to replace the Stealth check with the fixed proficiency value; final calculation remains manual. |
| Feat | Cat Fall | Posts a reminder for falling distance, Acrobatics, and landing effects; fall resolution remains manual. |
| Feat | Group Coercion | Posts a reminder for the group target and Coercion checks; results remain manual. |
| Feat | Lengthy Diversion | Posts a reminder for the prolonged diversion, target area, and duration; adjudication remains manual. |
| Spell | Grease — Prone | Posts a reminder for the area, save, and prone outcome; save resolution remains manual. |
| Spell | Resilient Sphere — Immobilized | Posts a reminder for the sphere, target, and immobilized state; duration and escape remain manual. |
| Spell | Searing Light — Damage | Posts a reminder for the beam, damage, and heightened alignment interactions; damage resolution remains manual. |
| Spell | Telepathic Bond — Communication | Posts a reminder for the linked creatures and communication duration; eligibility remains manual. |
| Equipment | Cloak of the Bat | Posts a reminder for activation, flight, and duration; movement remains manual. |
| Equipment | Dust of Disappearance | Posts a reminder for activation, invisibility, and duration; detection remains manual. |
| Equipment | Potion of Water Breathing | Posts a reminder for drinking, aquatic adaptation, and duration; timing remains manual. |
| Monster ability | Tail Sweep | Posts a reminder for the sweep area, targets, and save; damage and positioning remain manual. |
| Monster ability | Wing Rebuff | Posts a reminder for the reaction, trigger, and forced movement; attack and movement remain manual. |
| Monster ability | Ravenous Maw | Posts a reminder for the bite, damage, and grabbed outcome; checks remain manual. |
| Monster ability | Dazzling Flash | Posts a reminder for the flash area, save, and dazzled outcome; save resolution remains manual. |

All four Batch 43 category files are registered alongside the aggregate package.

## Batch 44 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Nimble Dodge | Posts a reminder for the reaction and +2 circumstance AC against the triggering attack; timing remains manual. |
| Feat | Reactive Shield | Posts a reminder for the reaction to Raise a Shield and possible Shield Block; held-shield checks remain manual. |
| Feat | Sudden Charge | Posts a reminder for the two Strides and melee Strike activity; movement and target qualification remain manual. |
| Feat | Diehard | Posts a reminder to increase the dying threshold by 1; recovery and death rules remain manual. |
| Spell | Shield — Raise Reminder | Posts a reminder for the +1 AC effect and Shield Block reaction; reaction timing remains manual. |
| Spell | Heroism — Status Reminder | Posts a reminder for the +1 status bonus and 10-minute duration; heightened values remain manual. |
| Spell | Magic Missile — Damage | Rolls one base 1d4+1 force missile; additional actions, missiles, and heightened damage remain manual. |
| Spell | Message — Communication | Posts a reminder for the brief two-way verbal reply; range and language requirements remain manual. |
| Equipment | Handwraps of Mighty Blows | Detects the handwraps on an attack and posts a rune-application reminder; rune values remain system-managed or manual. |
| Equipment | Pearl of Power | Posts a reminder to restore an eligible spell and track the daily use; rank and eligibility remain manual. |
| Equipment | Staff of Healing | Posts a reminder to choose Heal rank, target, healing, and charges; resolution remains manual. |
| Equipment | Wand of Longstrider | Posts a reminder for the 1-hour speed increase and activation tracking; application remains manual. |
| Monster ability | Trample | Posts a reminder for movement through creatures, saves, damage, and prone effects; resolution remains manual. |
| Monster ability | Noxious Fumes | Posts a reminder for area saves and poison or sickened effects; aura timing remains manual. |
| Monster ability | Improved Grab | Posts a reminder to apply Grab after a qualifying hit without the normal extra action; hit qualification remains manual. |
| Monster ability | Change Shape | Posts a reminder to track form, adjusted statistics, duration, and form-dependent abilities; transformation remains manual. |

All four Batch 44 category files are registered alongside the aggregate package.

## Batch 45 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Attack of Opportunity | Posts a reminder for qualifying reactions and melee Strikes; trigger eligibility remains manual. |
| Feat | Power Attack | Posts a reminder for the two-action Strike and extra weapon die; final damage remains manual. |
| Feat | Dueling Parry | Posts a reminder for the AC bonus and one-handed/free-hand requirements; equipment checks remain manual. |
| Feat | Bon Mot | Posts a reminder for the Deception check, Will DC, and mental penalty; language and duration remain manual. |
| Feat | Tumble Behind | Posts a reminder for the off-guard rider after Tumble Through; success and timing remain manual. |
| Spell | Illusory Disguise — Appearance | Posts a reminder for the disguise and +4 Deception bonus; inspection and counteracting remain manual. |
| Spell | Ventriloquism — Voice | Posts a reminder for the displaced voice and detection check; source adjudication remains manual. |
| Spell | Read Aura — Detection | Posts a reminder for magical-aura and school identification; exact spell and counteract results remain manual. |
| Spell | Calm — Emotion | Posts a reminder for emotion suppression and frightened reduction; save and immunity remain manual. |
| Spell | Sound Body — Recovery | Posts a reminder for counteracting physical afflictions and temporary protection; checks and duration remain manual. |
| Equipment | Boots of Elvenkind | Posts a reminder for the movement benefit and activation duration; application remains manual. |
| Equipment | Cloak of the Manta Ray | Posts a reminder for aquatic movement benefits and duration; application remains manual. |
| Equipment | Goggles of Minute Seeing | Posts a reminder for close-inspection benefits and the relevant check; resolution remains manual. |
| Equipment | Horn of Blasting | Posts a reminder for the sonic effect, save, and deafened result; resolution remains manual. |
| Monster ability | Explode | Posts a reminder for the self-destructive area effect, save, and damage; use timing remains manual. |
| Monster ability | Death Burst | Posts a reminder for the defeat-triggered burst before removal; area and save resolution remain manual. |
| Monster ability | Ranged Attack | Posts a reminder for range, ammunition/reload, cover, and concealment; attack resolution remains manual. |
| Monster ability | Spellcasting | Posts a reminder for spell resources, actions, DC, and casting traits; spell selection remains manual. |

All four Batch 45 category files are registered alongside the aggregate package.

## Batch 46 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Fleet | Posts a reminder for the Speed increase and movement calculations; current statistics remain manual. |
| Feat | Shield Block | Posts a reminder for the reaction and shield Hardness reduction; hit and shield checks remain manual. |
| Feat | Toughness | Posts a reminder for maximum Hit Points and dying recovery benefits; death rules remain manual. |
| Feat | Canny Acumen | Posts a reminder for the selected proficiency and level-based upgrade; selection remains manual. |
| Spell | Fleet Step — Speed | Posts a reminder for the +10-foot status bonus to all Speeds; heightened values and duration remain manual. |
| Spell | Summon Animal — Summoned | Posts a reminder for the animal minion and duration; stat-block selection remains manual. |
| Spell | Translocate — Teleport | Posts a reminder for the 120-foot teleport; destination, line of effect, and action cost remain manual. |
| Spell | Clairvoyance — Scrying | Posts a reminder for the invisible sensor and remote observation; placement and detection remain manual. |
| Equipment | Elixir of Life | Posts a reminder for healing and heightened effects; consumption remains manual. |
| Equipment | Antidote | Posts a reminder for the poison-save item bonus and duration; application remains manual. |
| Equipment | Antiplague | Posts a reminder for the disease-save item bonus and duration; application remains manual. |
| Equipment | Potion of Invisibility | Posts a reminder for invisibility and duration; visibility adjudication remains manual. |
| Monster ability | Pack Attack | Posts a reminder for extra damage when ally-position requirements are met; positioning remains manual. |
| Monster ability | Push | Posts a reminder for forced movement after a qualifying hit; checks remain manual. |
| Monster ability | Pull | Posts a reminder for forced movement after a qualifying success; checks remain manual. |
| Monster ability | Devour | Posts a reminder for the required target condition and resulting effects; resolution remains manual. |

All four Batch 46 category files are registered alongside the aggregate package.

## Batch 47 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Quick Jump | Posts a reminder for combined jump movement and Athletics; distance and landing remain manual. |
| Feat | Titan Wrestler | Posts a reminder for larger-target Athletics maneuvers; target size and checks remain manual. |
| Feat | Ward Medic | Posts a reminder for multi-patient Treat Wounds; checks, healing, and immunity timing remain manual. |
| Feat | Recognize Spell | Posts a reminder for identifying a spell as cast; check and action cost remain manual. |
| Spell | Air Bubble — Breath | Posts a reminder for breathing in an unbreathable environment for 1 hour; target and duration remain manual. |
| Spell | Detect Poison — Detection | Posts a reminder to inspect for poison; detection result and range remain manual. |
| Spell | Knock — Unlock | Posts a reminder for unlocking or opening; counteract and lock details remain manual. |
| Spell | Guidance — Fortune | Posts a reminder for the +1 status bonus to one skill check; single-use timing remains manual. |
| Equipment | Healer's Tools | Posts a reminder for the Medicine item bonus and tool availability; application remains manual. |
| Equipment | Thieves' Tools | Posts a reminder for the Thievery item bonus and tool availability; application remains manual. |
| Equipment | Repair Kit | Posts a reminder for Crafting repair activity and kit components; usage remains manual. |
| Equipment | Climbing Kit | Posts a reminder for climbing bonuses and required gear; anchors and checks remain manual. |
| Monster ability | Knockdown | Posts a reminder for the qualifying attack, Trip attempt, and prone result; resolution remains manual. |
| Monster ability | Rend | Posts a reminder for multiple attacks hitting the same target and extra damage; qualification remains manual. |
| Monster ability | Sneak Attack | Posts a reminder for precision damage against qualifying targets; off-guard adjudication remains manual. |
| Monster ability | Stench | Posts a reminder for aura timing, saves, and sickened effects; range and resolution remain manual. |

All four Batch 47 category files are registered alongside the aggregate package.

## Batch 48 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Evangelize | Posts a reminder for the social action, Will save, and mental effect; language and deity requirements remain manual. |
| Feat | Scare to Death | Posts a reminder for Intimidation, Will save, and frightened/fleeing outcomes; resolution remains manual. |
| Feat | Quick Identification | Posts a reminder for reduced identification time; the relevant check and subject remain manual. |
| Feat | Student of the Canon | Posts a reminder for specialized Religion knowledge and Recall Knowledge benefits; application remains manual. |
| Feat | Terrifying Performance | Posts a reminder for group Demoralize through Performance; targets and immunity remain manual. |
| Spell | Alarm | Posts a reminder for ward area, password, and alarm conditions; duration and detection remain manual. |
| Spell | Hydraulic Push | Posts a reminder for attack, bludgeoning damage, and push distance; resolution remains manual. |
| Spell | Ignition | Posts a reminder for fire damage and melee/ranged mode; heightening and critical effects remain manual. |
| Spell | Soothe | Posts a reminder for healing, temporary Hit Points, and mental-damage interaction; dice and duration remain manual. |
| Equipment | Caltrops | Posts a reminder for the movement hazard and check; deployment and effect remain manual. |
| Equipment | Disguise Kit | Posts a reminder for the Deception item bonus and materials; application remains manual. |
| Equipment | Grappling Hook | Posts a reminder for attachment or climbing use and anchor tracking; resolution remains manual. |
| Equipment | Manacles | Posts a reminder for restrained state and escape options; application remains manual. |
| Monster ability | Freeze | Posts a reminder for motionless disguise and revealing event; adjudication remains manual. |
| Monster ability | Fling | Posts a reminder for grabbed-target throw, damage, and landing; resolution remains manual. |
| Monster ability | Attack of Opportunity | Posts a reminder for qualifying actions within reach; reaction timing remains manual. |
| Monster ability | Drain Life | Posts a reminder for hit-based damage, healing, saves, and cooldowns; resolution remains manual. |

All four Batch 48 category files are registered alongside the aggregate package.

## Batch 49 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Trick Magic Item | Posts a reminder for the qualifying skill check before item activation; item traits and result remain manual. |
| Feat | Streetwise | Posts a reminder for Society Recall Knowledge about local settlements and inhabitants; subject and DC remain manual. |
| Feat | Underwater Marauder | Posts a reminder for reduced underwater attack penalties and aquatic combat; weapon and circumstance details remain manual. |
| Feat | Hobnobber | Posts a reminder for reduced Gather Information time; contacts and information remain manual. |
| Spell | Acid Splash — Damage | Posts a reminder for acid and splash damage, targets, and heightening; resolution remains manual. |
| Spell | Darkvision — Senses | Posts a reminder to apply darkvision and track duration; application remains manual. |
| Spell | Locate — Detection | Posts a reminder for target, direction, range, and detection limitations; resolution remains manual. |
| Spell | Wall of Stone — Barrier | Posts a reminder for wall sections, dimensions, cover, and duration; sustaining and destruction remain manual. |
| Equipment | Smokestick | Posts a reminder for smoke area, concealment, and duration; placement remains manual. |
| Equipment | Silversheen | Posts a reminder for the coated weapon or ammunition and temporary silver properties; tracking remains manual. |
| Equipment | Everburning Torch | Posts a reminder for continuous light and scene illumination; placement remains manual. |
| Equipment | Potion of Flying | Posts a reminder for flight and duration; expiration handling remains manual. |
| Monster ability | Whirlwind | Posts a reminder for area, movement, displacement, damage, and conditions; resolution remains manual. |
| Monster ability | Death Knell | Posts a reminder for the near-death finishing effect and benefits; save remains manual. |
| Monster ability | Stunning Leap | Posts a reminder for leap, landing, save, and stun result; resolution remains manual. |
| Monster ability | Gore | Posts a reminder for charge or positioning requirements and rider effects; qualification remains manual. |

All four Batch 49 category files are registered alongside the aggregate package.

## Batch 50 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Assurance — Intimidation | Posts a reminder for the fixed Intimidation result; target, DC, and proficiency details remain manual. |
| Feat | Combat Assessment | Posts a reminder for the qualifying Strike and defense-identification check; resolution remains manual. |
| Feat | Multilingual | Posts a reminder for additional languages in communication and language-dependent actions; selections remain manual. |
| Feat | Quick Repair | Posts a reminder for reduced Repair time; Crafting check, item, and damage remain manual. |
| Spell | Air Walk — Movement | Posts a reminder for air-walking movement, height limits, and duration; application remains manual. |
| Spell | Animal Form — Polymorph | Posts a reminder for selected form, statistics, traits, and duration; transformation remains manual. |
| Spell | Create Water — Supply | Posts a reminder to create the spell's water volume; placement remains manual. |
| Spell | Illusory Object — Illusion | Posts a reminder for illusion placement, dimensions, duration, and interaction checks; resolution remains manual. |
| Spell | Teleport — Destination | Posts a reminder for destination, familiarity, arrival, and restrictions; adjudication remains manual. |
| Equipment | Wayfinder | Posts a reminder for activated effects and daily limits; resolution remains manual. |
| Equipment | Wand of Magic Missile | Posts a reminder for spell rank, heightened damage, and overcharge risk; tracking remains manual. |
| Equipment | Staff of Fire | Posts a reminder for eligible fire spells, rank, targets, charges, and preparation; use remains manual. |
| Equipment | Portable Ram | Posts a reminder for the Force Open bonus and Hardness interaction; resolution remains manual. |
| Monster ability | Knockback | Posts a reminder for forced movement and collision effects; resolution remains manual. |
| Monster ability | Incorporeal | Posts a reminder for movement, resistance, and interaction rules; application remains manual. |
| Monster ability | Paralyze | Posts a reminder for save, duration, and paralysis; resolution remains manual. |
| Monster ability | Truespeech | Posts a reminder for language-independent communication; requirements remain manual. |

All four Batch 50 category files are registered alongside the aggregate package.

## Batch 51 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Fast Recovery | Posts a reminder for improved dying or persistent-damage recovery; checks remain manual. |
| Feat | Ride | Posts a reminder for reduced-cost mounting or dismounting; mount and movement remain manual. |
| Feat | Untrained Improvisation | Posts a reminder for the increased untrained-skill baseline; skill and DC remain manual. |
| Feat | Cooperative Nature | Posts a reminder for the improved Aid bonus; the Aid check and outcome remain manual. |
| Spell | Mage Hand — Manipulation | Posts a reminder for range, manipulation limits, and duration; tracking remains manual. |
| Spell | Light — Illumination | Posts a reminder for light placement, bright/dim areas, and duration; placement remains manual. |
| Spell | Mending — Repair | Posts a reminder for eligible object, repair amount, and restrictions; resolution remains manual. |
| Spell | Floating Disk — Carrying | Posts a reminder for bulk capacity, following distance, and duration; placement remains manual. |
| Equipment | Alchemist's Tools | Posts a reminder for item bonus, Crafting task, materials, and activity; resolution remains manual. |
| Equipment | Crowbar | Posts a reminder for Force Open/Shift bonus and Hardness; resolution remains manual. |
| Equipment | Ladder | Posts a reminder for placement, reach, balance, and environmental limits; climbing remains manual. |
| Equipment | Writing Set | Posts a reminder for writing, copying, forgery, and supplies; resolution remains manual. |
| Equipment | Religious Symbol | Posts a reminder for deity, tradition, and divine requirements; application remains manual. |
| Monster ability | Magic Immunity | Posts a reminder for immunity to spells and magical effects; exceptions remain manual. |
| Monster ability | Reflective Carapace | Posts a reminder for spell reflection or redirection; triggering effect remains manual. |
| Monster ability | Discorporate | Posts a reminder for destruction, dispersal, and reformation conditions; tracking remains manual. |
| Monster ability | Soul Cage | Posts a reminder for captured souls and restoration or escape conditions; resolution remains manual. |

All four Batch 51 category files are registered alongside the aggregate package.

## Batch 52 additions

| Category | Content | Automation |
| --- | --- | --- |
| Feat | Assurance — Nature | Posts a reminder for the fixed Nature result; applicable modifiers remain manual. |
| Feat | Assurance — Religion | Posts a reminder for the fixed Religion result; applicable modifiers remain manual. |
| Feat | Assurance — Society | Posts a reminder for the fixed Society result; applicable modifiers remain manual. |
| Feat | Assurance — Diplomacy | Posts a reminder for the fixed Diplomacy result; applicable modifiers remain manual. |
| Spell | Command — Controlled | Posts a reminder for save, commanded behavior, and linguistic restrictions; resolution remains manual. |
| Spell | Fear — Frightened | Posts a reminder for save, frightened, duration, and recovery; application remains manual. |
| Spell | Haste — Speed | Posts a reminder for Speed, extra action, and duration; tracking remains manual. |
| Spell | Invisibility — Concealed | Posts a reminder for invisible, detection interactions, and duration; resolution remains manual. |
| Equipment | Bedroll | Posts a reminder for sleeping conditions, comfort, and exposure; adjudication remains manual. |
| Equipment | Bell | Posts a reminder for audible signal, range, and alarm effects; resolution remains manual. |
| Equipment | Fishing Tackle | Posts a reminder for Survival task, time, and environmental conditions; resolution remains manual. |
| Equipment | Tent | Posts a reminder for shelter, occupants, setup, and exposure; placement remains manual. |
| Monster ability | Split | Posts a reminder for triggering damage/conditions and resulting bodies; resolution remains manual. |
| Monster ability | Possession | Posts a reminder for control, actions, immunities, and escape; resolution remains manual. |
| Monster ability | Rejuvenation | Posts a reminder for defeat, return timing, and prevention; tracking remains manual. |
| Monster ability | Create Spawn | Posts a reminder for victim, transformation timing, and spawn restrictions; resolution remains manual. |

All four Batch 52 category files are registered alongside the aggregate package.

## Batch 53 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Adopted Ancestry; Shielded Stride; Nimble Crawl; Assurance — Arcana; Assurance — Occultism | Combat-start reminders for feat-specific options and fixed-result/proficiency use; positioning, prerequisites, and selection remain manual. |
| Spells | Burning Hands — Area Damage; Dispel Magic — Counteract; Longstrider — Speed; Slow — Slowed | Cast reminders for area saves/damage, counteract resolution, Speed bonus/duration, and slowed outcomes. |
| Equipment | Adventurer's Pack; Chalk; Flint and Steel; Rations; Waterskin | Use reminders for supplies/encumbrance, marking, ignition, nourishment, hydration, capacity, and environmental tracking. |
| Monster abilities | Blood Drain; Death Throes; Earth Glide; Petrifying Gaze | Combat-start reminders for attached targets, death effects, earth movement restrictions, gaze saves, and petrification stages. |

All four Batch 53 category files are registered alongside the aggregate package.

## Batch 54 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Acquired Tolerance; Adaptive Vision; Analyze Magic; Ambush Awareness; Absorb Spell | Combat-start reminders for poison/disease tolerance, sensory benefits, magical-effect analysis, ambush initiative benefits, and spell-reaction opportunities. |
| Spells | Bane — Status; Thunderstrike — Damage; Scorching Ray — Damage; Animal Messenger — Communication | Cast reminders for saves, status penalties, damage, extra rays, communication tracking, and durations. |
| Equipment | Compass; Rope; Signal Whistle; Torch; Shovel | Use reminders for navigation, rope configuration, audible signaling, light/burn tracking, and excavation. |
| Monster abilities | Draining Touch; Hypnotic Gaze; Confounding Gaze; Feed on Fear | Use reminders for drained effects, gaze saves and mental conditions, frightened targets, healing, frequency, and immunity rules. |

All four Batch 54 category files are registered alongside the aggregate package.

## Batch 55 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Disarming Block; Nimble Shield Hand; Quick Shield Block; Reflexive Shield; Shield Warden | Combat-start reminders for shield reactions, disarm follow-ups, manipulate actions, area protection, and adjacent-ally protection. |
| Spells | Heal — Healing or Damage; Bless — Status Bonus; Sanctuary — Hostile Action; Restoration — Condition Removal | Cast reminders for action-count variants, healing/undead damage, status emanations, hostile-action saves, counteract checks, and durations. |
| Equipment | Sack; Soap; Piton; Oil; Merchant's Scale | Use reminders for contents/Bulk, cleaning, anchoring, flammability or slippery terrain, and weighing/load limits. |
| Monster abilities | Nimble Escape; Powerful Charge; Quick Grab; Regurgitate | Combat-start reminders for reaction movement, charge prerequisites, free Grab, swallowed targets, and release effects. |

All four Batch 55 category files are registered alongside the aggregate package.

## Batch 56 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Shield Bash; Twin Parry; Exacting Strike; Certain Strike; Double Slice | Use reminders for qualifying weapon actions, shield raising, AC bonuses, special failure outcomes, multiple-attack-penalty timing, and combined damage. |
| Spells | Cleanse Affliction — Counteract; Oaken Resilience — Resistance; Protector Tree — Damage Prevention; Chromatic Armor — Resistance | Cast reminders for counteract checks, resistance and temporary HP, placed-ally protection, retaliation, damage selection, and duration tracking. |
| Equipment | Backpack; Bucket; Candle; Hammer; Hand Mirror | Use reminders for contents/Bulk, capacity, light and burn duration, repairs/Crafting, and reflected line of sight. |
| Monster abilities | Cleave; Death Roll; Greater Grab; Mimicry | Use reminders for conditional follow-up Strikes, grabbed prerequisites, free Grab, Escape tracking, and deception checks. |

All four Batch 56 category files are registered alongside the aggregate package.

## Batch 57 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Furious Focus; Incredible Aim; Sudden Leap; Whirlwind Strike; Assurance — Deception | Combat-start or use reminders for Power Attack MAP reduction, ranged-attack bonuses, Leap/Strike sequencing, multi-target Strikes, and fixed Deception results. |
| Spells | See Invisibility — Senses; Wall of Fire — Barrier; Water Walk — Movement; Fire Shield — Resistance | Cast reminders for invisibility perception, barrier placement/damage, liquid movement, resistance, retaliation, and duration tracking. |
| Equipment | Hourglass; Lock; Map; Mess Kit; Parchment | Use reminders for measured intervals, Open Lock/counteract, navigation, meal preparation, and written records or forgery. |
| Monster abilities | Retributive Strike; Hurl Debris; Focused Assault; Deadly Charge | Combat-start or use reminders for ally-protection reactions, debris attacks, two-Strike sequences, movement prerequisites, and riders. |

All four Batch 57 category files are registered alongside the aggregate package.

## Batch 58 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Combat Reflexes; Disrupt Prey; Reactive Pursuit; Clever Improviser; Dread Marshal Stance | Combat-start reminders for extra reactions, prey disruption, pursuit movement, untrained-skill improvisation, and stance aura effects. |
| Spells | Lightning Bolt — Area Damage; Cone of Cold — Area Damage; Divine Wrath — Alignment Damage; Enervation — Drained | Cast reminders for lines/cones, saves, damage, alignment targeting, frightened, drained, persistent damage, and heightening. |
| Equipment | Canteen; Blanket; Tinderbox; Whetstone | Use reminders for water capacity, warmth/shelter, ignition, maintenance, Crafting, and environmental conditions. |
| Monster abilities | Attack of Opportunity; Knockdown; Push; Swallow Whole; Trample | Combat-start reminders for reactions, Trip, forced movement, swallowing/escape, movement prerequisites, and saves. |

All four Batch 58 category files are registered alongside the aggregate package.

## Batch 59 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Aggressive Block; Brutish Shove; Combat Grab; Dueling Riposte; Intimidating Strike | Combat-start/use reminders for Shield Block reactions, shove, Grab, riposte, frightened outcomes, and action/weapon restrictions. |
| Spells | Heroism — Status Bonus; Disappearance — Invisibility; Dimensional Anchor — Movement Restriction; Air Walk — Movement; Earthbind — Falling | Cast reminders for status bonuses, invisibility, teleportation restriction, air movement, forced descent, saves, and durations. |
| Equipment | Magnifying Glass; Ten-Foot Pole; Musical Instrument; Spyglass | Use reminders for inspection bonuses, probing reach, performance checks, magnification, and visual limitations. |
| Monster abilities | Constrict; Web; Regeneration; Frightful Presence; Engulf | Combat-start reminders for grabbed damage, web restraint/escape, regeneration disabling conditions, fear aura, engulfing, and internal-space rules. |

All four Batch 59 category files are registered alongside the aggregate package.

## Batch 60 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Lunge; Vicious Swing; Dueling Dance; One for All; Positioning Assault | Use reminders for temporary reach, extra weapon damage, stance requirements, Aid bonuses, and positioning or forced movement. |
| Spells | Blindness — Blinded; Befuddle — Stupefied; Gust of Wind — Forced Movement; Phantom Pain — Persistent Mental Damage; Spider Climb — Climb Speed | Cast reminders for save outcomes, blinded/dazzled, stupefied, forced movement, prone, persistent mental damage, climb movement, and durations. |
| Equipment | Artisan's Tools; Alchemist's Lab; Crampons; Block and Tackle | Use reminders for Crafting bonuses and requirements, alchemical setup, icy-terrain movement, Athletics, hauling, anchoring, and load limits. |
| Monster abilities | Arrest a Fall; Catch Rock; Jet; No Breath; Swarm Mind | Combat-start reminders for reaction prerequisites, falling, thrown-rock interception, movement, aquatic or inhaled hazards, and mind-affecting limitations. |

All four Batch 60 category files are registered alongside the aggregate package.

## Batch 61 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Opportune Riposte; Confident Finisher; Perfect Finisher; Counterspell; Disruptive Stance | Use reminders for reaction attacks, finisher restrictions and outcomes, counteract checks, and stance disruption triggers. |
| Spells | Vampiric Touch — Void Damage and Temporary HP; Incendiary Fog — Persistent Fire; Mud Pit — Difficult Terrain and Immobilization; Bind Undead — Undead Control; Crashing Wave — Forced Movement | Cast reminders for spell attacks, temporary HP, drained, persistent fire, area effects, saves, immobilization, control, forced movement, prone, and duration. |
| Equipment | Snowshoes; Swim Fins; Wheelbarrow; Telescope | Use reminders for snow and aquatic movement, Athletics, cargo capacity, Bulk, terrain, visual observation, range, and Perception. |
| Monster abilities | Hover; Golem Antimagic; Form Up; Shield Block; Mimic Object | Combat-start reminders for hovering, golem magic interactions, troop formation, shield mitigation, disguise, and recognition checks. |

All four Batch 61 category files are registered alongside the aggregate package.

## Batch 62 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Swipe; Snagging Strike; Point-Blank Shot; Overpowering Charge; Furious Finish | Use reminders for multiple Strikes, off-guard, stance restrictions, forced movement, extra damage, and post-use limitations. |
| Spells | Web — Area and Immobilization; Faerie Fire — Revealed Creatures; Wall of Ice — Barrier; Repulsion — Movement Restriction; Phantasmal Calamity — Mental Damage | Cast reminders for area placement, immobilization, concealment, invisibility, barriers, movement restrictions, mental damage, frightened, and duration. |
| Equipment | Lantern; Sunrod; Holy Water; Net | Use reminders for light, fuel, duration, environmental interactions, eligible targets, consumable use, entanglement, and escape. |
| Monster abilities | Blood Siphon; Avoid the Swat; Defensive Needle; Reactive Lash; Fast Swallow | Combat-start reminders for drained and temporary HP riders, defensive reactions, critical-failure reactions, movement-triggered attacks, and rapid swallowing. |

All four Batch 62 category files are registered alongside the aggregate package.

## Batch 63 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Hunted Shot; Twin Takedown; Running Reload; Distracting Shot; Double Shot | Use reminders for hunted prey, paired or multiple Strikes, reload sequencing, ranged riders, and target restrictions. |
| Spells | Regenerate — Regeneration; Maze — Extradimensional Removal; Entangle — Immobilization; Daylight — Bright Light; Wall of Thorns — Barrier | Cast reminders for regeneration, healing, extradimensional removal, saves, immobilization, light, barriers, damage, and durations. |
| Equipment | Blank Book; Cooking Pot; Religious Text; Ball Bearings | Use reminders for writing, cooking, religious study, deployment, balance, movement, and terrain consequences. |
| Monster abilities | Blood Frenzy; Reactive Flare; Squirming Embrace; Terrifying Howl; Stunning Roar | Combat-start reminders for wounded-target riders, reaction areas and saves, restraint, fear, stunned outcomes, immunity, and recharge limits. |

All four Batch 63 category files are registered alongside the aggregate package.

## Batch 64 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Stand Still; Tactical Assessment; Guardian's Deflection; Disarming Stance; Crushing Grab | Use reminders for movement reactions, Recall Knowledge follow-ups, ally protection, stance restrictions, disarm, grab, and damage riders. |
| Spells | Disrupt Undead — Save and Damage; Summon Undead — Minion; Remove Disease — Counteract; Forbidding Ward — Protective Bonus; True Seeing — Precise Vision | Cast reminders for saves, spirit damage, summons, minions, counteract checks, wards, visual perception, and durations. |
| Equipment | Grappling Hook; Manacles; Disguise Kit; Healer's Tools | Use reminders for anchoring, climbing, restraint, locks, Escape, Deception, Medicine, healing, and preparation requirements. |
| Monster abilities | Deny Advantage; Deathless; Vengeful Strike; Reactive Pursuit; Disorienting Blow | Combat-start reminders for off-guard immunity, survival at 0 HP, reaction Strikes, pursuit movement, saves, conditions, and damage riders. |

All four Batch 64 category files are registered alongside the aggregate package.

## Batch 65 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Dual-Handed Assault; Gang Up; Ricochet Stance; Bashing Charge; Aiding Assault | Use reminders for two-handed attacks, flanking/off-guard qualification, ricochet stance benefits, charge riders, and Aid follow-ups. |
| Spells | Shadow Siphon — Damage Reduction; Protection — Defensive Bonus; Breath of Life — Reaction Healing; Earthquake — Area Disruption; Insect Plague — Area and Persistent Damage | Cast reminders for reaction damage reduction, defensive bonuses, emergency healing, area disruption, saves, persistent effects, and durations. |
| Equipment | Battering Ram; Bullseye Lantern; Snare Kit; Firework | Use reminders for Force Open, light cones, fuel, Crafting, snare setup, launch/placement, visibility, and consumable use. |
| Monster abilities | Aura of Courage; Aura of Despair; Swat; Stunning Blow; Wing Buffet | Combat-start reminders for auras, fear protection/penalties, reaction attacks, stun, adjacent-target saves, forced movement, prone, and recharge limits. |

All four Batch 65 category files are registered alongside the aggregate package.

## Batch 66 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Flurry of Blows; Ki Strike; One-Inch Punch | Use reminders for paired unarmed Strikes, ki spell selection, damage or trait benefits, Fortitude saves, and action or stance restrictions. |
| Spells | Blood Vendetta — Bleeding Retaliation; Boneshaker — Forced Movement; Heaving Earth — Tremor and Push; Chrysopoetic Curse — Shunted Future | Cast reminders for reaction triggers, bleed damage, saves, action-dependent effects, forced movement, prone, temporary removal, recovery timing, and sustained or duration limits. |
| Equipment | Alchemist's Toolkit; Everlasting Adhesive; Thieves' Toolkit (Infiltrator) | Use reminders for required tools and Crafting, workspace and preparation, adhesive application and removal, Thievery bonuses, and special toolkit benefits. |
| Monster abilities | Constrict; Engulf; Frightful Presence; Greater Constrict | Combat-start reminders for Grabbed or Restrained targets, saves, recurring damage, engulfing and Escape rules, fear auras, unconsciousness, and temporary immunity. |

All four Batch 66 category files are registered alongside the aggregate package.

## Batch 67 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Felling Strike; Combat Assessment; Whirling Throw | Use reminders for flying-target fall and flight restrictions, follow-up Recall Knowledge, Grabbed or Restrained checks, Athletics versus Fortitude DC, forced movement, damage, and prone outcomes. |
| Spells | Containment — Force Field; Spell Immunity — Named Spell Ward; Helpful Scribe — Magical Transcription | Cast reminders for Reflex saves, force-field Hardness and Hit Points, critical or precision immunity, named spell wards, counteracting, sustained copying, transcription rates, and language limits. |
| Equipment | Healer's Toolkit; Fingerprint Kit; Firearm Cleaning Kit; Bane Oil | Use reminders for Medicine item bonuses, evidence gathering, Investigation or Perception checks, firearm cleaning, maintenance, creature-type selection, and temporary bane effects. |
| Monster abilities | Blood Siphon; Consume Fear; Drain Soul | Combat-start reminders for bleed-triggered healing, frightened-condition reactions, temporary Hit Points, dying or helpless targets, death effects, doomed, and drained outcomes. |

All four Batch 67 category files are registered alongside the aggregate package.

## Batch 68 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Shared Stratagem; Known Weaknesses; Diverse Lore | Use reminders for qualifying attacks or Recall Knowledge checks, information-sharing benefits, broader Lore checks, circumstance penalties, and timing or range requirements. |
| Spells | Contingency; Mind Blank; Moment of Renewal; Prismatic Wall | Cast reminders for linked conditions and stored spells, mental protection, magical detection, healing, temporary Hit Points, condition removal, prismatic layers, saves, damage, and countermeasures. |
| Equipment | Alchemical Crossbow; Portable Hole; Grappling Gun; Shadow Signet | Use reminders for alchemical ammunition, splash effects, reloads, extradimensional placement, grappling anchors and ropes, illusion benefits, and activation limitations. |
| Monster abilities | Ferocity; Distraction; Pounce | Combat-start reminders for 0-HP reactions, recovery and immunity, area distraction saves and conditions, and Leap or Stride movement followed by qualifying Strikes. |

All four Batch 68 category files are registered alongside the aggregate package.

## Batch 69 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Power Attack; Exacting Strike; Certain Strike; Sudden Charge; Double Slice | Use reminders for extra damage dice, failure follow-up attacks, failure damage, movement sequences, multiple-attack penalties, different weapons, and combined resistance or weakness handling. |
| Spells | Time Jump; Unfathomable Song; Safe Passage; Ocular Overload | Cast reminders for temporal movement, legal destinations, auditory or linguistic targeting, area saves, protected routes, hazards, visual impairment, durations, and heightened effects. |
| Equipment | Clockwork Chirper; Schematic Scanner; Pathfinder's Pouch; Hexing Jar; Jolt Coil | Use reminders for trigger squares, audible following devices, schematic and Crafting interactions, magical storage, curse containment, electrical effects, and activation limits. |
| Monster abilities | Change Formation; Coven; At-Will Spells; Constant Spells; Troop Defenses | Combat-start reminders for troop formations, coven membership and cooperative casting, unlimited spell use, constant effects, segment thresholds, area targeting, and dispersal. |

All four Batch 69 category files are registered alongside the aggregate package.

## Batch 70 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Raging Intimidation; Spring Attack; Quick Reversal; Swift Sneak; Feather Step | Use reminders for rage and concentrate exceptions, movement-and-Strike sequences, adjacent targets, full-Speed Sneak, detection states, and difficult-terrain movement. |
| Spells | Wall of Force; Reverse Gravity; Clone; Ethereal Jaunt; Shapechange | Cast reminders for placement and dimensions, Hardness and Hit Points, altered gravity, falling and impacts, maturation and soul transfer, ethereal restrictions, forms, and durations. |
| Equipment | Olfactory Stimulators; Splendid Floodlight; Deep Pockets; Sneaky Key | Use reminders for scent detection, bright-light areas, power or duration, extradimensional capacity and Bulk, Thievery requirements, and lock interactions. |
| Monster abilities | Aquatic Ambush; Disease; Fast Healing; Improved Push; Darkvision | Combat-start reminders for aquatic concealment, disease onset and stages, recurring healing, enhanced forced movement, darkness vision, and suppressing effects. |

All four Batch 70 category files are registered alongside the aggregate package.

## Batch 71 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Lunge; Kip Up; Quick Draw; Positioning Assault; Wary Disarmament | Use reminders for extended reach, Stand and Prone removal, draw-and-Strike activities, forced movement, Disarm checks, and defensive failure protection. |
| Spells | Wish; Discern Location; Prying Eye; Dream Council | Cast reminders for exceptional requested effects, detection scope, invisible sensors, routes and communication, mental targeting, participant limits, and duration. |
| Equipment | Chime of Opening; Air Bladder; Aether Appendage; Alchemist's Haversack; Amulet of the Third Eye | Use reminders for Thievery checks and activation limits, air supply, floating movement, incorporeal held-item use, infused reagents, expiring batches, True Seeing, and daily activation. |
| Monster abilities | Swarm Mind; Hold Breath; Compression; Freeze | Combat-start reminders for mental immunities, air timers and suffocation, narrow-space movement, inactivity, disguises, and interruption conditions. |

All four Batch 71 category files are registered alongside the aggregate package.

The remaining review is organized across the PF2e system's `feats`, `spells`, `equipment`, and bestiary ability content. Candidates should be added when the rules expose a reliable event, roll option, outcome, target, and duration that Trigger Engine can represent without silently changing the rule.

Priority candidates are effects that currently require manual condition application, automatic removal, or outcome-dependent duration changes. Effects that are already handled by PF2e rule elements or the installed Trigger Trove should be recorded as covered and not duplicated here.

Some spells have separable effects whose cleanup depends on a persistent-damage recovery check. Sticky Fire and Blinding Foam currently automate the persistent-damage component; their linked enfeebled/blinded effects remain candidates for a later effect-source cleanup graph rather than being applied without an accurate removal condition.

Devil's Howl also causes the target to flee while it remains in the aura on a critical failure. The frightened value is automated; the aura-bound fleeing state remains a documented follow-up.

Petrifying Gaze uses a slowed-condition check to distinguish the first failed save from the later failure that causes petrification.

Frost’s critical-hit slow is handled from the subsequent saving-throw event, so the target is slowed only after failing the required save. Fateful Condemnation’s initial slowed effect is automated, while its later aura effects remain outside this graph.

Antagonize’s additional rule that frightened cannot reduce below 1 until the target acts hostile is not represented by the condition increase and remains a follow-up effect-state candidate.

Touch of Obedience’s one-hour temporary immunity is not represented; its save-dependent stupefied effects and forced-prone critical-failure rider are automated.

Mariner’s Curse’s sickened floor and its conditional slowed effect while the target is on open water remain follow-up state rules; the save-dependent sickened value is automated.

Mercurial Stride’s poison damage remains part of the spell’s normal damage workflow; this trigger adds its save-dependent sickened value.

Sculpt Sound’s sound-alteration effects and optional object-target behavior remain outside this condition graph; its critical-failure stupefied effect is automated.

Steal Breath’s curse duration and recovery remain native/manual; its save-dependent enfeebled, fatigued, and critical-failure unconscious riders are automated.

Vargouille’s Shriek’s critical-failure recurring saves and indefinite paralysis are not represented; the initial failed-save paralysis is limited to the immediate round to avoid creating a condition that cannot clean itself up.

Shameful Touch’s critical-failure requirement to Strike itself is not represented; its sickened and stunned conditions are split into separate graphs so both effects apply reliably.

Siren Song’s fascination duration, sustain behavior, and “stupefied as long as fascinated” relationship remain follow-up state rules; the save-dependent stupefied values are automated for the initial round.

Dizzying Colors’ three condition branches are split into separate graphs so the full standard-condition rider applies without relying on graph fan-out.

Stunning Surprise’s reaction-prevention rider and 24-hour temporary immunity are not represented; its stunned and unconscious condition outcomes are automated.

Salt Wound’s once-per-day reaction gate remains with the feat; its save-dependent sickened and persistent acid damage outcomes are automated.

The Mask of the Cursed Eye’s spell-disruption, targeting information, and temporary immunity are not represented; its sickened and dazzled conditions are automated.

Dreaming Round’s repeated end-of-turn saves, escalating/de-escalating slowed value, and eventual sleep are not represented; the initial slowed and fatigued outcomes are automated.

You’re Mine’s heightened repeat-save control and failure action-choice details are not represented; its save-dependent stunned 1 and base critical-failure controlled results are automated.

Stasis’s failure and critical-failure time-stop states, invulnerability, and end-of-turn escape saves are not represented; the success stunned 1 outcome is automated.

Dread Gaze’s dying-target unconscious/death sequence is not represented; its frightened and slowed save outcomes are automated.

Jangle the Chain’s “then” sequencing is represented as separate condition graphs; the save-dependent sickened and stunned values are automated.

Astral Labyrinth’s teleport placement and mental-alert effects are not represented; its stunned save outcomes are automated.

Never Mind’s unlimited-duration stupefied 4 failure and permanent critical-failure faculty loss are not represented; the successful-save stupefied 2 branch is automated.

Heart’s Desire’s reaction-check penalty and critical-failure difficult-terrain rider are not represented; its save-dependent stupefied 2 durations are automated.

Aberrant Whispers’ temporary immunity, emanation sizing, and targeting remain native/manual; its failure stupefied 2 and critical-failure confused outcomes are automated.

Slow’s slowed values and durations are fully represented by the outcome graph.

Cursed Metamorphosis’s transformation branches remain outside the graph; its successful-save sickened 1 result is automated.

Enfeeble’s enfeebled values and durations are fully represented by the outcome graph.

Pressure Point Attack’s critical-failure speed penalty and manipulate-action flat-check rider are not represented; its enfeebled 2 duration ladder is automated.

Feast of Ashes’ failure/critical-failure hunger curse and recurring daily damage are not represented; the successful-save fatigued result is automated.

Cup of Dust’s failure/critical-failure thirst curse and recurring hourly damage are not represented; the successful-save fatigued result is automated.

Disrupt Undead’s normal damage is handled by the spell system; the critical-failure enfeebled 1 rider is automated for 1 round.

Synaptic Pulse’s stunned outcome ladder is automated; its normal mental-damage handling remains with the spell system.

Roaring Applause’s no-reactions, manipulate, sustained fascination, and sustained-duration state are not represented; its failed-save slowed 1 rider is automated for the initial round.

Broken Mindscape’s mental-action exception and follow-up incapacitation handling are not represented; its stunned and paralyzed save outcomes are automated.

Confusion’s repeated end-of-turn save, flat-check recovery, and the critical-failure no-save rider are not represented; its initial stunned and confused outcomes are automated.

Paralyze’s end-of-turn Will saves that reduce or end the duration are not represented; its initial stunned and paralyzed durations are automated.

Synesthesia’s concealed senses, concentrate flat checks, and speed penalty are not represented; its clumsy and stunned conditions are automated.

Hideous Laughter’s reaction lock, critical-failure action lock, and sustained termination are not represented; its slowed and prone conditions are automated.

Dazing Blow’s grabbed prerequisite and attack damage are handled by the originating feat; its post-hit stunned save ladder is automated.

Sleeper Hold’s grabbed/restrained prerequisite and Athletics check are handled by the originating action; its clumsy and unconscious outcomes are automated.

Quivering Palm’s damage, temporary immunity, and critical-failure death effect are not represented; its stunned save outcomes are automated.

Terrifying Howl’s area selection and temporary immunity are not represented; its Demoralize frightened outcomes are automated.

Dread Ampoule’s damage and splash damage are handled by the item system; its hit-dependent frightened outcome is automated.

Nightmare Rune’s extra mental damage remains native; its critical-hit stupefied 1 rider and conditional frightened 2 rider against already-stupefied targets are automated.

Terrifying Touch’s damage and fear counteract interaction are not represented; its non-frightened gate, frightened 2 outcome, and critical-failure stunned 4 rider are automated.

Owlbear Egg’s one-minute temporary immunity and area targeting are not represented; its frightened ladder and critical-failure fleeing rider are automated.

Ghost Ampoule’s damage, emanation targeting, and temporary creature state are handled outside the graph; its failure frightened 2/3 outcomes are automated.

Mukradi Jar’s emanation targeting and one-minute temporary immunity are not represented; its failure frightened 2 and critical-failure frightened 3 outcomes are automated.

Terrifying Touch’s critical-failure frightened 2 rider is automated in a companion trigger so it can coexist with the critical-failure stunned 4 rider.

Slime Spit’s poison damage and Interact-based eye-cleaning are not represented; its save-dependent dazzled and critical-failure blinded riders are automated for a one-round approximation.

Blinding Sulfur’s Strike damage and the source-specific one-minute critical-failure duration are not represented; its failed-save blinded rider is automated.

Stunning Display’s 1-minute temporary immunity is not represented; its Will-save stunned 1/4/8 ladder is automated.

Shadow Scream’s darkness, mental damage, sustain behavior, and 24-hour temporary immunity are not represented; its one-round deafened and confused save riders are automated.

Tick Tock Tick Tock’s aura timing is delegated to the originating event; its failed-save slowed 1 rider and critical-failure slowed 2 value are automated, while critical-failure end-of-next-turn cleanup remains outside the graph.

Primordial Roar’s area targeting and 10-minute temporary immunity are not represented; its frightened 1/2/3 Will-save ladder is automated.

Noxious Breath’s cone damage and area targeting are handled by the originating ability; its failed-save sickened 1 and critical-failure sickened 2 outcomes are automated.

Shadow Breath’s cone, damage, recharge, and outcome-specific durations are not represented; its enfeebled 1/2 and slowed 1/2 save values are automated.

Scream in Agony’s mental damage, aura restriction, recharge, and critical-hit recharge are not represented; its failed-save sickened 1 and critical-failure sickened 2 riders are automated.

Evil Eye’s sustained duration, sight requirement, and rule that sickened cannot reduce below 1 are not represented; its failed-save sickened 1 and critical-failure sickened 2 values are automated.

Grisly Growths’ piercing damage, secondary-effect immunity, area targeting, and one-round growth duration are not represented; its secondary Will-save sickened 1/2 outcomes are automated without matching the initial Fortitude damage save.

Gasping Marsh’s poison damage, persistent poison, sustained area movement, and temporary immunity are not represented; its failed-save sickened 1 and critical-failure sickened 2 outcomes are automated.

Blindpepper Tube’s Interact setup, one-round dazzled/blinded timing, and sickened-based dazzled cleanup are not fully represented; its blinded, dazzled, and critical-failure sickened riders are automated.

Squid Ink Sac’s invisibility interaction, ink cleanup, and alternative underwater cloud behavior are not represented; its failed-save blinded 1 round and critical-failure blinded 10 minutes outcomes are automated.

Tentacle Cannon’s grapple, ink cleanup, and activation frequency are not represented; its failed/critical-failure ink-spray blinded and dazzled riders are automated.

Induction Word’s spoken trigger and end-of-next-turn immunity are not represented; its failed-save stunned 1 and critical-failure stunned 3 outcomes are automated.

Radiate Glory’s damage, aura targeting, recharge, and 24-hour immunity are not represented; its success dazzled and failure blinded riders are automated.

Thunder Clap’s cone damage and recharge are not represented; its critical-failure deafened 1-minute rider is automated.

Black Powder Flash’s powder setup, cone targeting, and Interact eye-rubbing cleanup are not represented; its dazzled duration ladder and failed-save blinded rider are automated.

Dragon Roar’s stance requirement, frightened floor while adjacent, damage bonus, recharge, and temporary immunity are not represented; its failed-save frightened 1 and critical-failure frightened 2 outcomes are automated.

Momentous Charge’s movement, stance requirement, and push effect are handled by the originating feat; its critical-success stunned 1 Strike rider is automated.

Mountain Quake’s damage, ground targeting, stance requirement, and recharge are not represented; its failed-save prone rider is automated.

Whirling in the Summer Storm’s Step, Shove sequence, and attack-duration details are not represented; its failed-save off-guard rider is automated for one round.

Doleful Tolling’s initiative timing, area/hearing filter, and critical-failure slowed cleanup are not represented; its failed-save slowed 1 value and critical-failure slowed 2 value are automated.

Stutter Time’s strike prerequisite, quickened critical-success benefit, time-stop state, and delayed stunned application are not represented; its failed-save stunned 3 rider is automated.

Wild Gaze’s aura timing, visual targeting, and Focus Gaze’s source-specific paralysis interaction are not represented; its failed-save slowed 1 and critical-failure slowed 2 values are automated.

Forceful Focus’s prior-round magic-missile requirement, force-damage filter, and one-hour recharge are not represented; its failed-save stunned 1 and critical-failure stunned 3 riders are automated.

Brutal Gore’s attack damage is handled by the originating Strike; its critical-hit stunned 1 rider is automated.

Paralyzing Touch’s Strike damage and apparent-death presentation are not represented; its failed-save one-round paralysis, critical-failure prone rider, and permanent critical-failure paralysis are automated.

Paralyzing Gas’s cone, damage, and recharge are not represented; its failed-save one-round and critical-failure three-round paralysis are automated.

Scarecrow’s Leer’s aura floor, visual targeting, and 24-hour immunity are not represented; its frightened 1/2/3 ladder and one-round fascinated failure rider are automated.

Trollhound Pick’s Strike prerequisite, food-based enfeebled removal, and critical-failure food reduction are not represented; its one-round off-guard and enfeebled 1/2 save riders are automated.

Frightening Display’s area targeting, temporary immunity, and source-specific off-guard rider are not represented; its failed-save frightened 1 and critical-failure frightened 2 outcomes are automated.

Pheromone Flare’s animal designation, attraction movement, repeated saves, and 24-hour immunity are not represented; its failed-save fascinated 10-minute and critical-failure fascinated 1-hour riders are automated.

Mesmerizing Performance’s successful-Performance prerequisite, next-action fascination timing, one-hour immunity, and critical-failure reaction restriction are not represented; its fascinated save rider is automated for one round.

## Batch 72 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Battle Medicine; Quick Climb; Steady Balance; Terrain Expertise | Action reminders for skill checks, healing, immunity, terrain selection, movement, and defensive benefits. |
| Spells | Plane Shift; Dimension Door; Imprisonment; Miracle | Cast reminders for destination and targeting legality, teleportation limits, saves, counteracting, containment, adjudication, and components. |
| Equipment | Potion Patch; Ring of the Ram; Slippers of Spider Climbing; Robe of Eyes | Activation reminders for stored consumables, force attacks, daily limits, climbing restrictions, vision benefits, durations, and usage tracking. |
| Monster abilities | Shocking Douse; Enveloping Kimono; Energy Absorption | Combatant-gated reminders for reactions, counteracting, damage and saves, prerequisite Strikes, Grabbed outcomes, and energy immunity or absorption. |

All four Batch 72 category files are registered alongside the aggregate package.

## Batch 73 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Dual-Weapon Blitz; Rising Hurricane; Hydraulic Maneuvers; Flashing Shield; Wind Pillow | Action and combatant-gated reminders for qualifying weapons, movement, Athletics follow-ups, area saves, forced movement, Shield Block reactions, fall reduction, and granted benefits. |
| Spells | Feather Fall; Lock; Private Sanctum; Spellwrack | Cast reminders for reaction timing, falling targets, modified lock DCs, warded areas, detection and teleportation restrictions, counteracting, and ongoing spell triggers. |
| Equipment | Brooch of Shielding; Lifting Belt; Horn of Rust; Wand of Shocking Haze; Cloak of Swiftness | Activation reminders for magic-missile protection, charges, Strength and Bulk, rusting targets, stored spells, movement benefits, durations, and usage limits. |
| Monster abilities | Consume Soul; Discorporate; Explosive End; Magic Hunger; Lightning Rod | Combatant-gated reminders for death triggers, saves, soul effects, re-forming, emanation damage, magical senses, counteracting, and redirection. |

All four Batch 73 category files are registered alongside the aggregate package.

## Batch 74 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Wall Jump; Catfolk Dance; Nimble Roll; Risky Surgery; Defensive Roll | Action reminders for movement and skill checks, reaction timing, triggering damage, healing, additional damage, damage reduction, and usage restrictions. |
| Spells | Noise Blast; Stinking Cloud; Vibrant Pattern; One with Stone | Cast reminders for area damage, saves, deafened and sickened effects, concealment, visual conditions, transformation, sustain, duration, and ending conditions. |
| Equipment | Bracelet of Dashing; Gloves of Storing; Goz Mask; Jade Cat | Activation reminders for Speed bonuses, extradimensional storage, hazard protection, figurine transformation, commands, durations, and frequency limits. |
| Monster abilities | Consume Flesh; Aura of Rot; Drain Qi; Drain Thoughts | Action reminders for corpse requirements, aura saves, disease or decay, vitality drain, healing, mental effects, penalties, immunity, and recovery. |

All four Batch 74 category files are registered alongside the aggregate package.

## Batch 75 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Confabulator; Goblin Scuttle; Killing Finish; Resounding Bravery | Action reminders for rerolls, reaction movement, qualifying Strikes, fear triggers, bonuses, durations, and frequency limits. |
| Spells | Ghost Sound; Speak with Animals; Translate; Talking Corpse | Cast reminders for illusions, disbelief, animal communication, language translation, corpse memories, targets, durations, and restrictions. |
| Equipment | Ring of Lies; Figurine of the Onyx Dog; Necklace of Adaptation; Dust of Appearance; Folding Boat | Activation reminders for deception benefits, transformations, environmental protection, revealing effects, consumed items, vehicle form, capacity, and reversion. |
| Monster abilities | Acid Spit; Amnesia Venom; Apocalypse Breath; Avalanche Breath | Action reminders for attacks, acid and persistent damage, poison stages, memory loss, breath areas, saves, forced movement, conditions, and recharge. |

All four Batch 75 category files are registered alongside the aggregate package.

## Batch 76 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Read Lips; Sign Language; Cloud Step; Springing Leaper | Combatant-gated and action reminders for speech reading, sign communication, visibility, language, movement, concealment, jumping, landing, and terrain requirements. |
| Spells | Teleportation Circle; Scrying Ripples; Dream Council; Dreamer's Call | Cast reminders for fixed destinations, range and space limits, remote connections, willing sleepers, saves, fascination, compelled actions, sustain, and duration. |
| Equipment | Feather Token—Tree; Feather Token—Swan Boat; Magic Carpet; Wand of Web | Activation reminders for growth, placement, transformations, vehicle and flight movement, capacity, stored spells, saves, immobilization, sustain, and usage state. |
| Monster abilities | Frigid Flurry; Beheading Buzz Saw; Qxal's Blood Siphon | Action reminders for areas, cold damage, attacks, critical and beheading effects, blood drain, persistent damage, healing, temporary Hit Points, and frequency. |

All four Batch 76 category files are registered alongside the aggregate package.

## Batch 77 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Fleet; Assurance; Diehard; Toughness; Quick Repair | Combatant-gated and action reminders for Speed, fixed proficiency checks, dying thresholds, Hit Points, recovery, Repair timing, tools, and prerequisites. |
| Spells | Wall of Stone; Hallucinatory Terrain; Time Jump; Reverse Gravity | Cast reminders for placement, Hardness, illusion investigation, temporal movement, reversed gravity, sustain, duration, and destruction or ending conditions. |
| Equipment | Portable Ram; Staff of Fire; Crystal Ball; Cloak of the Bat | Activation reminders for force-open checks, stored spell casting and charges, scrying, counteracting, flight or gliding, darkness, and durations. |
| Monster abilities | Tail Sweep; Stygian Inquisitor; Sadistic Strike; Blood Drain | Action reminders for cones, saves, Prone, Zone of Truth questions, refusal damage, condition-gated Strike damage, Grabbed, temporary Hit Points, and Drained. |

All four Batch 77 category files are registered alongside the aggregate package.

## Batch 78 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Bon Mot; Battle Prayer; Group Coercion; Lengthy Diversion | Action reminders for Diplomacy, Religion, Intimidation, Deception, Will DCs, alignment and language requirements, blessings, curses, coercion, diversions, penalties, and immunity. |
| Spells | Aerial Form; Resilient Sphere; Repulsion; Spiritual Epidemic | Cast reminders for temporary forms, movement modes, Reflex containment, force protection, approach restrictions, repeated saves, condition progression, sustain, and duration. |
| Equipment | Bracers of Missile Deflection; Cloak of Elvenkind; Hand of the Mage; Ring of Energy Resistance | Activation reminders for ranged deflection, concealment, Mage Hand, energy selection, resistance, durations, and frequencies. |
| Monster abilities | Pounce; Swallow Whole; Death Burst; Web Trap; Burning Aura | Action and combatant-gated reminders for movement prerequisites, Strikes, Grabbed and Escape, internal damage, death bursts, web immobilization, area saves, fire damage, and aura immunity. |

All four Batch 78 category files are registered alongside the aggregate package.

## Batch 79 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Dueling Parry; Reactive Shield; Multilingual; Recognize Spell | Action reminders for weapon and free-hand requirements, AC bonuses, reaction timing, shield raising, language selection, and spell-identification checks. |
| Spells | Magic Mouth; Illusory Scene; Telepathic Demand; Planar Tether | Cast reminders for implanted triggers, sensory illusions, disbelief, telepathic commands, Will saves, planar restrictions, counteracting, and duration. |
| Equipment | Dust of Darkness; Wand of Invisibility; Amulet of the Drunkard; Ring of Swimming | Activation reminders for darkness, light and vision, invisibility, stored spell usage, alcohol interactions, condition reduction, aquatic movement, and frequency. |
| Monster abilities | Quill Volley; Whirlwind; Screech; Shock Wave; Swarming Assault | Action reminders for areas, attacks and saves, persistent quills, forced movement, sonic conditions, emanations, swarm damage, and usage limits. |

All four Batch 79 category files are registered alongside the aggregate package.

## Batch 80 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Powerful Sneak; Doublespeak; Assisting Shot; Assurance—Thievery | Action reminders for Sneak, Stealth, Deception, coded communication, ranged Strikes, allied attack bonuses, and fixed-proficiency checks. |
| Spells | Silence; Heroism; See the Unseen; Water Breathing | Cast reminders for sound suppression, status bonuses, invisible-creature perception, underwater breathing, targets, sustain, duration, and limitations. |
| Equipment | Deck of Illusions; Harp of Charming; Mirror of Life Trapping; Rope of Climbing | Activation reminders for card illusions, auditory enchantment, saves, Fascinated, visual imprisonment, climbing routes, loads, duration, and consumed uses. |
| Monster abilities | False Appearance; Slime Trail; Constriction | Combatant or action reminders for object-like concealment, movement-triggered ending, trail hazards, difficult terrain, Grabbed targets, damage, and Escape. |

All four Batch 80 category files are registered alongside the aggregate package.

## Batch 81 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Cat Fall; Ward Medic; Blind-Fight; Canny Acumen | Action and combatant-gated reminders for fall reduction, Medicine proficiency, multiple Treat Wounds targets, concealed and undetected attacks, selected proficiency, and level upgrades. |
| Spells | Sculpt Sound; Prismatic Wall; Contingency; Prying Eye | Cast reminders for altered sound, layered barriers, counteracting, saves, damage, stored spells and triggers, scouting routes, senses, sustain, and duration. |
| Equipment | Bag of Tricks; Lantern of Revealing; Stone of Alarm; Ventriloquist's Ring; Wings of Flying | Activation reminders for summoned animals, revealing light, invisible creatures, alarms, projected voices, flight, capacity, duration, and daily uses. |
| Monster abilities | Ferocity; Regeneration; Rend; Mimicry; Reactive Strike | Combatant or action reminders for survival reactions, disabling damage, healing timing, matching Strikes, disguise or sound imitation, and reaction triggers. |

All four Batch 81 category files are registered alongside the aggregate package.

## Batch 82 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Craft Anything; Rapid Mantel; Secret Speech; Slippery Secrets | Action reminders for formula-free Crafting, materials and time, Athletics mantling, coded communication, shared language, coercion protection, and opposing checks. |
| Spells | Comprehend Language; Ant Haul; Invisibility Sphere; Foresight | Cast reminders for translation, Bulk capacity, invisibility emanations, predictive bonuses, reaction protection, sustain, duration, and target limitations. |
| Equipment | Lyre of Building; Pipes of Pain; Ring of the Weasel; Wand of Dispel Magic | Activation reminders for repair and construction, auditory saves and damage, transformation or escape benefits, counteracting, charges, frequency, and overcharge. |
| Monster abilities | Antimagic Aura; Magic Drain; Spell Turning; Reflect Spell | Combatant or action reminders for magical suppression, counteracting, healing, temporary Hit Points, spell qualification, reflection, redirection, and resistance. |

All four Batch 82 category files are registered alongside the aggregate package.

## Batch 83 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Powerful Leap; Armored Stealth; Forager; Foil Senses | Combatant-gated reminders for jump distances, Athletics, armor and Stealth penalties, Subsist and resource gathering, cover, senses, and detection state. |
| Spells | Alarm; Animal Form; Blink; Haste | Cast reminders for wards and triggers, temporary forms, displacement and concealment, extra actions, movement, sustain, duration, and ending conditions. |
| Equipment | Hat of Disguise; Cape of the Mountebank; Portable Hole; Bag of Holding | Activation reminders for disguises, teleportation and smoke, extradimensional spaces, storage capacity, occupants, air, overload, and interactions. |
| Monster abilities | Breath Weapon; Knockback; Powerful Charge; Wing Rebuff | Action reminders for areas, saves, persistent effects, recharge, Strike prerequisites, forced movement, collisions, reactions, Prone, and falling. |

All four Batch 83 category files are registered alongside the aggregate package.

## Batch 84 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Bespell Weapon; Dangerous Sorcery; Reach Spell; Widen Spell | Action reminders for qualifying spell casts, weapon damage, circumstance damage, range, area, modified action costs, and targeting restrictions. |
| Spells | Mage Armor; Resist Energy; Freedom of Movement; Stoneskin | Cast reminders for armor statistics, energy resistance, movement protections, physical resistance, duration, heightened effects, and limits. |
| Equipment | Boots of Elvenkind; Medallion of Thoughts; Dust of Disappearance; Decanter of Endless Water | Activation reminders for movement and Stealth, mental detection, invisibility, water commands, saves, duration, frequency, and consumption. |
| Monster abilities | Frightful Presence; Grab; Knockdown; Engulf | Combatant or action reminders for aura saves and immunity, qualifying Strikes, Grabbed, Prone, engulfed, forced movement, damage, Escape, and release. |

All four Batch 84 category files are registered alongside the aggregate package.

## Batch 85 additions

| Category | Items reviewed | Automation added |
|---|---|---|
| Feats | Aldori Riposte; Afterimage; Anatomical Quartering; Adaptive Stratagem | Action or combatant reminders for critical-failure reactions, teleportation duplicates, multi-target Strike sequences, physical damage reduction, and initiative preparation. |
| Spells | Dispelling Globe; Web of Eyes | Cast reminders for counteracting effects crossing a globe, linked eyes, shared vision, and enhanced Seek benefits. |
| Equipment | Retrieval Belt; Ring of the Grammarian; Sovereign Glue | Activation reminders for item retrieval, verbal-component alteration, compatible surfaces, permanence, hand placement, frequency, and remaining quantity. |
| Monster abilities | Daeodon Charge; Terrifying Charge; Throat Grab; Reflexive Grab | Action or combatant reminders for charge movement, Strike bonuses, saves, Demoralize, Restrained speech limits, and reaction Grapples. |

All four Batch 85 category files are registered alongside the aggregate package.

## Batch 86 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Adaptive Adept | Reminder to apply the selected spell, skill, or proficiency benefit. |
| Spells | Dispel Magic; Fireball; Heal; Harm | Cast reminders for counteracting, action modes, targets, saves, damage, healing, and heightened effects. |
| Equipment | Healing Potion; Analysis Eye; Anchor Spear; Animal Blind | Activation reminders for healing, examination, attacks, placement, target restrictions, duration, and usage limits. |
| Monster abilities | Aura of Righteousness; Aura of Vitality; Blood of the Night; Bloodcurdling Cry | Action and aura reminders for area restrictions, vitality or shadow effects, saves, conditions, durations, and immunity. |

All four Batch 86 category files are registered alongside the aggregate package.

## Batch 87 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Avenge Ally; Ankle Bite; Alarming Disappearance; Aether Beam | Action reminders for reaction triggers, qualifying attacks, teleportation or misdirection, damage, and condition riders. |
| Spells | Acid Arrow; Animate Object; Animal Messenger; Breath of Life | Cast reminders for spell attacks, persistent damage, animated targets, messages, reaction timing, healing, and duration. |
| Equipment | Alchemist's Goggles; Eagle-Eye Elixir; Apparition Gloves; Arboreal Boots | Activation reminders for alchemical checks, visual benefits, incorporeal interactions, climbing, duration, and frequency. |
| Monster abilities | Armor-Rending Bite; Absorb Weapon; Aura of Corruption; Blinding Aura | Action and aura reminders for qualifying attacks, item interactions, saves, conditions, duration, and immunity. |

All four Batch 87 category files are registered alongside the aggregate package.

## Batch 88 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Advanced Arcana; Advanced Devotion; Advanced Efficient Alchemy; Advanced Herbalism | Action reminders for spell selection, focus and frequency limits, item creation, formulas, ingredients, and daily resources. |
| Spells | Acid Storm; Bane; Bless; Cauterize Wound | Cast reminders for area saves, persistent damage, status auras, sustain, healing, bleed removal, and duration. |
| Equipment | Aetheric Irritant; Animal Call; Aether Marbles; Arcane Standard | Activation reminders for attacks or saves, auditory targeting, area effects, spellcasting benefits, duration, and frequency. |
| Monster abilities | Aura of Disruption; Animated Weapon; Absorb Magic; Body Thief | Action and aura reminders for spell interactions, autonomous creatures, possession, saves, temporary benefits, and recovery. |

All four Batch 88 category files are registered alongside the aggregate package.

## Batch 89 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Advanced Shooter; Alchemical Familiar; Avenge in Glory; Ancestral Longevity | Action reminders for qualifying weapons, familiar selection, fallen-ally triggers, temporary proficiency, and daily limits. |
| Spells | Airburst; Airlift; Animate Rope; Banishing Touch | Cast reminders for areas, saves, forced movement, animated objects, touch attacks, counteracting, and duration. |
| Equipment | Abidance Blinders; Accursed Staff; Alkenstar Ice Wine; Alisendra's Fan | Activation reminders for visual protection, stored spells, alcohol or cold effects, air or concealment effects, charges, and frequency. |
| Monster abilities | Antenna Disarm; Aura of Refraction; Bramble Jump; Bloody Dance | Action and aura reminders for Disarm, visual targeting, movement, attacks, persistent bleed, duration, and frequency. |

All four Batch 89 category files are registered alongside the aggregate package.

## Batch 90 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Ghost Wrangler; Blank Slate; Directed Poison; Practiced Guidance | Action reminders for incorporeal targets, mental protection, poison application, guidance, checks, prerequisites, and frequency. |
| Spells | Aromatic Lure; Astral Projection; Bacchanalia; Binding Muzzle | Cast reminders for scent and compulsion, projection and silver-cord tracking, intoxication or fascination, speech restrictions, saves, and duration. |
| Equipment | Clockwork Box Packer; Rite of Reinforcement Exoskeleton; Soulheart (Major); Carver-cutter | Activation reminders for storage or packing, armor or construct benefits, healing, attacks, duration, frequency, and reversion. |
| Monster abilities | Slime Squirt; Caustic Blood; Cinder Dispersal; Chill Breath | Action reminders for saves, acid damage, dispersal, concealment, cold breath, conditions, recovery, and recharge. |

All four Batch 90 category files are registered alongside the aggregate package.

## Batch 91 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Five-Breath Vanguard; Trick Driver; Bullseye; Automaton Armament | Action reminders for breath sequences, vehicles, ranged attacks, construct armaments, checks, and frequency. |
| Spells | Adaptive Ablation; Advanced Scurvy; Apex Companion; Annunciation of the Outer Gate | Cast reminders for energy selection, disease or condition effects, companion benefits, planar or gate effects, saves, sustain, and duration. |
| Equipment | Communion Mat; Nostalgic Pot; Acid Spitter; Junk Bomb (Moderate) | Activation reminders for ritual or communication effects, sensory effects, area saves, persistent damage, acid or splash effects, item grades, and consumption. |
| Monster abilities | Strangle; Slough Skin; Shed Armor; Furious Roar | Action reminders for grabbed or restrained targets, condition removal, armor release, fear saves, defenses, Escape, recharge, and immunity. |

All four Batch 91 category files are registered alongside the aggregate package.

## Batch 92 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Energy Heart; Forever Among Humanity; Solo Dancer; Carried with the Swarm | Action reminders for energy benefits, disguise or social effects, movement or Performance, swarm interactions, duration, and frequency. |
| Spells | Aspirational State; Arcane Weaving; Awaken Animal; Annunciation of the Outer Gate | Cast reminders for chosen states, spell combinations, awakened targets, planar or gate effects, saves, sustain, and duration. |
| Equipment | Saurian Spike (Major); Champion's Laurels (Amateur); Crown of Intellect; Three Day's Breath | Activation reminders for attacks, champion benefits, skill or mental benefits, environmental protection, item grades, duration, and consumption. |
| Monster abilities | Quick Capture; Pin Prey; Wind's Whispers; Wing Thrash | Action reminders for capture, pinning, communication, area saves, forced movement, Prone, Escape, and recharge. |

All four Batch 92 category files are registered alongside the aggregate package.

## Batch 93 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Incredible Recollection; Decree of Execution; Consume Power; Quicksoul | Action reminders for Recall Knowledge, execution thresholds, magical absorption, recovery, temporary benefits, and frequency. |
| Spells | Arcane Countermeasure; Appearance of Wealth; Approximate; Aromatic Lure | Cast reminders for counteracting, illusions, disbelief, imitated information, scent areas, saves, duration, and reaction timing. |
| Equipment | Armory Bracelet (Greater); Camouflage Dye (Greater); Wand of Purification (7th-Rank Spell); Staff of Protection | Activation reminders for stored weapons, Stealth, cleansing or counteracting, defensive spells, charges, overcharge, and duration. |
| Monster abilities | Soporific Touch; Poisoned Candy; Rending Mandibles; Wrap in Coils | Action reminders for sleep, poison stages, multi-attack bleed, Grabbed or Restrained states, Escape, and immunity. |

All four Batch 93 category files are registered alongside the aggregate package.

## Batch 94 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Abscission Shards; Animal Summoner; Awakened Animal Lore; Desperate Surge | Action reminders for shard attacks, animal companions, animal lore, emergency benefits, checks, conditions, duration, and frequency. |
| Spells | Accelerated Decomposition; Beseech the Sphinx; Appeal to Authority; Antlion Trap | Cast reminders for decay, questions, social or mental effects, area traps, saves, immobilization, sustain, and duration. |
| Equipment | Oculus of Abaddon; Vial of the Immortal Wellspring; Spun Cloud (Black); Wondrous Figurine (Bismuth Leopards) | Activation reminders for vision, healing, smoke, summoned creatures, concealment, charges, duration, and frequency. |
| Monster abilities | Irritating Dander; Transmit Memories; Web Wrappings; Personality Fragments | Action reminders for contact effects, mental transmission, web restraints, identity effects, saves, Escape, recovery, and immunity. |

All four Batch 94 category files are registered alongside the aggregate package.

## Batch 95 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Body of Air; Aiuvarin; Shape of the Cloud Dragon; Shield Your Eyes | Action reminders for temporary forms, ancestry or language benefits, dragon movement, visual protection, duration, and prerequisites. |
| Spells | Ancestral Touch; Ancestral Memories; Acid Splash; Allegro | Cast reminders for touch attacks, ancestry or skill benefits, acid damage, composition bonuses, saves, heightening, sustain, and duration. |
| Equipment | Accolade Robe (Greater); Aether Marbles (Greater); Aetheric Irritant (Lesser); Amulet Implement | Activation reminders for granted spells or ceremonies, area effects, attacks or saves, persistent effects, protective benefits, duration, and frequency. |
| Monster abilities | Ill Glow; One with Plants; Frill Defense; Radiant Wings | Action reminders for light, plant terrain, defensive reactions, flight, visual targeting, saves, duration, and recharge. |

All four Batch 95 category files are registered alongside the aggregate package.

## Batch 96 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Sense Iniquity; Practical Magic; Absolve Sins; Green Empathy | Action reminders for detection, selected magic benefits, cleansing checks, plant interactions, duration, and frequency. |
| Spells | Blazing Bolt; Blessed Boundary; Blind Eye; Blinding Fury | Cast reminders for attacks or saves, fire damage, protective boundaries, visual effects, conditions, heightening, and duration. |
| Equipment | Affinity Stones; Aim-Aiding; Air Repeater; Alabaster and obsidian game set | Activation reminders for energy selection, ranged attacks, ammunition, air or reload rules, social or divination effects, duration, and frequency. |
| Monster abilities | Sudden Retreat; Behold!; Thin of Blood; Intense Heat | Action and aura reminders for movement, visual or mental effects, blood interactions, heat, saves, damage, duration, and immunity. |

All four Batch 96 category files are registered alongside the aggregate package.

## Batch 97 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Athletic Rush; Avatar; Band of Heroes; Bandit's Doom | Cast reminders for movement, deity forms, ally selection, attack-triggered effects, saves, duration, and heightening. |
| Equipment | Accoutrements of Bone; Aeon Stone (Olivine Pendeloque); Aklys; Alghollthu Lash | Activation and attack reminders for investment, item benefits, thrown or tethered weapon rules, damage, conditions, and frequency. |

Both Batch 97 category files are registered alongside the aggregate package.

## Batch 98 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Acclimated Mount; Acute Scent; Adept Storyteller; Advanced Firearm Familiarity | Action reminders for mount and terrain checks, scent detection, social or Lore checks, firearm familiarity, prerequisites, and circumstance modifiers. |
| Monster abilities | Attach; Banishing Swipe; Athach Venom; Barbed Tongue | Action reminders for attachment, attacks, saves, banishment, poison stages, persistent effects, Escape, and immunity. |

Both Batch 98 category files are registered alongside the aggregate package.

## Batch 99 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Behold the Weave; Blanket of Stars; Blast of the Bellows; Blastback | Cast reminders for magical perception, area concealment, air damage, saves, forced movement, sustain, duration, and heightening. |
| Equipment | Accursed Staff (Greater); Alabaster idol; Aldori Dueling Sword; Alloy Orb (Exquisite High-Grade) | Activation and attack reminders for spell charges, curses, rituals, weapon traits, materials, critical specialization, duration, and frequency. |

Both Batch 99 category files are registered alongside the aggregate package.

## Batch 100 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Aegis of Arnisant; Aerobatics Mastery; Agent of all Holds; Align Qi | Action reminders for defensive reactions, Acrobatics and aerial movement, faction or social checks, qi selection, prerequisites, and duration. |
| Monster abilities | Briny Wound; Boiled by Light; Braincloud; Arrow of Mortality | Action reminders for wounds, light exposure, mental effects, attacks, saves, persistent or death effects, recovery, and immunity. |

Both Batch 100 category files are registered alongside the aggregate package.

## Batch 101 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Blink Charge; Blister; Blood Duplicate; Blood Feast | Cast reminders for teleportation, attacks or saves, persistent effects, duplicates, damage, healing, duration, and heightening. |
| Equipment | Amphora with lavish scenes; Ancestral Echoing; Anima Robe; Animal Nip (Lesser) | Activation reminders for contents, ancestry benefits, investment, defensive effects, administration, saves, duration, and frequency. |

Both Batch 101 category files are registered alongside the aggregate package.

## Batch 102 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | A Miracle of Science!; Advanced Glory; Advanced Kata; Advanced Muse's Whispers | Action reminders for invention checks, divine or martial benefits, stances, compositions, target selection, prerequisites, duration, and frequency. |
| Monster abilities | Animated Hair; Archon's Door; Arcane Bolt; Astral Recoil | Action reminders for reach and Grab, teleportation, arcane attacks, reaction triggers, damage, movement, and frequency. |

Both Batch 102 category files are registered alongside the aggregate package.

## Batch 103 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Blood Infusion; Blood Vendetta; Bloody Tendrils; Blossoming Gore | Cast reminders for blood effects, marks, attacks or saves, persistent damage, areas, Grabbed or Restrained states, sustain, and heightening. |
| Equipment | Anima Robe (Heroic); Animal Nip (Major); Animal Repellent (Major); Animal Staff (Major) | Activation reminders for enhanced investment benefits, administration, animal targeting, staff spells, saves, duration, charges, and frequency. |

Both Batch 103 category files are registered alongside the aggregate package.

## Batch 104 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Advanced Order Training; Advanced Qi Spells; Advanced Reanimated Companion; Advanced Rune Magic | Action reminders for order benefits, qi spell selection, companion updates, rune triggers, prerequisites, focus costs, duration, and frequency. |
| Monster abilities | Astral Shock; Autonomous Spell; Carrion Fever; Blade Barrier | Action reminders for attacks or saves, astral and mental effects, independent spells, disease stages, barriers, movement, recovery, and immunity. |

Both Batch 104 category files are registered alongside the aggregate package.

## Batch 105 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Bone Shield; Boneshaker; Bonewall Bulwark; Bony Barrage | Cast reminders for defensive reactions, skeletal damage, walls and cover, areas, saves, persistent effects, sustain, and heightening. |
| Equipment | Animal Nip (Moderate); Animal Repellent (Moderate); Anklets of Alacrity; Anti-Dragon Barding | Activation reminders for animal targeting, movement, investment, dragon defenses, saves, resistance, duration, and frequency. |

Both Batch 105 category files are registered alongside the aggregate package.

## Batch 106 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Advanced Runic Mind Smithing; Advanced School Spell; Advanced Seeker of Truths; Advanced Thaumaturgy | Action reminders for rune and school spell benefits, investigation checks, exploit weaknesses, focus costs, targets, duration, and frequency. |
| Monster abilities | Air Walk; Arcane Innate Spells; Tentacle; Bebilith | Action reminders for movement modes, innate spell casting, reach and Grab, web or poison effects, saves, Escape, duration, and immunity. |

Both Batch 106 category files are registered alongside the aggregate package.

## Batch 107 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Boost Eidolon; Bottomless Stomach; Bracing Tendrils; Bramble Bush | Cast reminders for eidolon benefits, consumption effects, tendril restraints, hazardous terrain, saves, sustain, duration, and heightening. |
| Equipment | Anti-Dragon Barding (Greater); Antifungal Salve (Greater); Antifungal Salve (Moderate); Antimagic | Activation reminders for enhanced dragon defenses, disease treatment, area suppression, checks, counteraction, duration, and frequency. |

Both Batch 107 category files are registered alongside the aggregate package.

## Batch 108 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Advanced Witchcraft; All of the Animal; Alluring Performance; Ambush Tactics | Action reminders for hexes and familiars, animal forms, Performance checks, mental effects, initiative, surprise, and positioning. |
| Monster abilities | Abaddon Lore; Amalgam; Babau; Basidirond | Action reminders for Lore checks, combined-creature traits, poison or bleeding effects, spores, saves, conditions, recovery, and immunity. |

Both Batch 108 category files are registered alongside the aggregate package.

## Batch 109 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Brand the Impenitent; Bridge of Vines; Brine Dragon Bile; Briny Bolt | Cast reminders for marks, bridges, area damage, saves, persistent effects, movement, duration, and heightening. |
| Equipment | Anylength Rope (Greater); Anylength Rope (Moderate); Apotheosis Knife; Arachnid Harness | Activation and attack reminders for rope manipulation, climbing, web effects, critical effects, targets, duration, and frequency. |

Both Batch 109 category files are registered alongside the aggregate package.

## Batch 110 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Amorphous Aspect; Anarchic Arcana; Ancestral Insight; And Will Do So Once More | Action reminders for alternate forms, arcane effects, ancestry or Lore benefits, repeated actions, targets, duration, prerequisites, and frequency. |
| Monster abilities | Bully's Bludgeon; Bog Mummy; Cairn Wight; Blue-Ringed Octopus | Action reminders for attacks, forced movement, disease, drain, poison, Grab, saves, recovery, duration, and immunity. |

Both Batch 110 category files are registered alongside the aggregate package.

## Batch 111 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Burrow Ward; Call Fluxwraith; Call The Blood; Camel Spit | Cast reminders for burrowing wards, summons, blood effects, attacks or saves, persistent effects, sustain, duration, and heightening. |
| Equipment | Arboreal Boots (Greater); Arboreal Wand (Rank 2); Arboreal Wand (Rank 6); Arcane Standard (Greater) | Activation reminders for plant movement, stored spells, auras, ally targeting, charges, overcharge, duration, and frequency. |

Both Batch 111 category files are registered alongside the aggregate package.

## Batch 112 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Android Lore; Angel of Death; Animal Companion; Animal Magic | Action reminders for Lore checks, death effects, companion statistics and commands, animal spells, targets, duration, recovery, and frequency. |
| Monster abilities | Anancus; Aurumvorax; Bastion Archon; Behir | Action reminders for charges, attacks, Grab, auras, protective effects, breath weapons, swallow, lightning, saves, recharge, and Escape. |

Both Batch 112 category files are registered alongside the aggregate package.

## Batch 113 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Capital Dividend; Captivating Adoration; Carryall; Cast into Time | Cast reminders for resource effects, mental conditions, container and bulk rules, temporal removal, saves, duration, sustain, and heightening. |
| Equipment | Archer's Bulwark; Armbands of Athleticism; Armbands of the Gorgon; Armor Latches | Activation reminders for ranged defense, Athletics, petrification, armor manipulation, saves, duration, frequency, and positioning. |

Both Batch 113 category files are registered alongside the aggregate package.

## Batch 114 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Animal Speaker; Animal Strength; Animal Swiftness; Animalistic Brutality | Action reminders for animal communication, Athletics, movement, natural attacks, traits, duration, prerequisites, and frequency. |
| Monster abilities | Call Spirit; Calm Emotions; Carrion Golem; Cave Fisher | Action reminders for summons, mental areas, construct or disease effects, adhesive filaments, saves, Escape, recovery, and immunity. |

Both Batch 114 category files are registered alongside the aggregate package.

## Batch 115 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Cataclysm; Caustic Blast; Celestial Accord; Celestial Brand | Cast reminders for areas, acid damage, divine protection, marks, saves, persistent effects, sustain, duration, and heightening. |
| Equipment | Armored Coat; Armored Skirt; Arsenic; Artevil Suspension | Activation reminders for armor state, bulk, movement penalties, poison exposure, saves, duration, frequency, and release conditions. |

Both Batch 115 category files are registered alongside the aggregate package.

## Batch 116 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Anthropomorphic Shape; Apocalyptic Visions; Aquatic Pirouette; Aqueous Dragonblood | Action reminders for forms, mental visions, aquatic movement, dragonblood benefits, checks, targets, duration, and frequency. |
| Monster abilities | Cave Scorpion; Children of the Night; Choker; Claw Storm | Action reminders for poison, summons, constriction, Grab, area attacks, saves, Escape, recovery, and immunity. |

Both Batch 116 category files are registered alongside the aggregate package.

## Batch 117 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Champion's Sacrifice; Channel Arrogance; Charitable Urge; Chilling Darkness | Cast reminders for damage transfer, areas, mental compulsions, darkness, saves, persistent effects, sustain, duration, and heightening. |
| Equipment | Artificer Spectacles; Ash Gown; Ashes of the War God; Assisting | Activation reminders for Crafting, concealment, martial benefits, Aid checks, saves, duration, frequency, and resistance. |

Both Batch 117 category files are registered alongside the aggregate package.

## Batch 118 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Arcane Eye; Arcane Propulsion; Ardent Armiger; Armored Courage | Action reminders for magical perception, propulsion, armor and weapon stances, fear effects, saves, duration, prerequisites, and frequency. |
| Monster abilities | Calathgar; Clench Jaws; Cornugon; Coven Spells | Action reminders for plant or spore effects, jaw attacks, chain and fear effects, shared spellcasting, saves, recovery, duration, and interruption. |

Both Batch 118 category files are registered alongside the aggregate package.

## Batch 119 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Chosen Gravity; Chrysopoetic Curse; Circle of Protection; Clad In Metal | Cast reminders for altered gravity, curses, protective areas, metal forms, saves, conditions, duration, sustain, and heightening. |
| Equipment | Astral; Atmospheric Breathing Suit; Atrophy Bomb (Lesser); Atrophy Bomb (Moderate) | Activation reminders for planar effects, environmental protection, bomb attacks, atrophy conditions, saves, duration, recovery, and immunity. |

Both Batch 119 category files are registered alongside the aggregate package.

## Batch 120 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Armored Regiment Training; Artokus's Fire; Ascend; Ask the Bones | Action reminders for armor formations, fire effects, vertical movement, divination, checks, targets, duration, and frequency. |
| Monster abilities | Culdewen; Culdewen's Curse; Curse of Drowning; Curse of Stolen Breath | Action reminders for curses, attacks, drowning or suffocation, saves, stages, recovery, duration, and immunity. |

Both Batch 120 category files are registered alongside the aggregate package.

## Batch 121 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Claim Curse; Claws of the Otter; Cleanse Cuisine; Clear Mind | Cast reminders for curse transfer, animal forms, food or disease cleansing, mental protection, saves, duration, sustain, recovery, and immunity. |
| Equipment | Augsten's Cudgel; Aurochs Jerky; Aurochs' Might Tattoo (Lesser); Aurochs' Might Tattoo (Moderate) | Activation reminders for weapon effects, nourishment, temporary Strength or Athletics benefits, duration, frequency, and penalties. |

Both Batch 121 category files are registered alongside the aggregate package.

## Batch 122 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Assume Earth's Mantle; Assume Godhood; Assured Ritualist; Astral Tether | Action reminders for forms, divine powers, ritual checks, planar restrictions, participants, duration, and counteraction. |
| Monster abilities | Death Ward; Derghodaemon; Descend on a Web; Devourer | Action reminders for death defenses, fear effects, web movement, soul or drain effects, saves, duration, recovery, and immunity. |

Both Batch 122 category files are registered alongside the aggregate package.

## Batch 123 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Clinging Ice; Cloak of Light; Cloudborne Haven; Comet Charge | Cast reminders for cold and movement effects, illumination, cloud shelter, charging attacks, saves, area placement, duration, and heightening. |
| Equipment | Authorized; Autumn's Embrace; Axe of the Dwarven Lords; Bag of Cats | Activation and attack reminders for access checks, seasonal defenses, critical specialization, contents, duration, and frequency. |

Both Batch 123 category files are registered alongside the aggregate package.

## Batch 124 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Athamaru Lore; Attuned Electroreceptors; Attuned Stride; Attunement Shift | Action reminders for Lore checks, aquatic sensing, movement, attunement modes, targets, terrain, duration, and frequency. |
| Monster abilities | Dimensional Tether; Dimensional Wormhole; Dispelling Strike; Divine Innate Spells | Action reminders for teleportation restrictions, portals, counteract attacks, innate spellcasting, saves, duration, and recharge. |

Both Batch 124 category files are registered alongside the aggregate package.

## Batch 125 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Commanding Lash; Commune; Community Repair; Compel True Name | Cast reminders for compulsions, deity questions, repairs, true-name targeting, saves, duration, counteraction, and frequency. |
| Equipment | Bag of Weasels; Bagpipes of Turmoil (Greater); Bagpipes of Turmoil (Major); Bakuwa Lizardfolk Bony Plates | Activation reminders for contents, sound areas, mental effects, armor benefits, saves, duration, frequency, and immunity. |

Both Batch 125 category files are registered alongside the aggregate package.

## Batch 126 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Attunement to Stone; Aurochs-Headed; Autonomous Arms; Avalanche Strike | Action reminders for attunement modes, natural attacks, extra manipulation, movement, terrain, targets, duration, and frequency. |
| Monster abilities | Divine Wrath (At will); Dominate Animal; Draconic Resistance; Dust Mephit | Action reminders for area attacks, domination, damage resistance, dust or breath effects, saves, recharge, duration, and immunity. |

Both Batch 126 category files are registered alongside the aggregate package.

## Batch 127 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Competitive Edge; Confront Selves; Conjurer's Countermeasure; Conquering Soldiers | Cast reminders for bonuses, mental effects, counteract checks, summoned soldiers, commands, duration, sustain, and heightening. |
| Equipment | Barding of the Zephyr; Bargainer's Instrument; Barricade Stone (Sphere); Basic Companion Chair | Activation reminders for mount movement, social checks, barriers, companion seating, targets, duration, and interaction rules. |

Both Batch 127 category files are registered alongside the aggregate package.

## Batch 128 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Avenger of Envy; Avenger of Gluttony; Avenger of Greed; Avenger of Lust | Action reminders for retaliatory triggers, attacks, mental effects, resource benefits, targets, duration, recovery, and immunity. |
| Monster abilities | Entombing Breath; Fade from View; Fangs; Final End | Action reminders for breath areas, concealment, poison or Grab, death triggers, saves, recharge, recovery, duration, and immunity. |

Both Batch 128 category files are registered alongside the aggregate package.

## Batch 129 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Consecrate; Containment; Control Sand; Coral Eruption | Cast reminders for sanctification, containment, sand terrain, coral areas, saves, movement restrictions, sustain, duration, and heightening. |
| Equipment | Baton of the Fallen; Battle Saddle; Beacon of the Wilds; Beast Staff (Major) | Activation and attack reminders for fallen allies, mounted combat, wild exploration, staff spells, charges, duration, and frequency. |

Both Batch 129 category files are registered alongside the aggregate package.

## Batch 130 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Avoid Fate's Gaze; Awakened Jewel; Awakened Power; Bamboo and Silt Repose | Action reminders for defensive reactions, awakened abilities, temporary powers, recovery, targets, duration, and frequency. |
| Monster abilities | Flailing Tentacles; Flaming Armaments; Flooding Thrust; Flytrap Hand | Action reminders for tentacle attacks, fire weapons, water effects, attachment, Grab, Escape, duration, and immunity. |

Both Batch 130 category files are registered alongside the aggregate package.

## Batch 131 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Coral Scourge; Corpse Bloom; Corpse Communion; Corrosive Body | Cast reminders for coral areas, corpse targets, information effects, corrosive forms, saves, persistent damage, sustain, duration, and heightening. |
| Equipment | Beastmaster's Sigil; Beastmaster's Sigil (Greater); Beastmaster's Sigil (Major); Beetle Gel (Greater) | Activation reminders for companion commands, investment, support benefits, defensive gel, duration, frequency, and restrictions. |

Both Batch 131 category files are registered alongside the aggregate package.

## Batch 132 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Banner Twirl; Barrier Shield; Basic Animist Spellcasting; Basic Flair | Action reminders for banner auras, shields, animist spells, selected skill benefits, targets, duration, and frequency. |
| Monster abilities | Flytrap Leshy; Forest Lore; Freedom; Gentle Repose | Action reminders for plant attacks, Lore checks, escape effects, corpse preservation, Grab, duration, and counteraction. |

Both Batch 132 category files are registered alongside the aggregate package.

## Batch 133 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Cosmic Form; Cradle Aloft; Create Earthen Facsimile; Create Skinstitch | Cast reminders for forms, carried creatures, created objects, healing or crafting effects, commands, duration, sustain, and heightening. |
| Equipment | Bellflower Toolbelt; Bellows Pipes; Bendy-Arm Mutagen (Major); Bewitching Bloom (Lilac) | Activation reminders for tools, sound areas, mutagen benefits and drawbacks, mental effects, saves, duration, and frequency. |

Both Batch 133 category files are registered alongside the aggregate package.

## Batch 134 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Basic Beast Gunner Spellcasting; Basic Eldritch Archer Spellcasting; Basic Fury; Basic Glory | Action reminders for hybrid spellcasting, ranged spell attacks, rage, divine or martial benefits, targets, duration, and frequency. |
| Monster abilities | Ghonhatine; Giant Slug; Giant Snapping Turtle; Giant Solifugid | Action reminders for poison, slime, shells, webs, attacks, saves, movement, recovery, and immunity. |

Both Batch 134 category files are registered alongside the aggregate package.

## Batch 135 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Create Thrall; Creation; Creative Splash; Crusade | Cast reminders for created creatures and objects, variable damage, summoned allies, commands, duration, sustain, and heightening. |
| Equipment | Bewitching Bloom (Purple Iris); Bewitching Bloom (White Poppy); Big Rock Bullet; Big Rock Bullet (Greater) | Activation and attack reminders for mental blooms, ammunition, impact damage, saves, duration, frequency, and immunity. |

Both Batch 135 category files are registered alongside the aggregate package.

## Batch 136 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Basic Oracle Spellcasting; Basic Scroll Cache; Bat Around; Battle Scars | Action reminders for oracle spells, scroll use, attacks, recovery, rage or social effects, targets, duration, and frequency. |
| Monster abilities | Giant Squid; Giant Toad; Giant Whiptail Centipede; Glass Golem | Action reminders for tentacles, Grab, swallow, poison, construct reflection, shattering, saves, recovery, and immunity. |

Both Batch 136 category files are registered alongside the aggregate package.

## Batch 137 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Curse of Lost Time; Cursed Metamorphosis; Dancing Blade; Darkened Eyes | Cast reminders for temporal curses, transformations, animated weapons, visual effects, saves, duration, recovery, and counteraction. |
| Equipment | Big Rock Bullet (Major); Binding Coil; Binding Coil (Greater); Black Hole Armor | Activation and attack reminders for ammunition, restraints, binding, gravity or defense effects, saves, duration, Escape, and frequency. |

Both Batch 137 category files are registered alongside the aggregate package.

## Batch 138 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Dancer in the Seasons; Deadly Strike; Demagogue's Calling; Demon Eidolon | Action reminders for stances, movement, critical damage, social checks, eidolon traits, saves, duration, and frequency. |
| Monster abilities | Dead Gaze; Death-Stealing Gaze; Deafening Cry; Debilitating Bite | Action reminders for gaze attacks, auditory effects, bites, saves, conditions, persistent damage, recovery, and immunity. |

Both Batch 138 category files are registered alongside the aggregate package.

## Batch 139 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Darkened Sight; Darklight; Dawnflower's Light; Death's Call | Cast reminders for visual effects, light, healing or damage, saves, duration, sustain, recovery, immunity, and heightening. |
| Equipment | Daredevil Boots; Dark Pepper Powder; Darkvision Scope (Greater); Daybreak Ammunition | Activation and attack reminders for movement, inhalation, sight, light, ammunition, saves, duration, recovery, and frequency. |

Both Batch 139 category files are registered alongside the aggregate package.

## Batch 140 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Fatal Method; Fifth Doctrine; Final Doctrine (Warpriest); First Doctrine | Action reminders for qualifying attacks, critical effects, doctrine benefits, proficiency, prerequisites, and class restrictions. |
| Monster abilities | Fabricated Truth; Failure Vulnerability; Falchion Swipe; Fall | Action reminders for deception, failed checks, vulnerabilities, sweep attacks, falling damage, conditions, recovery, and immunity. |

Both Batch 140 category files are registered alongside the aggregate package.

## Batch 141 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Falling Stars; Far Sight; Fashionista; Fated Confrontation | Cast reminders for areas, attacks or saves, sight, appearance, fortune or misfortune, duration, sustain, and counteraction. |
| Equipment | Faerie Queen's Bower; Falconsight Eye; False Manacles; Familiar Morsel | Activation reminders for terrain, perception, restraints, familiars, checks, duration, Escape, and frequency. |

Both Batch 141 category files are registered alongside the aggregate package.

## Batch 142 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Fifth Doctrine (Cloistered Cleric); Flurry; Forged Endurance; Formula Book | Action reminders for doctrine benefits, attacks, multiple attack penalty, endurance, resistance, formula access, crafting, and usage limits. |
| Monster abilities | Falling Rocks; Falling Slab; False Authority; False Cuts | Action reminders for falling hazards, saves, impact damage, deception, illusions, conditions, recovery, and counteraction. |

Both Batch 142 category files are registered alongside the aggregate package.

## Batch 143 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Fated Healing; Favorable Review; Fear the Sun; Feast of Ashes | Cast reminders for healing, social checks, fear, light, curses, saves, recovery, duration, and heightening. |
| Equipment | Fan of Soothing Winds (Greater); Fan of the Four Winds; Fanged; Fanged (Greater) | Activation and attack reminders for wind modes, area effects, healing, damage, conditions, recovery, and frequency. |

Both Batch 143 category files are registered alongside the aggregate package.

## Batch 144 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Gaze Sharp as Steel; Gluttony; Godly Expertise; Greater Dogged Will | Action reminders for perception, consumption, healing, divine proficiency, Will saves, recovery, duration, and frequency. |
| Monster abilities | Gales of Laughter; Gang Determination; Garbled Thoughts; Gas 'Em! | Action reminders for auditory effects, group bonuses, mental saves, inhaled hazards, conditions, persistent damage, and recovery. |

Both Batch 144 category files are registered alongside the aggregate package.

## Batch 145 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Gale Blast; Gate; Genie's Veil; Geyser | Cast reminders for wind attacks, portals, disguises, water effects, saves, movement, duration, and heightening. |
| Equipment | Galvanic Mortal Coil; General's Word; Ghast Stiletto; Ghost Oil | Activation and attack reminders for electricity, commands, poison, incorporeal interactions, saves, duration, and frequency. |

Both Batch 145 category files are registered alongside the aggregate package.

## Batch 146 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Hands of the Wildling; Heavy Construction; Hero's Defiance; Hex Spells | Action reminders for unarmed attacks, defenses, reactions, hex targets, saves, recovery, duration, and frequency. |
| Monster abilities | Hail of Arrows; Hair Barrage; Hallucinatory Breath; Hallucinatory Spores | Action reminders for ranged and hair attacks, inhaled hazards, mental effects, saves, persistent damage, and recovery. |

Both Batch 146 category files are registered alongside the aggregate package.

## Batch 147 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Hag's Fruit; Halcyon Mists; Hasted Assault; Haunting Hymn | Cast reminders for curses, mist areas, extra actions, auditory effects, saves, duration, sustain, recovery, and heightening. |
| Equipment | Hag Eye; Hampering Snare; Hand of Mercy; Hand-Hewed Face | Activation reminders for scrying, snares, healing, disguises, checks, duration, recovery, and frequency. |

Both Batch 147 category files are registered alongside the aggregate package.

## Batch 148 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Horn of Plenty; Hunter's Calling; Hunter's Edge | Action reminders for nourishment, hunted targets, attacks, checks, tracking, duration, and frequency. |
| Monster abilities | Hail of Razor Stones; Hail of Thorns; Hallucinatory Haunting; Hallucinogenic Cloud | Action reminders for area attacks, illusions, inhaled hazards, saves, persistent damage, recovery, and counteraction. |

Both Batch 148 category files are registered alongside the aggregate package.

## Batch 149 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Haven in the Ether; Heal Companion; Heat Metal; Heatvision | Cast reminders for extradimensional spaces, companion healing, metal damage, heat sight, saves, duration, and heightening. |
| Equipment | Harnessed Shield; Harpoon; Harpy's Talon; Harrow Deck (Fine) | Activation and attack reminders for shields, tethers, sonic effects, divination, fortune or misfortune, and frequency. |

Both Batch 149 category files are registered alongside the aggregate package.

## Batch 150 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Impostor in Hidden Places; Improved Flexibility; Inconspicuous Appearance; Inevitable Return | Action reminders for disguise, movement, checks, repositioning, duration, and frequency. |
| Monster abilities | Ice Slick; Ice Stride; Icicle; Identify an Opening | Action reminders for ice terrain, attacks, cold damage, Perception checks, prone, recovery, and resistance. |

Both Batch 150 category files are registered alongside the aggregate package.

## Batch 151 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Ideal Mimicry; Illuminate; Imitate Fauna; Impeccable Flow | Cast reminders for copied forms, light, disguises, fortune, duration, counteraction, and heightening. |
| Equipment | Illusory Program; Impenetrable Scale; Implacable; Implosion Dust (Greater) | Activation reminders for illusions, defenses, persistence, force damage, saves, duration, and frequency. |

Both Batch 151 category files are registered alongside the aggregate package.

## Batch 152 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Jassim's Allegiance; Jealous Hex; Juvenile Companion | Cast reminders for allegiance, curses, summoned companions, saves, focus or duration, sustain, recovery, and heightening. |
| Monster abilities | Jagged Branches; Jagged Scales; Jaunt; Jaws | Action reminders for attacks, retaliation, teleportation, Grab, persistent damage, recovery, and immunity. |

Both Batch 152 category files are registered alongside the aggregate package.

## Batch 153 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Keen Recollection; Kinetic Expertise | Action reminders for Recall Knowledge, impulses, proficiency, saves, overflow, and frequency. |
| Equipment | Kalmaug's Journal; Keep Stone Ingot; Kestros; Key of Unwinding | Activation reminders for research, anchoring, weapon attacks, locks, counteract checks, and frequency. |

Both Batch 153 category files are registered alongside the aggregate package.

## Batch 154 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Legendary Necromancy; Legendary Runes; Lesser Creed; Lesson of Calamity | Action reminders for spellcasting, runes, creeds, lessons, proficiency, saves, focus, and duration. |
| Monster abilities | Lament; Land on Feet; Lash Out; Lashing Branch | Action reminders for auditory effects, falling, reactions, attacks, Grab, persistent damage, and recovery. |

Both Batch 154 category files are registered alongside the aggregate package.

## Batch 155 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Labyrinthine Prison; Lashing Rope; Leaden Steps; Life Link | Cast reminders for prisons, restraints, movement penalties, linked targets, saves, Escape, duration, and sustain. |
| Equipment | Lady's Blessing Oil; Lambent Perfume; Lantern (Hooded); Leather Armor | Activation and item reminders for blessings, scents, light, armor calculations, duration, and frequency. |

Both Batch 155 category files are registered alongside the aggregate package.

## Batch 156 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Majestic Will; Major Creed; Manifold Alloy; Martial Weapon Mastery | Action reminders for Will saves, creeds, materials, weapon proficiency, critical specialization, and frequency. |
| Monster abilities | Maddening Gibbers; Maggot Tendril; Magic Passage; Magic Scent | Action reminders for mental effects, tendrils, portals, magical detection, saves, recovery, and resistance. |

Both Batch 156 category files are registered alongside the aggregate package.

## Batch 157 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Magic Warrior Aspect; Magical Fetters; Magnetic Dominion; Magnetic Repulsion | Cast reminders for transformations, restraints, metal targets, forced movement, saves, duration, sustain, and heightening. |
| Equipment | Mace; Macuahuitl; Maelstromic Destabilizer (Lesser); Maelstromic Destabilizer (Major) | Attack and activation reminders for weapon traits, critical specialization, area effects, saves, damage, and frequency. |

Both Batch 157 category files are registered alongside the aggregate package.

## Batch 158 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Nature's Edge; Noble Branch | Action reminders for natural terrain, ancestry or weapon benefits, checks, attacks, and frequency. |
| Monster abilities | Names of the Nameless; Nanite Surge; Natural Invisibility; Natural-Born Burner | Action reminders for naming or mental effects, nanites, invisibility, fire, saves, persistent damage, and recovery. |

Both Batch 158 category files are registered alongside the aggregate package.

## Batch 159 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Nature Incarnate; Nature's Reprisal; Necrotic Bomb; Needle of Vengeance | Cast reminders for forms, nature damage, void damage, vengeance effects, saves, duration, recovery, and heightening. |
| Equipment | Nap Gas Dispenser; Navaratna of the Solar Ruby; Navigator's Feather; Necklace of Fireballs II | Activation reminders for inhaled gas, solar effects, navigation, fireball beads, saves, duration, and frequency. |

Both Batch 159 category files are registered alongside the aggregate package.

## Batch 160 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Obedience; Omnirange Stabilizers; Ooze Eidolon; Oracular Curse | Action reminders for deity rituals, range, ooze traits, oracle curses, proficiency, stages, and frequency. |
| Monster abilities | Oathbreaker's Curse; Obscured Pitfalls; Obscuring Host; Obscuring Spores | Action reminders for curses, hidden hazards, concealment, spores, saves, recovery, and counteraction. |

Both Batch 160 category files are registered alongside the aggregate package.

## Batch 161 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Ode to Ouroboros; Oil-Slicked Walls; Open the Wall of Ghosts; Orb of Twisting Fate | Cast reminders for auditory cycles, slippery walls, ghost passages, fate effects, saves, duration, sustain, and heightening. |
| Equipment | O-Yoroi; Obsidian Edge (True); Ogre Spider Filament; Oil of Corpse Restoration | Item reminders for armor, material weapons, restraints, corpse restoration, resistances, Escape, and frequency. |

Both Batch 161 category files are registered alongside the aggregate package.

## Batch 162 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Paragon Benefit (Chalice); Paragon Benefit (Lantern); Paragon Benefit (Tome); Paragon Benefit (Wand) | Action reminders for item activations, healing, light, knowledge, spells, charges, duration, and frequency. |
| Monster abilities | Pack Ambush; Painful Bite; Painful Light; Painful Limbs | Action reminders for ambushes, attacks, pain, visual effects, saves, conditions, and recovery. |

Both Batch 162 category files are registered alongside the aggregate package.

## Batch 163 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Paranoia; Part the Mists to Paradise; Pave Ground; Peer Into the Past | Cast reminders for mental effects, travel, terrain, historical vision, saves, duration, sustain, and counteraction. |
| Equipment | Pact of the Herald and Host; Palette of Masterstrokes; Pallesthetic Mutagen; Palstave | Activation and item reminders for pacts, art, mutagens, weapon attacks, drawbacks, traits, and frequency. |

Both Batch 163 category files are registered alongside the aggregate package.

## Batch 164 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Qi Form | Cast reminders for transformation, traits, attacks, defenses, duration, sustain, and heightening. |
| Equipment | Qat; Quenching (Major); Quenching (True) | Activation and consumption reminders for stimulants, suppression, counteraction, duration, and frequency. |
| Monster abilities | Quake; Quick Alchemy; Quick Block; Quick Change | Action reminders for area damage, crafting, shields, transformations, saves, recovery, and frequency. |

All Batch 164 category files are registered alongside the aggregate package.

## Batch 165 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Rage; Raging Resistance; Rain-Scribes; Reaction Time | Action reminders for rage, resistance, inscriptions, reactions, duration, and frequency. |
| Monster abilities | Radiant Blast; Radiant Feathers; Radiate Cold; Rage of Spirits | Action reminders for radiant, piercing, cold, and spirit effects, saves, conditions, recovery, and resistance. |
| Spells | Radiant Globe; Rainbow Fumarole; Rainbow's End; Raise Dead | Cast reminders for radiant and elemental effects, travel, resurrection, saves, duration, and heightening. |
| Equipment | Rainbow Vinegar (Greater); Rainbow Vinegar (Moderate); Ranging Shot; Rattan Armor | Activation and item reminders for poisons, ranged attacks, armor, damage, saves, and frequency. |

All Batch 165 category files are registered alongside the aggregate package.

## Batch 166 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Saga's Calling; Sage's Calling; Savvy Reflexes; Scar of the Survivor | Action reminders for narrative and knowledge checks, Reflex saves, recovery, resistance, and frequency. |
| Monster abilities | Sacred Geyser; Sacred Sabotage; Sacrificial Takedown; Sacrilegious Aura | Action reminders for geysers, disruption, sacrificial reactions, auras, saves, conditions, and recovery. |

Both Batch 166 category files are registered alongside the aggregate package.

## Batch 167 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Sacred Nimbus; Sand Form; Sanguine Mist; Savor the Sting | Cast reminders for sacred effects, transformations, blood mist, pain, saves, duration, recovery, and heightening. |
| Equipment | Sage's Bloom; Sailor's Collar (Greater); Sanguine Ammunition; Sanguine Klar | Activation and attack reminders for knowledge, aquatic effects, blood damage, ammunition, weapon traits, and frequency. |

Both Batch 167 category files are registered alongside the aggregate package.

## Batch 168 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Teacher of Heroes; Tempest-Sun Mages; The Distant Grasp; The Inscribed One | Action reminders for instruction, elemental spells, telekinetic effects, inscriptions, targets, duration, and frequency. |
| Monster abilities | Tag Team; Tail Lash; Tail Scythe; Tail Slap | Action reminders for teamwork, reach, tail attacks, damage, critical effects, and recovery. |

Both Batch 168 category files are registered alongside the aggregate package.

## Batch 169 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Tacky Pine Sap; Take Root; Tame; Tangle Vine | Cast reminders for immobilization, roots, animal targets, vines, saves, Escape, duration, sustain, and heightening. |
| Equipment | Tactician's Helm; Tales in Timber (Greater); Tales in Timber (Major); Taljjae's Mask (The General) | Activation reminders for tactics, knowledge, illusions, command effects, disguises, duration, and frequency. |

Both Batch 169 category files are registered alongside the aggregate package.

## Batch 170 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Unassailable Soul; Unbreakable Expertise; Unfailing Bow; Unfurling Brocade | Action reminders for mental defenses, proficiency, ranged attacks, garments, duration, and frequency. |
| Monster abilities | Ultimate Sacrifice; Umberweed; Umbra's Rage; Umbral Pall | Action reminders for sacrifice, poison, shadow, concealment, saves, recovery, and resistance. |

Both Batch 170 category files are registered alongside the aggregate package.

## Batch 171 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Ulcerous Canker; Umbral Journey; Unblinking Flame Emblem; Unblinking Flame Ignition | Cast reminders for disease, shadow travel, flame emblems, fire damage, saves, duration, recovery, and heightening. |
| Equipment | Ugly Cute's Gift; Ulfen Shieldbreaker; Undertaker's Manifest; Undertaker's Spade | Activation and item reminders for social effects, shield breaking, necromancy, digging, duration, and frequency. |

Both Batch 171 category files are registered alongside the aggregate package.

## Batch 172 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Vanguard of Roaring Waters; Versatile Legend; Versatile Vials; Victor's Wreath | Action reminders for water effects, versatility, vials, victory benefits, skills, duration, and frequency. |
| Monster abilities | Valkyrie Tempest; Vanishing Death; Vanishing Leap; Vein Walker | Action reminders for tempest, death, teleportation, concealment, movement, recovery, and resistance. |

Both Batch 172 category files are registered alongside the aggregate package.

## Batch 173 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Valiant Anthem; Vanishing Tracks; Vector Screen; Veil of Broken Reality | Cast reminders for morale, anti-tracking, screens, illusions, saves, duration, sustain, and counteraction. |
| Equipment | Vagabond's Teapot; Valorous Coin; Vambrace of Gorum; Vanishing Shocker (Moderate) | Activation and item reminders for beverages, fortune, armor, electricity, concealment, duration, and frequency. |

Both Batch 173 category files are registered alongside the aggregate package.

## Batch 174 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | War Magic; Wave Order; Way of the Triggerbrand; Weapon Expertise | Action reminders for spells, impulses, firearm or melee attacks, weapon proficiency, traits, and frequency. |
| Monster abilities | Wail; Wail of the Betrayed; Wail of the Forest; Waking Dreams | Action reminders for auditory and mental effects, saves, curses, sleep, recovery, and immunity. |

Both Batch 174 category files are registered alongside the aggregate package.

## Batch 175 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Waking Nightmare; Wall of Shrubs; Wall of Thorns; Wall of Wind | Cast reminders for nightmares, walls, terrain, ranged attacks, saves, duration, sustain, and heightening. |
| Equipment | Waffle Iron (High-grade Mithral); Waffle Iron (Imprint); Wand Cane; Wand Implement | Activation and item reminders for crafting, imprints, stored spells, charges, duration, and frequency. |

Both Batch 175 category files are registered alongside the aggregate package.

## Batch 176 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Monster abilities | Xarwin Caul; Xarwin's Manifestation; Xenia Spirit; Xill Eggs | Action reminders for cauldrons, manifestations, spirit effects, infestations, saves, recovery, and immunity. |

The Batch 176 category file is registered alongside the aggregate package.

## Batch 177 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Zoophonia | Action reminders for animal communication, auditory effects, skill checks, duration, and frequency. |
| Spells | Zeal for Battle; Zephyr Slip; Zombie Horde | Cast reminders for morale, movement, concealment, summoned undead, duration, sustain, and heightening. |
| Equipment | Yarrow-Root Bandage | Activation reminders for Medicine, healing, poison, persistent damage recovery, and frequency. |

All Batch 177 category files are registered alongside the aggregate package.

## Batch 178 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Equipment | Zircon; Zombie Staff (Greater) | Activation reminders for gemstones, stored spells, undead effects, charges, duration, and frequency. |
| Monster abilities | Zaiho; Zaiho's Gun Sword; Zeal-damned Ghoul; Zealborn | Action reminders for weapon modes, undead effects, auras, saves, recovery, and immunity. |

Both Batch 178 category files are registered alongside the aggregate package.

## Batch 179 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Abundant Vials; Adept Benefit (Bell); Adept Benefit (Regalia); Advanced Vials | Action reminders for vial formulas, item activations, sound, regalia, targets, duration, and frequency. |
| Monster abilities | Magnetic Roar; Blight Domination; Gaseous Adaptation; Share Senses | Action reminders for magnetic effects, domination, gaseous forms, shared senses, saves, duration, and counteraction. |

Both Batch 179 category files are registered alongside the aggregate package.

## Batch 180 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Deathly Scream; Decompose; Deep Sight; Defended by Spirits | Cast reminders for auditory death effects, void damage, perception, spirit defenses, saves, duration, recovery, and heightening. |
| Equipment | Accolade Robe | Activation reminders for social and skill effects, duration, and frequency. |

Both Batch 180 category files are registered alongside the aggregate package.

## Batch 181 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Advanced Vials (Bomber); Advanced Vials (Chirurgeon); Advanced Vials (Mutagenist); Alchemist Armor Mastery (Level 19) | Action reminders for bombs, healing, mutagens, armor, formulas, saves, drawbacks, and frequency. |

The Batch 181 category file is registered alongside the aggregate package.

## Batch 182 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Defensive Prescience; Desiccate; Detect Creator; Detect Metal | Cast reminders for prediction, dehydration, detection, saves, duration, recovery, resistance, and counteraction. |
| Monster abilities | Absorb Evocation; Absorb Force; Abduct; Abendego's Squall | Action reminders for spell absorption, force resistance, abduction, storms, saves, movement, recovery, and frequency. |

Both Batch 182 category files are registered alongside the aggregate package.

## Batch 183 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Agile Mind; Alchemical Alacrity; Alchemical Expertise; Alchemist Armor Expertise (Level 13) | Action reminders for mental defenses, Quick Alchemy, proficiency, armor, item effects, checks, and frequency. |
| Equipment | Black Powder (Keg); Black Smear Poison; Blackaxe; Bladed Scarf | Activation and attack reminders for blasts, poison stages, weapon traits, saves, damage, recovery, and frequency. |

Both Batch 183 category files are registered alongside the aggregate package.

## Batch 184 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Detect Poison; Detonate Magic; Devil Form; Devouring Void | Cast reminders for detection, counteracting, polymorph statistics, void damage, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Abeyance Rift; Abyssal Firestorm Surge; Abyssal Healing; A Taste for Skin | Action reminders for rifts, firestorms, healing, attacks, persistent damage, saves, recovery, and frequency. |

Both Batch 184 category files are registered alongside the aggregate package.

## Batch 185 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Alertness; Anathema (Cleric); Anathema (Druid); Animal Instinct | Reminders for Perception and initiative, deity and order restrictions, unarmed attacks, benefits, and frequency. |
| Equipment | Blasting Stone (Major); Bleeding Spines Snare; Blakenshipper; Blightburn Resin | Activation and trap reminders for blasts, poison, attacks, persistent damage, saves, recovery, and frequency. |

Both Batch 185 category files are registered alongside the aggregate package.

## Batch 186 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Diabolic Edict; Diabolic Pact; Dimensional Assault; Discern Secrets | Cast reminders for commands, contracts, teleportation, attacks, checks, information, duration, and counteraction. |
| Monster abilities | A Brush and Pot of Red Paint; A Kanabo to an Oni; Abandon Armor; Abandon Body | Action reminders for marks, strikes, defensive transitions, movement, damage, duration, and recovery. |

Both Batch 186 category files are registered alongside the aggregate package.

## Batch 187 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Animal Order; Archwizard's Spellcraft; Artisan's Calling; Automated Impediments | Reminders for order benefits, spellcraft, Crafting, hazards, restrictions, checks, and frequency. |
| Equipment | Blending Brooch; Blessed Reformer; Blister Ammunition (Moderate); Blisterwort | Activation and exposure reminders for concealment, weapon effects, ammunition, poison, damage, recovery, and frequency. |

Both Batch 187 category files are registered alongside the aggregate package.

## Batch 188 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Discomfiting Whispers; Dispelling Globe; Disperse into Air; Disruptive Transfer | Cast reminders for auditory effects, counteracting, transformation, teleportation, saves, duration, recovery, and heightening. |
| Monster abilities | Abandon Hex; Absorb into the Aegis; Abyssal Firestorm Surge (7-8); Abyssal Plague | Action reminders for curses, protection, fire damage, disease stages, saves, recovery, resistance, and frequency. |

Both Batch 188 category files are registered alongside the aggregate package.

## Batch 189 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Awakened Animal; Bardic Lore; Bloodline Magic; Bloodline Resistance | Reminders for animal benefits, lore checks, bloodline spell effects, resistances, actions, and frequency. |
| Equipment | Blood Bomb (Lesser); Blood Pack Squib; Blood Sight Elixir (Moderate); Blood-Drinker | Activation and use reminders for attacks, splash, blood effects, healing, damage, recovery, and frequency. |

Both Batch 189 category files are registered alongside the aggregate package.

## Batch 190 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Drop Dead; Earthquake; Eclipse Burst; Eagle's Cry | Cast reminders for death effects, terrain, light, auditory effects, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Acid Glob; Acid Maw; Acid Spurt; Acidic Effluence | Action reminders for acid attacks, areas, auras, persistent damage, saves, recovery, resistance, and frequency. |

Both Batch 190 category files are registered alongside the aggregate package.

## Batch 191 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Bard Weapon Expertise; Beast Eidolon; Blessed Armament; Chemical Hardiness | Reminders for proficiency, eidolon forms, divine weapons, poison defenses, attacks, traits, checks, and frequency. |
| Equipment | Bloodhound Mask (Greater); Bloodstone Doll (Minor); Bloodstride Boots; Boarding Axe | Activation and attack reminders for scent, linked effects, movement, weapons, duration, damage, and frequency. |

Both Batch 191 category files are registered alongside the aggregate package.

## Batch 192 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Earth's Bile; Earthworks; Eat Fire; Eject Soul | Cast reminders for acid, terrain, fire absorption, soul effects, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Back Away!; Backshot; Bad Deal; Balance Life | Action reminders for movement, attacks, bargains, healing, damage, saves, recovery, and frequency. |

Both Batch 192 category files are registered alongside the aggregate package.

## Batch 193 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Bone; Champion's Aura; Chirurgeon; Cleric Spellcasting | Reminders for resistances, auras, healing, divine spellcasting, saves, checks, duration, and frequency. |
| Equipment | Boarding Pike; Bogeyman Breath; Bolka's Blessing (Greater); Bonmuan Swapping Stone (Lesser) | Activation and attack reminders for weapon traits, inhalation, blessings, teleportation, damage, duration, and frequency. |

Both Batch 193 category files are registered alongside the aggregate package.

## Batch 194 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Elemental Betrayal; Elemental Motion; Elysian Whimsy; Embodiment of Battle | Cast reminders for elemental effects, movement, mental effects, combat forms, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Babbling Brook; Backpack Balloon; Bag of Dead Dragonflies; Baleful Gaze | Action reminders for auditory effects, flight, distraction, visual conditions, saves, recovery, and frequency. |

Both Batch 194 category files are registered alongside the aggregate package.

## Batch 195 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Combat Flexibility; Curse of Ancestral Meddling; Curse of Creeping Ashes; Druid Spellcasting | Reminders for temporary feats, curses, spellcasting, saves, stages, counteraction, duration, and frequency. |
| Equipment | Bonmuan Swapping Stone (Major); Booming Bell; Boots of Quick Marching; Boreal Staff | Activation reminders for teleportation, auditory effects, movement, spells, weapons, duration, and frequency. |

Both Batch 195 category files are registered alongside the aggregate package.

## Batch 196 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Embrace Nothingness; Empower Ley Line; Empty Pack; Entreat Spirit | Cast reminders for void defenses, ley lines, extradimensional storage, spirit bargains, duration, counteraction, and frequency. |
| Monster abilities | Baleful Glare; Baleful Polymorph (At Will); Ballista Defense; Bandit's Ambush | Action reminders for visual effects, polymorph, defenses, ambushes, saves, recovery, and frequency. |

Both Batch 196 category files are registered alongside the aggregate package.

## Batch 197 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Eidolon Unarmed Expertise; Elemental Eidolon; Encroaching Presence; Energy Barrier | Reminders for eidolon attacks, elemental traits, auras, resistances, actions, duration, and frequency. |
| Equipment | Bortled Favorite (Lesser); Bortled Favorite (Moderate); Bougainvillea Blossom (Lesser); Boughshatter | Activation reminders for item effects, inhalation, weapons, saves, damage, duration, and frequency. |

Both Batch 197 category files are registered alongside the aggregate package.

## Batch 198 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Environmental Endurance; Equal Footing; Erase Trail; Establish Nexus | Cast reminders for environmental protection, terrain, tracking, teleportation, duration, counteraction, and heightening. |
| Monster abilities | Battering Blow; Battering Frill; Battery Tower; Bash It Down | Action reminders for strikes, knockback, energy discharge, object damage, saves, recovery, and frequency. |

Both Batch 198 category files are registered alongside the aggregate package.

## Batch 199 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Esoteric Lore; Exalted Reaction; Exemplary Finisher; Expert Runes | Reminders for lore, reactions, finishers, runes, checks, critical effects, actions, and frequency. |
| Equipment | Bougainvillea Blossom (Moderate); Boots of the Secret Blade (Greater); Boots of the Secret Blade (Major); Boozy Bottle | Activation and exposure reminders for stealth, weapons, inhalation, conditions, duration, and frequency. |

Both Batch 199 category files are registered alongside the aggregate package.

## Batch 200 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Etheric Shards; Everlight; Execute; Expeditious Excavation | Cast reminders for force damage, illumination, death effects, excavation, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Barb Spray; Barbed Quills; Barrage of Force; Barrier Form | Action reminders for ranged attacks, quills, force barrages, defensive forms, persistent damage, recovery, and frequency. |

Both Batch 200 category files are registered alongside the aggregate package.

## Batch 201 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Explosion Dodger; Extract Element; Fourth Doctrine; Furious Footfalls | Reminders for area defense, elemental effects, doctrine progression, movement, checks, duration, and frequency. |
| Equipment | Brass Ear; Bravery Baldric (Flight); Breath of Freedom; Brightshade | Activation reminders for hearing, flight, escape, poison, conditions, duration, and frequency. |

Both Batch 201 category files are registered alongside the aggregate package.

## Batch 202 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Expunge Blood; Extract Poison; Eyes of the Dead; False Vision | Cast reminders for blood, poison, undead senses, illusions, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Battle Arrogance; Battle Roar; Beast's Charge; Barrel Launcher | Action reminders for combat benefits, roars, charges, projectiles, saves, damage, positioning, and frequency. |

Both Batch 202 category files are registered alongside the aggregate package.

## Batch 203 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Fourth Doctrine (Cloistered Cleric); Fourth Gate's Threshold; Fury Instinct; Greater Field Discovery | Reminders for doctrine, gates, rage, alchemical research, proficiencies, duration, and frequency. |
| Equipment | Fauna Guardian; Fearcracker; Fearless Sash; Feather Token (Chest) (Ammunition) | Activation reminders for animal benefits, fear, condition resistance, transformation, duration, and frequency. |

Both Batch 203 category files are registered alongside the aggregate package.

## Batch 204 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Feast of Supplication; Ferrous Form; Fey Abeyance; Fey Glamour | Cast reminders for offerings, metal forms, fey effects, illusions, saves, duration, recovery, counteraction, and frequency. |
| Monster abilities | Bastion; Battle-Grapple Innovation; Battle-Hardened Companion; Battle Mechanic | Action reminders for defenses, grapples, companions, devices, checks, recovery, and frequency. |

Both Batch 204 category files are registered alongside the aggregate package.

## Batch 205 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Greater Field Discovery (Mutagenist); Greater Field Discovery (Toxicologist); Greater Natural Reflexes; Greater Rogue Reflexes | Reminders for mutagens, poisons, Reflex defenses, reactions, stages, duration, and frequency. |
| Equipment | Feng Huo Lun; Ferrofluid Urchin (Greater); Fey Dragonet Liqueur; Fiendbreaker (Heroic) | Activation and attack reminders for fire, metal, fey effects, anti-fiend effects, saves, damage, and frequency. |

Both Batch 205 category files are registered alongside the aggregate package.

## Batch 206 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Fire Seeds; Fire's Pathway; Flame Dancer; Flame Strike | Cast reminders for fire areas, paths, movement, concealment, saves, damage, recovery, resistance, and heightening. |
| Monster abilities | Banner Bearer; Bark Command; Barbed Net; Barbed Trident | Action reminders for auras, commands, nets, weapon attacks, saves, immobilization, recovery, and frequency. |

Both Batch 206 category files are registered alongside the aggregate package.

## Batch 207 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Greater Weapon Specialization; Guardian Expertise; Gunslinger's Way; Expert Tactician | Reminders for weapon damage, guardian defenses, firearms, tactics, proficiency, runes, and frequency. |
| Equipment | Fighting Fan; Filcher's Fork; Fire Box; Fire Lance | Activation and attack reminders for weapon traits, theft, ignition, fire damage, ammunition, and frequency. |

Both Batch 207 category files are registered alongside the aggregate package.

## Batch 208 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Flame Vortex; Flame Wisp; Flaming Fusillade; Flicker | Cast reminders for fire areas, summoned wisps, repeated attacks, concealment, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Battleblooded; Battlefield Adaptability; Battlefield Command; Beetle Breath | Action reminders for resilience, tactics, commands, breath weapons, saves, recovery, and frequency. |

Both Batch 208 category files are registered alongside the aggregate package.

## Batch 209 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Greater Weapon Specialization (Barbarian); Halfling Luck; Halfling Lucky Draw; Half-Ear's Luck | Reminders for weapon specialization, fortune rerolls, perception checks, timing, and frequency. |
| Equipment | Firecracker Fulu; Firefoot Popcorn; Floating Tent (Four-Person); Field Guide | Activation reminders for fire, movement, shelter, exploration, duration, and frequency. |

Both Batch 209 category files are registered alongside the aggregate package.

## Batch 210 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Floating Harness; Flowing Strike; Force Fang; Force Rain | Cast reminders for movement, attacks, force damage, areas, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Blast Resistance; Battlefield Scrounger; Battleforger; Bite and Gnaw | Action reminders for resistance, tactics, crafting, attacks, damage, recovery, and frequency. |

Both Batch 210 category files are registered alongside the aggregate package.

## Batch 211 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Haft Beatdown; Halcyon Speaker; Half-Speaker; Halo | Reminders for weapon maneuvers, speech, magic, auras, checks, duration, and frequency. |
| Equipment | Feather Token (Fan); Feather Token (Tree); Firestarter Pellets; Fireworks Display | Activation reminders for wind, transformation, ignition, visual effects, saves, duration, and frequency. |

Both Batch 211 category files are registered alongside the aggregate package.

## Batch 212 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Forced Quiet; Forgotten Lines; Hall of Mirrors; Hallowed Wheel | Cast reminders for silence, memory, illusions, sanctified areas, saves, duration, recovery, and counteraction. |
| Monster abilities | Blast Tumbler; Blasting Stone (Moderate); Black Water Breath; Blizzard Breath | Action reminders for blasts, breath weapons, cold, water, saves, damage, terrain, recovery, and frequency. |

Both Batch 212 category files are registered alongside the aggregate package.

## Batch 213 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Halo of Blades | Reminders for aura, weapon, reaction, positioning, duration, and frequency. |
| Equipment | Flare Snare; Flashblade (Major); Flask of Fellowship; Flawless Celestial Shawl | Activation and trap reminders for fire, visual effects, social effects, defenses, saves, duration, and frequency. |

Both Batch 213 category files are registered alongside the aggregate package.

## Batch 214 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Heaving Earth; Heinous Future; Howling Blizzard; Hymn of Healing | Cast reminders for terrain, prediction, cold, healing, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Haunting Gaze; Heart Ripper; Healing Sanctuary; Harrowing Vision | Action reminders for visual effects, attacks, healing, fear, saves, recovery, and frequency. |

Both Batch 214 category files are registered alongside the aggregate package.

## Batch 215 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Hampering Shot; Hampering Slash; Hampering Strike; Hard to Fool | Reminders for attack penalties, movement conditions, deception defenses, duration, recovery, and frequency. |
| Equipment | Healer's Gloves; Healing Vapor (Moderate); Heartblood Ring; Heartmoss (Major) | Activation reminders for Medicine, healing, poison removal, vitality, wounded recovery, and frequency. |

Both Batch 215 category files are registered alongside the aggregate package.

## Batch 216 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Illusory Creature; Implosion; Impending Doom; Imprinting Hand | Cast reminders for illusions, force damage, doom, touch effects, saves, duration, recovery, counteraction, and heightening. |
| Monster abilities | Hardened Locust Knight; Hard Tail; Hammer Quake; Handmaiden's Command | Action reminders for defenses, tail attacks, quakes, commands, saves, damage, recovery, and frequency. |

Both Batch 216 category files are registered alongside the aggregate package.

## Batch 217 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Inexorable Iron; Infused Reagents; Initiate Benefit (Amulet); Initiate Benefit (Chalice) | Reminders for stances, alchemy, relic benefits, healing, defenses, duration, and frequency. |
| Equipment | Hatchet; Hauling; Head Gem; Heart Bloodstone of Arazni | Activation and attack reminders for weapons, bulk, perception, vitality, recovery, and frequency. |

Both Batch 217 category files are registered alongside the aggregate package.

## Batch 218 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Inertia Lock; Inevitable Disaster; Infectious Ennui; Infectious Melody | Cast reminders for movement control, prediction, mental effects, recurring effects, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Harrow Burst; Harrowing Misfortune; Healing Prayer; Healing Hands | Action reminders for card effects, misfortune, healing, saves, recovery, wounded status, and frequency. |

Both Batch 218 category files are registered alongside the aggregate package.

## Batch 219 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Interrogation Methodology; Inventor Weapon Mastery; Initiate Benefit (Wand); Harmonize | Reminders for interrogation, innovation weapons, relic benefits, spellcasting, skills, duration, and frequency. |
| Equipment | Heartening Missive (Bull); Heartening Missive (Butterfly); Heartening Missive (Rabbit); Heedless Spurs | Activation reminders for morale, movement, social effects, language, duration, and frequency. |

Both Batch 219 category files are registered alongside the aggregate package.

## Batch 220 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Insect Form; Instant Minefield; Instant Parade; Internal Insurrection | Cast reminders for polymorph, traps, summons, mental effects, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Harrow Reader; Harvest Heartsliver; Halo Pulse; Harmonized Spellcasting | Action reminders for card effects, vitality, auras, spellcasting, saves, recovery, and frequency. |

Both Batch 220 category files are registered alongside the aggregate package.

## Batch 221 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Equipment | Implosion Dust (Lesser); Impossible; Incense Bundle of Annual Blessings; Inexplicable Apparatus | Activation reminders for force effects, blessings, devices, checks, duration, and frequency. |

The Batch 221 equipment file is registered alongside the aggregate package; no new uncovered feat names were identified in this source segment.

## Batch 222 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Infiltrator's Tunnel; Infuse Vitality; Inner Radiance Torrent; Inner Upheaval | Cast reminders for movement, vitality, light, mental effects, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Improved Command Corpse; Infected Wounds; Infernal Command; Intercepting Hand | Action reminders for undead control, disease, commands, reactions, saves, recovery, and frequency. |

Both Batch 222 category files are registered alongside the aggregate package.

## Batch 223 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Lesson of Decay; Lesson of Favors; Lesson of Life; Lesson of Protection | Reminders for hexes, favors, healing, defenses, saves, duration, recovery, and frequency. |
| Equipment | Leather Lamellar; Leeching Fangs; Legerdemain Handkerchief; Leydroth Spellbreaker | Activation and attack reminders for armor, draining attacks, Thievery, counteracting, damage, and frequency. |

Both Batch 223 category files are registered alongside the aggregate package.

## Batch 224 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Life Tap; Life-Giving Form; Life's Fresh Bloom; Lightning Bolt | Cast reminders for vitality transfer, forms, healing, electricity, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Jump Jets; Keen Eyes; Kick Dust; Knife Jab | Action reminders for movement, perception, dust, attacks, saves, damage, recovery, and frequency. |

Both Batch 224 category files are registered alongside the aggregate package.

## Batch 225 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Master Necromancy; Master of Mind and Spirit; Master Spellcaster; Master Tactician | Reminders for necromancy, mental defenses, spellcasting, tactics, proficiency, duration, and frequency. |
| Equipment | Maelstromic Destabilizer (Moderate); Mage's Hat (Greater); Mageslayer; Magical Lock Fulu | Activation and attack reminders for energy, spells, anti-magic, locks, counteracting, duration, and frequency. |

Both Batch 225 category files are registered alongside the aggregate package.

## Batch 226 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Magnetize; Manifest Will; Manifestation of Spirits; Massacre | Cast reminders for metal control, mental effects, spirits, death, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Knock; Kobold Breath; Korog's Command; Larcenous Hand | Action reminders for attacks, breath, commands, theft, saves, damage, recovery, and frequency. |

Both Batch 226 category files are registered alongside the aggregate package.

## Batch 227 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Oracular Senses; Order of the Gate | Reminders for revelation, perception, order, stance, movement, duration, and frequency. |
| Equipment | Necklace of Fireballs III; Necklace of Fireballs IV; Necklace of Strangulation; Necrotic Cap (Greater) | Activation reminders for fireballs, strangulation, void, saves, persistent effects, duration, recovery, and frequency. |

Both Batch 227 category files are registered alongside the aggregate package.

## Batch 228 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Negate Aroma; Nothing Up My Sleeve; Noxious Metals; Noxious Vapors | Cast reminders for scent, concealment, metal, poison, saves, duration, recovery, resistance, and heightening. |
| Monster abilities | Lightning Lash; Lignifying Bite; Lion Jaws; Lunging Bite | Action reminders for electricity, poison, bites, reach, bleed, saves, damage, recovery, and frequency. |

Both Batch 228 category files are registered alongside the aggregate package.

## Batch 229 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Malleable Movement; Magical Adept; Magical Knowledge; Magical Scholastics | Reminders for movement, magical training, Recall Knowledge, proficiency, spell access, and frequency. |
| Spells | Mind Games; Mind Probe; Monstrosity Form; Positive Attunement | Cast reminders for mental effects, Will saves, polymorph forms, healing or damage, duration, recovery, resistance, and heightening. |
| Equipment | Malefic Mirror; Mamlambo Scale; Majordomo Torc; Magnetic Suit (Major) | Activation reminders for reflections, aquatic benefits, commands, metal targets, movement, defenses, duration, and frequency. |
| Monster abilities | Maddening Cacophony; Magnetic Attraction; Malicious Spirits; Malleable Shape | Action reminders for auditory and mental effects, metal movement, spirits, shapechanging, saves, recovery, and frequency. |

All four Batch 229 category files are registered alongside the aggregate package.

## Batch 230 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Pack Stalker; Pain Tolerance; Paragon Battle Medicine; Pact of Infernal Prowess | Reminders for group positioning, damage mitigation, Battle Medicine, pact benefits, checks, recovery, and frequency. |
| Spells | Percussive Impact; Petal Storm; Phantasmagoria; Pinpoint | Cast reminders for sonic impact, area damage, illusions, perception, saves, duration, resistance, counteracting, and heightening. |
| Equipment | Parchment of Secrets; Passage Charm; Pendant of the Occult (Greater); Prognostic Veil (Greater) | Activation reminders for knowledge, passage, occult defenses, foresight, checks, duration, charges, and frequency. |
| Monster abilities | Panicked Flutter; Panicked Withdrawal; Panicking Touch; Paralyzing Spew | Action reminders for movement, fear, touch attacks, poison, paralysis, saves, recovery, immunity, and frequency. |

All four Batch 230 category files are registered alongside the aggregate package.

## Batch 231 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Quick Bomber; Quick Shot; Quicken Heartbeat; Radiant Burst | Reminders for bomb actions, ranged attacks, recovery, temporary vitality, area damage, saves, and frequency. |
| Spells | Rallying Anthem; Repel Metal; Restoration; Retrocognition | Cast reminders for morale, metal movement, condition removal, historical perception, duration, counteracting, and heightening. |
| Equipment | Quicksilver Cloak; Quick-Change Outfit; Phoenix Cinder; Pheromone Flare (Greater) | Activation reminders for speed, disguise, fire, recovery, scent, mental effects, duration, and frequency. |
| Monster abilities | Queen's Laugh; Raise Bone Wall; Raking Sand; Rancid Bloat | Action reminders for auditory fear, terrain, cover, sand, poison, saves, recovery, immunity, and frequency. |

All four Batch 231 category files are registered alongside the aggregate package.

## Batch 232 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Sacred Ground; Sanguine Evasion; Scout's Charge; Scavenger's Search | Reminders for sanctified areas, defenses, charges, exploration, checks, duration, and frequency. |
| Spells | Schadenfreude; Shatter; Shadow Projectile; Soothing Mist | Cast reminders for mental reactions, object damage, shadow attacks, healing, saves, duration, resistance, and heightening. |
| Equipment | Sanguine Mutagen (Greater); Sanitizing Pin; Sash of Prowess (Greater); Scapular of Shields | Activation reminders for mutagen benefits, cleansing, skill bonuses, shields, drawbacks, duration, and frequency. |
| Monster abilities | Sand Vacuum; Scamp Tangle; Scamp Whirlwind; Scarecrow's Leer | Action reminders for forced movement, entanglement, attacks, fear, saves, recovery, immunity, and frequency. |

All four Batch 232 category files are registered alongside the aggregate package.

## Batch 233 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Tactical Entry; Tail Snatch; Tangle of Limbs; Tempest Gaze | Reminders for positioning, reactions, disarms, immobilization, storm effects, attacks, saves, and frequency. |
| Spells | Tanglecurse; Telekinetic Rend; Tempest Surge; Time Beacon | Cast reminders for curses, forced movement, electricity, temporal triggers, duration, counteracting, and heightening. |
| Equipment | Tasset of Flexibility; Tear-Away Clothing; Tenderizer Grenade (Major); Thunderblast Slippers | Activation reminders for movement, quick changes, grenades, sonic effects, damage, recovery, ammunition, and frequency. |
| Monster abilities | Tail Spin; Tangling Chains; Taunting Skull; Techno-Junk Plasma Rifle | Action reminders for area attacks, chains, mental effects, plasma, saves, escape, resistance, and frequency. |

All four Batch 233 category files are registered alongside the aggregate package.

## Batch 234 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Ultimate Flexibility; Ultimate Mercy; Ultimate Polymath; Uncanny Bombs | Reminders for skill flexibility, healing, spell access, bomb targeting, action costs, recovery, and frequency. |
| Spells | Unblinking Flame Revelation; Uncover Device; Unholy Army; Untamed Form | Cast reminders for revelation, device detection, summoned creatures, polymorph forms, duration, counteracting, and heightening. |
| Equipment | Unifying Emblem (Shadde-Quah); Unifying Emblem (Shundar-Quah); Unifying Emblem (Sklar-Quah); Unmemorable Mantle (Greater) | Activation reminders for faction benefits, concealment, memory, defenses, duration, charges, and frequency. |
| Monster abilities | Unbodied Possession; Undead Murder; Unnerving Gaze; Unruly Mushrooms | Action reminders for possession, death, fear, visual effects, spores, saves, recovery, immunity, and frequency. |

All four Batch 234 category files are registered alongside the aggregate package.

## Batch 235 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Vantage Shot; Vigorous Health; Vanara Weapon Trickery; Vanish Into the Land | Reminders for ranged attacks, vitality, weapon benefits, stealth, terrain, detection, and frequency. |
| Spells | Vengeful Glare; Vitrifying Blast; Warp Step; Weapon Storm | Cast reminders for visual retaliation, petrification, teleportation, weapon attacks, duration, resistance, and heightening. |
| Equipment | Vaporous Pipe; Velicarn's Cursed Coin; Vexing Vapor (Major); Vine Arrow | Activation reminders for smoke, curses, mental effects, poison, entanglement, recovery, and frequency. |
| Monster abilities | Venomous Aura; Vicelike Jaws; Vile Lash; Vengeful Flash | Action reminders for poison, bites, lash attacks, retaliatory effects, saves, recovery, resistance, and frequency. |

All four Batch 235 category files are registered alongside the aggregate package.

## Batch 236 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | You Can't Hide From Us; Zealous Inevitability | Reminders for detection, pursuit, defenses, checks, duration, and frequency. |
| Monster abilities | Yellow Eye Beam; Yowl; Yank; Zephyr Guard; Zura's Gift; Zombie Rot | Action reminders for visual and auditory effects, forced movement, wind, vampiric effects, disease, saves, recovery, immunity, and frequency. |

The X–Z sweep found no additional unrepresented spell or equipment entries in the installed `spells` and `equipment` packs; the two Batch 236 category files are registered alongside the aggregate package.

## Batch 237 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Become Shadow; Bend Space; Beneath Notice; Boaster's Challenge | Reminders for concealment, spatial movement, stealth, challenges, checks, duration, and frequency. |
| Spells | Divine Aura; Dust Storm; Freeze Time; Gravity Wave | Cast reminders for divine areas, wind, temporal actions, forced movement, saves, duration, resistance, and heightening. |
| Equipment | Boulder Seed; Brooch of Inspiration (Greater); Buoyant Buckle; Cape of Illumination (Lesser) | Activation reminders for terrain, inspiration, buoyancy, light, defenses, duration, charges, and frequency. |
| Monster abilities | Allergen Aura; Apocalyptic Roar; Aversion Beam; Calcifying Venom | Action reminders for poison, auditory effects, compulsion, petrification, saves, recovery, immunity, resistance, and frequency. |

All four Batch 237 category files are registered alongside the aggregate package.

## Batch 238 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Bless Tonic; Blood Shield; Boost Summons; Breath of Calamity | Reminders for tonic benefits, defenses, summoned creatures, breath effects, duration, recovery, and frequency. |
| Spells | Divine Immolation; Dragon Form; Mirror Malefactors; Frostbite | Cast reminders for divine fire, polymorph forms, mirrors, cold attacks, saves, duration, resistance, and heightening. |
| Equipment | Bristling Spines (Lesser); Broadleaf Shield (Greater); Broken Tusk Pendant (Greater); Cognitive Mutagen (Greater) | Activation reminders for retaliation, shields, defenses, mental benefits, drawbacks, duration, charges, and frequency. |
| Monster abilities | Accursed Claws; Agony Lash; Adamantine Bite; Benthic Bite | Action reminders for claws, pain, adamantine attacks, aquatic bites, curses, saves, recovery, resistance, and frequency. |

All four Batch 238 category files are registered alongside the aggregate package.

## Batch 239 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Call From Death's Door; Call of the Wild; Cast Out; Cleansing Light | Reminders for recovery, animal allies, banishment, condition removal, checks, duration, and frequency. |
| Spells | Divine Plagues; Door to Beyond; Downpour; Dragon Breath | Cast reminders for afflictions, portals, weather, breath weapons, saves, duration, resistance, and heightening. |
| Equipment | Candlecap; Cape of Grand Entrances; Capsaicin Tonic; Captivating Bauble | Activation reminders for light, social checks, heat, mental effects, duration, recovery, charges, and frequency. |
| Monster abilities | Cannon Blast; Caustic Touch; Churning Gaze; Cloud of Giggles | Action reminders for ranged blasts, acid, visual effects, mental effects, saves, recovery, resistance, and frequency. |

All four Batch 239 category files are registered alongside the aggregate package.

## Batch 240 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Dance of Thunder; Deadly Aim; Dismantle Spell; Deflect Projectile | Reminders for electricity, ranged attacks, counteracting, projectile defense, damage, duration, and frequency. |
| Spells | Divine Dragon's Watch; Divine Wrath; Dull Ambition; Dread Secret | Cast reminders for wards, divine damage, mental penalties, fear, saves, duration, counteracting, and heightening. |
| Equipment | Deadweight Mutagen (Major); Death Tusk Helm; Defoliation Bomb (Greater); Devilwing Badge | Activation reminders for mutagen drawbacks, tusks, bombs, infernal movement, duration, charges, and frequency. |
| Monster abilities | Death Drider Venom; Decaying Touch; Disfiguring Bite; Dread Gaze | Action reminders for poison, decay, bites, visual fear, saves, recovery, immunity, resistance, and frequency. |

All four Batch 240 category files are registered alongside the aggregate package.

## Batch 241 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Earth to Heavens Strike; Easily Dismissed; Eclectic Polymath; Elemental Explosion | Reminders for attacks, dismissal, spell access, elemental areas, duration, recovery, and frequency. |
| Spells | Foul Miasma; Frenzied Revelry; Friends to Foes; Fortissimo Composition | Cast reminders for poison, emotion, compelled behavior, performance, saves, duration, resistance, and heightening. |
| Equipment | Eagle Wing; Earthglide Cloak; Earthsight Box; Eldritch Flare | Activation reminders for flight, earth movement, detection, magical attacks, duration, charges, and frequency. |
| Monster abilities | Ebbing Cloud; Emerald Beam; Enervating Howl; Eye Beam | Action reminders for concealment, energy, drained effects, visual attacks, saves, recovery, resistance, and frequency. |

All four Batch 241 category files are registered alongside the aggregate package.

## Batch 242 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Fabricate Truth; Far Shot; Ferocious Charge; Foretell Harm | Reminders for deception, ranged attacks, charges, predictions, checks, duration, and frequency. |
| Spells | Ghostly Shift; Glacial Skewer; Grasping Vine; Gust of Wind | Cast reminders for incorporeal movement, cold, immobilization, wind, saves, duration, resistance, and heightening. |
| Equipment | Flag of the Stronghold; Flaming Star (Major); Foe-Sensing Rod; Force Tiles | Activation reminders for defenses, fire, detection, force, area placement, duration, charges, and frequency. |
| Monster abilities | Giant Spider Venom; Ghostly Grasp; Giant Ant Venom; Grasping Tendrils | Action reminders for poison, incorporeal grabs, tendrils, saves, recovery, immunity, resistance, and frequency. |

All four Batch 242 category files are registered alongside the aggregate package.

## Batch 243 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Gadget Specialist; Galvanize Spell; Giant Slayer; Grievous Blow | Reminders for gadgets, spell enhancement, anti-giant attacks, critical effects, duration, and frequency. |
| Spells | Ghostly Transcription; Glimmer of Charm; Gluttonous Growth; Hydraulic Torrent | Cast reminders for writing, charm, growth, water, saves, duration, resistance, and heightening. |
| Equipment | Ghost Scarf; Giant Catch Pole; Golden Branding Iron (Major); Grounding Spike | Activation reminders for incorporeal movement, restraint, marking, electricity, duration, charges, and frequency. |
| Monster abilities | Heat Beam; Hellfire Blast; Howl of Ash and Ember; Hydraulic Breath | Action reminders for fire, auditory effects, water, forced movement, saves, recovery, resistance, and frequency. |

All four Batch 243 category files are registered alongside the aggregate package.

## Batch 244 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Halyard Strike; Heroic Defiance; Homing Shot; Hush | Reminders for attacks, recovery, ranged targeting, silence, duration, and frequency. |
| Spells | Helpful Wood Spirits; Horizon Thunder Sphere; Hungry Depths; Invoke Spirits | Cast reminders for summoned support, thunder, aquatic effects, spirits, saves, duration, resistance, and heightening. |
| Equipment | Hellfire Boots; Helm of the Tides; Holy Prayer Beads (Greater); Instant Fortress | Activation reminders for fire, aquatic movement, divine effects, structures, duration, charges, and frequency. |
| Monster abilities | Haunting Touch; Hellfire Breath; Hurricane Blast; Isolating Howl | Action reminders for touch attacks, fire, wind, auditory separation, saves, recovery, resistance, and frequency. |

All four Batch 244 category files are registered alongside the aggregate package.

## Batch 245 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | I Meant to do That; Ill Tide; Impossible Riposte; In Plain Sight | Reminders for recovery, misfortune, reactions, stealth, checks, duration, and frequency. |
| Spells | Incarnate Ancestry; Indolent Haze; Invoke the Harrow; It is Written | Cast reminders for incarnate forms, haze, divination, inscriptions, duration, counteracting, and heightening. |
| Equipment | Insight Coffee (Greater); Instructions for Lasting Agony; Inventor's Fulu; Jiang-Shi Bell | Activation reminders for mental benefits, afflictions, inventions, undead effects, duration, charges, and frequency. |
| Monster abilities | Immense Mandragora Venom; Ink Cloud; Impaling Barrage; Impaling Charge | Action reminders for poison, concealment, ranged attacks, charges, saves, recovery, resistance, and frequency. |

All four Batch 245 category files are registered alongside the aggregate package.

## Batch 246 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Janni Hospitality; Jealous Grip; Jotun's Transposition; Knight in Shining Armor | Reminders for social benefits, grabs, teleportation, mounted defense, checks, duration, and frequency. |
| Spells | Kaiju Ward | Cast reminders for protective wards, size, defenses, range, duration, counteracting, and heightening. The installed spell pack had no other unrepresented J/K spell entries in this sweep. |
| Equipment | Jade; Jistkan Colossus Crusher; Jolt Coil (Greater); Juggernaut Mutagen (Major) | Activation reminders for material effects, construct weapons, electricity, mutagen benefits, drawbacks, duration, charges, and frequency. |
| Monster abilities | Jorogumo Venom; Karumzek Venom; Kernel Barrage; Keeper's Touch | Action reminders for poison, ranged attacks, touch effects, saves, recovery, immunity, resistance, and frequency. |

The four Batch 246 category files are registered alongside the aggregate package.

## Batch 247 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Kip Up; Knockback; Kobold Momentum; Know Thy Doom | Reminders for movement, prone, forced movement, checks, circumstance benefits, knowledge, fear, duration, and frequency. |
| Spells | Labyrinthine Prison; Lashing Rope; Leaden Steps; Lightning Bolt | Cast reminders for containment, restraint, movement penalties, line damage, saves, counteracting, resistance, range, and heightening. |
| Equipment | Kalmaug's Journal; Key of Unwinding; Kindled Tome; Kols's Oath (Greater) | Activation reminders for research, unlocking, fire, spellcasting, oath, protection, duration, charges, and frequency. |
| Monster abilities | Kick Dust; Kobold Breath; Kaiju Ray; Ki Storm | Action reminders for area effects, concealment, breath, ranged rays, supernatural damage, saves, recovery, resistance, and frequency. |

The four Batch 247 category files are registered alongside the aggregate package.

## Batch 248 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Land Legs; Lasting Armament; Leap and Fire; Lightless Sight | Reminders for movement, weapon enhancement, jumping attacks, vision, checks, duration, and frequency. |
| Spells | Linnorm Sting; Living Thunderbolt; Lock Item; Lotus Walk | Cast reminders for poison, electricity, magical locks, movement, saves, recovery, counteracting, range, and heightening. |
| Equipment | Librarian Staff; Life-Saver Mail; Lightning Rod Shot; Luck Blade | Activation reminders for staff knowledge, emergency protection, electricity, fortune, damage, charges, and frequency. |
| Monster abilities | Lacridaemon Venom; Lantern King's Glow; Launch Lava; Leech Essence | Action reminders for poison, light, mental effects, lava, draining, saves, recovery, resistance, and frequency. |

The four Batch 248 category files are registered alongside the aggregate package.

## Batch 249 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Magical Resistance; Maiden's Mending; Manipulate Realm; Marsh Runner | Reminders for magical defense, repair, terrain manipulation, movement, checks, duration, and frequency. |
| Spells | Medusa's Wrath; Menacing Lament; Mirror's Misfortune; Moonburst | Cast reminders for petrification, fear, misfortune, area damage, saves, recovery, resistance, and heightening. |
| Equipment | Magnetic Shot (Greater); Magnetite Scope (Greater); Mask of the Cursed Eye; Mat of Resilience (Greater) | Activation reminders for magnetic attacks, sight, curses, resistance, recovery, duration, charges, and frequency. |
| Monster abilities | Magma Breath; Magnetic Attraction (At Will); Malevolent Possession; Mandragora Venom | Action reminders for cones, forced movement, possession, poison, saves, recovery, resistance, and frequency. |

The four Batch 249 category files are registered alongside the aggregate package.

## Batch 250 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Negate Damage; Not This Time; Nodal Healing; One Life, Two Vessels | Reminders for damage prevention, rerolls, healing, survival, reactions, duration, and frequency. |
| Spells | Nature Incarnate; Necrotic Bomb; Noxious Metals; Outcast's Curse | Cast reminders for transformation, void damage, poison, curses, saves, recovery, resistance, and heightening. |
| Equipment | Necklace of Fireballs VI; Nevercold (Compressed); Nexian Sealing Blade; Numbing Tonic (Major) | Activation reminders for fireball areas, cold protection, sealing attacks, tonic benefits, damage, duration, charges, and frequency. |
| Monster abilities | Nauseating Display; Necromantic Discharge; Necrotic Decay; Nessari Venom | Action reminders for visual effects, void damage, afflictions, poison, saves, recovery, resistance, and frequency. |

The four Batch 250 category files are registered alongside the aggregate package.

## Batch 251 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Paired Shots; Paralyzing Jewel; Penetrating Shot; Plane Step | Reminders for paired attacks, immobilization, line attacks, planar movement, reactions, range, and frequency. |
| Spells | Perfect Strike; Pest Swarm; Phoenix Ward; Purple Worm Sting | Cast reminders for attacks, swarm areas, protective recovery, poison, saves, resistance, sustain, and heightening. |
| Equipment | Parachute Mail; Petrification Cannon; Poison Concentrator (Major); Portable Seal (Major) | Activation reminders for falling protection, petrification, poison modification, sealing, recovery, ammunition, charges, and frequency. |
| Monster abilities | Paralytic Venom; Passionate Kiss; Pattern Attack; Pebblefang Poison | Action reminders for poison, paralysis, mental effects, visual areas, saves, recovery, resistance, and frequency. |

The four Batch 251 category files are registered alongside the aggregate package.

## Batch 252 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Quickening Banner; Quill Spray; Reactive Striker; Reanimate Foe | Reminders for ally movement, ranged attacks, reactions, reanimation, aura range, duration, and frequency. |
| Spells | Rapid Retreat; Ravenous Reanimation; Roaring Applause; Rouse Skeletons | Cast reminders for movement, undead creation, auditory control, saves, sustain, duration, and heightening. |
| Equipment | Reactive Mail (Major); Reflecting Shard (Greater); Ring of Spell Turning; Roaring Potion (Lesser) | Activation reminders for reactions, reflection, spell redirection, sonic effects, counteracting, charges, and frequency. |
| Monster abilities | Quick Envenom; Quicksand; Rain of Knives; Raging Debris Storm | Action reminders for poison, hazards, area attacks, immobilization, persistent damage, recovery, resistance, and frequency. |

The four Batch 252 category files are registered alongside the aggregate package.

## Batch 253 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Sacrifice Armor; Sap Life; Scattering Charge; Second Sting | Reminders for damage prevention, life drain, charges, follow-up poison attacks, reactions, and frequency. |
| Spells | Scramble Body; Shadow Raid; Share Burden; Shockwave | Cast reminders for transformation, shadow damage, damage sharing, force, saves, movement, sustain, and heightening. |
| Equipment | Sanguine Mutagen (Major); Sapling Shield (Major); Screech Shooter (Major); Shadow Shroud | Activation reminders for mutagen benefits, shields, sonic attacks, concealment, drawbacks, duration, and frequency. |
| Monster abilities | Sarglagon Venom; Sarracenia's Ire; Scalathrax Venom; Sandstorm Wrath | Action reminders for poison, area damage, sandstorm hazards, saves, recovery, resistance, and frequency. |

The four Batch 253 category files are registered alongside the aggregate package.

## Batch 254 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Telepathic Union; Temporary Possession; Thunderous Landing; Tidal Wave | Reminders for telepathy, possession, landing attacks, water movement, mental effects, saves, and frequency. |
| Spells | Tear the Veil; Teeth to Terror; Telekinetic Rend (Bludgeoning); Touch of Undeath | Cast reminders for revelation, fear, telekinetic damage, void effects, counteracting, resistance, and heightening. |
| Equipment | Tangle Root Toxin; Tears of Death; Telekinetic Converters; Tentacle Cannon (Greater) | Activation reminders for poison, death effects, weapon modifications, grabbed or restrained targets, ammunition, and frequency. |
| Monster abilities | Tail Thrash; Tarn Linnorm Venom; Taunt Quarry; Tearing Hooks | Action reminders for sweep attacks, poison, compulsion, grapples, bleeding, saves, recovery, resistance, and frequency. |

The four Batch 254 category files are registered alongside the aggregate package.

## Batch 255 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Vicious Critique; Venom Purge; Violent Vines; Warp Path | Reminders for critical debilitation, poison removal, vines, teleportation, saves, escape, and frequency. |
| Spells | Vindicator's Judgment; Vital Seed; Warped Terrain; Wrathful Storm | Cast reminders for judgment damage, healing, terrain, storms, persistent effects, sustain, and heightening. |
| Equipment | Violet Ray; Volcanic Vigor; Vortex Pouch; Wand of Paralytic Shock (3rd-Rank) | Activation reminders for rays, fire protection, suction, paralysis, charges, resistance, duration, and frequency. |
| Monster abilities | Venom Pool; Venom Spit; Vicious Strafe; Vicious Blow | Action reminders for poison areas, ranged attacks, multi-target strafes, critical damage, recovery, resistance, and frequency. |

The four Batch 255 category files are registered alongside the aggregate package.

## Batch 256 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Zombie | Reminder for undead transformation, resistances, recovery, duration, and frequency. |
| Spells | No unrepresented X/Y/Z spell entries found in the installed spell pack during this sweep. | None added. |
| Equipment | No unrepresented X/Y/Z equipment entries found in the installed equipment pack during this sweep. | None added. |
| Monster abilities | You're Coming with Us; Zone of Truth; Your Legacies are Failures | Action reminders for capture, truth compulsion, mental effects, saves, escape, duration, immunity, and frequency. |

The four Batch 256 category files are registered alongside the aggregate package.

## Batch 257 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Bear Empathy; Belay That!; Bind Heroic Spirit; Black Powder Blaze | Reminders for animal communication, reactions, spirit effects, firearm areas, saves, duration, and frequency. |
| Spells | Distracting Chatter; Diviner's Sight; Dizzying Colors; Dome of Tranquility | Cast reminders for auditory interference, divination, visual effects, protection, counteracting, sustain, and heightening. |
| Equipment | Box of Unspoiling (Type II); Brooch of Inspiration; Burglar's Rosebud; Cape of the Open Sky | Activation reminders for preservation, fortune, Thievery, flight, unlocking, duration, charges, and frequency. |
| Monster abilities | Aerial Attack; Aftershock; Agonizing Thorns; Air Blast | Action reminders for flight attacks, secondary areas, thorns, forced movement, saves, recovery, resistance, and frequency. |

The four Batch 257 category files are registered alongside the aggregate package.

## Batch 258 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Call Draconic Ally; Cannon Corner Shot; Caterwaul; Cellular Reconstruction | Reminders for summoned allies, firearm positioning, sonic effects, healing, saves, duration, and frequency. |
| Spells | Domora's Defense; Dragon Wings; Dread Mosquito Storm; Draw Moisture | Cast reminders for protection, flight, swarm poison, dehydration, recovery, sustain, and heightening. |
| Equipment | Capturing Spetum; Cave Worm Venom; Charm of Resistance (Major); Chronomancer Staff | Activation reminders for capture, poison, resistance, time effects, escape, charges, duration, and frequency. |
| Monster abilities | Calamitous Roar; Call of the Depths; Capturing Strands; Carrion Vortex | Action reminders for auditory control, aquatic compulsion, restraint, disease, saves, recovery, resistance, and frequency. |

The four Batch 258 category files are registered alongside the aggregate package.

## Batch 259 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Eidolon's Trample; Emergency Medical Assistance; Energy Interceptor; Enervating Wail | Reminders for trample attacks, recovery, energy resistance, draining sounds, saves, reactions, and frequency. |
| Spells | Frog Tongue; Fated Healing; Fear the Sun; Flame Vortex | Cast reminders for forced movement, healing, fear, fire, persistent effects, recovery, sustain, and heightening. |
| Equipment | Ebon Fulcrum Lens; Eidolon Cape; Energizing Vial (Greater); Etheric Essence Disruptor (Major) | Activation reminders for spell focus, eidolon movement, restoration, anti-spirit effects, charges, duration, and frequency. |
| Monster abilities | Earth-Shattering Strike; Ectoplasmic Grasp; Ectoplasmic Explosion; Ectoplasmic Web | Action reminders for area impacts, incorporeal control, force damage, restraint, saves, recovery, resistance, and frequency. |

The four Batch 259 category files are registered alongside the aggregate package.

## Batch 260 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Gecko's Grip; Ghost Blade; Gigavolt; Goring Charge | Reminders for climbing, incorporeal attacks, electricity, charges, saves, reach, and frequency. |
| Spells | Gift of the Anemos; Glimpse the Truth; Grasping Earth; Gravity Weapon | Cast reminders for wind, revelation, terrain control, weapon enhancement, sustain, counteracting, and heightening. |
| Equipment | Gnawbone Toxin; Golden Wings (Major); Goo Grenade (Major); Gravedigger's Call | Activation reminders for poison, flight, restraint, undead effects, escape, duration, charges, and frequency. |
| Monster abilities | Ghostly Menace; Ghostly Touch; Gem Gaze; Ghastly Visage | Action reminders for incorporeal attacks, visual effects, fear, saves, recovery, resistance, immunity, and frequency. |

The four Batch 260 category files are registered alongside the aggregate package.

## Batch 261 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Immobile Form; Improved Knockback; Incorporeal Shot; Infernal Interference | Reminders for defenses, forced movement, ghost-touch attacks, spell disruption, reactions, and frequency. |
| Spells | Incarnate Faerie Revelers; Incarnate Wild Rose; Inevitable Disaster; Jealous Hex | Cast reminders for incarnate forms, delayed effects, curses, saves, sustain, counteracting, and heightening. |
| Equipment | Insight Coffee (Moderate); Iron Wine; Jian of Life's Duality; Juggernaut Mutagen (Greater) | Activation reminders for mental benefits, fortification, dual healing and harm, mutagen benefits, drawbacks, duration, and frequency. |
| Monster abilities | Impale Trespasser; Impaling Briars; Impose Paralysis; Icy Death | Action reminders for impaling attacks, restraint, paralysis, cold, death effects, saves, recovery, resistance, and frequency. |

The four Batch 261 category files are registered alongside the aggregate package.

## Batch 262 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Kinetic Dampening; Know the Beat; Knowledge is Power; Kindle Inner Flames | Reminders for damage reduction, rhythm, Recall Knowledge, fire, checks, duration, and frequency. |
| Spells | Love's Sacrifice; Lucky Break; Luminous Stardust Healing; Mending | Cast reminders for protection, fortune, healing, repair, recovery, counteracting, and heightening. |
| Equipment | Kin-Warding; Knapsack of Halflingkind (Greater); Knight's Maintenance Kit; Life-Boosting Oil (Greater) | Activation reminders for protection, extradimensional storage, repairs, healing, duration, charges, and frequency. |
| Monster abilities | Kaiju Blood; Kaleidoscopic Display; Killing Shake; Kiss of Locusts | Action reminders for blood effects, visual control, grapples, swarm poison, saves, recovery, resistance, and frequency. |

The four Batch 262 category files are registered alongside the aggregate package.

## Batch 263 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Magical Trickster; Mantis Form; Mental Static; Mesmerizing Gaze | Reminders for spell attacks, forms, mental interference, visual control, saves, duration, and frequency. |
| Spells | Message; Mirage; Mirror Image; Moonlight Ray | Cast reminders for communication, illusion, image defense, light attacks, disbelief, recovery, and heightening. |
| Equipment | Magical Medal (Wolf Pack); Magnetite Scope; Mantis Embrace (Greater); Mender's Soup | Activation reminders for pack teamwork, sight, grapples, healing, duration, charges, and frequency. |
| Monster abilities | Mandible Frenzy; Mandragora Swarm; Mandragora Swarm Venom; Magnetic Storm | Action reminders for multi-attacks, swarm poison, magnetic areas, saves, recovery, resistance, and frequency. |

The four Batch 263 category files are registered alongside the aggregate package.

## Batch 264 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Oil Fire; Opportune Backstab; Overdrive Ally; Oversized Throw | Reminders for fire, reactions, precision attacks, ally enhancement, thrown attacks, and frequency. |
| Spells | Overflowing Sorrow; Phantasmal Treasure; Planar Collision; Protector's Sacrifice | Cast reminders for emotion, illusion, planar damage, damage transfer, saves, duration, and heightening. |
| Equipment | Oilskin Pouch; One Day's Breath; Overloaded Brain Grenade; Pernicious Spore Bomb (Lesser) | Activation reminders for environmental protection, mental effects, poison, area saves, duration, and frequency. |
| Monster abilities | Omox Slime Pool; Oni Rampage; Onryo's Rancor; Ogre Hook | Action reminders for acid hazards, rampage attacks, curses, fear, forced movement, recovery, and resistance. |

The four Batch 264 category files are registered alongside the aggregate package.

## Batch 265 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Quickened Attunement; Radiate Glory; Rebounding Assault; Recover Spell | Reminders for action benefits, radiant areas, follow-up attacks, spell recovery, saves, duration, and frequency. |
| Spells | Rapid Adaptation; Read Omens; River Carving Mountains; Rose's Thorns | Cast reminders for adaptation, divination, terrain alteration, hazards, sustain, counteracting, and heightening. |
| Equipment | Rattling Bolt (Greater); Rebound Fulu; Revealing Mist (Lesser); Ring of Ravenousness | Activation reminders for sonic effects, defense, detection, appetite, charges, duration, and frequency. |
| Monster abilities | Rain of Fire; Rain of Spears; Rage of the Sky Father; Rapid Lead Poison | Action reminders for fire, ranged areas, storms, poison, saves, recovery, resistance, and frequency. |

The four Batch 265 category files are registered alongside the aggregate package.

## Batch 266 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Sanguine Tenacity; Scales of Steel; Scattering Shout; School Spell Redirection | Reminders for survival, defenses, sonic effects, spell redirection, reactions, saves, and frequency. |
| Spells | Sea of Thought; Shadow Zombie; Shifting Sand; Spirit Song | Cast reminders for mental control, undead creation, terrain, spirit damage, sustain, and heightening. |
| Equipment | Sanguine Mutagen (Moderate); Sapling Shield (Lesser); Scarlet Mist; Screaming Pinion | Activation reminders for mutagen benefits, shields, concealment, sonic attacks, duration, charges, and frequency. |
| Monster abilities | Sapping Slumber; Sandstorm; Scalding Burst; Scalding Spray | Action reminders for sleep, sand hazards, heat damage, saves, recovery, resistance, and frequency. |

The four Batch 266 category files are registered alongside the aggregate package.

## Batch 267 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Ubiquitous Overdrive; Unbreakable Resolve; Unfettering Strike; Unholy Resurrection | Reminders for overdrive, mental defenses, escape strikes, resurrection, reactions, duration, and frequency. |
| Spells | Unbreaking Wave Advance; Unfettered Movement; Unraveling Blast; Unusual Anatomy | Cast reminders for movement, freedom, counteracting, defenses, resistance, sustain, and heightening. |
| Equipment | Unsullied Blood (Greater); Verdant Staff; Vile Remnant; Vyre's Bliss | Activation reminders for cleansing, plant spells, curses, social effects, duration, charges, and frequency. |
| Monster abilities | Umbral Shroud; Unbridled Necromantic Energy (1-2); Undead Virulence; Unending Terror | Action reminders for darkness, void energy, afflictions, fear, saves, recovery, resistance, and frequency. |

The four Batch 267 category files are registered alongside the aggregate package.
## Batch 268 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Walk the Wilds; Warp Path; Warning Shot; Whirling Knockdown | Reminders for exploration, teleportation, attacks, fear, knockdown, movement, and frequency. |
| Spells | Wall of Shrubs; Wall of Wind; Warp Step; Weapon Storm | Cast reminders for barriers, terrain, movement, attacks, saves, duration, and heightening. |
| Equipment | Wand of Choking Mist (2nd-Rank); Wand of Reaching (1st-Rank); Wand of Rolling Flames (4th-Rank); Wand Of Splintered Sorrows (Rank 2) | Activation reminders for mist, range, fire, mental effects, duration, and charges. |
| Monster abilities | Wailing Archdragon; Wall of Flesh; Wall of Ice; Waking Terror | Action reminders for sonic, fear, barriers, cold, damage, saves, duration, and frequency. |

The four Batch 268 category files are registered alongside the aggregate package.

## Batch 269 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Wailing Dead; Waking Dream; Web Walker; Wellspring Control | Reminders for undead, fear, dream, movement, recovery, duration, and frequency. |
| Spells | Waking Nightmare; Warping Pull; Web of Eyes; Whispers of the Void | Cast reminders for fear, forced movement, perception, void, saves, duration, and heightening. |
| Equipment | Wand of Mercy (1st-rank); Wand of Mercy (3rd-rank); Wand of Reaching (3rd-Rank); Wand of Purification (2nd-Rank Spell) | Activation reminders for healing, reach, cleansing, duration, frequency, and charges. |
| Monster abilities | Wailing Ghost; Wailing Dragon (Adult); Wailing Dragon (Ancient, Spellcaster); Walk the Ethereal Line | Action reminders for sonic, fear, planar movement, saves, duration, and frequency. |

The four Batch 269 category files are registered alongside the aggregate package.

## Batch 270 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | You Can't Hide From Us; Zealous Inevitability; Zombie | Reminders for detection, divine effects, undead resilience, saves, duration, and frequency. |
| Spells | Zeal for Battle; Zephyr Slip; Zombie Horde | Cast reminders for combat benefits, movement, defense, undead areas, saves, sustain, and heightening. |
| Equipment | Yarrow-Root Bandage; Zircon; Zombie Staff (Greater) | Activation reminders for healing, magical effects, undead effects, duration, frequency, and charges. |
| Monster abilities | Yank; You're Coming with Us | Action reminders for forced movement, control, checks, saves, reach, duration, and frequency. |

The four Batch 270 category files are registered alongside the aggregate package.

## Batch 271 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Bolster Ally; Bone Burst; Bone Magic; Brutal Finish | Reminders for support, damage, magic, attacks, saves, conditions, and frequency. |
| Spells | Purifying Icicle; Project Image; Propelling Air Stream; Pulverizing Wake | Cast reminders for cleansing, projection, forced movement, damaging wakes, saves, duration, and heightening. |
| Equipment | Cloak of Elvenkind (Greater); Cloak of Illusions (Greater); Cloak of Immolation; Cloak of Social Graces | Activation reminders for stealth, illusion, fire, social benefits, duration, saves, and frequency. |
| Monster abilities | Barrage Archdragon; Beguiling Lure; Behead; Belch Smoke | Action reminders for ranged attacks, mental effects, critical attacks, smoke, saves, damage, and frequency. |

The four Batch 271 category files are registered alongside the aggregate package.

## Batch 272 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Call to Battle; Calm and Centered; Camouflage Coat; Careful Explorer | Reminders for ally support, recovery, concealment, exploration, checks, duration, and frequency. |
| Spells | Pressure Zone; Prismatic Shield; Propulsive Breeze; Pulverizing Wake | Cast reminders for area effects, defenses, movement, damage, saves, sustain, and heightening. |
| Equipment | Charm of the Ordinary; Cloak of Thirsty Fronds; Clockwork Rejuvenator; Chromatic Robe (Greater) | Activation reminders for social, plant, repair, color, defense, duration, and frequency effects. |
| Monster abilities | Beyond the Barrier; Biting Blossom; Biting Constrict; Black Fire | Action reminders for movement, attacks, grab, fire, poison, saves, damage, and frequency. |

The four Batch 272 category files are registered alongside the aggregate package.

## Batch 273 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Beast Trainer; Behold, a Pale Horse; Bless Toxin; Blood and Spirit | Reminders for companions, mounts, poison, vitality, saves, recovery, and frequency. |
| Spells | Glacial Causeway; Gleaming Pet; Glowing Trail; Recall Past Life | Cast reminders for ice terrain, companions, tracking, memory, sustain, duration, and heightening. |
| Equipment | Careless Delight; Caress of the Great Serpent; Carver-cutter (Greater); Carver-cutter (True) | Activation reminders for mental, serpent, weapon, damage, condition, duration, and frequency effects. |
| Monster abilities | Belly Grease; Bend Back; Beseech the Spirits; Black Ink Delirium | Action reminders for slippery terrain, defense, spirits, ink, mental effects, saves, recovery, and frequency. |

The four Batch 273 category files are registered alongside the aggregate package.

## Batch 274 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Blood Like Water; Bloodline Focus; Blowgun Poisoner; Bold Defiance | Reminders for vitality, focus recovery, poison, defense, checks, duration, and frequency. |
| Spells | Read the Air; Reblooded; Recall Legacy; Read Omens | Cast reminders for perception, vitality, memory, divination, duration, range, and heightening. |
| Equipment | Cayden's Brew (Double); Cerebral Barbell (Greater); Chain of Stars; Cheery Chime (Major) | Activation reminders for beverages, mental benefits, thrown attacks, sonic effects, duration, and frequency. |
| Monster abilities | Befuddled Thoughts; Beguile the Addled; Behind the Lines; Bite of the Asp Stance | Action reminders for mental control, movement, attacks, poison, saves, recovery, and frequency. |

The four Batch 274 category files are registered alongside the aggregate package.

## Batch 275 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Call Gun; Call the Hurricane; Call Ursine Ally; Cantrip Supremacy | Reminders for weapons, storms, companions, cantrips, attacks, movement, and frequency. |
| Spells | Dancing Blade; Darkened Eyes; Darkened Sight; Darklight | Cast reminders for animated weapons, sight, darkness, concealment, duration, and heightening. |
| Equipment | Campaign Stable; Cantrip Deck (Full Pack); Chiromantic Lines; Cinnamon Nostalgia Bun | Activation reminders for travel, cantrips, divination, food, healing, duration, and frequency. |
| Monster abilities | Bind Destinies; Bile Jet; Biting Flies; Biting Swarm | Action reminders for fate, acid, swarms, poison, saves, damage, recovery, and frequency. |

The four Batch 275 category files are registered alongside the aggregate package.

## Batch 276 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Cantrip Casting; Caretaker's Intuition; Blessed Spell; By Your Name | Reminders for cantrips, support, spell alterations, social effects, checks, duration, and frequency. |
| Spells | Deathly Scream; Desiccate; Dimensional Assault; Draw Ire | Cast reminders for sonic, dehydration, teleportation, emotion, saves, damage, and heightening. |
| Equipment | Chromatic Robe; Chilled Fire Noodles; Clockwork Dial; Catoblepas Maul | Activation reminders for color, food, timing, weapon, damage, duration, and frequency effects. |
| Monster abilities | Beyond Life; Bide; Black Cat Curse; Black Powder Bomb | Action reminders for recovery, delayed attacks, curses, explosives, saves, damage, and frequency. |

The four Batch 276 category files are registered alongside the aggregate package.

## Batch 277 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Benevolent Spirit Deck; Brightsoul; Brilliant Vision; Built-In Tools | Reminders for spirit, light, vision, integrated tools, checks, duration, and frequency. |
| Spells | Deep Sight; Defensive Prescience; Dawnflower's Light; Devouring Void | Cast reminders for perception, defense, illumination, void, saves, duration, and heightening. |
| Equipment | Chaplain's Cudgel; Charlatan's Cape; Chivalric Emblem; Chrysoberyl | Activation reminders for weapons, deception, ally defense, magical effects, duration, and frequency. |
| Monster abilities | Beak; Beard; Bile; Bite | Action reminders for attacks, poison, acid, bleed, persistent damage, recovery, and frequency. |

The four Batch 277 category files are registered alongside the aggregate package.

## Batch 278 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Bullet Dancer Reload; Briar Battler; Brilliant Crafter; Burrowing Form | Reminders for reload, terrain, crafting, burrowing movement, checks, duration, and frequency. |
| Spells | Diabolic Edict; Dizzying Colors; Dome of Tranquility; Downpour | Cast reminders for commands, visual effects, protection, weather, saves, sustain, and heightening. |
| Equipment | Clear Cutter's Axe; Clay Sphere (Major); Charm of Resistance (Major); Cape of Grand Entrances | Activation reminders for weapon, construct, resistance, social, damage, duration, and frequency effects. |
| Monster abilities | Call Down the Storm; Call of Asmodeus; Call to Arms; Capture Magic | Action reminders for storms, infernal effects, ally support, spell capture, saves, duration, and frequency. |

The four Batch 278 category files are registered alongside the aggregate package.

## Batch 279 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Dangle (Vanara); Daring Flourish; Dead Reckoning; Deadly Butterfly | Reminders for movement, attacks, navigation, damage, checks, MAP, and frequency. |
| Spells | Dutiful Challenge; Elemental Betrayal; Elemental Motion; Embrace Nothingness | Cast reminders for commands, elemental traits, movement, void, saves, duration, and heightening. |
| Equipment | Deadweight Mutagen (Moderate); Deathless Light; Demon-Hunting Bands; Devil's Bargain | Activation reminders for mutagens, light, demon effects, contracts, duration, recovery, and frequency. |
| Monster abilities | Daredevil Strike; Dart Barrage; Death Flood; Death Frenzy | Action reminders for attacks, ranged barrages, void areas, frenzy, saves, damage, recovery, and frequency. |

The four Batch 279 category files are registered alongside the aggregate package.

## Batch 280 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Death from Above (Eternal Legend); Death Rattle; Deathblow; Deathly Secrets | Reminders for attacks, death effects, knowledge, saves, damage, and frequency. |
| Spells | Enervation; Eagle's Cry; Earthquake; Elysian Whimsy | Cast reminders for void, sonic, terrain, emotion, saves, sustain, and heightening. |
| Equipment | Demon Bone Tiles (Brimorak); Depth Charge IV; Deteriorating Dust; Dream Lens | Activation reminders for fiend, explosive, deterioration, dream, duration, recovery, and frequency effects. |
| Monster abilities | Dart Volley; Deadly Bolts; Defensive Burst; Deathly Terror | Action reminders for ranged attacks, defense, fear, saves, damage, recovery, and frequency. |

The four Batch 280 category files are registered alongside the aggregate package.

## Batch 281 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Deep Freeze; Deep Roots; Defend Summoner; Defender's Grit | Reminders for cold, stability, summoner protection, defenses, saves, duration, and frequency. |
| Spells | Empower Ley Line; Entreat Spirit; Environmental Endurance; Eject Soul | Cast reminders for amplification, spirits, environmental protection, soul effects, duration, and heightening. |
| Equipment | Dragonfly Fulu; Dragonscale Staff; Dweomerveil; Dreamcrusher | Activation reminders for flight, draconic magic, concealment, dreams, duration, saves, and frequency. |
| Monster abilities | Eager Rend; Earthen Blow; Earthen Torrent; Eclipse Aura | Action reminders for attacks, earth areas, auras, terrain, saves, damage, recovery, and frequency. |

The four Batch 281 category files are registered alongside the aggregate package.

## Batch 282 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Dazzling Dragonet Disappearance; Deflecting Shot; Defy Chains; Distant Wandering | Reminders for concealment, reactions, escape, movement, detection, and frequency. |
| Spells | Fated Healing; Favorable Review; Feast of Ashes; Force Fang | Cast reminders for healing, social effects, curses, force damage, saves, recovery, and heightening. |
| Equipment | Eidetic Potion; Elixir of the Peaks (Moderate); Elemental Gem; Energy-Absorbing (Greater) | Activation reminders for memory, physical benefits, summons, energy resistance, duration, and frequency. |
| Monster abilities | Fan of Daggers; Fearsome Gaze; Feed on Magic; Fiery Beam | Action reminders for ranged attacks, fear, spell absorption, fire, saves, damage, and frequency. |

The four Batch 282 category files are registered alongside the aggregate package.

## Batch 283 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Faithful Steed; Fake Out; Familiar's Eyes; Final Shot | Reminders for mounts, deception, familiar senses, attacks, checks, and frequency. |
| Spells | Fey Abeyance; Fey Glamour; Fire Seeds; Flame Strike | Cast reminders for fey illusion, concealment, fire areas, damage, saves, and heightening. |
| Equipment | Flowing Water (Greater); Forgetful Drops; Forgotten Signet; Fortune's Coin | Activation reminders for movement, memory, identity, fortune, duration, immunity, and frequency. |
| Monster abilities | Feed on Sorrow; Fearsome Magic; Fiery Wake; Filth Wave | Action reminders for emotion, fear, fire, disease, poison, saves, recovery, and frequency. |

The four Batch 283 category files are registered alongside the aggregate package.

## Batch 284 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Gathering Moss; Gentle Death and Rebirth; Get Used to Disappointment; Gigaton Strike | Reminders for natural benefits, recovery, mental defenses, attacks, saves, and frequency. |
| Spells | Guardian's Aegis; Helpful Scribe; Hidebound; Horizon's Veil | Cast reminders for protection, assistance, concealment, travel, duration, and heightening. |
| Equipment | Ghostcaller's Planchette (Greater); Glasses of Sociability; Gloves of Precision (Greater); Guardian Staff (Major) | Activation reminders for spirit, social, accuracy, protection, duration, saves, and frequency. |
| Monster abilities | Glaring Ray; General's Aura; Ghost Stampede; Give No Ground | Action reminders for rays, auras, ghost movement, defenses, saves, damage, duration, and frequency. |

The four Batch 284 category files are registered alongside the aggregate package.

## Batch 285 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Hand of the Lich; Hands That Unweave Disaster; Head of the Night Parade; House of Imaginary Walls | Reminders for undead, reactions, spirits, illusions, saves, duration, and frequency. |
| Spells | Genie's Veil; Ghostly Shift; Geyser; Glimpse the Truth | Cast reminders for illusion, incorporeal movement, water, revelation, duration, and heightening. |
| Equipment | Ghost Oil; Ghost Scarf; Golden Wings (Major); Gravedigger's Call | Activation reminders for incorporeal effects, concealment, flight, death effects, duration, and frequency. |
| Monster abilities | Haunting Assault; Haunting Melody; Heat Haze; Head Regrowth | Action reminders for ghost attacks, sonic effects, concealment, regeneration, saves, recovery, and frequency. |

The four Batch 285 category files are registered alongside the aggregate package.

## Batch 286 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Illimitable Finisher; Immediate Rebuke; Improved Dueling Riposte; Invigorating Surge | Reminders for finishing attacks, reactions, ripostes, healing, conditions, and frequency. |
| Spells | Ignition; Illuminate; Imitate Fauna; Impending Doom | Cast reminders for fire, light, transformation, curses, saves, duration, and heightening. |
| Equipment | Insight Coffee (Greater); Instant Fortress; Jug of Fond Remembrance; Jyoti's Feather (Major) | Activation reminders for recall, structures, memory, celestial effects, duration, and frequency. |
| Monster abilities | Illusory Ambush; Imminent Demise; Impaling Lunge; Infernal Eye | Action reminders for illusions, death effects, attacks, detection, saves, recovery, and frequency. |

The four Batch 286 category files are registered alongside the aggregate package.

## Batch 287 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Keep up Appearances; Kneel Before the Rightful Heir; Legendary Shot; Lose Your Chains | Reminders for social effects, commands, ranged attacks, escape, saves, and frequency. |
| Spells | Kaiju Ward; Leaden Steps; Life Link; Lightning Bolt | Cast reminders for protection, movement penalties, shared vitality, electricity, duration, and heightening. |
| Equipment | Knave's Standard; Knight's Tabard; Life Shot (Greater); Life-Boosting Oil (Moderate) | Activation reminders for social effects, heraldry, healing attacks, recovery, duration, and frequency. |
| Monster abilities | Killing Fugue; Lantern of Hope; Lasting Darkness; Leaping Grab | Action reminders for sonic, light, darkness, grab, saves, movement, duration, and frequency. |

The four Batch 287 category files are registered alongside the aggregate package.

## Batch 288 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Natural Illusionist; Perfect Shot; Point Blank Stance; Past Life | Reminders for illusion, ranged attack, stance, skill, lore, and frequency effects. |
| Spells | Nymph's Grace; Phantom Crowd; Plague Shot; Poltergeist's Fury | Cast reminders for defenses, illusions, disease, force damage, saves, duration, and heightening. |
| Equipment | Necklace of Fireballs VII; Nomad's Shawl; Phoenix Fighting Fan; Potion of Annulment (Lesser) | Activation reminders for burst fire damage, travel, weapon effects, counteracting, and item expenditure. |
| Monster abilities | Necrotic Field; Needle Fall; Nightmare Screech; Nidorous Breath | Action reminders for area damage, projectile effects, fear, poison, saves, recharge, and frequency. |

The four Batch 288 category files are registered alongside the aggregate package.

## Batch 289 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Quick Stow (Swordmaster); Radiant Circuitry; Rain of Embers Stance; Redirect Spell | Reminders for weapon manipulation, energy benefits, stance effects, and spell redirection. |
| Spells | Regale the Lost Ones; Return To Essence; Rigid Form; Roar of the Dragon | Cast reminders for mental effects, restoration, transformation, cone damage, saves, duration, and heightening. |
| Equipment | Reactive Mail; Reflexive Tattoo; Ring of the Ram (Greater); Runic Skullcap | Activation reminders for defensive reactions, force attacks, runes, charges, duration, and frequency. |
| Monster abilities | Quickened Casting; Ramming Speed; Ravenous Embrace; Raptor Jaw Disarm | Action reminders for accelerated casting, charge attacks, grabs, disarms, forced movement, and frequency. |

The four Batch 289 category files are registered alongside the aggregate package.

## Batch 290 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Scorching Column; Shadow's Web; Shake it Off; Tempest-Sun Redirection | Reminders for area fire, shadow control, condition recovery, and redirection effects. |
| Spells | Shadow Illusion; Soothing Spring; Sudden Transposition; Teleport | Cast reminders for illusions, restoration, teleportation, destinations, saves, and heightening. |
| Equipment | Seer's Flute (Greater); Sense-Dulling Hood (Lesser); Shacklebreaker; Timpani of Panic | Activation reminders for perception, sensory suppression, escape, fear, duration, and frequency. |
| Monster abilities | Sand Spear; Scream of Despair; Telekinetic Assault; Tentacle Onslaught | Action reminders for ranged attacks, mental effects, telekinesis, grabs, persistent damage, and frequency. |

The four Batch 290 category files are registered alongside the aggregate package.

## Batch 291 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Unstoppable Force; Vision of Foresight; Webslinger; Windborne Shove | Reminders for forced movement, prediction, web mobility, checks, and frequency. |
| Spells | Unfettered Mark; Wanderer's Guide; Warrior's Regret; Unity | Cast reminders for marks, travel, mental effects, shared defenses, duration, and heightening. |
| Equipment | Wand of Choking Mist (4th-Rank); Warding Tattoo; Warcaller's Chime of Refuge; Weapon Shot (Lesser) | Activation reminders for mist, protection, refuge, ranged attacks, charges, and frequency. |
| Monster abilities | Vengeful Anger; Vengeful Slice; Void Beam; Warping Ray | Action reminders for retaliation, reaction attacks, void damage, ray effects, range, and frequency. |

The four Batch 291 category files are registered alongside the aggregate package.

## Batch 292 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Zealous Inevitability | Increases doomed by 1 on a successful matching Strike, capped at doomed 4. |
| Spells | Zeal for Battle; Zephyr Slip; Zombie Horde | Passed by: initiative-trigger and movement-trigger timing are not represented by the available event graph without a reminder-only flow. |
| Equipment | Yarrow-Root Bandage; Zombie Staff (Greater); Zircon | Passed by: first-aid and multi-spell activation require manual selection/checks not safely represented by the current graph. |
| Monster abilities | Yellow Eye Beam; Zephyr Guard; Zura's Gift | Yellow Eye Beam applies dazzled/blinded from its basic Reflex save; the other entries were passed where their qualifying state or effect selection was not safely expressible. |

The Batch 292 feat and monster files are registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 293 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Spells | Bandit's Doom | Increases doomed by 1 or 2 from the Will-save outcome. |
| Equipment | Poison Fizz (Moderate) | Passed by: poison equipment is out of scope. |

The Batch 293 spell file is registered alongside the aggregate package. No reminder-only triggers were added; poison equipment was excluded by scope.

## Batch 294 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Equipment | Wand of Dazzling Rays (3rd-rank) | Applies blinded for 1 round on a successful attack; its follow-up save and heightened damage remain manual. |

The Batch 294 equipment file is registered alongside the aggregate package. No poison equipment or reminder-only triggers were added.

## Batch 295 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Equipment | Frightful Hag Eye | Applies frightened 1/2/3 from Will-save outcomes; the critical-failure fleeing rider remains manual. |

The Batch 295 equipment file is registered alongside the aggregate package. No poison equipment or reminder-only triggers were added.

## Batch 296 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Monster abilities | Dooming Proclamation; Frightening Rant | Applies frightened conditions from Will-save outcomes; secondary damage, immunity, and penalties remain native/manual. |

The Batch 296 monster file is registered alongside the aggregate package. No poison equipment or reminder-only triggers were added.

## Batch 297 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Monster abilities | Enervating Howl | Applies drained 1/2 from Fortitude-save outcomes; void damage, doomed duration, and recharge remain native/manual. |

The Batch 297 monster file is registered alongside the aggregate package. No poison equipment or reminder-only triggers were added.

## Batch 298 additions

| Category | Items reviewed | Automation added |
| --- | --- | --- |
| Feats | Piercing Doom | Reduces doomed by 1 on a successful Strike; the feat's 1d10 void damage remains manual. |

The Batch 298 feat file is registered alongside the aggregate package. No poison equipment or reminder-only triggers were added.

## Batch 299 review disposition

| Category | Candidates reviewed | Disposition |
| --- | --- | --- |
| Feats | Dazzling Dragonet Disappearance; Know Thy Doom; Spear of Doom; Reverse Curse | Passed: reaction timing, prerequisite state, or condition-removal sequencing is not safely represented by the available event graph. |
| Monster abilities | Enfeebling Strike | Applies enfeebled 1 after a qualifying damaging hit against an off-guard target. |
| Spells | Impending Doom; Curse of Lost Time; Tanglecurse; Stumbling Curse | Passed: sustained multi-round progression, object/creature branching, moving areas, or random movement would require unsupported state or manual adjudication. |

The Batch 299 monster file is registered alongside the aggregate package. Poison equipment remains out of scope; no reminder-only triggers were created.

## Batch 300 review disposition

| Category | Candidates reviewed | Disposition |
| --- | --- | --- |
| Equipment | Dazzling Shard; Wand of Dumbfounding Doom (8th-rank); Petrification Cannon; Abidance Blinders; Velicarn's Cursed Coin | Passed: multi-stage critical-hit/save gates, selected spell effects, object or creature qualification, and activation-specific state are not safely expressible with the current event graph. |
| Monster abilities | Frightening Visage | Applies frightened 2 on a failed or critically failed Will save; the critical-failure fleeing rider remains manual. |

The Batch 300 monster file is registered alongside the aggregate package. The equipment candidates remain passed; poison equipment remains out of scope and no reminder-only triggers were created.

## Package validation repair

The package-wide graph audit found and corrected stale connection references and four disconnected legacy outcome nodes in the registered aggregate, including the Irradiate fatigue branch, Euphoric Breath slowed branch, Scare to Death fleeing branch, and a duplicated Vrolikai confusion node. The legacy reminder-only graphs were removed from the registered package; historical batches whose candidates could not be safely reconstructed as mechanical automations are retained as empty registered arrays and documented as passed. The current validation result is 1290 registered triggers across 965 registered JSON files, with zero structural errors, zero stale references, and zero message-only graphs; JavaScript syntax and whitespace checks also pass.

## Batch 443 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Blister Ammunition (Lesser/Moderate/Greater) | Added dazzled after critical hits; Fortitude DC, itching, concentrate flat checks, and ammunition activation remain native/manual. |
| Equipment | Cape of Illumination (Moderate) | Added dazzled/blinded by Fortitude outcome; Interact removal and area/activation remain native/manual. |
| Equipment | Wand of Legerdemain (1st/2nd-rank) | Added fascinated on failed Will saves; hostile-action, Diplomacy/Intimidation, Sustain, and activation requirements remain native/manual. |
| Equipment | Cape of Justice; Gearbinder Oil (Lesser); Radiant Tome; Tar Rocket Snare; Clinging Ooze Snare; Freezing Embrace Snare; Queasy Lantern; Grinning Pugwampi; Mamlambo Scale; Drover's Band | Passed: designation, end-of-round or area timing, mixed conditions, persistent damage, counteract, or non-condition effects prevent safe additional automation. |

The Batch 443 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 442 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wand of Legerdemain (3rd/5th/6th-rank) | Added fascinated on failed Will saves; hostile-action, Diplomacy/Intimidation, Sustain, and activation requirements remain native/manual. |
| Equipment | Noisemaker Snare | Added deafened by Reflex-save outcome; snare placement and damage remain native/manual. |
| Equipment | Animal Nip (Moderate) | Added fascinated on failure and fascinated/prone on critical failure; animal targeting and hostile-act cleanup remain native/manual. |
| Equipment | Tusk and Fang Chain | Added confused by Will-save outcome; grab/restrain trigger and critical-failure rider remain native/manual. |
| Equipment | Sneezing Powder | Added slowed 1 for 1/3 rounds by Fortitude outcome; adjacent targeting and activation remain native/manual. |
| Equipment | Sack of Rotten Fruit | Added sickened 1 on failed Fortitude saves; Strike qualification and damage remain native/manual. |
| Equipment | Pit Illusion Snare | Added prone on failed/critical-failed Will saves; snare placement and mental damage remain native/manual. |
| Equipment | Alluring Scarf (Major) | Added fascinated on failed Will saves; movement, hostility, Sustain, and area targeting remain native/manual. |
| Equipment | Void Shackles; Strand of the Seven Births; Mirror Goggles (Lesser); Void Mirror; Stony Hag Eye; Bomb Snare; Blindpepper Bolt; Radiant Lance; Scene Stealer's Tunic; Dread (Lesser); Drover's Band; Mamlambo Scale; Queasy Lantern; Grinning Pugwampi; Freezing Embrace Snare; Dark Pepper variants | Passed: counteract/removal, area/end-of-turn timing, mixed effects, disease/poison or persistent damage, source/trait qualification, and non-condition effects prevent safe additional automation. |

The Batch 442 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 441 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities | Power Attack; Master's Eye; At-Will Spells; Rend; Greater Darkvision; Coven; Improved Push; All-Around Vision; Sneak Attack; Knockdown; Pull; Troop Defenses; Aquatic Ambush; Light Blindness; Retributive Strike; Thoughtsense; Improved Knockdown; Troop Movement; Ferocity; Greater Constrict; Form Up; Stench; Grab; Trample; Change Formation; Wavesense; Reactive Strike; Disease; Throw Rock; Swarm Mind; Change Shape; Frightful Presence; Low-Light Vision; Fast Healing; Constrict; Attack of Opportunity; Improved Grab; Tremorsense; Poison; Constant Spells; Telepathy; Regeneration; Shield Block; Buck; Darkvision; Scent; Lifesense; Push; Catch Rock; Swallow Whole; Aura; Nimble Dodge; Engulf | Passed: generic glossary entries are localized or represent passive senses, actions, reactions, aura/area timing, grab/escape/rupture state, disease/poison stages, or effects already handled natively; no safe independent trigger could be derived without overbroad automation. |
| Monster effects | Swarming Bites; Despair; Engulf and Swallow Whole; Hunter's Onslaught; Aura of Disquietude; Vomit Tar; Flesh Mutation; Radiate Cold; Scent of Blood; Swig; Aura of Reflection; Curse of Boiling Blood; Dual Mind; Thaw the Heart; Barbed Net; Aura of Sophistry; False Flag; Hair Snare; Debilitating Sneak Attack; and remaining effect payloads | Passed: these are native effect payloads rather than independent ability registrations, or depend on aura membership, random mutation, source-specific attacks, ongoing effect state, or missing event context. |

The Batch 441 monster review file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 440 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wand of Legerdemain (7th/8th-rank) | Added fascinated on failed Will saves; hostile-action, Diplomacy/Intimidation, Sustain, and activation requirements remain native/manual. |
| Equipment | Cape of Illumination (Lesser/Greater) | Added dazzled/blinded by Fortitude-save outcome; Interact removal and area/activation remain native/manual. |
| Equipment | Oil of Repulsion | Added prone on critical failure; push distance and melee-hit trigger remain native/manual. |
| Equipment | Mirror Goggles (Moderate) | Added sickened 1/2 by Fortitude outcome; visual-trigger qualification and immunity remain native/manual. |
| Equipment | Alluring Scarf (Greater) | Added fascinated on failed Will saves; movement, hostility, Sustain, and area targeting remain native/manual. |
| Equipment | Dark Pepper Powder | Added off-guard for 1/3 rounds by Fortitude outcome; adjacent targeting and activation remain native/manual. |
| Equipment | Terrifying Ammunition | Added frightened 1/2 by Will outcome; concentrate recovery and ammunition activation remain native/manual. |
| Equipment | Trip Snare | Added off-guard on success and prone on failure branches; size/placement and damage remain native/manual. |
| Equipment | Hodag Leather; Dread variants; Freeze Ammunition; Timeflaying Blade; Gearbinder Oil variants; Thorn Brush; Bitterblood Elixir; Radiant Spark; Escalation Ammunition; Guiding Star Orb; Graverose Garland; Cape/rosebud variants; Mirror Goggles beyond Moderate; Dark Pepper; Worldforge; The Avalanche | Passed: movement/terrain, sustained or end-of-round timing, item state, damage-triggered riders, disease/poison effects, or non-condition effects prevent safe additional automation. |

The Batch 440 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 439 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Calcification | Added slowed by primary Fortitude outcome; ongoing saves, bludgeoning weakness, and petrification remain native/manual. |
| Spells | Unspeakable Shadow | Added frightened 2/3 by success/failure Will outcome; critical-failure death/secondary-save handling remains native/manual. |
| Spells | Medusa's Wrath | Added slowed 2 after a critical Strike; ongoing Fortitude saves, petrification, and Strike qualification remain native/manual. |
| Spells | Wilding Word; Overwhelming Memory; Bone Moth's Kiss; Leng Sting; Divinity Leech; Amalgamizing Leap; Linnorm Sting; Purple Worm Sting; Pack Breaker; Overwhelming Presence; Prismatic Wall; Jealous Hex; Blanket of Stars; Cutting Eye; Imp Sting; Déjà Vu; Steel Fortifications; Goblin Pox | Passed: damage-triggered riders, random choices, disease/poison stages, secondary saves, area persistence, attribute-dependent outcomes, reactions, or non-condition effects prevent safe additional automation. |

The Batch 439 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 438 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Eldritch Calm; Chaotic Spell; Ricochet Legend; Dispelling Slice; Nature's Precision; Daredevil's Gambit; Borrow Time; Hit the Dirt!; No Cause for Alarm; Spray Ink; Spelunker; Didactic Strike; Cut From the Air; Unstoppable Force; Clinch Strike; Dread Blade; Command Elemental; Concealing Currents; Flinging Charge; Drifting Pollen | Passed: passive effects, random damage riders, reaction/turn timing, aura entry timing, target/source inversion, sustained effects, or prerequisite/action-sequence state prevent safe additional automation. |

The Batch 438 feat review file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 437 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Maw of Hungry Shadows | Added blinded/drained by Fortitude-save outcome; activation, shadow-spell qualification, and critical-failure teleport remain native/manual. |
| Equipment | Captivating Bauble | Added fascinated on failed Will save; conversation, distance, hostile-action termination, and activation requirements remain native/manual. |
| Equipment | Noxious Jerkin | Added sickened on failure and sickened plus slowed on critical failure; trigger, immunity, and activation remain native/manual. |
| Equipment | Hodag Leather; Bewitching Bloom (Bellflower); Guiding Star Orb (Heroic); Celestial Hair; Motivating Treat Bag; Rebounding Breastplate; Benthic Drums; Drake Rifle (Acid); Briar; Wand of Dumbfounding Doom (9th-rank); Graverose Garland; The Carnival; Manacles of Persuasion; Wand of Tormented Slumber; Sisterstone Chunk; Brightbloom Posy (Greater); Redeemer's Pistol | Passed: reaction replacement, passive/equipment state, target choice, accumulated damage, conditional weapon qualification, disease/poison or mental riders, and non-condition effects prevent safe additional automation. |

The Batch 437 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 436 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Unexpected Windfall | Added prone on critical failure; encumbered duration and damage remain native/manual. |
| Spells | Phantasmagoria | Added confused by failed/critical-failed Will outcome; damage and multi-target handling remain native/manual. |
| Spells | Manifold Lives | Added stupefied by primary Will outcome and slowed on critical failure; start-of-turn follow-up saves remain native/manual. |
| Spells | Shape Stone | Added prone on failed/critical-failed Reflex saves; Acrobatics-check branches and terrain reshaping remain native/manual. |
| Spells | Sparkleskin; Proximal Shift; Spiral of Horrors; Dinosaur Form; Vital Singularity; Cryostasis; Calcification; Annunciation of the Outer Gate; Overwhelming Memory; Glacial Skewer; Comet Charge; Antimagic Artifice; Transmute Rock and Mud; Mirecloak; Void Harvest; Elemental Annihilation Wave | Passed: area/adjacency, mixed-save branches, random choices, sustained or ritual timing, obstacle/terrain dependence, transformations, or non-condition effects prevent safe additional automation. |

The Batch 436 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 435 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Consuming Darkness | Added immobilized on the critical-failure Reflex branch; area timing, Escape, and damage remain native/manual. |
| Spells | Incarnate Tempest of Shades | Added drained by Vortex of Death Fortitude outcome and frightened by Howl of Eternity Will outcome; fleeing, placement, and area targeting remain native/manual. |
| Spells | Unfathomable Song; Wilding Word; Embodied Font; Wall of Radiance; Song of Silver; Shifting Sand; Rallying Banner; Safe Passage; Cosmic Form; Phantasmal Protagonist; Soul Cutter; Pyroclastic Truth; Raise Dead; Incarnate Archmage; Jassim's Allegiance; Tangling Creepers | Passed: random tables, repeated sustain/area timing, conditional follow-up damage, rituals, transformations, multi-action qualification, or non-condition effects prevent safe additional automation. |

The Batch 435 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 434 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Fey Dragonet Liqueur; Lesser; Greater | Added stupefied by Will-save outcome; random slowed duration, cone targeting, and recharge remain native/manual. |
| Equipment | Giant-Killing (Greater) | Added enfeebled by the critical-hit Fortitude-save outcome; giant qualification, critical-hit gating, mental damage, and targeting remain native/manual. |
| Equipment | Engulfing Snare | Added off-guard on success and prone/immobilized on failure branches; cage Escape, destruction, placement, and damage remain native/manual. |
| Equipment | Catoblepas Maul | Added sickened on failure and sickened plus slowed on critical failure; last-action qualification, olfactory immunity, and activation remain native/manual. |
| Equipment | Cinderclaw Gauntlet | Added sickened on failed critical-hit Fortitude saves; breathing requirement and critical-hit gating remain native/manual. |
| Equipment | Blindpepper Bomb | Added blinded/dazzled or blinded/sickened by Reflex-save outcome; area placement and sickened-based dazzled cleanup remain native/manual. |
| Equipment | Ebon Fulcrum Lens; Horned Lion Amulet; Possum's Play; Burglar's Rosebud; Radiant Spark; Lodestone Bomb; Vulture's Wing; Holy; Arachnolute; Curled Cure Gel; Shacklebreaker; Bracers of Pain; Cryolite Eye; Draconal Mask; Lion's Armor; Hairpin of Blooming Flowers; Knave's Standard (Greater); Grounding Spike; Euphoric Loop | Passed: passive investment, reaction timing, material/target qualification, area persistence, conditional prior-action state, counteract, or non-condition effects prevent safe additional automation. |

The Batch 434 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 433 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Godbreaker; Combat Climber; Form Lock; Fortified Mind; Solo Dancer; Dodge Away; Advanced First Aid; Tenacious Jaws; Holistic Care; Fearsome Brute; True Debilitating Bomb; Sanguine Tenacity; Weight of Guilt; Vacate Vision; Fierce Grasp | Passed: requirements, passive modifiers, counteract/flat-check interactions, reaction timing, conditional bomb choices, or triggered save replacement cannot be safely represented by the available event data. |
| Monster abilities/effects | Master's Eye; Sneak Attack; Swarming Bites; Despair; Engulf and Swallow Whole; Hunter's Onslaught; Aura of Disquietude; Vomit Tar; Flesh Mutation; Radiate Cold; Scent of Blood; Swig; Aura of Reflection; Curse of Boiling Blood; Dual Mind; Thaw the Heart; Barbed Net; Aura of Sophistry; False Flag; Hair Snare; Debilitating Sneak Attack | Passed: these are effect payloads or depend on aura membership, random mutation, source-specific attacks, ongoing item/effect state, or other context already handled natively and not safely reproducible as independent triggers. |

The Batch 433 review file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 430 — Equipment coverage

| Category | Candidate | Result |
|---|---|---|
| Equipment | Durian Bomb (Moderate) | Added sickened/dazzled by Fortitude-save outcome; splash positioning, scent suppression, and bomb immunity remain native/manual. |
| Equipment | Cauthooj Bagpipes | Added confused on failed or critically failed Disorienting Fugue save; emanation targeting, temporary immunity, and critical-failure self-attack remain native/manual. |
| Equipment | Bomb Coagulant Alembic; Theatrical Mutagen (Greater); Water Bomb (Lesser); Literate Lemur; Swallow-Spike; Perfected Robes; Wisp Chain (Major); Thorn Brush; Mat of Resilience; Spangled Rider's Suit; Bitterblood Elixir; Kols's Oath (Greater); Grippy Gloves | Passed: effects depend on item activation state, special targeting, conditional materials, aura timing, non-condition benefits, or other context not safely derivable from the available trigger event. |
| Equipment | Poison equipment | Passed/out of scope per audit policy. |

The package-wide equipment scope check removed ten legacy poison-equipment trigger definitions from the registered aggregate and their source batch files. Poison equipment remains explicitly out of scope; the current package contains zero equipment-tagged triggers whose name or description is poison-related.

## Batch 301 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Stupefy; Ignite Fireworks; Waking Nightmare | Added save-outcome automation for stupefied, dazzled, persistent fire, and frightened conditions; area damage, heightened scaling, asleep-only riders, and other targeting details remain native/manual. |
| Feats | Pierce the Eye | Added 2d8 persistent bleed after a successful ranged Strike; the Fortitude save, blinding duration, and flat-check penalty remain manual. |
| Equipment | Gluttonous Spear | Added enfeebled 1 for 1 minute after a critical hit; temporary Hit Points remain manual. |
| Spells | Chroma Leach | Added enfeebled and drained save riders; the movement-action Will save, permanent-duration nuance, and gnome-specific penalty remain native/manual. |
| Historical stale batches | Decaying; Demolishing; Brilliant; Deathdrinking; Phantasmal Killer; Cacophonous Call; Befuddling Dust | Passed for this package revision where the old graphs were reminder-only, stale, or had unsupported target/branching requirements; no reminder-only replacements were created. |

The Batch 301 category files are registered alongside the aggregate package. Poison equipment remains out of scope.

## Batch 302 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Stormburst; Mind Games; Cutting Insult | Added prone/stunned, stunned, and frightened/persistent bleed outcome riders; damage, sustain timing, caster-side backlash, and heightened scaling remain native/manual. |

The Batch 302 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 303 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Forceful Shot; Radiant Burst | Added off-guard and dazzled/blinded outcome riders; forced movement, area targeting, visibility, and frequency remain native/manual. |
| Equipment | Necrotic Bomb (Lesser); Glittering Lights Snare | Added sickened and dazzled/blinded outcomes; damage, splash, placement, and trap triggering remain native/manual. |
| Feats | Drifting Pollen | Passed: aura entry/exit timing, once-per-round immunity, and “until no longer sickened” cleanup are not safely represented by the available event graph. |

The Batch 303 feat and equipment files are registered alongside the aggregate package. Poison equipment remains out of scope.

## Batch 304 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities | Stunning Screech; Dazzling Flash; Splatter; Painful Bite; Shriek | Added stunned, dazzled/blinded, dazzled, sickened, and frightened save/Strike riders; area targeting, damage, frequency, and attack context remain native/manual. |
| Monster abilities | Entangle; Slow Aura; Kurobozu Sagebane; Harmona Concussive Blow; Mothman Portentous Gaze | Passed: recurring area/aura timing, nested prerequisite saves, escalation, or cleanup are not safely represented by the available event graph. |

The Batch 304 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 305 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities | Sinister Bite; Touch of Idiocy; Thunderstrike; Xill Paralysis; Am I Pretty?; Brutal Blows | Added frightened, stupefied, prone/deafened, slowed/paralyzed, immobilized/paralyzed, and prone riders from direct save or critical-hit outcomes; recovery saves, nested attack prerequisites, creature qualification, and duration cleanup remain native/manual. |
| Monster abilities | Paralyzing Display; Nauseating Display; Kurobozu Sagebane; Sea Spray; Fossilization | Passed: aura immunity, repeated escalation, nested attack/save sequencing, or multi-stage petrification cannot be safely represented by the available event graph. |

The Batch 305 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 306 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Histrionic Injury; Dazzling Block | Added stupefied and dazzled/blinded save riders; reaction timing, Shield Block timing, area targeting, and cleanup remain native/manual. |
| Equipment | Static Snare; Death Tusk Helm; Rattling Bolt (Greater); Glue Bomb (Major); Tallow Bomb (Greater) | Added persistent electricity, frightened, deafened/stupefied, immobilized, and sickened riders; trap/activation prerequisites, damage, critical-hit duration branches, and ongoing cleanup remain native/manual. |

The Batch 306 mixed file is registered alongside the aggregate package. Poison equipment remains out of scope.

## Batch 307 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities | Blood Siphon | Added drained 1/2 from Fortitude-save outcomes; critical-hit degree adjustment and temporary Hit Points remain native/manual. |
| Monster abilities | Entangling Tendrils; Telepathic Wail; Torturous Buzz; Siphon Magic; Rotting Flesh | Passed in this source slice: the embedded entries lack a stable item slug for a safe predicate, or require aura/area timing not represented by the current event graph. |

The Batch 307 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 308 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Slashing Gust; Scorching Blast | Added persistent bleed/fire on critical spell attacks; rank scaling and spell-specific targeting remain native/manual. |
| Spells | Arrow Salvo; Horizon Thunder Sphere | Added prone on a critical basic-save failure and dazzled on a critical spell-attack success; area targeting, casting time, and duration details remain native/manual. |
| Spells | Murder of Crows; Vision of Death | Added dazzled/blinded and frightened save-outcome riders; multi-target area handling, fleeing/lethal cleanup, and heightened scaling remain native/manual. |

The Batch 308 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 309 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Venom Spit | Added persistent poison on a critical hit; weapon-dice scaling and the hooded nagaji dazzled rider remain native/manual. |
| Feats | Electrogenesis | Added clumsy 1/2/3 for 1 round by Fortitude-save outcome; electricity damage, frequency, and qualifying Strike remain native/manual. |
| Feats | Warp Likeness | Added clumsy and sickened save-outcome riders; prior-Strike qualification and duration cleanup remain native/manual. |
| Feats | Kneecap; Decry Thief; Fatal Shot; Invented Vulnerability | Passed: nonstandard Speed/Stealth penalties, death/incapacitation resolution, or dynamically selected weaknesses are not safely represented by the current graph. |

The Batch 309 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 310 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Vampiric Maiden | Added immobilized for 1 round on a failed or critically failed Fortitude save; damage, temporary Hit Points, and Interact/Escape cleanup remain native/manual. |
| Spells | Eclipse Burst | Added blinded on a critical failure; area targeting, damage, magical-light counteracting, and unlimited-duration cleanup remain native/manual. |
| Spells | Warshard Shot | Added rank-based persistent spirit damage on a critical spell attack; damage, AC penalty, and heightened scaling remain native/manual. |
| Spells | Entangle Fate; Lignify; Fungal Infestation; Blister Bomb; Blinding Bottle | Passed: multi-target cross-creature prerequisites, recurring saves, disease/poison stages, or ongoing weakness/cleanup are not safely represented by the current graph. |

The Batch 310 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 311 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Sulfur Bomb (Moderate); Tallow Bomb (Moderate) | Added sickened 1 on critical hits; attack penalties, persistent-fire qualification, immunity, and cleanup remain native/manual. |
| Equipment | Elemental Ammunition (Moderate, Acid); Elemental Ammunition (Moderate, Electricity); Elemental Ammunition (Greater, Cold) | Added persistent damage on a successful hit; splash damage and activation remain native/manual. |
| Equipment | Hobbling Snare; Stonethroat Ammunition; Dread runes; Mindlock Shot | Passed: nonstandard Speed penalties, action restrictions, aura timing, or forced-action resolution are not safely represented by the current graph. |

The Batch 311 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope and no reminder-only triggers were added.

## Batch 312 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Lignify | Added initial slowed 1/2 by save outcome; ongoing saves, escalation, petrification, and cleanup remain native/manual. |
| Spells | Blister Bomb | Added sickened 2 on a save success; disease stages, persistent bleed, immunity, and heightened effects remain native/manual. |
| Spells | Fungal Infestation | Added persistent poison damage on save success/failure and critical failure; weakness, area targeting, and heightened scaling remain native/manual. |

The Batch 312 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 313 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Regurgitate Mutagen | Added sickened 1/2 by Reflex-save outcome; damage, mutagen removal, and targeting remain native/manual. |
| Feats | Resounding Blow | Added deafened for 1 round on a hit and 1 minute on a critical hit; weapon qualification and damage remain native/manual. |
| Feats | Energy Beam | Added persistent fire on a critical hit; weapon-dice scaling and the unarmed attack remain native/manual. |
| Feats | Stunning Blows; Flinging Charge; Twist the Knife; Touch of Lunacy | Passed: multi-action prerequisites, next-attack timing, dynamic sneak-attack scaling, or nested attack/save sequencing are not safely represented by the current graph. |

The Batch 313 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 314 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Briny Bolt | Added blinded on a successful spell attack and blinded/dazzled on a critical success; Interact cleanup and damage remain native/manual. |
| Spells | Eagle's Cry | Added frightened 1/2 and fleeing on save outcomes; area targeting and damage remain native/manual. |
| Spells | Friends to Foes | Added frightened 1/2 and confused on save outcomes; ally proximity and movement restrictions remain native/manual. |

The Batch 314 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 315 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Inkshot; Moonbeam | Added dazzled for hit/critical-hit durations; damage, cleanup, and heightened scaling remain native/manual. |
| Spells | Spray of Stars | Added dazzled for 1/3 rounds or 1 minute by save outcome; area damage and heightened scaling remain native/manual. |
| Spells | Blood Runs Cold | Added slowed 1 on failure and critical failure; persistent cold damage and cleanup remain native/manual. |

The Batch 315 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 316 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Mud Bomb (Moderate); Sulfur Bomb (Greater) | Added dazzled and sickened critical-hit riders; damage, penalties, immunity, and activation remain native/manual. |
| Equipment | Blood Bomb (Major); Corrosive Ammunition | Added persistent bleed/acid on hits; bomb damage, armor targeting, Hardness, cleanup, and activation remain native/manual. |
| Equipment | Bottled Lightning (Moderate) | Added off-guard for 1 round on a hit; electricity damage, splash, and activation remain native/manual. |
| Equipment | Bleeding Spines Snare; Inflammation Flask; Frost Vial (Major) | Passed: recurring snare timing, dynamic weakness, or nonstandard Speed penalties are not safely represented by the current graph. |

The Batch 316 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope and no reminder-only triggers were added.

## Batch 317 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Weight of the World | Added dazzled and stunned by Fortitude-save outcome; damage and heightened scaling remain native/manual. |
| Spells | With Friends like These | Added sickened 1/2 by Will-save outcome; ally restrictions and heightened targeting remain native/manual. |
| Spells | Equal Footing | Added clumsy 1/2 by Will-save outcome; Speed penalties and restrictions remain native/manual. |

The Batch 317 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 318 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Crushing Ground | Added off-guard on failure/critical failure and immobilized on critical failure; Speed penalty, Escape, and end-of-spell damage remain native/manual. |
| Spells | Mantis's Grasp | Added immobilized for 1 round/1 minute by Reflex-save outcome; Escape and heightened targeting remain native/manual. |
| Spells | Zenith Star | Added dazzled/blinded by Fortitude-save outcome; tracking, night-sky requirements, and heightened duration remain native/manual. |

The Batch 318 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 319 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Puppet Strings | Added clumsy/slowed by save outcome; forced actions and recovery saves remain native/manual. |
| Spells | Bestial Curse | Added clumsy by save outcome; polymorph, weakness, and recovery remain native/manual. |
| Spells | Eject Soul | Added stunned 1 on failure/critical failure; soul form and ally-selected outcomes remain native/manual. |

The Batch 319 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 320 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Entangle Fate | Added off-guard on success/failure/critical failure; multi-target stupefied/escalation and duration cleanup remain native/manual. |
| Spells | Unbreaking Wave Containment | Added immobilized on a success and restrained on a critical success; sustain, repeated attacks, damage, and Escape remain native/manual. |
| Spells | Thunderburst | Added deafened for 1 minute/1 hour by save outcome; area damage and heightened scaling remain native/manual. |
| Spells | Disorienting Flash | Added dazzled on failure/critical failure; action-count-specific deafening remains native/manual. |

The Batch 320 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 321 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Draw Blood | Added 2 persistent bleed on a successful melee spell attack; healing from later bleed damage and heightened scaling remain native/manual. |
| Spells | Splinter Volley; Ulcerous Canker; Live Wire; Iron Rain; Bone Spray | Passed: rank-dependent damage formulas, area/save semantics, or persistent-damage scaling are not safely represented by a fixed trigger. |

The Batch 321 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 322 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Whelming Scrimshaw | Added sickened 1/2/3 by Fortitude-save outcome; amphibious immunity and breathing restriction remain native/manual. |
| Equipment | Black Tendril Shot (Moderate) | Added slowed 1/2 by Fortitude-save outcome; Escape bonuses and cleanup remain native/manual. |
| Equipment | Screech Shooter (Greater) | Added frightened 1/2/3 and fleeing on save outcomes; area targeting and activation remain native/manual. |
| Equipment | Magnetic Bola | Added clumsy 1/2 on overcharge Reflex-save outcomes; metal qualification, Speed penalty, and damage remain native/manual. |

The Batch 322 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope and no reminder-only triggers were added.

## Batch 323 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Soul Bleed | Added 1d6 persistent spirit on a critical Spectral Dagger hit; weapon qualification and healing remain native/manual. |
| Feats | Bloody Blows; Bloodletting Fangs | Added 1d4 persistent bleed on qualifying critical hits; unarmed/fangs qualification remains native/manual. |

The Batch 323 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 324 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Vicious Fangs | Added 1d6 persistent bleed on a critical hit; level scaling and fangs qualification remain native/manual. |
| Feats | Petrifying Gaze Mimicry | Added slowed 1/2 and immobilized on save outcomes; immunity, cooldown, and Escape remain native/manual. |
| Feats | Spore Cloud | Added dazzled/blinded by save outcome; aura range, frequency, and plant/fungus immunity remain native/manual. |

The Batch 324 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 325 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Glacial Prison | Added slowed 1 on success and critical failure; frozen-state behavior and temporary immunity remain native/manual. |
| Feats | Witchwood Seed | Added clumsy 2 and immobilized on failure/critical failure; dynamic damage, immunity, and recovery saves remain native/manual. |
| Feats | Goring Charge | Added 1d6 persistent bleed on a qualifying hit; movement requirement and damage remain native/manual. |

The Batch 325 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 326 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Shoulder Check | Added target off-guard on success and critical success; attack timing, armor requirement, and critical-failure self-off-guard remain native/manual. |
| Feats | Submission Hold | Added enfeebled 1 on success and enfeebled 2 plus enfeebled 1 on critical success; grapple prerequisite and exact end-of-turn/one-minute duration nuance remain native/manual. |

The Batch 326 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 327 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Stay Down! | Added prone on a successful or critically successful Athletics check; the Stand trigger, reach/prone prerequisites, and critical-success restriction remain native/manual. |

The Batch 327 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 328 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Rip the Spirit | Added drained 1 on a failed or critically failed Fortitude save; damage, action-count variants, and target qualification remain native/manual. |
| Spells | Radiant Beam | Added dazzled for 1/4 rounds by save outcome; damage, darkness counteract, and heightened scaling remain native/manual. |
| Spells | Carrion Mire | Added prone on a failed or critically failed Reflex save; area placement, recurring saves, healing counteract, and duration remain native/manual. |

The Batch 328 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 329 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wet Shock Snare | Added stunned 2 on a critical failure; trap placement, damage, and one-use handling remain native/manual. |
| Equipment | Godrending Ammunition | Added sickened 1/2 on Fortitude-save failure/critical failure; damage, critical-hit penalty, and death rider remain native/manual. |
| Equipment | Ghost Charge (Greater) | Added enfeebled 2 after a successful hit; undead qualification, vitality damage, splash, and attack bonus remain native/manual. |

The Batch 329 equipment file excludes poison equipment and is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 330 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Revealing Light | Added dazzled with save-outcome durations; invisibility/concealment and area targeting remain native/manual. |
| Spells | Ash Cloud | Added dazzled/blinded on Fortitude-save failure outcomes; recurring area timing, damage, and placement remain native/manual. |
| Spells | Defy the Gods | Added drained/stupefied by save outcome; divine/holy/unholy qualification, damage, resistance, and targeting remain native/manual. |
| Spells | Dead Weight | Added off-guard and slowed 1/2 by Fortitude-save outcome; thrall destruction, targeting, and damage remain native/manual. |
| Spells | Unsettling Perspective | Added stunned 1 on a critical failure; mental damage and information riders remain native/manual. |

The Batch 330 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 331 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Steelscour (Lesser) | Added 1d8 persistent acid after a successful bomb Strike; metal targeting, hardness, alternate Interact use, and damage remain native/manual. |

The Batch 331 equipment file contains no poison equipment and is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 332 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Do You Know Who I Am? | Added frightened 2/3 on Intimidation-check success/critical success; damage, location bonuses, immunity, and adjacency restriction remain native/manual. |
| Feats | Dance of the Tiger | Added frightened 1/2 on Performance-check success/critical success; shadow tether, distance cleanup, and immunity remain native/manual. |
| Feats | Unseat | Added prone on a critically successful Athletics check; mounted Strike, forced movement, and mount/landing requirements remain native/manual. |

The Batch 332 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 333 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster ability | Radiate Cold | Added enfeebled 1/2 and immobilized on failed/critically failed saves; aura placement, Speed penalties, and aura-duration cleanup remain native/manual. |

The Batch 333 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 334 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Sacred Weapon | Added enfeebled 2 and clumsy 2 for 1 round on a critical Strike; fiend qualification, extra damage, and cleanup timing remain native/manual. |
| Feats | Touch of Lunacy | Added clumsy 2/1 by Fortitude-save outcome; werecreature attack qualification and cleanup timing remain native/manual. |

The Batch 334 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 335 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Timber | Added dazzled for 1 round on a critical failure; damage and area placement remain native/manual. |
| Spells | Untwisting Iron Roots | Added prone on failed/critically failed Reflex saves; damage, area, and terrain remain native/manual. |
| Spells | Debilitating Terror | Added stunned 1 on a critical failure; hostile-action restriction and penalties remain native/manual. |
| Spells | Attacked from Within | Added frightened 1/2 and off-guard on critical failure; spirit damage and scaling remain native/manual. |
| Spells | Call of the Grave | Added sickened 1/2 and slowed 1 on spell-attack outcomes; damage and sickened-duration interaction remain native/manual. |
| Spells | Buzzing Bites | Added sickened 1 on a critical failure; damage, spell duration, and immunity remain native/manual. |
| Spells | Unfolding Wind Buffet | Added prone on a critical failure; three-Strike prerequisite and forced movement remain native/manual. |

The Batch 335 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 336 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Silver Crescent (Moderate) | Added dazzled on a failed Reflex save; vitality damage, silver interactions, targeting, and one-use handling remain native/manual. |
| Equipment | Wintershot | Added Auroral Shine dazzled durations and persistent cold by Fortitude outcome; concealment, activation, and damage details remain native/manual. |
| Equipment | Stonethroat Ammunition | Added enfeebled 2 on a critical failure; throat, jaw/fang, and Swallow Whole restrictions remain native/manual. |
| Equipment | Bristling Spines (Lesser) | Added dazzled on a critical failure; area and damage remain native/manual. |

The Batch 336 equipment file contains no poison equipment and is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 337 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Steal Shadow | Added enfeebled 1/2 with explicit save-outcome durations; void damage, sustain, and shadow recovery remain native/manual. |

The Batch 337 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 338 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Pollen Pods | Added dazzled and stupefied by Fortitude-save outcome; poison damage, bulb triggering, and area placement remain native/manual. |
| Spells | Freezing Rain | Added slowed 1/2 for 1 round by Reflex-save outcome; sustain timing, freezing choice, damage, and area movement remain native/manual. |

The Batch 338 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 339 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster ability | Stink Sap | Added sickened 1 on failure and sickened 1 plus stunned 1 on critical failure; aura placement, recovery penalties, immunity, and cleanup remain native/manual. |
| Monster ability | Barbed Net | Added clumsy 1 on successful hits and immobilized on critical hits; Speed penalty, net targeting, and Escape remain native/manual. |

The Batch 339 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 340 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster ability | Hair Snare | Added immobilized on failed/critically failed saves; trap placement, Speed penalty, and Escape/cleanup remain native/manual. |
| Monster ability | Numbing Strike | Added clumsy 1 on successful hits; Speed penalty and attack-specific duration remain native/manual. |

The Batch 340 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 341 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Devastating Shield Wallop | Added off-guard/prone/stunned by Fortitude-save outcome; Shield Wallop timing, shield qualification, and cleanup remain native/manual. |
| Feats | Majestic Presence | Added frightened 1/2/4 by Will-save outcome; emanation targeting and immunity remain native/manual. |
| Feats | Drowning Mist | Added sickened 1/2 by Fortitude-save outcome; aura and breath-reduction timing remain native/manual. |
| Feats | Catchy Tune | Added off-guard on critical success; Speed penalty and emanation targeting remain native/manual. |
| Feats | Hallucinogenic Ink | Added frightened 1/2 by Will-save outcome; ink application prerequisite remains native/manual. |
| Feats | Hobbling Criticals | Added slowed 1/2 by Fortitude-save outcome; eidolon qualification and Speed penalties remain native/manual. |

The Batch 341 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 342 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Awake With a Roar | Added frightened/stunned by Will-save outcome; area targeting and immunity remain native/manual. |
| Feats | Gladiator's Roar | Added frightened 1/2/3 and stunned 1 on critical failure; sonic damage and cone targeting remain native/manual. |
| Feats | Majestic Proclamation | Added dazzled/blinded by check outcome; Demoralize, form, and area targeting remain native/manual. |
| Feats | All Returns to Slumber | Added slowed 1 on critical failure; reaction restriction, area, requirements, and immunity remain native/manual. |
| Feats | Fling Head | Added frightened 1/2/3 by Will-save outcome; distance recovery restriction and action handling remain native/manual. |
| Feats | Disturbing Knowledge | Added target-side frightened/confused success branches; self-targeted critical-failure effect, immunity, and area targeting remain native/manual. |

The Batch 342 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 343 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Chastise | Added persistent spirit 2/4/6 by Will-save outcome; frightened prerequisite and later doubling remain native/manual. |
| Feats | Aegis for the Innocent | Added dazzled/blinded by Fortitude-save outcome; barrier placement, push, and damage remain native/manual. |
| Feats | Arcane Slam | Added prone on success and prone/dazzled on critical success; grapple, damage, and release remain native/manual. |

The Batch 343 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 344 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Ring Their Bell | Added stunned 1/2/3 by Fortitude-save outcome; Strike, armor, taunt, and incapacitation requirements remain native/manual. |
| Feats | Stomp Ground | Added off-guard/prone by Reflex-save outcome; emanation, damage, and cleanup remain native/manual. |
| Feats | Perfume Cloud | Added dazzled/blinded by Fortitude-save outcome; immunity, area, and visibility range remain native/manual. |
| Feats | Solar Detonation | Added dazzled/blinded by Reflex-save outcome; damage, sunlight, immunity, and area remain native/manual. |
| Feats | Paralyzing Jewel | Added fascinated/stunned/paralyzed by Will-save outcome; head-gem, emanation, and immunity remain native/manual. |
| Feats | Roar Mimicry | Added stunned 1/2 by Fortitude-save outcome; adjacent deafened rider, damage, and area remain native/manual. |

The Batch 344 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Installed-source pass-through review

The installed bestiary ability glossary was checked after Batch 326. Generic abilities with localized-only text (such as Power Attack, Rend, Improved Push, Ferocity, and Swallow Whole) cannot be safely keyed to a unique action or outcome from the glossary entry alone. Stench, Frightful Presence, Engulf, Greater Constrict, and Swallow Whole also require aura/area targeting, recurring saves, movement or Escape handling, or unconscious-state adjudication; they remain native/manual rather than becoming reminder-only graphs.

The corresponding focused feat, spell, and equipment pass identified dynamic or multi-stage effects such as Invented Vulnerability, Rainbow Fumarole, Phantasmal Calamity, Fearful Feast, and Knave's Standard. Their selectable weakness, random color branch, follow-up save/recurrence, trigger-frequency, aura, or ally-targeting rules are not safely representable by the current trigger nodes, so no unsupported automation was added.

## Batch 345 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Bottled Lightning (Lesser/Greater/Major) | Added off-guard for 1 round on a hit; damage, splash, scaling, and activation remain native/manual. |
| Equipment | Black Tendril Shot (Lesser/Greater) | Added slowed 1/2 by Fortitude-save outcome; Escape bonuses and cleanup remain native/manual. |
| Equipment | Durian Bomb (Lesser) | Added sickened/dazzled save riders; splash, scent suppression, and immunity remain native/manual. |
| Equipment | Binding Snare | Added prone/immobilized or restrained save riders; damage, Escape, and placement remain native/manual. |

The Batch 345 equipment file is registered alongside the aggregate package. No poison equipment or reminder-only triggers were added.

## Batch 346 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Aurochs' Might Tattoo (Lesser/Moderate/Greater) | Added off-guard/prone by Fortitude-save outcome; charge movement, Strike, damage, and frequency remain native/manual. |
| Equipment | Sun Dazzler | Added dazzled/blinded by Fortitude-save outcome; cone placement, glow-rod consumption, and early removal remain native/manual. |
| Equipment | Security Badge | Added slowed 1/2/3 by Will-save outcome; compelled Stand/Release actions and incapacitation remain native/manual. |

The Batch 346 equipment file is registered alongside the aggregate package. No poison equipment or reminder-only triggers were added.

## Batch 347 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Acknowledge Fan | Added stunned 1/2 or paralyzed by Will-save outcome; immunity and target selection remain native/manual. |
| Feats | Brain Drain | Added stupefied 1/2 by Will-save outcome; Focus Point recovery, mindless immunity, and frequency remain native/manual. |
| Feats | Release the Light | Added dazzled/blinded by Fortitude-save outcome; hit-point requirement and light-area targeting remain native/manual. |
| Feats | Silencing Strike | Added stunned 1/3 by Fortitude-save outcome; speech restrictions, flat checks, and Strike handling remain native/manual. |
| Feats | Doom of Sailors | Added frightened 1/2 by Will-save outcome; mental damage, misfortune, and water penalties remain native/manual. |
| Feats | Glory on High | Added dazzled/blinded by Will-save outcome; area, mental damage, immunity, and flight remain native/manual. |

The Batch 347 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 348 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Ashen Wind | Added sickened 1/2 by Fortitude-save outcome; area placement and ash damage remain native/manual. |
| Spells | Ancestral Touch | Added frightened 1/2 by Will-save outcome; mental damage and heightened scaling remain native/manual. |
| Spells | Blazing Fissure | Added prone on failed or critically failed Reflex saves; line targeting and damage remain native/manual. |
| Spells | Horrifying Blood Loss | Added frightened 1/2/3 by Will-save outcome; bleeding prerequisite, minimum-value rider, secondary targets, and damage remain native/manual. |

The Batch 348 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 349 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities | Fiddle | Added off-guard on failure and slowed 1 on critical failure; Speed penalties, dance behavior, and action handling remain native/manual. |

The Batch 349 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 350 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Freezing Touch | Added immobilized on failed/critical-failed Fortitude saves; persistent cold damage, Escape, and fire interaction remain native/manual. |
| Spells | Impaling Spike | Added immobilized on failed/critical-failed Reflex saves; impalement damage, cold-iron weakness, Escape, and terrain remain native/manual. |
| Spells | Gritty Wheeze | Added dazzled for 1 round or 1 minute by Fortitude-save outcome; area, damage, and creature-type adjustments remain native/manual. |
| Spells | Glass Sand | Added persistent bleed 1/2 by Reflex-save outcome; area and slashing damage remain native/manual. |

The Batch 350 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 351 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Heinous Future | Added slowed 1 for 1 round on the success branch; long-rest durations and recovery remain native/manual. |
| Spells | Hypnopompic Terrors | Added frightened 2 by save outcome; sleep adjustment, paralysis, and mental damage remain native/manual. |
| Spells | Gleaming Pet | Added dazzled/blinded by failed or critically failed adjacent-turn save; timing, immunity, and aura targeting remain native/manual. |
| Spells | Grasp of the Deep | Added grabbed on failed or critically failed Will saves; Escape, damage, and heightened multi-target handling remain native/manual. |

The Batch 351 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 352 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Albatross Curse | Added stupefied 1 for 1 round on the success branch; albatross destruction, misfortune, and curse durations remain native/manual. |
| Spells | Censure Falsehoods | Added sickened 1/2 by Fortitude-save outcome; speech flat checks and later escalation remain native/manual. |
| Spells | Anchoring Air | Added immobilized until the next turn on a critical failure; triggering attack penalties remain native/manual. |
| Spells | Grim Tendrils | Added persistent bleed on a critical failure; void damage and line targeting remain native/manual. |
| Spells | Charged Javelin | Added persistent electricity on successful spell attacks; initial damage and charged-field bonuses remain native/manual. |

The Batch 352 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 353 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Confusing Cry | Added stunned 1 or confused for 1 minute by Will-save outcome; recurring saves, self-attack, and area hearing remain native/manual. |
| Spells | Charitable Urge | Added stunned 1 on the success branch; item transfer, action sequencing, repeat saves, and no-item handling remain native/manual. |
| Spells | Moonburst | Added blinded on critical failure; damage, permanent duration, counteract, and area remain native/manual. |
| Spells | Pushing Gust | Added prone on critical failure; forced movement remains native/manual. |
| Spells | Bursting Bloom | Added persistent bleed 1d6 on failure or critical failure; damage, encumbered duration, and cleanup remain native/manual. |

The Batch 353 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 354 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Restraining Chains | Added clumsy 1/2 by save outcome; chain movement limits, durability, and Escape remain native/manual. |
| Spells | Luring Wail | Added slowed 1 for 1 round on a successful save; fascination, forced movement, recurrence, and off-guard remain native/manual. |
| Spells | Ignition | Added rank-scaled persistent fire on a critical spell attack; initial damage, melee scaling, and heightened handling remain native/manual. |

The Batch 354 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 355 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Day's Weight | Added fatigued and enfeebled 1 for 1 round on the success branch; longer durations and overnight recovery remain native/manual. |
| Spells | Glacial Heart | Added slowed 1 for 1 round on the success branch; ongoing saves, ice enclosure, immunity, and heightened effects remain native/manual. |
| Spells | Repelling Pulse | Added prone on critical failure; force damage, forced movement, and area remain native/manual. |
| Spells | Personal Blizzard | Added persistent cold and doubled critical-failure damage; spell-end cleanup and concealment remain native/manual. |
| Spells | Overstuff | Added sickened 1/2 by save outcome; automatic recovery, Speed penalty, and item effects remain native/manual. |

The Batch 355 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 356 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Lightning Lasso | Added immobilized or restrained by Reflex-save outcome; damage, Escape, Sustain, and heightening remain native/manual. |
| Spells | Live Wire | Added rank-scaled persistent electricity on a critical spell attack; initial damage and heightened scaling remain native/manual. |
| Spells | Missed Cue | Added frightened 1/2/3 by Will-save outcome; frightened-linked slowing and mental damage remain native/manual. |
| Spells | Falling Sky | Added prone on all non-critical-success saves; falling damage and flying-target handling remain native/manual. |

The Batch 356 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 357 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Gluttonous Growth | Added grabbed or restrained by Reflex-save outcome; area recurrence, Escape, and Sustain damage remain native/manual. |
| Spells | Ray of Corruption | Added persistent acid 2d12/4d12 by failed or critically failed save; initial damage, object effects, and basic-save handling remain native/manual. |
| Spells | Pressure Zone | Added clumsy 1/2 by Fortitude-save outcome; deafened, area recurrence, immunity, and recovery remain native/manual. |
| Spells | Curse of Recoil | Added off-guard for 1 round by Will-save outcome; ranged-attack penalties and repeated-attack handling remain native/manual. |

The Batch 357 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 358 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Touch of Death | Added stunned 1/3 by Fortitude-save outcome; death, damage, delayed activation, and immunity remain native/manual. |
| Spells | Sunburst | Added blinded on critical failure; damage, permanent duration, counteract, and area remain native/manual. |
| Spells | Teeth to Terror | Added frightened 1/3 by Will-save outcome; mental/persistent damage and jaw penalties remain native/manual. |
| Spells | Unrelenting Gravity | Added prone on failed or critically failed Fortitude saves; encumbered, falling, and Arrest a Fall remain native/manual. |
| Spells | Tornadic Gale | Added prone on critical failure; line targeting, damage, and forced movement remain native/manual. |

The Batch 358 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 359 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Tether | Added immobilized on critical failure; Speed penalties, distance limit, tethers, and Escape remain native/manual. |
| Spells | Unraveling Blast | Added off-guard on failure and critical failure; mental damage and duration remain native/manual. |
| Spells | Vitrifying Blast | Added slowed 1/2 by initial save outcome; ongoing saves, weaknesses, damage, and area remain native/manual. |
| Spells | Sting of the Sea | Added dazzled/blinded by failed or critically failed save; start-of-turn recurrence and duration remain native/manual. |
| Spells | Weird | Added frightened 1/2 from the first Will save; the critical-failure Fortitude death branch remains native/manual. |
| Spells | Threatening Mimicry | Added frightened 1/2/3 by Will-save outcome; ally filtering and damage-dependent duration remain native/manual. |

The Batch 359 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 360 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Charming Push | Added stunned 1 on critical failure; hostile-action restriction and attack/damage penalties remain native/manual. |
| Spells | Hollow Heart | Added frightened 1 on critical failure; ally-treatment rules and longer durations remain native/manual. |

The Batch 360 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 361 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Peony's Flourish | Added stunned 1/3 on successful performance outcomes; dazzled, movement, and immunity remain native/manual. |
| Feats | Unnerving Terror | Added frightened 1/2 by Will-save outcome; off-guard, form, area, and frequency remain native/manual. |
| Feats | Stunning Finisher | Added stunned 1/3 by Fortitude-save outcome; incapacitation, Strike, and reaction restrictions remain native/manual. |
| Feats | Wake and Tremble | Added prone on failure and sickened 1 on critical failure; area and action handling remain native/manual. |
| Feats | Sour Bomb | Added sickened 1/2 by Fortitude-save outcome; bomb damage, fleeing, and item activation remain native/manual. |

The Batch 361 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 362 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Subjugation | Added slowed 1 on a successful Will save; control, range, and critical-success restrictions remain native/manual. |
| Feats | Spinebreaker | Added clumsy 1/2 from the Athletics check outcome; positioning, Strike, and duration details remain native/manual. |
| Feats | Wake to Strife | Added sickened 1/2 from the Fortitude-save outcome; Grapple and attack handling remain native/manual. |
| Feats | Worm's Feast | Added 2d6 persistent piercing damage on a failed or critically failed save; scaling, off-guard, and Strike handling remain native/manual. |
| Feats | Wailing Dead | Added frightened 1/2/3 from the Will-save outcome; damage and area handling remain native/manual. |

The Batch 362 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 363 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Perplex | Added stupefied 1 on success and stupefied 3 on critical success; confused, targeting, immunity, and duration remain native/manual. |
| Feats | Kneel Before the Rightful Heir | Added 3d6/6d6 persistent mental damage by save outcome; prone-ending, clumsy, area, immunity, and DC rules remain native/manual. |

The Batch 363 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 364 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Stop Heart | Added sickened 1/2/3 by Fortitude-save outcome; void damage and heightened handling remain native/manual. |
| Spells | Unsettling Knowledge | Added fascinated for 1 round on success and 1 minute on failure/critical failure; chosen skill and later frightened branches remain native/manual. |

The Batch 364 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 365 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Worm's Repast | Added rank-scaled persistent piercing damage on failure/critical failure and slowed 1 on critical failure; initial damage, off-guard duration, undead adjustment, and heightened handling remain native/manual. |

The Batch 365 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 366 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Vision of Beauty | Added stupefied 1/2 and fascinated durations from the Will-save outcome; forced movement, illusion placement, targeting, and heightened handling remain native/manual. |
| Spells | Vacuum | Added stunned 1 on failure; area entry, sustained repeat saves, holding breath, suffocation, and critical-failure handling remain native/manual. |

The Batch 366 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 367 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Pressure Change | Added sickened 1/2 by failed or critically failed Fortitude save; movement, prerequisites, and immunity remain native/manual. |
| Feats | Sportlebore Choke | Added sickened 1/2 by save outcome; swarm prerequisites, damage scaling, and immunity remain native/manual. |
| Feats | Deep Freeze | Added slowed 1 for 1 round on critical failure; speed penalties, unstable function, damage, and targeting remain native/manual. |

The Batch 367 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 368 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Vibrant Vibrato | Added persistent sonic damage by Will-save outcome and stunned 3 on critical failure; aura entry/exit, deafened duration, area, and heightened handling remain native/manual. |

The Batch 368 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 369 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Withering Grasp | Added 1d4/2d4 persistent void damage from successful/critical spell attacks; initial damage, object Hardness effects, Shield Block interaction, and heightened handling remain native/manual. |
| Spells | Ulcerous Canker | Added persistent bleed on critical failure; initial void/poison damage and heightened scaling remain native/manual. |

The Batch 369 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 370 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Whispers of the Void | Added rank-scaled persistent void damage and drained/doomed outcomes by Fortitude save; targeting, heightened handling, and recovery remain native/manual. |
| Spells | Unseasonable Squall | Added prone on failure/critical failure; forced movement, damage, flying-specific degree changes, area, and object effects remain native/manual. |
| Spells | Volcanic Eruption | Added clumsy 1 on failure/critical failure; encased state, escape, damage, area, and heightened handling remain native/manual. |

The Batch 370 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 371 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Death from Above | Added off-guard for 1 round on success and prone on critical success; Leap, falling damage, and follow-up Strike handling remain native/manual. |

The Batch 371 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 372 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Weaponize Secret | Added 1d6 persistent mental damage on critical failure; rune creation, reaction discharge, delayed damage ending, and heightened handling remain native/manual. |

The Batch 372 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 373 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Kaiju's Footfalls | Added prone on failed/critically failed Reflex saves; jump/landing requirements, adjacency, area, damage, and heightened handling remain native/manual. |
| Feats | Thick Skin | Added sickened 1 on failed/critically failed Fortitude saves; thrall destruction, adjacency, and save DC handling remain native/manual. |
| Feats | Kaleidoscopic Entreaty | Added dazzled/blinded durations by Fortitude-save outcome; Entreat Spirit prerequisite and area remain native/manual. |

The Batch 373 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 374 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Gravitational Pull | Added prone on critical failure; forced movement, action-count variants, area, and targeting remain native/manual. |
| Spells | Haunting Spirit | Added off-guard for 1 round on success/failure/critical failure; recurrence, termination, damage, and sustain handling remain native/manual. |

The Batch 374 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 375 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Stagnate Time | Added slowed 1/2 by failed or critically failed Will save; area timing, recurring saves, and duration remain native/manual. |
| Spells | Widow's Bite | Added persistent poison and enfeebled 1 on successful/critical spell attacks; heightened handling remains native/manual. |
| Spells | Polar Ray | Added drained 2 on a successful or critically successful spell attack; cold damage and heightened handling remain native/manual. |
| Spells | Mutilate | Added rank-scaled persistent bleed on critical failure; self-damage, initial damage, area variants, and heightened handling remain native/manual. |

The Batch 375 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 376 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Scouring Pulse | Added rank-dependent persistent vitality damage on failed/critically failed Reflex saves; area, undead targeting, illumination, concealment, and heightened handling remain native/manual. |

The Batch 376 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 377 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Frog Geyser | Added prone on critical failure; water prerequisite, line targeting, forced movement, and action handling remain native/manual. |

The Batch 377 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 378 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Daunting Spell | Added frightened 1/2/3 by save outcome; next-spell setup, nemesis qualification, conditional stupefied rider, and duration remain native/manual. |

The Batch 378 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 379 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Scouring Sand | Added dazzled for 1 minute on failure/critical failure; critical-failure blindness, Interact removal, area timing, counteract effects, and Sustain handling remain native/manual. |
| Spells | Pain of Ages | Added stunned 1 on critical failure; spirit damage, area, and heightened handling remain native/manual. |
| Spells | Spirit Song | Added stunned 1/2 by Fortitude-save outcome; spirit damage, reaction restriction, area, and heightened handling remain native/manual. |
| Spells | Camel Spit | Added dazzled on a successful spell attack and rank-scaled persistent acid on critical success; repeat attacks, initial damage, and heightened handling remain native/manual. |
| Spells | Sawtooth Terrain | Added rank-scaled persistent bleed on failed/critically failed Reflex saves; area timing, speed penalties, terrain, and heightened handling remain native/manual. |

The Batch 379 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 380 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Wails of the Damned | Added drained 4 on critical failure; random drained value on failure, void damage, area, and targeting remain native/manual. |
| Spells | Fungal Exhalation | Added sickened 1/2 by save outcome; poison damage, area, breathing immunity, and heightened handling remain native/manual. |
| Spells | Tracking Mayflies | Added dazzled for 1 round on a successful Strike; magic-target qualification, range, concealment interactions, and repeat attacks remain native/manual. |

The Batch 380 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 381 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | To War! | Added off-guard until the end of your next turn on critical failure; mount movement, charge path, damage, temporary Hit Points, and ally bonuses remain native/manual. |

The Batch 381 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 382 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Fascinating Performance | Added fascinated for 1 round on a successful check; observer selection, incapacitation, multiple targets, and immunity remain native/manual. |
| Feats | Stunning Blows | Added stunned 1 on failure and stunned 3 on critical failure; Flurry sequencing, incapacitation, and Strike prerequisites remain native/manual. |
| Feats | Dust Cloud | Added dazzled on failure and blinded on critical failure; waking-world setup, concealment, area, and duration handling remain native/manual. |

The Batch 382 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 383 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Accursed Touch | Added 2d6 persistent void on a critical fist Strike; level scaling and the conditional stupefied rider remain native/manual. |

The Batch 383 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 384 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Lingering Flames | Added 2/4 persistent fire damage by Fireball save outcome; heightened scaling and the spell modification remain native/manual. |
| Feats | Thorn in Hell's Side | Added stunned 1/2 by Fortitude-save outcome; Hellbreaker Strike qualification and incapacitation handling remain native/manual. |

The Batch 384 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 385 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Shacklebreaker, Lion Badge, Dread rune, Sun Sight, Bravery Baldric, Durian Bomb, Freeze Ammunition, and related non-poison candidates | Passed: effects depend on interact/recovery checks, conditional item state, aura placement, or item-specific targeting that cannot be safely derived from the available trigger event without overbroad automation. |
| Monster abilities/effects | Field of Slaughter, Hunter's Precision, Clinging Smoke, Pallid Curse, Hobble Pursuit, Blood Wake, Hurl Net, and Wreath of Holy Light | Passed: the extracted effect entries lack a reliable originating ability/actor discriminator in the available roll options, and several require aura/stance state or conditional cleanup; no generic overbroad triggers added. |

Batch 385 records reviewed candidates only; no reminder-only triggers were added.

## Batch 386 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Yamaraj's Grandeur | Added sickened 2 on a critical failure; cone damage, targeting, and frequency remain native/manual. |
| Feats | Devastating Duelist | Added frightened 2 on a successful Dueling Lore check; preceding Strike and target Will DC remain native/manual. |
| Feats | Suplex | Added prone on a successful or critically successful Strike; grab/restrain prerequisite and release remain native/manual. |
| Feats | Disorienting Venom | Added off-guard for 1 round on a failed Fortitude save; Anadi Venom qualification and poison handling remain native/manual. |
| Feats | Targeting Finisher | Passed: limb selection controls different conditions and duration branches. |

The Batch 386 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 387 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Crescent Scepter | Added frightened 1/2 by Will-save outcome; attack-trigger timing remains native/manual. |
| Spells | Booming Blast | Added frightened 1/2 by Will-save outcome; firearm Strike, emanation targeting, and damage remain native/manual. |
| Spells | Cyclone Rondo | Added prone on failed/critically failed Reflex saves; whirlwind movement, terrain, damage, and Sustain timing remain native/manual. |
| Spells | Home Among Mulberry Leaves | Added immobilized on successful/critically successful Strike; fabric requirement, Escape, and critical-success choice remain native/manual. |
| Spells | Fallen Soldier's Lament | Added frightened 1/2 by Will-save outcome; illusion movement, emanation targeting, and Sustain timing remain native/manual. |
| Spells | Uncontrollable Dance | Added off-guard for the outcome-dependent spell duration; action restrictions and dance behavior remain native/manual. |
| Spells | Chastising Retort; Morass of Ages; Deluge | Passed: random-duration stupefied, aura-entry/start-of-turn timing, movement/falling conditions, or other unsupported state gates make partial automation unsafe. |

The Batch 387 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 388 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Spiritual Anamnesis | Added slowed 1 for the success/failure durations and stunned 3 on critical failure; creature-specific save adjustment and narrative effects remain native/manual. |
| Spells | Censure Falsehoods | Added sickened 1/2 by Fortitude-save outcome; action disruption and escalation clauses remain native/manual. |
| Spells | Ranger's Bramble | Added immobilized on critical failure; heightening-scaled persistent bleed, area, and Escape handling remain native/manual. |
| Spells | Contagious Idea; Wilding Word; Achaekek's Clutch; Swarming Wasp Stings; Malediction | Passed: mode choice, later-event dependencies, persistent-damage interactions, affliction stages, or aura/state timing are not safely representable as direct trigger graphs. |

The Batch 388 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 389 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Gloaming Arc | Added enfeebled/drained by Fortitude-save outcome; Strike qualification, shadow effect, and activation frequency remain native/manual. |
| Equipment | Durian Bomb (Major) | Added sickened/dazzled by Fortitude-save outcome; splash, scent suppression, immunity, and targeting remain native/manual. |
| Equipment | Dread rune; Freeze Ammunition; Lion Badge; Sun Sight | Passed: frightened-preservation, surface/aura state, recovery, activation, or item-state handling is not safely represented by a direct trigger. |

The Batch 389 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope; no poison-equipment triggers were added.

## Batch 390 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Hell's Armaments | Added slowed 1/2 by Fortitude-save outcome; favored-weapon critical Strike qualification and Speed penalties remain native/manual. |
| Feats | Sword of Sealing | Added immobilized on a failed or critically failed Fortitude save; Strike qualification and Escape DC remain native/manual. |
| Feats | Fracture Timeflow | Added slowed 1/2 and stunned 3 by Will-save outcome; delayed post-stun slow and qualifying critical Strike remain native/manual. |
| Feats | Levering Strike | Added off-guard on all non-critical-failure attack outcomes; staff qualification and Shove/Trip penalties remain native/manual. |
| Feats | Irresistible Bloom | Added fascinated for 1 round on failure/critical failure; emanation, hostile re-save, and Sustain timing remain native/manual. |
| Feats | Ghostly Condemnation; Disrupt Qi; Tumble Behind; Deadly Mutation | Passed: nested effects, dynamic/conditional persistent damage, next-attack sequencing, or damage-type selection prevent safe direct automation. |

The Batch 390 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 391 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Putrefaction | Added sickened 1 on a failed Fortitude save; area, potion counteract effects, and mythic resource remain native/manual. |
| Feats | Sunbird Glare | Added dazzled for outcome-dependent duration; bright-light requirement and temporary immunity remain native/manual. |
| Feats | Aerial Piledriver | Added prone on a successful Strike; grab/restrain prerequisite, damage, release, and self-prone critical failure remain native/manual. |
| Feats | Guardian Lion Roar | Added off-guard on a failed Fortitude save; line targeting, damage, unstable function, and innovation/minion state remain native/manual. |
| Feats | Sapping Symbol; Impaling Thrust; Set-Up Strike; Disrupt Qi; Deadly Mutation | Passed: reaction/conditional movement, later Escape or persistent-damage events, next-ally-attack sequencing, dynamic damage, or damage-type selection prevent safe direct automation. |

The Batch 391 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 392 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Exaltation Overwhelming | Added frightened 3/4 by Will-save outcome; area, free actions, and mythic resource remain native/manual. |
| Feats | Intimidating Spell | Added frightened 1/2 on failed/critically failed saves; spell selection and area targeting remain native/manual. |
| Feats | Dizzying Spell | Added stupefied 2/3 for 1 round by Will-save outcome; next-spell and single-target qualification remain native/manual. |
| Feats | Voice Cold as Death | Added stunned 1 on a critical-success Intimidation check; undead scaling and fatigue/frequency remain native/manual. |
| Feats | Reveal Machinations | Added frightened 2/3 by Deception-check outcome; disguise, target eligibility, and Recall Knowledge remain native/manual. |
| Feats | Fearful Symmetry | Added frightened 1 and fascinated for 1 round on failed/critically failed saves; hybrid/tiger prerequisite, area, and immunity remain native/manual. |

The Batch 392 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 393 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Breath of Drought | Added sickened 1/2 by Fortitude-save outcome; area entry, Sustain timing, and trait-based adjustments remain native/manual. |
| Spells | Unfolding Wind Crash | Added prone on critical failure; jump, area, damage, and heightening remain native/manual. |
| Spells | Shock and Awe | Added frightened/stunned by Will-save outcome; area targeting, illusion traits, and damage remain native/manual. |
| Spells | Spout | Added off-guard on critical failure; water-source area handling remains native/manual. |
| Spells | Inevitable Destination | Added prone on critical failure; distance restriction, Escape, and pull movement remain native/manual. |
| Spells | Void Warp | Added enfeebled 1 on critical failure; damage and heightening remain native/manual. |
| Spells | Thunderous Strike | Added prone on critical failure; weapon, cone, damage, and Strike qualification remain native/manual. |
| Spells | Calcium Rain; Feral Shades; Inevitable Destination movement; Breath of Drought trait exceptions | Passed or partially automated only where needed: persistent-damage save semantics, conditional save penalties, movement restrictions, and trait exceptions are not safely represented beyond the registered condition riders. |

The Batch 393 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 394 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities/effects | Aura of Reflection; Field of Slaughter; Hunter's Precision; Lunar Blaze; Caustic Mucus; Vulnerable to Curved Space; Compel Courage; Whisper Earworm; Clinging Smoke; Pallid Curse; Hobble Pursuit; Blood Wake; Assimilate Lava; Rotting Stench; Vamollaroth Stench | Passed: these extracted effect entries depend on originating aura/stance/item state, conditional cleanup, actor/trait filtering, or later-event timing, and do not expose a reliable unique ability discriminator in the available roll options. Generic save-based abilities with reliable slugs remain covered by earlier monster batches. |
| Monster ability glossary | Power Attack, Rend, Improved Push, Ferocity, Swallow Whole, Stench, Frightful Presence, Engulf, and related generic abilities | Passed or already covered: localized-only entries cannot be keyed safely; direct generic abilities already have registered mechanical triggers or require aura, movement, Escape, recurring damage, or immunity handling. |

Batch 394 records the current monster-effects sweep; no reminder-only triggers were added.

## Batch 395 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Whispers of a Dead Goddess | Added stunned 1 on non-critical-success saves; area, leaving, Sustain, and suggestion effects remain native/manual. |
| Spells | Entreat the Many | Added prone on critical failure; area, damage, and heightening remain native/manual. |
| Spells | Debilitating Dichotomy | Added stunned 1 on critical failure; reciprocal damage and self-save adjustment remain native/manual. |
| Spells | Entrancing Eyes | Added stupefied/fascinated for 1 round by save outcome; aura, Sustain focus, paralysis, concealment, and immunity remain native/manual. |
| Spells | Flames of Ego | Added fascinated for outcome-dependent duration; taunting-action and hostile-action restrictions remain native/manual. |
| Spells | Skyglass Prison | Added immobilized/restrained by Fortitude-save outcome; cage, Escape, destruction, and damage remain native/manual. |
| Spells | Remember the Lost | Added frightened 1 on critical failure; area, damage, named-victim variation, and immunity remain native/manual. |
| Spells | Divinity Leech; Pied Piping; Overwhelming Presence; Stars of Another Sky | Passed: later-event control, minion/tribute behavior, air movement, aura timing, or nested spell effects prevent safe direct automation. |

The Batch 395 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 396 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | March of Law; Comforting Presence; Impaling Thrust; Disrupt Qi; Steal the Sky | Passed: movement/adjacency and hostile-action gates, condition-value transfer, later Escape/persistent-damage timing, dynamic damage and living-target filtering, or nested spell acquisition prevent safe direct automation. |

Batch 396 records the next feat screening pass; no reminder-only triggers were added.

## Batch 397 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Sparking Spellgun (Moderate) | Added dazzled on success and blinded/dazzled on critical success; persistent fire, damage, and activation remain native/manual. |
| Equipment | Moonlit Spellgun (Lesser) | Added dazzled on success/critical success; silver weakness, time-of-day damage, and activation remain native/manual. |
| Equipment | Pyronite | Added deafened by save outcome and prone/stunned on critical failure; fuse, burst, damage, and detonation timing remain native/manual. |
| Equipment | Shot of the First Vault; Wand of Dumbfounding Doom; Robe of the Archmagi; Octopus Potion | Passed: fragment removal/reload, condition-change dependencies, character-state gating, random effects, and multi-action targeting prevent safe direct automation. |

The Batch 397 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope; no poison-equipment triggers were added.

## Batch 398 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Smoky Hag Eye | Added doomed/drained by Fortitude-save outcome; temporary immunity and item destruction remain native/manual. |
| Equipment | Floppy Rag Doll | Added clumsy 1/2 by Will-save outcome; reaction denial and activation timing remain native/manual. |
| Equipment | Putrid Sack of Rotting Fruit | Added sickened 1/2 by Fortitude-save outcome; ranged Strike, damage, and activation remain native/manual. |
| Equipment | Timeflaying Blade; Shot of the First Vault; Desolation Locket; Theatrical Mutagen | Passed: random time displacement, repeated recovery saves, fragment cleanup, aura timing, or per-round behavior prevent safe direct automation. |

The Batch 398 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope; no poison-equipment triggers were added.

## Batch 399 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wand of Splintered Sorrows (6th-rank) | Added stupefied 2 for 6 rounds on a successful damaging attack and slowed 1 for 6 rounds on a critical success; spell damage and rank variation remain native/manual. |
| Equipment | Wand of Dazzling Rays (8th-rank) | Added blinded 1 round and dazzled 8 rounds after a successful attack; spell damage, critical-success recovery saves, and activation remain native/manual. |

The Batch 399 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope; no poison-equipment triggers were added.

## Batch 400 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Unbalancing Blow | Added off-guard for 1 round on a critical Strike; critical-hit and damage qualification remain native/manual. |
| Feats | Dazzling Bullet | Added dazzled for 1 round on a successful Performance check; firearm Strike damage qualification remains native/manual. |
| Feats | Pierce the Eye; Earth to Heavens Strike; Sacred Weapon; Agonizing Rebuke | Passed: multi-check sequencing, persistent-damage duration, target trait filtering, or recurring damage/condition dependencies prevent safe direct automation beyond the implemented riders. |

The Batch 400 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 401 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Parch | Added dazzled for 1 minute on a critical failure; status penalty, hydration, trait exceptions, and early-ending rules remain native/manual. |
| Spells | Claim Undead | Added stunned 1 and confused for 1 round on a successful Will save; undead/control targeting and the failure control effect remain native/manual. |
| Spells | Invoke True Name; Firework Blast; Necrotize; Osseous Cage; Stone Lance; Unfathomable Song | Passed: spell-state/weakness timing, multi-save correlation, random debilitation/table results, Escape or cage cleanup, and random Sustain outcomes prevent safe direct automation. |

The Batch 401 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 402 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Caterwaul Sling | Added deafened for 1 round on failure and 1 hour on critical failure; sonic damage and activation remain native/manual. |
| Equipment | Saurian Spike (Major) | Added frightened 2/3 by Will-save outcome; polymorph activation, area, and fear targeting remain native/manual. |
| Equipment | Wondrous Figurine (Bismuth Leopards) | Added dazzled for 1 round on a failed or critically failed Will save; leopard proximity, duplicate-save handling, and activation duration remain native/manual. |
| Equipment | Wisp Chain; Arboreal's Revenge; Shacklebreaker; Possum's Play; Urn of Ashes | Passed: movement-dependent cleanup, speed penalties, trigger reactions, illusion/state handling, or non-condition effects prevent safe direct automation. |

The Batch 402 equipment file is registered alongside the aggregate package. Poison equipment remains out of scope; no poison-equipment triggers were added.

## Batch 403 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities | Radiate Cold | Added enfeebled 1/2 and immobilized by save outcome; Speed penalties and cleanup remain native/manual. |
| Monster abilities | Stink Sap | Added sickened 1 on failure and sickened 1 plus stunned 1 on critical failure; aura duration and penalties remain native/manual. |
| Monster abilities | Fiddle | Added off-guard on failure and off-guard plus slowed 1 on critical failure; Speed penalties and dance effects remain native/manual. |
| Monster abilities | Blood Wake | Added frightened 2/4 and stunned 1 by save outcome; movement penalties remain native/manual. |
| Monster effects | Swarming Bites; Despair; Engulf and Swallow Whole; Flesh Mutation; Clinging Smoke; Hurl Net; Hope Vulnerability; Stench; Rotting Stench | Passed: aura/state filtering, random mutation, Escape or movement cleanup, conditional critical-hit timing, or non-condition riders prevent safe direct automation. |

The Batch 403 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 404 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Pierce the Eye | Added blinded for 1 round on a successful Fortitude save; persistent bleed, longer blindness duration, and recovery penalties remain native/manual. |
| Feats | Dazing Blow | Added stunned 1/2/3 by Fortitude-save outcome; grabbed-target qualification, incapacitation, and Strike damage remain native/manual. |
| Feats | Bloody Denial | Added stunned 1 on a critical-failure Fortitude save; reaction denial, critical-attack degree adjustment, and Strike qualification remain native/manual. |
| Feats | Decree of Execution | Added stunned 1 for 1 minute on a critical failure; damage, lethality, immunity, weakness, and level-dependent outcomes remain native/manual. |
| Feats | Flinging Charge; Agonizing Rebuke; Disrupt Qi | Passed: next-action/state timing, recurring damage and termination, or persistent-damage cleanup prevent safe direct automation. |

The Batch 404 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 405 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Phantasmal Treasure | Added fascinated for 1 round on success and 1 minute on failure/critical failure; illusion disbelief and compelled-action behavior remain native/manual. |
| Spells | Manifestation of Spirits | Added stupefied 3 by duration and confused 1 on critical failure; narrative belief effects remain native/manual. |
| Spells | Information Overload | Added stupefied 1/2 by Will-save outcome. |
| Spells | Rime Slick | Added prone on a critical failure; damage, terrain, and standing qualification remain native/manual. |
| Spells | Updraft | Added prone on failure/critical failure; launch, falling damage, and movement remain native/manual. |
| Spells | Internal Insurrection | Added clumsy 1 for 1 round on success; disease stages remain native/manual. |
| Spells | Reblooded | Added clumsy 1/2 for 1 minute by save outcome; persistent acid damage remains native/manual. |
| Spells | Chastising Retort; Frost Pillar; Dreamer's Call; Divine Plagues | Passed: random durations, Escape/destruction cleanup, compelled-action sequencing, or disease-stage selection prevent safe direct automation. |

The Batch 405 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 406 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster abilities | Hobble Pursuit | Added slowed 1 on failure/critical failure; Speed penalty details remain native/manual. |
| Monster abilities | Hurl Net | Added off-guard on a hit and restrained on a critical hit; net removal and Speed penalties remain native/manual. |
| Monster abilities | Wreath of Holy Light | Added 1d6 persistent fire damage on a critical Strike; holy trait, base damage, and target qualification remain native/manual. |
| Monster effects | Pallid Curse; Utter Despair; Matting Paint; Electricity Absorption; Assimilate Lava; Pyre's Mercy; Call to Blood; Stench; Rotting Stench; Break Legs! | Passed: aura/state transitions, weakness and penalty riders, or non-condition effects prevent safe direct automation beyond existing batches. |

The Batch 406 monster file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 407 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wand of Splintered Sorrows (4th-rank) | Added stupefied 2 for 4 rounds and slowed 1 for 4 rounds on a critical attack; spell damage and activation remain native/manual. |
| Equipment | Phantasmal Doorknob (Greater/Major) | Added blinded for 1 round on a critical Strike; temporary immunity and activation remain native/manual. |
| Equipment | Wand of Hopeless Night (4th-rank) | Added frightened 1/2 by save outcome; Darkness area and activation remain native/manual. |
| Equipment | Irritating Seedpod | Added slowed 1 for 1 round on a failed save; Mist area, duration, and temporary immunity remain native/manual. |
| Equipment | Booming Bell | Added deafened for 1 round on a failed save; sonic damage and activation remain native/manual. |
| Equipment | Peshpine Grenade (Moderate) | Added stupefied 1 for 1 round on a hit; damage and activation remain native/manual. |
| Equipment | Lodestone Bomb; Bloodthirsty; Caltrops; Animal Nip; Wand of Hopeless Night variants | Passed: target-material filtering, persistent-damage conditions, deployment/area timing, or variant-specific source coverage prevent safe additional automation. Poison equipment remains out of scope. |

The Batch 407 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 408 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wand of Dazzling Rays (5th-rank) | Added blinded for 1 round and dazzled for 5 rounds on a successful attack; critical recovery saves and activation remain native/manual. |
| Equipment | Pressure Bomb (Greater) | Added prone on a critical hit; target-size and push distance remain native/manual. |
| Equipment | Mud Bomb (Major) | Added dazzled for 1 round on a critical hit; damage and activation remain native/manual. |
| Equipment | Dwarven Daisy (Moderate) | Added dazzled for 1 round on a failed save; firework damage and activation remain native/manual. |
| Equipment | Atrophy Bomb (Lesser) | Added enfeebled 1 for 1 round on a hit; persistent void damage remains native/manual. |
| Equipment | Firecracker Fulu | Added dazzled for 1 round on failure and 1 minute on critical failure; critical Strike trigger and damage remain native/manual. |
| Equipment | Lodestone Bomb; Giant-Killing; Shatterstone; Caltrops; Wisp Chain; Bloodthirsty | Passed: material/trait filtering, critical-target conditions, persistent-damage cleanup, deployment/area timing, or existing variant coverage prevent safe additional automation. Poison equipment remains out of scope. |

The Batch 408 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 409 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Rip and Tear | Added 1d6 persistent bleed on a successful Strike; level scaling and morph/polymorph qualification remain native/manual. |
| Feats | Spiritual Disruption | Added stupefied 1 and 1d6 persistent spirit damage on a successful Strike; cleanup when persistent damage ends remains native/manual. |
| Feats | Gaping Flesh | Added sickened 1/2 by Fortitude-save outcome; adjacency recovery restriction and reaction timing remain native/manual. |
| Feats | Dominion Aura | Added prone on a failed or critically failed save; damage, recurring Sustain saves, and aura timing remain native/manual. |
| Feats | Aphet Flash | Added dazzled for 1/2 rounds by Fortitude-save outcome; swarm positioning and light remain native/manual. |
| Feats | Astonishing Explosion | Added fascinated for 1 round on a hit and stunned 1 on a critical hit; alchemical eligibility and damage remain native/manual. |
| Feats | Stunning Appearance; Felling Shot; Frightful Attrition; Murderer's Circle | Passed: level gating, falling/movement, witness/area timing, or next-action sequencing prevent safe direct automation. |

The Batch 409 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 410 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Scrounger's Glee | Added frightened 1/2 by Will-save outcome; hearing, minimum-value, healing, and Dismiss behavior remain native/manual. |
| Spells | Advanced Scurvy | Added enfeebled 1 for 1 minute on success; disease stages remain native/manual. |
| Spells | Scramble Body | Added sickened 1 on failure and sickened 2 plus slowed 1 on critical failure; cleanup while sickened remains native/manual. |
| Spells | Expunge Blood | Added drained/clumsy by save outcome; persistent bleed scaling remains native/manual. |
| Spells | Haunting Hymn | Added deafened for 1 minute on critical failure; sonic damage remains native/manual. |
| Spells | Localized Quake | Added prone on failure/critical failure; solid-ground qualification and damage remain native/manual. |
| Spells | Inner Radiance Torrent | Added blinded for 1 round on critical failure; force damage, darkness interaction, and casting options remain native/manual. |
| Spells | Life Tap | Added drained 1/2/3 by save outcome; thrall destruction, healing, and recovery timing remain native/manual. |
| Spells | Rainbow's End | Added dazzled for 1 round on failure/critical failure; spirit damage and teleportation remain native/manual. |
| Spells | Vindicator's Judgment; Barbed Spear; Frog Tongue; Bloodspray Curse | Passed: weakness/stateful next-attack effects, Escape cleanup, or damage-triggered condition timing prevent safe direct automation beyond existing coverage. |

The Batch 410 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 411 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Disruptive Transfer | Added dazzled for 1 minute on a failed/critically failed Will save; teleportation and adjacency remain native/manual. |
| Spells | Vitality Lash | Added enfeebled 1 for 1 round on critical failure; vitality damage remains native/manual. |
| Spells | Veil of Spirits | Added dazzled for 1 round by save outcome; spirit weakness and senses remain native/manual. |
| Spells | Shadow's Web | Added enfeebled 1/2 by save outcome and stunned 1 on critical failure; immobilization cleanup remains native/manual. |
| Spells | Divine Decree | Added enfeebled 2 for 1 minute on failure/critical failure; damage, planar return, paralysis, and death effects remain native/manual. |
| Spells | Exploding Earth | Added prone on failed/critically failed Fortitude save; spell attack and damage qualification remain native/manual. |
| Spells | Infectious Ennui; Mushroom Patch; Barbed Spear; Tentacular Innervation | Passed: Sustain/propagation timing, area cleanup, removal actions, or Escape-dependent effects prevent safe direct automation. |

The Batch 411 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 412 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Shadow Projectile | Added off-guard on failure/critical failure; ally attack qualification and mental damage remain native/manual. |
| Spells | Briny Bolt | Added blinded for 1 round on success/critical success and dazzled for 1 minute on critical success; Interact cleanup remains native/manual. |
| Spells | Warp Mind | Added confused for 1 minute on failure and indefinitely on critical failure; success's next-turn action penalty remains native/manual. |
| Spells | Timber | Added dazzled for 1 round on critical failure; bludgeoning damage remains native/manual. |
| Spells | Deluge; Perfected Body; Vengeful Glare; Gluttonous Growth; Freezing Rain; Scintillating Safeguard | Passed: movement, trigger-dependent defenses, persistent damage, Escape cleanup, Sustain timing, or area-state handling prevent safe direct automation. |

The Batch 412 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 413 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Albatross Curse | Added stupefied 1 for 1 round on success; the one-use worse-next-Will-save curse rider remains native/manual. |
| Spells | Untwisting Iron Roots | Added prone on failure/critical failure; damage and difficult terrain remain native/manual. |
| Spells | Web | Added immobilized for 1 round on critical failure; Escape, web clearing, and Speed penalties remain native/manual. |
| Spells | Curse of Recoil | Added off-guard for 1 round on success/failure/critical failure; ranged-attack penalties remain native/manual. |
| Spells | Gluttonous Growth; Freezing Rain; Acid Grip; Divine Immolation; City of Sin; Sudden Swarm; Trim the Blight | Passed: Sustain/area timing, Escape cleanup, persistent-damage riders, ritual adjudication, or non-condition effects prevent safe direct automation. |

The Batch 413 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 414 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | The Fool | Added stupefied 1/2/3 by save outcome and confused for 1 minute on critical failure; targeting and multi-target selection remain native/manual. |
| Equipment | Deafening Music Box; Juubun's One Thousand Poems; Crimson Godsblood Serum; Golden Greaves; Bloodseeker Beak; Ogre Spider Filament | Passed: area persistence, conditional spell sequencing, 0-HP timing, trigger replacement, or catalyst interaction prevents safe direct automation. |
| Equipment | Poison-related candidates | Passed/out of scope; no poison equipment trigger was added. |

The Batch 414 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 415 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster ability glossary | Master's Eye; Stench; Frightful Presence; Engulf; Sneak Attack | Passed or already covered: death-state timing, aura/area targeting, recurring saves, Escape handling, or existing registered generic-ability coverage prevents a new safe trigger. |

The Batch 415 monster-glossary file is registered as an empty audit batch; no reminder-only triggers were added.

## Batch 416 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Polished Distraction; Regurgitate Mutagen; Ivy Playhouse Strike; Forceful Shot; Flashing Shield; Electrogenesis; Kaiju's Footfalls; Thick Skin; Dazing Blow; Decree of Execution; Caustic Nectar; Thunder Clap; Dance of the Tiger | Already covered by registered feat batches. |
| Feats | Tangled Forest Stance; Divine Presence; First to Strike, First to Fall; Stolen Spell; Vacate Vision; You Can't Keep Us Down; Unseat; Opportune Opening | Passed: action-specific movement, stance/aura timing, inherited-duration or conditional follow-up effects prevent safe additional automation. |

The Batch 416 feat-screening file is registered as an empty audit batch; no duplicate or reminder-only triggers were added.

## Batch 417 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | The Queen's Rainbow | Added dazzled on success and blinded on critical failure for 1 round; area entry and repeat-save timing remain native/manual. |
| Spells | Confront Selves | Added clumsy 1 for 1 round on success/failure/critical failure; damage and critical-success spell ending remain native/manual. |
| Spells | Mycological Malady | Added enfeebled 2 for 1 round on success; disease stages and GM-dependent eligibility remain native/manual. |
| Spells | Pied Piping; Nightmare; Vindicator's Judgment; Bridge of Vines; Veil of Broken Reality; Daemonic Pact; Sticky Fire; Ember Doppelgänger | Passed or already covered: area/temporary-immunity timing, conditional weaknesses, persistent-damage recovery, ritual outcomes, or existing registrations prevent safe additional automation. |

The Batch 417 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 418 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Vanishing Shocker (Lesser) | Added off-guard for 1 round on failure and clumsy 1 plus off-guard on critical failure; emanation targeting remains native/manual. |
| Equipment | Returning Starknife | Added clumsy 1 on success and immobilized for 1 round on failure; the critical-failure Escape DC remains native/manual. |
| Equipment | Scalding Gauntlets (Greater) | Added sickened 1 for 1 hour on failure/critical failure; grab/restrain qualification and persistent fire damage remain native/manual. |
| Equipment | Ashen (Greater) | Added confused for 1 round on failure and 1 minute on critical failure; persistent fire damage remains native/manual. |
| Equipment | Vigilant Eye (Greater); Awakened Cold Iron Shot; Mamlambo Scale; Lambent Perfume; Rusting Ammunition; Manacles; Soldier's Syrup | Passed: counteract, area persistence, affliction recovery, object/limb adjudication, or non-condition effects prevent safe direct automation. |

The Batch 418 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 419 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Roaring Potion (Greater) | Added frightened 1 on failure and frightened 2 on critical failure; cone targeting and sonic damage remain native/manual. |
| Equipment | Owl Screech Egg | Added frightened 1/2/3 by save outcome; the critical-failure fleeing rider remains native/manual. |
| Equipment | Silversoul Bomb (Greater) | Added blinded then dazzled on failure/critical failure; splash qualification and nindorus-specific effects remain native/manual. |
| Equipment | Necrotic Bomb (Moderate) | Added sickened 2 on critical hit; primary-target qualification and void damage remain native/manual. |
| Equipment | Brilliant (Greater) | Added blinded for 1 round on failed/critically failed Fortitude save after a critical hit; weapon damage and target qualification remain native/manual. |
| Equipment | Vigilant Eye (Greater); Freezing Embrace Snare; Desolation Locket; Eye of the Moonwarden; Grinning Pugwampi; Chroma Kaleidoscope; Semaphore of Slanders; Immovable; Bitter | Passed: area persistence, linked persistent damage, complex multi-outcome selection, non-condition effects, or existing coverage prevent safe additional automation. |

The Batch 419 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 420 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Saurian Spike (Major) | Added frightened 2 on failure and frightened 3 on critical failure; polymorph activation and emanation targeting remain native/manual. |
| Equipment | Wand of Splintered Sorrows (Rank 6) | Added stupefied 2 for 6 rounds on a damaging hit and slowed 1 for 6 rounds on a critical hit; spell damage remains native/manual. |
| Equipment | Wand of Crackling Lightning (6th-Rank) | Added off-guard for 1 round on failure/critical failure; expanded area and damage remain native/manual. |
| Equipment | Bewitching Bloom (Purple Iris) | Added prone on failure/critical failure; ally targeting and Command's other behavior remain native/manual. |
| Equipment | Shacklebreaker; Dr. Ushernacht's Astonishing Ink; Octopus Potion; Whispering Remnant; Pheromone Flare; Diluted Hype; Sun Orchid Poultice; Surging Serum; Elven Absinthe; Demon's Knot; Jade Cat; Impact Foam Chassis; Lion Badge | Passed: counteract, affliction stages, area/trait filtering, escape/grapple state, conditional activation, or non-condition effects prevent safe additional automation. |

The Batch 420 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 421 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Thundering Surge | Added prone on a critical failure against its Fortitude save; branch selection, area, and sonic damage remain native/manual. Failure-only riders are not inferred across flat-check branches. |
| Feats | Godbreaker; Form Lock; Tangled Forest Stance; Divine Presence; You Can't Keep Us Down; Stolen Spell; Opportune Opening; Quicksoul; Vacate Vision; Fortified Mind; Fierce Grasp | Passed: multi-step Strike sequences, stance/aura timing, movement/escape state, poison damage, inherited-duration effects, or conditional reactions prevent safe additional automation. |
| Feats | Combat Climber; Solo Dancer; Dodge Away; Advanced First Aid; Holistic Care; Fearsome Brute; Sanguine Tenacity; Weight of Guilt; Heartless Debilitations; Blast Resistance | Passed: persistent defensive/passive modifiers or selectable condition-removal/debilitation choices are not safe direct condition applications. |

The Batch 421 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 422 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Incarnate Skeletal Giant | Added prone on success/failure/critical failure and clumsy 1 for failure or clumsy 2 for critical failure; arrival targeting and damage remain native/manual. |
| Spells | Invoke True Name; Rainbow Fumarole; Phantasmal Calamity; Fearful Feast; Firework Blast; Infinitesimal Collapse Field; Life's Fresh Bloom; Conglomerate of Limbs; Mantle of the Unwavering Heart; Musical Shift; Blinding Bottle; Noxious Metals; Commanding Lash | Passed: linked save sequences, random/selected effects, area persistence, trait/stage filtering, poison or disease handling, Escape cleanup, or conditional aura state prevent safe direct automation. |

The Batch 422 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 423 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster effects | Swarming Bites; Despair; Engulf and Swallow Whole; Hunter's Onslaught; Aura of Disquietude; Vomit Tar; Flesh Mutation; Radiate Cold; Scent of Blood; Swig; Aura of Reflection; Curse of Boiling Blood; Dual Mind; Thaw the Heart; Barbed Net; Aura of Sophistry; Hair Snare; Debilitating Sneak Attack; Competitive Taunt; Unbelievable Connection; Bogwid Fever; Stink Sap | Already covered by registered monster batches, or passed where the effect depends on aura/stance state, random mutation, Escape/engulf cleanup, affliction staging, or non-condition modifiers. |

The Batch 423 monster-effects file is registered as an empty coverage batch; no duplicate or reminder-only triggers were added.

## Batch 424 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Anathematic Reprisal | Added stupefied 1 for 1 round on failure/critical failure; anathema qualification and damage remain native/manual. |
| Spells | Wronged Monk's Wrath | Added deafened for 1 round on failure and 1 minute on critical failure; area and damage remain native/manual. |
| Spells | Funeral Flames; Beastmaster Trance; Soothing Blossoms; Inveigle; Stick On; Lift Nature's Caul; Necrotize; Power Word Stun; Oneiric Mire; Ferrous Form; Unravel Existence; Spellwrack; Deluge; Menacing Lament | Passed: persistent-damage recovery, self-state, random or level-dependent outcomes, area cleanup, multi-save sequences, or non-condition effects prevent safe additional automation. |

The Batch 424 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 425 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Diadem of Divine Radiance | Added dazzled for 1 round on hit and 3 rounds on critical hit; persistent damage and darkness counteract remain native/manual. |
| Spells | Contagious Idea | Added frightened 1/2/3 by the terrifying-thought Will save outcome; pleasant-thought targeting is not a saving throw and remains unaffected. |
| Spells | Sudden Swarm; Trim the Blight; Cordyceps Command; Tear the Veil; Incendiary Aura; Sure Footing; Holy Host; Tanglecurse; Living Thunderbolt; Ordained Purpose; Channel Arrogance; Osseous Cage; Life's Flowing River; Mirror Malefactors; Morass of Ages; Puff of Poison; Palm-Held Sun; Seize Identity; Variable Gravity | Passed: form/state changes, area persistence, curse/affliction timing, multi-target movement, random or conditional outcomes, or persistent-damage cleanup prevent safe additional automation. |

The Batch 425 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 426 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Song of the Fallen | Added slowed 1 for 1 round on success and 1 minute on failure; undead targeting and vitality damage remain native/manual. |
| Spells | Blood Chestnuts | Added drained 1/2 for 1 round on failure/critical failure; draining-growth disease stages remain native/manual. |
| Spells | Armor of Thorn and Claw; Clear Mind; Blightburn Blast; Sound Body; Crimson Breath; Form of the Sandpoint Devil; Roar of the Dragon; Chromatic Image; Unfathomable Song; Wilding Word; Embodied Font; Unholy Army; Consuming Darkness; Wall of Radiance; Chromatic Ray; Shifting Sand; Halcyon Mists; Song of Silver | Passed: self-state, counteract, disease/poison stages, random color/table outcomes, area persistence, summon/ritual handling, or persistent-damage cleanup prevent safe additional automation. |

The Batch 426 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 427 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wand of Legerdemain (4th-rank) | Added fascinated for 1 round on failure/critical failure; hostile-act cleanup, Diplomacy/Intimidation removal, and Sustain extension remain native/manual. |
| Equipment | Sun Sight; Fearless Sash; Aeon Stone (Smoothing); Desolation Locket; Spike Launcher; Golden Breath Fulu; Hunter's Anthem; Wand of Teeming Ghosts; Snagging; Vigilant Eye; Wisp Chain; Dread; Majordomo Torc; Horn of Rust; Mocker's Swazzle; North Wind's Night Verse; Soldier's Syrup; Chapbook of Terrors; Constant Crosier; Bravery Baldric; Zealot Staff; Final Blade | Passed: defensive/removal effects, area persistence, trigger-dependent condition changes, counteract or item-state handling, non-condition modifiers, or existing coverage prevent safe additional automation. |

The Batch 427 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 428 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Sparking Spellgun (Moderate) | Added blinded for 1 round on critical hit; dazzled linked to persistent fire damage remains native/manual. |
| Equipment | Bewildering Spellgun | Added confused for 1 minute on success/critical success; end-of-turn recovery saves remain native/manual. |
| Equipment | Fire-Douse Snare | Added dazzled/blinded by save outcome and duration; Interact cleanup remains native/manual. |
| Equipment | Greased Axle; Possum's Play; Manacles (Good/Superior); Surging Serum; Miniaturization Module; Golden Breath Fulu; Cleft Head Marking; Talonstrike Blade; Called; Shot of the First Vault; Sawtooth Reaper; Bravery Baldric variants; Avalanche Boots; Platter of Putrid Dreams; Mordant Mask; Thousand-Pains Fulu; Journeybread | Passed: Escape, self-state, item-state, attack qualification, persistent damage, or non-condition effects prevent safe additional automation. |
| Equipment | Tangle Root Toxin | Passed/out of scope: poison equipment remains excluded. |

The Batch 428 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 429 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Animal Nip (Major) | Added fascinated for 1 round on failure and fascinated plus prone on critical failure; animal targeting and hostile-act cleanup remain native/manual. |
| Equipment | Frost Fair Yanyuedao | Added slowed 1 for 1 minute on failure/critical failure; severe-cold, cold-resistance, and critical-Strike qualification remain native/manual. |
| Equipment | Flare Beacon (Greater) | Added blinded for 1 round on critical failure; dazzled's area-dependent duration remains native/manual. |
| Equipment | Juxtaposition Ammunition | Added sickened 1 on critical failure; teleportation and forced movement remain native/manual. |
| Equipment | Freeze Ammunition; Pharasmin Visor; Frenzy Oil; Robe of the Archmagi; Wand of Dumbfounding Doom; Day Goggles; Anointing Oil; Scour; Gnawbone Toxin; Bottled Catharsis; Timeflaying Blade; Wand of Dazzling Rays; Ring of Recalcitrant Wishes; Primordial Flame; Oracular Hag Eye; Theatrical Mutagen; Mage Bane; Elysian Dew; Skull Bomb; Book of Lost Days | Passed: item-state, poison/toxin stages, area persistence, counteract, passive eligibility, or non-condition effects prevent safe additional automation. |

The Batch 429 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 431 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Firework Blast | Added blinded and deafened for 1 round on the additional Fortitude-save failure branches; initial Reflex save, damage, and critical-failure penalty remain native/manual. |
| Spells | Phantasmal Calamity | Added stunned 1 for 1 minute on the secondary Reflex-save failure branches; initial Will save, damage, and trapped-vision details remain native/manual. |
| Spells | Invoke True Name; Rainbow Fumarole; Liberating Command; Rusting Grasp; Fearful Feast; Dirge of Doom; Magnetic Repulsion; Focusing Hum; Infinitesimal Collapse Field; Life's Fresh Bloom; Conglomerate of Limbs; Word of Freedom; Tattoo Whispers; Musical Shift; Astral Projection | Passed: target-state, random-table, reaction, material, aura/area persistence, transformation, sustained, ritual, or non-condition effects prevent safe additional automation. |

The Batch 431 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 432 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Channel Arrogance | Added fascinated by adjusted Will-save outcome and duration; one-action degree adjustment, mental-action flat check, and damage remain native/manual. |
| Spells | Osseous Cage | Added immobilized on failed or critically failed Reflex saves; no-save choice, Escape, cage destruction, and cover remain native/manual. |
| Spells | Trim the Blight; Awaken Portal; Tear the Veil; Incendiary Aura; Holy Host; Living Thunderbolt; Ordained Purpose; Life's Flowing River; Mirror Malefactors; Morass of Ages; Palm-Held Sun; Eyes of the Dead; Seize Identity; Incarnate Ancestry; Variable Gravity; Fated Confrontation; Angel Form; Armor of Thorn and Claw | Passed: blight/ritual effects, aura and area entry timing, sustain, transformation, random or conditional targeting, delayed actions, or non-condition effects prevent safe additional automation. |

The Batch 432 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 444 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Meditate on This! | Added frightened 1/2 by Will-save outcome; hit/damage trigger, temporary immunity, and fleeing rider remain native/manual. |
| Feats | Frightful Condemnation | Added frightened 1/2 after successful/critical Strikes; condemnation and same-turn requirements remain native/manual. |
| Feats | Unbalancing Appearance | Added clumsy 1/2 by Strike outcome; unnoticed/off-guard requirements and current-turn timing remain native/manual. |
| Feats | Spiteful Rake | Added dazzled on success and blinded/dazzled on critical success; claw qualification and extended dazzled cleanup remain native/manual. |
| Feats | Draining Touch | Added clumsy 1/2 by Strike outcome; awakening choices, damage, and Strike qualification remain native/manual. |
| Feats | Ankle Bite; Potent Nectar; Catch and Kill; Switcheroo; Make 'Em Sweat; Collapse; Sapping Symbol; Feign Innocence; Improvise Strategy; Demand Surrender; Eternal Legend Dedication; Orator's Filibuster; Shake it Off; The Bigger They Are; Mercenary Reversal; Sure Feet; Apocalyptic Visions; Wither Away; Flourishing Finish; Marsh Runner | Passed: reaction/turn sequencing, random or chosen outcomes, skill-check events, passive effects, area prerequisites, multi-action requirements, or complex state transitions prevent safe independent automation. |

The Batch 444 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 445 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Golden Erinys Stance | Added sickened 1 on a critical piercing melee Strike; stance and attack qualification remain native/manual. |
| Feats | Blazing Wave | Added prone on a critical failure; area, fire damage, and impulse targeting remain native/manual. |
| Feats | Ambush Bladderwort | Added immobilized on a failed or critically failed Reflex save; plant placement, drowning, and Escape remain native/manual. |
| Feats | Spirit Speaker; Ever Dreaming; Burning Demand; Snare Genius; Roll with it (Kingmaker); Cross the Final Horizon; Reassuring Presence; Death from Above; Ratfolk Roll; Vexing Tumble; Many Faces; Hurling Charge; Pack Tactics; Lassoing Lash; Fear of God; Weaver's Web; Watch Your Back; Cauterize; Instant Opening; Pistol Twirl; Writhing Runelord Weapon; Grudging Compliment; Roll with It; Wave the Flag; The Shattered Mountain Weeps; Sly Striker; Unexpected Shift; Invigorating Elixir; Peculiar Anatomy; Prayer Attack; Sickening Bite; Fear No Law, Fear No One; Opportune Trickster; Brilliant Flash; Distracting Shot; Endemic Herbs; Eerie Traces; Reflective Defense; Sleek Reposition; Final Shot Knows the Way; Boarding Party; Pact of Huldra's Renewal; Overpowering Charge; Divide and Conquer; Sly Disarm; Cavalier's Banner | Passed: passive effects, multi-step reactions, choices or commands, action/turn sequencing, conditional setup, unsupported event context, or effects already covered prevent safe independent automation. |

The Batch 445 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 446 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Tangling Creepers | Added immobilized for 1 round on a successful or critically successful vine spell attack; area, sustain, movement penalty, and Escape remain native/manual. |
| Spells | Mask of Terror | Added frightened 2 for 1 minute on failure or critical failure; hostile-action timing and temporary immunity remain native/manual. |
| Spells | Oneiric Mire | Added immobilized on critical failure; illusion disbelief, repeated saves, Speed penalty, and recovery remain native/manual. |
| Spells | Blood in the Water; Ordained Purpose; Life's Flowing River; Mirror Malefactors; Morass of Ages; Palm-Held Sun; Eyes of the Dead; Seize Identity; Incarnate Ancestry; Variable Gravity; Angel Form; Stone Lance; Armor of Thorn and Claw; Clear Mind; Blightburn Blast; Sound Body; Crimson Breath; Form of the Sandpoint Devil; Regale the Lost Ones; Roar of the Dragon; Chromatic Image; Unfathomable Song; Wilding Word; Embodied Font; Unholy Army; Wall of Radiance; Song of Silver; Chromatic Ray; Shifting Sand; Rallying Banner; Halcyon Mists; Safe Passage; Cosmic Form; Phantasmal Protagonist; Soul Cutter; Achaekek's Clutch; Pyroclastic Truth; Raise Dead; Incarnate Archmage; Jassim's Allegiance; Chastising Retort; Unblinking Flame Emblem; Sparkleskin; Proximal Shift; Spiral of Horrors; Arcane Explosion; Dinosaur Form; Vital Singularity; Rite of Cleansing Flame; Annunciation of the Outer Gate; Overwhelming Memory; Swarming Wasp Stings; Glacial Skewer; Comet Charge; Transmute Rock and Mud; Elemental Annihilation Wave; Divinity Leech; Pyrotechnics; Nature's Enmity; Vindicator's Judgment; Veil of Broken Reality; Ember Doppelgänger; Incarnate Kaiju; Flense; Amalgamizing Leap | Passed or already reviewed: multi-save/area persistence, random or conditional choices, poison/disease stages, variable action counts, movement or terrain requirements, unsupported trigger context, or non-condition effects prevent safe additional automation. |

The Batch 446 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 447 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Wisp Chain (True) | Added deafened on a failed Fortitude save; adjacency and removal when the creature moves away remain native/manual. |
| Equipment | Sanguine Fang (Major); Shacklebreaker (Greater); Dr. Ushernacht's Astonishing Ink (Moderate); Carver-cutter; Whispering Remnant; Pheromone Flare (Moderate); Sun Orchid Poultice; The Demon's Lantern; Bloodeye Coffee; Spiral Athame; Runewell of Lust; Impact Foam Chassis (Lesser); Lion Badge; Bravery Baldric variants; Sun Sight; Fearless Sash; Spike Launcher; Wand of Teeming Ghosts; Oculus of Abaddon; Vigilant Eye; Aeon Stone (Flickering); Dread variants; Majordomo Torc; Mocker's Swazzle; North Wind's Night Verse; Soldier's Syrup; Zealot Staff; Final Blade; Possum's Play; Manacles; Hydrating Pinwheel; Cleft Head Marking (Greater); Talonstrike Blade; Called; Sawtooth Reaper; Mordant Mask; Freeze Ammunition; Pharasmin Visor; Frenzy Oil; Robe of the Archmagi; Demon Bone Tiles; Wand of Dumbfounding Doom; Timeflaying Blade; Wand of Dazzling Rays; Twigjack Sack; Ring of Recalcitrant Wishes; Theatrical Mutagen; Cindergrass Cloak; Skull Bomb | Passed or already reviewed: activation state, defensive reactions, passive modifiers, counteract/affliction handling, area or movement requirements, item-state transitions, poison/toxin stages, or non-condition effects prevent safe independent automation. |

The Batch 447 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 448 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Alluring Lantern | Added fascinated for 1 round on a failed Will save; lure activation, movement requirement, and end-of-turn cleanup remain native/manual. |
| Equipment | Wisp Chain (Major) | Added deafened on a failed Fortitude save; adjacency and removal when the creature moves away remain native/manual. |
| Equipment | Redpitch Bomb (Greater) | Added clumsy 2 until the start of the next turn on a critical hit; bomb damage and splash remain native/manual. |
| Equipment | Arachnolute | Added immobilized on a failed or critically failed Reflex save; cone placement and Escape remain native/manual. |
| Equipment | Bleeding Spines Snare; Flawed Orb of Gold Dragonkind; Hydrating Pinwheel (Greater); Gearbinder Oil (Moderate); Toothy Knife (Greater); Lodestone Bomb variants; Wand of Teeming Ghosts (8th-rank); Bloodthirsty; Sparking Spellgun (Greater); Mirrorblade; Seventh Prism; Theatrical Mutagen (Greater); Water Bomb; Literate Lemur; Swallow-Spike; Thorn Brush; Mat of Resilience; Spangled Rider's Suit; Bitterblood Elixir; Kols's Oath (Greater); Halcyon Heart; Elemental Ammunition; Splintering Spear; Shatterstone (Greater); Impact Foam Chassis (Moderate); Possum's Play; Burglar's Rosebud; Radiant Spark; Vulture's Wing; Shacklebreaker; Bracers of Pain; Euphoric Loop; Lion's Armor; Hairpin of Blooming Flowers; Escalation Ammunition; Draconic Verge; Water Bomb (Major); Bloodstained Treatise; Hodag Leather; Bewitching Bloom (Bellflower); Defoliation Bomb (Major); Celestial Hair; Rebounding Breastplate; Benthic Drums; Drake Rifle (Acid); Briar; Wand of Dumbfounding Doom (9th-rank); Graverose Garland; Sisterstone Chunk; Redeemer's Pistol; Blast Suit; Admirer's Bouquet; Animal-Turning Fulu | Passed: incremental or persistent state, trait/target qualification, activation/reaction comparisons, area persistence, item state, counteract or removal handling, and non-condition effects prevent safe independent automation; poison equipment remains out of scope. |

The Batch 448 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 449 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Pressure Bomb (Lesser) | Added prone on a critical hit; target size, push distance, damage, and activation remain native/manual. |
| Equipment | Mud Bomb (Lesser) | Added dazzled until the start of the next turn on a critical hit; damage and activation remain native/manual. |
| Equipment | Redpitch Bomb (Lesser) | Added clumsy 1 until the start of the next turn on a critical hit; bomb damage and splash remain native/manual. |
| Equipment | Atrophy Bomb (Major) | Added enfeebled 2 until the start of the next turn on a hit; persistent void damage and living-target qualification remain native/manual. |
| Equipment | Dread Ampoule (Moderate); Dread Ampoule (Major) | Added frightened 1 on a hit and frightened 2 on a critical hit; damage, splash, and activation remain native/manual. |
| Equipment | Ghost Charge (Lesser) | Added enfeebled 1 until the start of the next turn on a hit; undead qualification, vitality damage, and splash remain native/manual. |
| Equipment | Mirror-Ball Snare | Added dazzled for 1 round on failure and 1 minute on critical failure; snare placement and area remain native/manual. |
| Equipment | Mocking Mirror Snare | Added confused until the end of the next turn on critical failure; damage, snare placement, and disbelief remain native/manual. |
| Equipment | Blasting Stone (Moderate); Blasting Stone (Major) | Added deafened until the end of the next turn on a failed Fortitude save; explosion placement, damage, and activation remain native/manual. |
| Equipment | Wisp Chain (Greater) | Added deafened after a failed Fortitude save; adjacency and removal when the creature moves away remain native/manual. |
| Equipment | Bleeding Canines; Shockguard Coil; The Waxworks; Pressure Bomb (Greater); Moonlit Spellgun (Greater); Imposing Shield; Crushing Coils; Captivating Rosebud; Godrending Ammunition (Greater); Twigjack Sack (Moderate); Qat; Wand of Teeming Ghosts (5th-rank); The Avalanche; Sparking Spellgun (Lesser); Fearcracker; Hydrating Pinwheel (Major); Apocalypse Seed; Splintering Spear (Greater); Tenderizer Grenade (Lesser); Grease Snare; Rhino Shot; Cayden's Tankard; Ghost Charge variants already covered; Thunderblast Slippers; Thundering (Greater); Moonlit Spellgun (Moderate); Irritating Seedpod already covered; Highhelm War Shield (Moderate); Defoliation Bomb (Lesser); Wisp Chain variants already covered; Guardian Rose; Carver-cutter variants; The Hollow Star; Falconsight Eye; Golden Gloves; Stage Magician's Cloak; Mocking Mirror Snare already covered; Black King; Wand of Crackling Lightning; The Trumpet; Apricot of Bestial Might; Mindlance; Blood Bomb (Moderate); Highhelm War Shield (Greater); Boulder Seed (Greater); Animal Repellent; Vigilant Eye (Major); Redeemer's Pistol; Blast Suit | Passed or already reviewed: activation state, target/trait qualification, comparison saves, persistent or incremental effects, area timing, item-state transitions, movement/terrain requirements, or non-condition effects prevent safe independent automation; poison equipment remains out of scope. |

The Batch 449 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 450 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Necrotic Bomb (Major) | Added sickened 4 on a critical hit; living-target qualification, void damage, splash, and activation remain native/manual. |
| Equipment | Bottled Melody | Added deafened for 1 round on failure and 1 minute on critical failure; area, damage, and recharge remain native/manual. |
| Equipment | Shadefield Knife | Added frightened 1 on failure and doomed 1 as a critical-failure rider; visual targeting and knife duration remain native/manual. |
| Equipment | Apotropaic Fulu | Added sickened 2 on failure; opposing-trait qualification and temporary immunity remain native/manual. |
| Equipment | Blood Sap; Bravery Baldric (Fleet); Life Salt; Bloodstained Waistcoat; Silver Crescent; Shield of the Unified Legion; Screaming Pinion; Alicorn Trigger; Animal Repellent (Major); Fiendsbane Shield; Emetic Paste (Greater); Dragon's Blood Pudding (Greater); Bravery Baldric (Flight); Silversoul Bomb (Major); Barricade Stone; Stage Fright Missive; Swallow-Spike (Major); Flaming (Greater); Shield of Mental Fortitude; Dr. Ushernacht's Astonishing Ink (Major); Goo Grenade (Greater); Silkspinner's Shield; Jaathoom's Scarf; Wand of Teeming Ghosts (3rd-rank); Frost (Greater); Acid Flask (Moderate); Resonating Fork variants; Wand of Dumbfounding Doom (7th/8th-rank); Putrescent Glob; Serene Smelling Salts; Queasy Lantern (Greater); Wand of Crackling Lightning (8th-rank); Tentacle Cannon (Greater); Blessed Reformer; Horrific Effigy; Dragon-Lotus Drum; Gamepiece Chariot; Redsand Hourglass; Lightweave Scarf (Major); Cayden's Brew (Triple); Grisly Scythe; Cauldron of Nightmares; Oneiric Crystals of the Slumberer; Tenderizer Grenade (Moderate); Blood-Drinker Blade; Sacred Valkyrie Helm; Flare Beacon (Major); Deathseeker; Boots of the Dead; Roaring Potion (Moderate); Pucker Pickle; Soldier's Syrup (Moderate); Frost/Thundering variants; Queasy Lantern; Putrescent Glob; Goo Grenade; Tenderizer Grenade | Passed or already reviewed: poison/drug stages, persistent or incremental state, activation state, target/trait qualification, area timing, multi-step reactions, counteract or recovery handling, and non-condition effects prevent safe independent automation; poison equipment remains out of scope. |

The Batch 450 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 451 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Freezing Ammunition | Added slowed 1 for 1 round on failure and 1 minute on critical failure; ammunition damage and activation remain native/manual. |
| Equipment | Blasting Stone (Lesser) | Added deafened until the end of the next turn on failure; explosion placement, damage, and activation remain native/manual. |
| Equipment | Fear Gem | Added frightened 1 on hit and frightened 2 on critical hit; Strike, damage, and activation remain native/manual. |
| Equipment | Peshpine Grenade (Lesser); Peshpine Grenade (Greater) | Added stupefied 1/2 until the end of the next turn on hit; damage, splash, and activation remain native/manual. |
| Equipment | Dust Pods | Added dazzled by save outcome and blinded on critical failure; snare placement and removal flat checks remain native/manual. |
| Equipment | Heartmoss (Greater); Wand of Dumbfounding Doom (6th-rank); Burning Badger Guts Snare; Flare Beacon (Moderate); Leaden Weight; Lantern of Empty Light; Handcuffs; Gorget of the Primal Roar; Ghost Charge (Moderate); Robe of the Archmagi; Gravemist Taper; Elemental Ammunition; Breath of Freedom; Whispering Staff; Theatrical Mutagen (Major); Resonating Fork (Greater); Feather Token (Whip); Thorn Triad; Void Shackles; Strand of the Seven Births; Horn of the Sun Aurochs; Silver Crescent (Greater); Handcuffs (Superior); Imp Shot; Scale of Igroon; Enfilading Arrow; Dragon Turtle Armor; Fear Gem variants; Wand of Hopeless Night (2nd-rank); Blood Sap; Fiend's Hunger; Necrotic Cap; Thunderblast Slippers; Wand of Dazzling Rays (4th-rank); Emetic Paste; Jade Bauble | Passed or already reviewed: catalyst/activation state, passive or incremental effects, multi-step saves, movement or terrain conditions, target/trait qualification, persistent damage, counteract/removal handling, or non-condition effects prevent safe independent automation; poison equipment remains out of scope. |

The Batch 451 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 452 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Pressure Bomb (Moderate) | Added prone on a critical hit; target size, push distance, damage, and activation remain native/manual. |
| Equipment | Dread Ampoule (Lesser) | Added frightened 1 on a hit and frightened 2 on a critical hit; damage, splash, and activation remain native/manual. |
| Equipment | Blasting Stone (Greater) | Added deafened until the end of the next turn on a failed Fortitude save; explosion placement, damage, and activation remain native/manual. |
| Equipment | Ghost Charge (Moderate); Ghost Charge (Major) | Added enfeebled 1/2 until the start of the next turn on a hit; undead qualification, vitality damage, and splash remain native/manual. |
| Equipment | Expulsion Snare | Added prone on critical failure; forced movement, placement, and damage remain native/manual. |
| Equipment | Grasping Tree | Added off-guard on failure and immobilized on critical failure; snare damage, placement, and Escape remain native/manual. |
| Equipment | Heartmoss (Greater); Wand of Dumbfounding Doom (6th-rank); Burning Badger Guts Snare; Flare Beacon (Moderate); Leaden Weight; Lantern of Empty Light; Handcuffs; Gorget of the Primal Roar; Robe of the Archmagi; Gravemist Taper; Elemental Ammunition; Breath of Freedom; Whispering Staff; Theatrical Mutagen (Major); Resonating Fork (Greater); Feather Token (Whip); Thorn Triad; Void Shackles; Strand of the Seven Births; Horn of the Sun Aurochs; Silver Crescent (Greater); Handcuffs (Superior); Imp Shot; Scale of Igroon; Enfilading Arrow; Dragon Turtle Armor; Fear Gem variants; Wand of Hopeless Night (2nd-rank); Blood Sap; Fiend's Hunger; Necrotic Cap; Thunderblast Slippers; Wand of Dazzling Rays (4th-rank); Emetic Paste; Jade Bauble; Marbles; Sargassum Phial; Irritating Seedpod (Major); Moonlit Spellgun (Major); Queasy Lantern; Instructions for Lasting Agony; Steelscour; Tenderizer Grenade; Caltrops/Toothy Knife variants; Timpani of Panic; Peshpine variants already covered; Lightweave Scarf; Freezing Ammunition already covered | Passed or already reviewed: catalyst/activation state, passive or incremental effects, multi-step saves, movement/terrain conditions, target/trait qualification, persistent damage, counteract/recovery handling, or non-condition effects prevent safe independent automation; poison equipment remains out of scope. |

The Batch 452 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 453 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Sonic Strafe | Added deafened for 1 hour on critical failure; flight, movement, area, and sonic damage remain native/manual. |
| Feats | Fiend Slayer | Added stunned 1 on critical failure; fiend qualification, damage, immunity, and triggering Strike remain native/manual. |
| Feats | Pummeling Whirlpool | Added prone on failure or critical failure; area, water scaling, and damage remain native/manual. |
| Feats | Summon Ensemble | Added off-guard for 1 round on failure; sustain timing, hearing, target choice, and temporary immunity remain native/manual. |
| Feats | Sly Disarm; Cavalier's Banner; Spiritual Flurry; Deific Font; Greater Debilitating Bomb; Steady Balance; Stone Blood; Game Hunter Dedication; Crossbow Ace; Vigorous Health; No Stranger to Death; Strident Command; Rolling White Bottle Form; Targeting Finisher; Scintillating Spell; Falcon Swoop; Tip the Scales; Hungry Goblin; Stunning Appearance; Frightful Attrition; Murderer's Circle; Sonic Strafe variants; Creature Comforts; Back to Back; Geomancer Dedication; Storming Breath; Shard Strike; Bloodrager Dedication; Terrifying Mien; Wiles on the Wind; Powerful Guts; Topple the Titans; Dark Persona's Presence; Steady on Stone; Pain Tolerance; Terrain Advantage; Stone Blood (Stonebound); Imprison Foe; Call Worm Spirit; Stoked Flame Stance; Death Rattle; Claw Snag; The Tyrant Falls!; Stories of Home; Skin Split; General's Gambit; Wing Bounce; Cindersoul; Hydra's Bond; Telekinetic Slip; Now You See Me; Brightsoul; Callow May | Passed or already reviewed: level/action gating, selectable effects, aura or movement timing, passive effects, reactions, state transitions, multi-save sequences, or unsupported event context prevent safe independent automation. |

The Batch 453 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 454 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Telekinetic Bombardment | Added prone on failure and stunned 1 on critical failure; area selection, damage, and difficult terrain remain native/manual. |
| Spells | Horizon's Veil | Added slowed 1 for 1 round on a failed or critically failed Will save; end-of-turn area qualification remains native/manual. |
| Spells | Mushroom Patch | Added dazzled for 1 round on success/failure/critical failure and slowed 1 on critical failure; area timing and heightened substitution remain native/manual. |
| Spells | Radiant Field; Heat Metal; Element Embodied; Steel Fortifications; Beseech Arcanotheign; Gift of the Anemos; Earthquake; Upheaval; Skeleton Army; Temporary Possession; Radiant Heart of Devotion; Living Terrain; Calcium Rain; Undertaker; Pyrefowl Rebuke | Passed: light-blindness qualification, item targeting, battle-form/structure state, summon sequencing, reaction/positioning, area movement, persistent damage, ground qualification, or non-condition effects prevent safe independent automation. |

The Batch 454 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 455 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Herald's Strike | Added dazzled on success/failure, drained 1 on failure, and blinded/drained 2 on critical failure; spirit damage, critical-hit degree adjustment, and immunity remain native/manual. |
| Feats | Unbalancing Finisher | Added off-guard for 1 round on a successful Strike; Strike and damage remain native/manual. |
| Feats | Sinbladed Spell; Viking Vindicator; Weakening Assault; Ghostly Grasp (Deviant); In the Horde's Grip; Contortionist; Gossamer Blade; Lavasoul; Final Form; Uncanny Prediction; Slip the Grasp; Expert Backstabber; Well-Armed; Discerning Strike; Artery Map; Vengeance Strike; Fight or Flight; History of Violence; Torch Goblin; Taste Blood; Proud Nail; Tumble Behind variants; Sharkskin Grip; Subtle Shank; Twin Shot Knockdown; Hair Trigger; Bestial Protection; Scoundrel's Surprise; Betraying Shank; Exsanguinate; Spinning Release | Passed: multi-action sequencing, setup/qualification state, persistent-damage scaling, conditional targeting, transformation or stance state, reaction context, level checks, movement timing, or effects limited to the next attack prevent safe independent automation. |

The Batch 455 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 456 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Overselling Flourish | Added dazzled on success/failure/critical failure and off-guard on failure/critical failure; reaction timing, start-of-turn expiry, and remaining-action behavior remain native/manual. |
| Spells | Primal Herd | Passed: battle-form transformation and multi-target state are not safe independent condition automation. |

The Batch 456 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 457 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Mage Hunter | Added stupefied 1/2 for 1 round on a successful/critical Mage Hunter Strike; spellcaster qualification and damage remain native/manual. |
| Feats | Startling Appearance (Vigilante) | Added frightened 1/2 on a successful/critical Strike; unnoticed qualification, off-guard timing, and damage remain native/manual. |
| Feats | Warped Reflection | Added frightened 1/2 on a failed/critical failed Will save; linked stupefied duration and temporary immunity remain native/manual. |
| Feats | Might of the Realm | Added enfeebled 1 for 1 round on a critical Strike; designated-knight damage remains native/manual. |
| Feats | Gruesome Strike; Steed's Toppling Strike; Pesh Skin; Mage Hunter variants; Brandish Authority; Brutal Critical; Coating of Slime; Tears of Pearl; Unfettered Halfling; Imbue Mindlessness; Slowing Strike; Astral Compound Invocation; Wing Shove; Muckraking; Piercing Jab | Passed: reaction or transformation prerequisites, area targeting, passive damage riders, multi-action or multi-check sequencing, non-condition speed penalties, linked condition cleanup, or unsupported target state prevent safe independent automation. |

The Batch 457 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 458 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Rooting (Greater); Rooting (True); Rooting (Major) | Added immobilized and clumsy 1 for 1 round on a critical hit; Escape remains native/manual. |
| Equipment | Crushing (Greater) | Added clumsy 2 and enfeebled 2 for 1 round on a critical hit. |
| Equipment | Fearsome (Greater) | Added frightened 2 on a critical hit. |
| Equipment | Torrent Snare | Added prone on failure or critical failure; forced movement and difficult terrain remain native/manual. |
| Equipment | Thunder Snare | Added deafened for 1 round on success, failure, or critical failure; damage remains native/manual. |
| Equipment | Piercing Whistle Snare | Added deafened for 1 round on failure and 1 hour on critical failure; area damage and triggering-creature rider remain native/manual. |
| Equipment | Spirit Snare | Added immobilized for 1 round on failure and 1 minute on critical failure; incorporeal qualification and Escape remain native/manual. |
| Equipment | Dread (Moderate); Dread (Greater); Spurned Lute; Grasping Snare; Snagging Hook Snare; Sisterstone Ingot; Stalker Bane Snare; Ginger Chew; Tripline Arrow | Passed: passive state, activation or loyalty timing, persistent speed penalties, Escape/removal handling, target qualification, invisibility interaction, or critical specialization choice prevent safe independent automation. |

The Batch 458 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 459 residual coverage sweep

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Residual direct hit/save-to-condition feat candidates | No additional uncovered deterministic condition riders remained after excluding registered slugs and documented passes; passive benefits, linked state, sequencing, or qualification rules prevent safe independent automation. |
| Equipment | Residual direct hit/save-to-condition equipment candidates | No additional uncovered deterministic riders remained after Batch 458; remaining effects depend on activation, persistent/removal state, target qualification, or non-condition behavior. |
| Monster abilities | Bestiary ability glossary residual condition candidates | No new safely discriminable ability slugs remained; generic or effect-only entries lack a reliable originating ability discriminator or require aura, movement, Escape, or recurring-state handling. |

The Batch 459 residual sweep produced no new triggers and no reminder-only graphs.

## Batch 460 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Bestial Snarling | Added frightened 1 on a successful skill check; target selection, animal frightened 2 exception, and immunity remain native/manual. |
| Feats | Edict of Mortality | Added frightened 1/2 on a successful/critical skill check; divine-spell flat checks, worship qualification, and immunity remain native/manual. |
| Feats | Molten Wire | Added clumsy 1 for 1 minute on a successful impulse attack; persistent damage, Escape, wire HP, and termination remain native/manual. |
| Feats | Reclaim Power; Exultant Blood Magic; Surging Blood Magic; Commitment to Valor; Jungle Strider; Rock Runner; Inner Strength; Dig Quickly; Rising Blood Magic; Greater Merciful Elixir; Voice of Authority; Lobbed Attack; Lethal Edge; Tenacious Net; Swim Through Earth; Unyielding Disguise; Burning Spell; Polymorphic Escape; Broadside Buckos; Swipe Souvenir; Rock the Boat; Surprise Attack; Reflexive Catch; Tender Ministrations; The Harder They Fall; Thousand Visions; Greater Mercy; Daywalker; Grasping Corpses; Magpie Manor Recovery; Visual Fidelity; Canopy Predator; Lesson of Mutual Gambits; Impossible Striker; Warped Constriction; Wave Dashes Rocks; Dousing Spell; Too Angry to Die; Sinking Jaws; Nature Prowler; Semblance of Life; Cutting Heaven, Crushing Earth; Moray Ambush; Hidden Intentions; Sudden Mindfulness; Ricochet Master; Blast Tackle | Passed: passive benefits, linked or selectable effects, target/ally qualification, state transitions, multi-step actions, movement or timing dependencies, or unsupported event context prevent safe independent automation. |

The Batch 460 feat file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 461 residual spell sweep

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Share Vision; Momentary Recovery; Tireless Worker; Unfetter Eidolon; Restorative Moment | Passed: shared senses, teleport/action sequencing, suppression state, eidolon-specific qualification, or condition/affliction recovery handling prevent safe independent condition automation. |

The Batch 461 residual spell sweep produced no new triggers and no reminder-only graphs.

## Batch 462 residual feat sweep

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Next tranche of unregistered direct-condition candidates | No additional uncovered deterministic condition riders remained after excluding registered slugs and documented passes; remaining entries depend on passive state, target qualification, sequencing, recovery, or non-condition effects. |

The Batch 462 residual feat sweep produced no new triggers and no reminder-only graphs.

## Batch 463 residual monster-effect sweep

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Monster effects | Engulf and Swallow Whole; Hunter's Onslaught; Flesh Mutation; Radiate Cold; Scent of Blood; Aura of Reflection; Field of Slaughter; Hunter's Precision; Barbed Net; Aura of Sophistry; False Flag; Hair Snare; Unbelievable Connection; Stink Sap; Vulnerable to Curved Space; Compel Courage; Whisper Earworm; Depth Charge; Clinging Smoke; Hope Vulnerability; Hobble Pursuit; Blood Wake; Hurl Net; Fiddle; Break Legs; and related effect entries | Passed: effect-only records lack a reliable originating ability discriminator in roll options, or require aura, mutation selection, movement/positioning, recurring state, Escape, or conditional cleanup. No generic overbroad triggers added. |

The Batch 463 residual monster-effect sweep produced no new triggers and no reminder-only graphs.

## Batch 464 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Twigjack Sack (Major) | Added 5 persistent bleed damage on a successful or critical Strike; other damage remains native/manual. |
| Equipment | Acid Flask (Major) | Added 4d6 persistent acid damage on a successful or critical Strike; initial and splash damage remain native/manual. |
| Equipment | Decaying (Greater) | Added 4d4 persistent void damage on a critical hit; shield targeting remains native/manual. |
| Equipment | Glamorous Buckler | Added dazzled for 1 round on a successful Dazzling Feint; raised-buckler qualification and frequency remain native/manual. |
| Equipment | Octopus Potion; Knave's Standard (Major); Surging Serum; Guiding Cajon Drum; Holy Chain; Bravery Baldric variants; Desolation Locket; Wand of Teeming Ghosts; Soldier's Syrup; Chapbook of Terrors; Pheromone Flare; Exsanguinating Ammunition; Manacles; Lodestone Bomb (Greater); Drake Rifle (Fire); Wand of Noisome Acid; Seventh Prism; Mindfog Mist; Vapor Sphere; Emetic Paste; Glamorous Buckler variants; Deadweight Mutagen; Emergency Eye; and remaining condition-bearing inventory entries | Passed: random or counteract effects, passive/item state, target/material qualification, persistent or staged afflictions, area/reaction timing, dynamic formulas, or non-condition effects prevent safe independent automation. Poison equipment remains out of scope. |

The Batch 464 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 465 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Pressure Bomb (Major) | Added prone on a critical hit; splash and forced movement remain native/manual. |
| Equipment | Tallow Bomb (Lesser) | Added sickened 1 on a critical hit; persistent-fire qualification and recovery restriction remain native/manual. |
| Equipment | Tangibility Resonator (Moderate) | Added immobilized on failure and immobilized plus off-guard on critical failure; incorporeal qualification remains native/manual. |
| Equipment | Slumber Arrow | Added slowed 1 for 1 round on critical failure; speed penalty and living-target qualification remain native/manual. |
| Equipment | Ooze Ammunition (Moderate); Ooze Ammunition (Greater) | Added immobilized for 1 round on a critical hit; persistent acid damage, Speed penalty, and Escape remain native/manual. |
| Equipment | Glue Bomb (Lesser) | Added immobilized for 1 round on a critical hit; solid-surface, flying, and Escape handling remain native/manual. |
| Equipment | Alghollthu Whip | Added dazzled on save success/failure/critical failure and stunned 1/2 on failure/critical failure; activation prerequisites remain native/manual. |
| Equipment | Golden Chrysalis | Added dazzled for 1 minute on a failed dust save; area timing and invisibility negation remain native/manual. |
| Equipment | Splinter of Finality; Azure Lily Pollen; Wand of Crackling Lightning; Wand of Noisome Acid variants; Carver-cutter; Chalice of Justice; Bioluminescence Bomb; Animal Repellent; Angelic Opera Cloak; Gearbinder Oil; Draft of Stellar Radiance; Bracers of Missile Deflection; Sturdy Neck Stock; Gorgon's Breath; Hell Staff; Slumber Arrow variants; Ooze Ammunition variants; Alghollthu Whip variants; Glue Bomb variants; and remaining later condition-bearing inventory entries | Passed: poison/affliction staging, material or trait qualification, activation/reaction timing, dynamic spell/item state, staged persistent effects, area/visibility handling, or non-condition effects prevent safe independent automation. Poison equipment remains out of scope. |

The Batch 465 equipment file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 466 equipment-tail sweep

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Equipment | Bottled Catharsis; Chapbook of Terrors; Wand of Teeming Ghosts; Surging Serum; Wand of Dazzling Rays; Animal Repellent; Resonating Crystal Boots; Impact Foam Chassis; Wand of Hopeless Night; Tangibility Resonator; Gorgon's Breath; Slumber Arrow; Ooze Ammunition; Wand of Paralytic Shock; Irritating Seedpod; Whirlwind Vial; Searing Suture; Alchemist's Fire; and remaining tail entries | Passed or already covered: counteract/affliction staging, poison or addiction, area and movement handling, item activation state, dynamic scaling, existing trigger coverage, or non-condition effects prevent additional safe independent automation. |

The Batch 466 equipment-tail sweep produced no new triggers and no reminder-only graphs.

## Batch 467 review disposition

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Spells | Chromatic Armor | Added dazzled for 1 round on a failed or critically failed Will save; adjacency, attack timing, immunity, and color resistances remain native/manual. |
| Spells | Prismatic Armor | Added dazzled for 1 round on failure and blinded for 1 round on critical failure; adjacency, immunity, resistance, and timing remain native/manual. |

The Batch 467 spell file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 468 coverage reconciliation

| Category | Residual records reviewed | Disposition |
| --- | --- | --- |
| Feats | Apparition Sense; Restorative Channel; Define “Report”; Living Vessel Dedication; Four-Armed Aspect; Hijack Undead; In Lightning, Life; Doctor's Visitation; Ocean's Balm; Revivification Protocol; Undying Beast; Dance of the Mousedeer | Passed: senses, spell substitution, rerolls, transformation, controlled/minion state, temporary Hit Points, healing, dying-state transitions, or cover/positioning effects are not safe independent condition triggers. |
| Spells | Ooze Form; Untamed Shift; Unbroken Panoply; Elemental Form; Curse of the Spirit Orchestra; Reinforced Rations; The World's a Stage; Threefold Limb; Glass Form; Purifying Veil; Item Facade | Passed or already covered: battle-form and selectable state, rituals, skill penalties, movement/area timing, concealment/resistance, illusion state, or non-condition effects prevent safe independent automation. |
| Equipment | Mistform Elixir; Bloodline Robe; Noxious Incense; Tlil Mask; Locket of Sealed Nightmares; Staff of the Tempest; Knockout Dram; Tin Cobra; Octopus Potion; Snarling Badger; All-Seeing Eye; Colorful Coating; and related residual entries | Passed or out of scope: concealment/vision, activation prerequisites, poison or drug staging, random effects, minion state, counteract, or passive item state prevent safe automation; poison equipment remains out of scope. |

The Batch 468 reconciliation closes the unexplained coverage-accounting leftovers without adding reminder-only triggers; later targeted scans remain active for newly discovered or newly versioned PF2e records.

## Batch 469 mixed-state riders

| Category | Items reviewed | Disposition |
| --- | --- | --- |
| Feats | Paralyzing Slash | Added paralyzed on a failed or critically failed Fortitude save; living non-elf qualification, immunity, and recovery saves remain native/manual. |
| Spells | Ancient Dust | Added 1/2 persistent void damage on failure/critical failure; area and initial damage remain native/manual. |

The Batch 469 mixed-state file is registered alongside the aggregate package. No reminder-only triggers were added.

## Batch 470 spell state riders

Added two safe deterministic spell automations from the expanded state-effect scan:

- `Crucible of Iron`: save outcomes now apply the dazzled, enfeebled, and immobilized conditions with the printed durations, plus 1d10 persistent fire damage on success or worse. Heightening, Escape, and initial spell damage remain native/manual.
- `Murderous Vine`: a successful spell attack now applies grabbed. The vine's Escape DC, end-of-turn damage, and destruction remain native/manual.

Skipped `Split the Tongue` because its stupefied duration is a random 1d4 rounds not represented safely by the available condition node. Skipped `Burning Blossoms`, `Quicken Time`, and similar area/repeated-save riders because their ongoing area membership, end-of-turn re-saves, or action restrictions cannot be represented reliably by a single registered trigger. The package now contains 1292 registered triggers across 966 registered JSON files.

## Batch 471 equipment state riders

Added four deterministic equipment automations:

- `Bloodletting Kukri`: 1d8 persistent bleed on a critical hit; conditional temporary Hit Points remain manual.
- `Scalding Gauntlets (True)`: sickened 1 for 1 hour and 4d6 persistent fire on a failed or critically failed save; grab/restrain qualification and immunity remain manual.
- `Basilisk Eye`: slowed 1 for 1 minute on a failed or critically failed Fortitude save; Shield Block activation remains manual.
- `Dwarven Daisy (Lesser)`: dazzled for 1 round on a failed or critically failed Fortitude save.

`Spirit Trap` was reviewed but its placement, first-entry trigger, spirit-trait qualification, and Escape-based critical-failure duration are not exposed safely enough for an independent trigger. State-dependent or conditional candidates such as Fire Poi, Reaper's Spellgun, Euphoric Loop, and Vitalizing were passed. The package now contains 1296 registered triggers across 967 registered JSON files.

## Batch 472 equipment state riders

Added four deterministic equipment automations:

- `Splintering Spear (Major)`: 1d6 persistent bleed on a successful or critical Strike.
- `Ouroboros Flail (Major)`: grabbed for 1 round on a failed or critically failed Chained Grasp save.
- `Firestarter Pellets (Major)`: 3d6/6d6 persistent fire on failure/critical failure of the augmented Fireball save.
- `Dragon Shield`: 1d8 persistent fire on a critical-failure Burning Path Reflex save.

Activation, movement, area, target qualification, Escape, and other cleanup remain native/manual. No poison equipment or reminder-only triggers were added. The package now contains 1300 registered triggers across 968 registered JSON files.

## Batch 473 feat and spell residual sweep

The next direct state-effect tranche was checked against the installed feat and spell packs after excluding all registered slugs and prior audit dispositions. Remaining candidates were passive or permanent quickened effects, concealment/hidden-state interactions, dying or recovery transitions, counteract effects, area/repeated-save spells, action restrictions, or state-dependent transformations. No additional safe independent trigger was identified, so no reminder-only or speculative graphs were added.

## Batch 474 monster ability residual sweep

The installed bestiary ability glossary contains five condition-bearing records: `Master's Eye`, `Sneak Attack`, `Stench`, `Frightful Presence`, and `Engulf`. `Master's Eye` and `Sneak Attack` are death-state/passive effects; `Stench` and `Frightful Presence` require aura range, repeated saves, immunity, and recovery handling; and `Engulf` requires movement, internal-space, damage, and Escape handling. They are already covered where a safe generic trigger exists or remain native/manual. The extracted bestiary effect records likewise lack a reliable originating ability discriminator or require aura/stance/actor filtering. No new monster trigger was added.

## Batch 475 feat direct riders

Added three safe partial feat automations from the uncovered direct-outcome scan:

- `Flower Street Infamy`: stupefied 3/2/1 on critical success/success/failure, with the printed durations.
- `Following Smite`: prone on failure or critical failure, plus clumsy 1 for 1 round on critical failure.
- `Memory of Nothing`: stunned 1 on critical failure.

Prerequisites, temporary immunity, level-scaled or conditional damage, and other non-condition effects remain native/manual. The package now contains 1303 registered triggers across 969 registered JSON files.

## Batch 476 feat residual continuation

The continuation scan after `Memory of Nothing` produced no additional uncovered deterministic condition riders. The remaining records were selectable debilitations, grapple/positioning interactions, passive damage responses, state-dependent transformations, or effects already represented by the Batch 475 registrations. No additional trigger was added.

## Batch 477 equipment family completion

Added `Wand of Splintered Sorrows (Rank 8)`: stupefied 2 for 8 rounds after a successful attack and slowed 1 for 8 rounds on a critical success. The spell damage and activation remain native/manual. Other inspected candidates were already covered or combined multiple save contexts, area conditions, trait checks, or conditional cleanup and were passed. The package now contains 1304 registered triggers across 970 registered JSON files.

## Batch 478 spell direct riders

Added three deterministic spell condition riders:

- `Deathless March`: frightened 1/2/3 by save outcome and paralyzed 1 round on critical failure; area, living/undead filtering, and quickened action restrictions remain manual.
- `Fiendish Rift`: grabbed on failure and restrained on critical failure for 1 round; area, sustain, Escape, and damage remain manual.
- `Envenom Companion`: clumsy 1 for 1 round on a failed save; companion-attack qualification and heightened scaling remain manual.

`Ranage's Circle`, `Doom Mark`, and other candidates requiring movement-based cleanup, spell-mark lifetime, selectable outcomes, or multiple save contexts were passed. The package now contains 1307 registered triggers across 971 registered JSON files.

## Batch 479 spell residual continuation

The continuation scan beyond the Batch 478 candidates produced no additional uncovered deterministic state riders. Remaining records were choice-dependent, area/sustain effects, movement- or Escape-cleanup effects, passive transformations, or effects already represented by the registered spell families. No additional trigger was added.

## Batch 480 equipment residual continuation

The later equipment condition-bearing page was checked after excluding all registered slugs and prior audit entries. No additional direct save/attack rider remained: the residual entries were already covered or depended on area activation, item-state comparisons, trait qualification, conditional cleanup, or non-condition effects. No new trigger was added.

## Batch 481 equipment critical-hit sweep

The critical-hit/Strike rider scan found only `Vitalizing (Greater)`, `Pact of Blood-Taking`, and `Bloodgorger Scythe` outside the registered slug set. They were passed: Vitalizing requires undead and persistent-damage state, Pact of Blood-Taking is a conditional pact benefit with level scaling, and Bloodgorger Scythe has activation prerequisites and escalating bleed cleanup. No new trigger was added.

## Batch 482 equipment broad residual continuation

The broad activation/condition scan beyond the prior equipment pages produced no additional uncovered deterministic rider. Remaining records were already covered or depended on poison/affliction staging, area or aura membership, item-state comparisons, passive effects, trait filtering, frequency, or conditional cleanup. No new trigger was added.

## Batch 483 graph validation reconciliation

The registered package was rechecked at 1,307 triggers across 971 files: there are zero stale connection references and no invalid IDs or missing variable declarations. The three apparent disconnected nodes reported by the narrow audit classifier are valid `damage-taken-event` roots in the legacy Acidic Pustules, Freezing Blood, and Agonizing Rebuke graphs; they were false positives from the classifier's event allowlist, not broken trigger branches. No graph changes were required.

## Batch 484 final invariant check

The full registered package was validated with the complete event allowlist: 971 registered JSON files and 1,307 triggers, with zero stale connection references, zero invalid IDs, zero missing variable declarations, and zero disconnected nodes.

## Batch 485 final coverage accounting

The installed source-pack totals were rechecked: 7,625 feats (904 condition-bearing), 2,011 spells (651 condition-bearing), 5,864 equipment records (1,249 condition-bearing), 663 extracted bestiary effects (73 condition-bearing), and 55 bestiary glossary abilities (5 condition-bearing). Registered trigger coverage and prior audit dispositions account for the deterministic portions; the remaining condition-bearing records are explicitly passed where they require choices, aura/area membership, trait or actor filtering, poison/affliction staging, passive state, movement/Escape cleanup, recovery, or other unavailable context. No message-only graphs remain.

## Batch 486 registration reconciliation

The registration source was reconciled against every JSON file in `triggers/`. The active registration contains 971 unique JSON sources and 1,307 triggers, with no stale paths. An additional 103 legacy JSON files remain as superseded source artifacts; their 684 trigger records are all duplicated by active registered sources and therefore are intentionally not registered again. No unique automation is stranded in those legacy files, and no message-only graphs were added. The graph invariant pass found zero stale connection targets, invalid IDs, or missing `variables` declarations.

## Batch 487 class-feature audit

The installed `class-features` pack was screened separately (882 records). The direct-effect candidates were `Fire Gate`, `Metal Gate`, `Wood Gate`, `Earth Gate`, `Whose Cry is Thunder`, `Of Verse Unbroken`, `Restless as the Tide`, `Born of the Bones of the Earth`, `Exemplary Finisher`, `Weapon Tricks`, and `Surprise Attack`. They were passed for this package because their effects depend on elemental-blast or finisher subtypes, terrain/surface or target traits, selectable styles, secondary saves, or initiative/acted-state context that the available event data cannot qualify safely. No reminder-only or speculative class-feature graphs were added.

## Batch 488 SF2e class-feature audit

The installed SF2e `class-features` pack was screened separately (132 records). `Solar Manifestations` contains the only direct combat rider found: Photon-attuned Solar Flare's 1d6 persistent fire damage is already supplied by the system's `DamageDice` rule element, while Graviton-attuned Solar Flare's Trip note is an action choice. `Core Memories`, `Tangible Object`, and `Focal Point` require their Anchor/Anchoring Effect action context; `Healing` requires a Transfer Vitality counteract choice. No uncovered SF2e class-feature effect could be safely added as a Trigger Engine graph, so no duplicate or message-only triggers were created.

## Batch 489 SF2e feat riders

Added eight uncovered SF2e feat automations:

- `Legendary Troll`: off-guard on success and confused for 1 round on critical success.
- `Squirt Blood`: sickened on a successful Fortitude save, dazzled for 1 or 2 rounds on failure or critical failure.
- `Muzzle Flash`: dazzled for 1 round after a hit.
- `Hampering Flare`: off-guard for 1 round after a hit.
- `Impeding Shot`: slowed 1 for 1 round after a hit.
- `Thought-Piercing Horns`: stupefied 2 for 1 round on a critical hit.
- `Guilt Trip`: sickened 1 after a failed or critically failed save.
- `Clinging Flare`: immobilized for 1 round on a hit and off-guard on a critical hit.

`Flame Belch`, `Rip, Tear`, and `Bloody Wounds` were excluded because SF2e already supplies their damage through rule elements. `Fascinating Performance`, `Weakening Shot`, `Dirty Retort`, `Foul Fragrance`, and other candidates require selectable outcomes, combat-state checks, aura/repeated-save handling, poison staging, or cleanup that the available trigger context cannot safely reproduce. The package now contains 1,315 registered triggers across 972 registered JSON files.

## Batch 490 invalid-trigger remediation

The reported red invalid entries were traced to the unsupported `persistent-damage` node type in the installed Trigger Engine 1.29.0. Sixty-five registered triggers used that node. Fifty-four pure persistent-damage triggers were removed, including the invalid Flaming, Greater Flaming, Static Snare, persistent bleed/fire/acid/void spell and equipment entries, and other screenshot-reported persistent-only graphs. Eleven mixed triggers were retained with their valid condition branches while the unsupported damage branches were removed, including Ignite Fireworks, Cutting Insult, Wintershot, Whispers of the Void, Widow's Bite, Camel Spit, Spiritual Disruption, Crucible of Iron, and Scalding Gauntlets (True). No unsupported persistent-damage nodes remain in registered sources. The package now contains 1,261 registered triggers across 972 registered JSON files.

## Batch 491 Trigger Trove deduplication

Compared the module's trigger names against the public [PF2e Trigger Trove](https://github.com/pedrogrullada/pf2e-trigger-trove) repository. The trove contained 109 trigger definitions; 22 exact-name duplicates were removed from this package, including Bon Mot, Brutal Beating, Enfeeble, Fear, Fearsome, Frightful Presence, Slow, Stench, and Unbalancing Blow. Distinctly named triggers were retained, and no Trigger Trove files were copied into this module.

## Batch 492 Trigger Engine capability audit

Used the Trigger Engine 1.27+ `Await Select` action node, propagated action user context, and 1.27+ `Execute Trigger` composition to replace the two manual-choice `Drink Essence` triggers with one selectable caller plus a reusable valued-condition helper. The caller asks the acting user to choose drained or stupefied and passes the target, selected condition, value, and maximum into the helper. The native requirements, healing, and repeat-use restrictions remain manual. No Trigger Trove definition named `Drink Essence — Choice` was present.

## Batch 493 invalid-trigger residue cleanup

Audited every trigger JSON file, including sources not currently registered by `scripts/main.js`, against the installed Trigger Engine node registry. Four legacy graphs still contained the unsupported `persistent-damage` node: Flaming, Greater Flaming, Flensing Slice, and Blood Vendetta — Persistent Bleed. They were removed because the installed engine has no compatible persistent-damage node. The full module now contains no `persistent-damage` nodes.
