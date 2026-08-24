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

## License

MIT
