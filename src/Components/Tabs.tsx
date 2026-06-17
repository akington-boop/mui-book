import MuiTabs, { type TabsProps as MuiTabsProps } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

type PropPickList = "variant" | "textColor" | "indicatorColor" | "value" | "onChange";

type TabsBaseProps = Pick<MuiTabsProps, PropPickList>;

export interface TabsProps extends TabsBaseProps {}

export const tabs = ["Tab One", "Tab Two", "Tab Three"];

export function Tabs({ variant, textColor, indicatorColor, value, onChange }: TabsProps): React.ReactNode {
	return (
		<MuiTabs
			value={value}
			onChange={onChange}
			variant={variant}
			textColor={textColor}
			indicatorColor={indicatorColor}
		>
			{tabs.map((tab, index) => (
				<Tab key={tab} label={tab} id={`tab-${index}`} aria-controls={`tabpanel-${index}`} />
			))}
		</MuiTabs>
	);
}

interface TabPanelProps {
	value: number;
	index: number;
	children: React.ReactNode;
}

export function TabPanel({ value, index, children }: TabPanelProps): React.ReactNode {
	return (
		<Box
			role="tabpanel"
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
			hidden={value !== index}
			tabIndex={value === index ? 0 : undefined}
			sx={{ p: 2 }}
		>
			{value === index && children}
		</Box>
	);
}
