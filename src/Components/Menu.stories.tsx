import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu, type MenuProps } from "./Menu";

const meta = {
	title: "Components/Navigation/Menu",
	component: Menu,
	tags: [],
	parameters: {},
	argTypes: {
		triggerLabel: { type: "string" },
		anchorOriginVertical: {
			options: ["top", "center", "bottom"] satisfies MenuProps["anchorOriginVertical"][],
		},
		anchorOriginHorizontal: {
			options: ["left", "center", "right"] satisfies MenuProps["anchorOriginHorizontal"][],
		},
	},
} satisfies Meta<MenuProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		triggerLabel: "Open Menu",
		anchorOriginVertical: "bottom",
		anchorOriginHorizontal: "left",
		dense: false,
	},
};
