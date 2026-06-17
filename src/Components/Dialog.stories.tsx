import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, type DialogProps } from "./Dialog";

const meta = {
	title: "Components/Feedback/Dialog",
	component: Dialog,
	tags: [],
	parameters: {},
	argTypes: {
		triggerLabel: { type: "string" },
		maxWidth: {
			options: ["xs", "sm", "md", "lg", "xl"] satisfies DialogProps["maxWidth"][],
		},
	},
} satisfies Meta<DialogProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		triggerLabel: "Open Dialog",
		fullWidth: true,
		maxWidth: "sm",
		fullScreen: false,
	},
};
