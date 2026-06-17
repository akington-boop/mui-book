import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip, type TooltipProps } from "./Tooltip";

const meta = {
	title: "Components/Data Display/Tooltip",
	component: Tooltip,
	tags: [],
	parameters: {},
	argTypes: {
		title: { type: "string" },
		placement: {
			options: [
				"top",
				"top-start",
				"top-end",
				"bottom",
				"bottom-start",
				"bottom-end",
				"left",
				"left-start",
				"left-end",
				"right",
				"right-start",
				"right-end",
			] satisfies TooltipProps["placement"][],
		},
	},
} satisfies Meta<TooltipProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Hover me",
		title: "Tooltip text",
		placement: "top",
		arrow: true,
	},
};
