import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon, type IconProps } from "./Icon";

const meta = {
	title: "Components/Data Display/Icon",
	component: Icon,
	tags: [],
	parameters: {
		docs: {
			description: {
				component: "Use the **Rounded** variant from `@mui/icons-material` — e.g. `StarRounded`, `HomeRounded`. Rounded icons are the preferred style across this design system.",
			},
		},
	},
	argTypes: {
		color: {
			options: [
				"inherit",
				"action",
				"disabled",
				"error",
				"info",
				"primary",
				"secondary",
				"success",
				"warning",
			] satisfies IconProps["color"][],
		},
	},
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllSizes: Story = {
	args: {
		color: "primary",
	},
};
