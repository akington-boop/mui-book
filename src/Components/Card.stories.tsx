import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, type CardProps } from "./Card";

const meta = {
	title: "Components/Surfaces/Card",
	component: Card,
	tags: [],
	parameters: {},
	argTypes: {
		variant: {
			options: ["elevation", "outlined"] satisfies CardProps["variant"][],
		},
	},
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		raised: false,
		variant: "elevation",
	},
};
