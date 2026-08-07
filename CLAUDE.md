## Agent skills

### Issue tracker

Issues live as markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-role vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — `CONTEXT.md` and `docs/adr/` at the repo root. See `docs/agents/domain.md`.

## Framework references

Consult these when a config change or error isn't explained by the code itself — not as routine reading.

- Storybook main-config schema (`.storybook/main.ts` changes): https://storybook.js.org/docs/api/main-config/main-config
- Storybook version upgrades: https://storybook.js.org/docs/releases/upgrading
- Vite migration guide (next major bump only — the Vite 8 migration is already merged): https://vite.dev/guide/migration
