import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField, type TextFieldProps } from "./TextField";

const meta = {
	title: "Components/Inputs/TextField",
	component: TextField,
	tags: [],
	parameters: {},
	argTypes: {
		label: { type: "string" },
		variant: {
			options: ["outlined", "filled", "standard"] satisfies TextFieldProps["variant"][],
		},
		size: {
			options: ["small", "medium"] satisfies TextFieldProps["size"][],
		},
	},
} satisfies Meta<TextFieldProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "TextField",
		variant: "outlined",
		size: "medium",
		disabled: false,
		multiline: false,
	},
};
