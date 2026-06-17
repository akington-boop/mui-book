import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select, type SelectProps } from "./Select";

const meta = {
	title: "Components/Inputs/Select",
	component: Select,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		variant: {
			options: ["outlined", "filled", "standard"] satisfies SelectProps["variant"][],
		},
		size: {
			options: ["small", "medium"] satisfies SelectProps["size"][],
		},
	},
} satisfies Meta<SelectProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Select",
		variant: "outlined",
		size: "medium",
		disabled: false,
		multiple: false,
	},
};
