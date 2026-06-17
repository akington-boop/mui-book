import type { Meta, StoryObj } from "@storybook/react-vite";
import { Colors } from "./Colors";

const meta = {
	title: "Colors",
	component: Colors,
	tags: [],
	parameters: {},
} satisfies Meta<typeof Colors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Palette: Story = {};
