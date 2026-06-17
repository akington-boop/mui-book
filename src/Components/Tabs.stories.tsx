import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabPanel, tabs, type TabsProps } from "./Tabs";

const meta = {
	title: "Components/Layout/Tabs",
	component: Tabs,
	tags: [],
	parameters: {},
	argTypes: {
		variant: {
			options: ["standard", "scrollable", "fullWidth"] satisfies TabsProps["variant"][],
		},
		textColor: {
			options: ["primary", "secondary", "inherit"] satisfies TabsProps["textColor"][],
		},
		indicatorColor: {
			options: ["primary", "secondary"] satisfies TabsProps["indicatorColor"][],
		},
	},
} satisfies Meta<TabsProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "standard",
		textColor: "primary",
		indicatorColor: "primary",
	},
	render: (args) => {
		const [value, setValue] = useState(0);
		return (
			<>
				<Tabs {...args} value={value} onChange={(_, v) => setValue(v)} />
				{tabs.map((tab, index) => (
					<TabPanel key={tab} value={value} index={index}>
						Content for {tab}
					</TabPanel>
				))}
			</>
		);
	},
};
