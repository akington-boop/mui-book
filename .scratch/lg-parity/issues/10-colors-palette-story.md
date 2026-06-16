Status: ready-for-human

## What to build

Add a Palette Story at the top-level `Colors` entry in Storybook. The story reads the House Theme palette and renders swatches for each semantic color role (primary, secondary, error, warning, info, success), showing the light/main/dark shades with their hex values and palette token path (e.g. `palette.primary.main`).

## Acceptance criteria

- [ ] Story filed at the top-level `Colors` (no parent category)
- [ ] All six semantic color roles rendered: primary, secondary, error, warning, info, success
- [ ] Each role shows light, main, and dark swatches
- [ ] Each swatch displays the palette token path and hex value
- [ ] Reads values from the live House Theme (not hardcoded hex strings)
- [ ] Renders correctly in light and dark mode

## Blocked by

None - can start immediately
