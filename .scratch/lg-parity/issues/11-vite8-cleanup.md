Status: ready-for-human

## What to build

Upgrade to Vite 8 (Rolldown-based, drops esbuild), remove the entire Vitest layer (no tests exist to justify it), and replace the hand-assembled ESLint plugins with `@webmdhs/eslint-config` + `@webmdhs/eslint-config-react`.

## Motivation

- Vite 8 ships Rolldown as its bundler, eliminating the separate esbuild dev/Rollup prod split.
- Vitest + addon-vitest + playwright are dead weight — no test files exist and the setup files only reference Storybook portable-stories boilerplate.
- The current `eslint.config.js` is incomplete: `react-hooks`, `react-refresh`, `globals`, `@eslint/js`, and `typescript-eslint` are assembled by hand; the webmdhs shared configs cover all of this with org-standard rule tuning.

## Acceptance criteria

### Vite 8

- [ ] `vite` upgraded to `^8.x`
- [ ] `@vitejs/plugin-react` upgraded to latest compatible version
- [ ] `vite.dev/guide/migration` consulted for any breaking changes
- [ ] `storybook` and `@storybook/react-vite` verified compatible with Vite 8 (check Storybook release notes)
- [ ] Dev server (`npm run storybook`) and build (`npm run build-storybook`) pass

### Vitest removal

Remove the following packages from `devDependencies`:

- `vitest`
- `@vitest/browser`
- `@vitest/coverage-v8`
- `@storybook/addon-vitest`
- `playwright`

Remove/clean up the following files:

- `.storybook/vitest.setup.ts` — delete entirely
- `vitest.shims.d.ts` — delete entirely
- `.storybook/main.ts` — remove `"@storybook/addon-vitest"` from `addons`

### ESLint

Remove from `devDependencies`:

- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `@eslint/js`
- `typescript-eslint`

Add to `devDependencies`:

- `@webmdhs/eslint-config` (latest — **resolve version before starting**)
- `@webmdhs/eslint-config-react` (latest — **resolve version before starting**)

Rewrite `eslint.config.js` to extend the webmdhs configs. Keep `eslint-plugin-storybook` flat config spread alongside them. Carry over the two existing rule overrides only if the webmdhs base doesn't already set them:

```js
"@typescript-eslint/no-empty-object-type": 0,
"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
```

`npm run lint` must pass with zero errors after the rewrite.

## Open questions

- Confirm latest versions of `@webmdhs/eslint-config` and `@webmdhs/eslint-config-react` before starting (npm show or internal registry).
- Verify whether `@storybook/addon-vitest` removal requires any Storybook config changes beyond `main.ts`.

## Blocked by

None — can start immediately after verifying webmdhs package versions.
