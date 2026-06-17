import type { Meta, StoryObj } from "@storybook/react-vite";
import { Snackbar, type SnackbarProps } from "./Snackbar";

const meta = {
	title: "Components/Feedback/Snackbar",
	component: Snackbar,
	tags: [],
	parameters: {},
	argTypes: {
		triggerLabel: { type: "string" },
		message: { type: "string" },
		autoHideDuration: { type: "number" },
		anchorVertical: {
			options: ["top", "bottom"] satisfies SnackbarProps["anchorVertical"][],
		},
		anchorHorizontal: {
			options: ["left", "center", "right"] satisfies SnackbarProps["anchorHorizontal"][],
		},
	},
} satisfies Meta<SnackbarProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		triggerLabel: "Show Snackbar",
		message: "This is a snackbar message",
		autoHideDuration: 3000,
		anchorVertical: "bottom",
		anchorHorizontal: "center",
	},
};
