# mui-book

A Storybook-based component showcase that replaces ui-liveguide. Customizations are expressed through MUI theme options rather than bespoke component code.

## Language

**Component Story**:
A Storybook story that renders one MUI component with 2–4 of its most commonly used props wired as interactive controls, demonstrating its variants under the house theme. A story is considered complete when those controls are present and functional.
_Avoid_: page, demo, example

**House Theme**:
The MUI theme instance that encodes this project's visual customizations — palette, typography, and component overrides.
_Avoid_: custom theme, our theme, brand theme

**Fixed-Layout Story**:
A Component Story for a composite component (e.g. Card) where the sub-part content is hardcoded and only the top-level MUI props (such as `raised` or `variant`) are exposed as interactive controls.
_Avoid_: demo story, composite story

**Icon Story**:
A Component Story that demonstrates a single MUI icon (e.g. Star) rendered at all four sizes (large, medium, small, inherit), with a note that the Rounded variant is preferred. Scoped to `@mui/icons-material` only — no WebMD-specific icon libraries.
_Avoid_: icons page, icon gallery

**Triggered Story**:
A Component Story for an overlay component (Dialog, Snackbar, Menu) that includes a Button to open/close the component, allowing interactive prop exploration. Distinct from a plain Component Story that renders its component directly.
_Avoid_: interactive story, modal story

**Palette Story**:
A utility Storybook story filed at the top level (`Colors`) that renders swatches for each semantic color role (primary, secondary, error, warning, info, success), showing the light/main/dark shades with their hex values and palette path.
_Avoid_: colors page, color palette, theme colors

**PropPickList**:
The `type PropPickList` alias inside each wrapper that names the MUI props the wrapper exposes. Drives the `Pick<MuiXxxProps, PropPickList>` that forms the wrapper's base type.
_Avoid_: allowed props, prop subset

**Rounded variant** (icons):
The preferred `@mui/icons-material` icon style for this project — always import the `*Rounded` suffix (e.g. `StarRounded`, `HomeRounded`). Non-rounded variants are not used.
_Avoid_: default icon, filled icon

## Story categories

Storybook tree structure established for this project:

| Category | Examples |
|---|---|
| `Components/Inputs/` | Select, TextField |
| `Components/Data Display/` | Tooltip, Icon |
| `Components/Feedback/` | Dialog, Snackbar |
| `Components/Navigation/` | Menu |
| `Components/Surfaces/` | Card |
| `Components/Layout/` | Tabs |
| `Colors` (top-level) | Palette |

## Patterns

**Object-prop flattening**: MUI props typed as objects (e.g. `anchorOrigin: { vertical, horizontal }`) are split into flat scalar props on the wrapper (e.g. `anchorVertical`, `anchorHorizontal`) so Storybook renders them as individual dropdown controls rather than a raw object editor.

**Controlled component render**: When a component requires controlled state (e.g. Tabs `value`), the story uses a Storybook `render` function with `useState` rather than lifting state into the wrapper.

**TabPanel a11y wiring**: Every Tabs story must pair `<Tabs>` with `<TabPanel>` components. Each `Tab` carries `id="tab-{i}"` and `aria-controls="tabpanel-{i}"`; each `TabPanel` carries `role="tabpanel"`, `id="tabpanel-{i}"`, `aria-labelledby="tab-{i}"`, and `tabIndex={0}` when active — per WAI-ARIA Authoring Practices.
