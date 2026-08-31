# Trigger Package

Additional Trigger Engine automation for Pathfinder 2e and Starfinder 2e.

The package supports both the `pf2e` and `sf2e` systems. It uses Trigger
Engine's shared `pf2e-trigger` application registration, which Trigger Engine
provides for both systems.

Trigger Package is a Foundry VTT module for distributing additional PF2e/SF2e Trigger Engine automation content.

## Status

This repository contains Trigger Engine registrations and PF2e-compatible trigger definitions under `triggers/`. They are registered by Trigger Engine for both PF2e and SF2e. See [`docs/automation-audit.md`](docs/automation-audit.md) for the current coverage and audit scope.

## Installation

Install from the module manifest URL when a release is published, or place this repository in the Foundry `Data/modules/trigger-package` directory for local development.

## Development

No build step is required for the current source tree. Install it beside the `trigger-engine` module, reload Foundry, and enable **Trigger Package** in the world.

Compatibility notes:

- Existing action-based automations continue to work without PF2e Toolbelt, PF2e HUD, or PF2e Dailies.
- With PF2e Toolbelt 3.56.0 or newer, enabling **All Actionable** makes the package's existing `Action Send to Chat` graphs distinguish an actual **Use** from a plain send-to-chat. This is supplied by Trigger Engine and does not require the optional modules to be enabled.
- The package also adds direct actual-use action automations—PF2e **Fade Into Daydreams**, **Part the Veil**, **Harvest Blood**, and **Tactical Retreat**, plus SF2e **Self Soothe**, **Nourishing Light**, and **Empathic Assistance**—only when Trigger Engine and Toolbelt **All Actionable** are enabled. Save-result riders are kept separately in `triggers/action-outcome-compatibility.json`.
- Additional action and spell save/attack riders are in `triggers/action-outcome-compatibility.json` and `triggers/spell-outcome-compatibility.json`; these use Trigger Engine events and do not require Toolbelt.
- PF2e Trigger Engine 1.32.0 adds a post-variant `Spell Cast` event, but the package does not mass-replace its existing spell graphs: doing so would either break older Trigger Engine/system versions or duplicate their effects. New spell-specific uses should require Trigger Engine 1.32.0 and PF2e 8.4.2/SF2e 1.4.2 or newer.
- The package includes a gated `Disappearance — Invisible` Spell Cast automation for those future-compatible system versions; it applies the core timed condition while leaving hostile-action termination to the system.
- PF2e Dailies 4.20.0's staff-casting roll option is available to future spell-cast-specific graphs; no existing package automation depends on it.

## License

MIT
