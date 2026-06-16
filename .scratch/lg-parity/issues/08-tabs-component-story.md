Status: ready-for-human

## What to build

Add a Component Story for MUI Tabs at `Components/Layout/Tabs`. Because Tabs requires controlled selected-tab state, the story uses Storybook's `render` function to manage the active tab value externally rather than inside the wrapper.

## Acceptance criteria

- [ ] `Tabs.tsx` wrapper exists under `src/Components/`
- [ ] `Tabs.stories.tsx` filed at `Components/Layout/Tabs`
- [ ] Story uses Storybook `render` to wire up selected-tab state
- [ ] Story renders at least 3 tabs
- [ ] 2–4 props (e.g. `variant`, `textColor`, `indicatorColor`) wired as interactive controls
- [ ] Renders correctly under the House Theme in light and dark mode

## Blocked by

None - can start immediately
