# ADR-001: Wrapper component pattern

**Status**: Accepted

## Context

Each Storybook story needs a component to hand to `Meta<T>` so Storybook can infer argTypes and generate controls. MUI components have large, complex prop surfaces — exposing them directly would flood the controls panel and couple stories to internal MUI types.

## Decision

Every story owns a thin wrapper component (`src/Components/Xxx.tsx`) that:

1. Declares a `type PropPickList` naming the 2–4 props to expose.
2. Uses `Pick<MuiXxxProps, PropPickList>` as its base type, extended with any story-specific props (e.g. `label`, `triggerLabel`).
3. Forwards only the picked props to the underlying MUI component.

```ts
type PropPickList = "variant" | "size" | "disabled";
type TextFieldBaseProps = Pick<MuiTextFieldProps, PropPickList>;
export interface TextFieldProps extends TextFieldBaseProps { label: string }
```

MUI props typed as objects (e.g. `anchorOrigin`) are flattened into scalar props on the wrapper so Storybook renders them as individual controls rather than a raw object editor.

## Consequences

- ArgTypes and default args stay in sync with the wrapper's TypeScript interface — no manual `argTypes` needed for most controls.
- Stories are isolated from MUI's internal type changes beyond the picked props.
- Adding a new prop to a story requires updating both `PropPickList` and the wrapper's JSX — intentionally explicit.
