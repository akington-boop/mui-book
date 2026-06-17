import Button from "@mui/material/Button";
import MuiTooltip, { type TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

type PropPickList = "title" | "placement" | "arrow";

type TooltipBaseProps = Pick<MuiTooltipProps, PropPickList>;

export interface TooltipProps extends TooltipBaseProps {
	label: string;
}

export function Tooltip({ title, placement, arrow, label }: TooltipProps): React.ReactNode {
	return (
		<MuiTooltip title={title} placement={placement} arrow={arrow}>
			<Button>{label}</Button>
		</MuiTooltip>
	);
}
