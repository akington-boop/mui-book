import StarRounded from "@mui/icons-material/StarRounded";
import Stack from "@mui/material/Stack";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const sizes: SvgIconProps["fontSize"][] = ["small", "medium", "large", "inherit"];

export interface IconProps {
	color: SvgIconProps["color"];
}

export function Icon({ color }: IconProps): React.ReactNode {
	return (
		<Stack direction="row" spacing={2} alignItems="center">
			{sizes.map((size) => (
				<StarRounded key={size} fontSize={size} color={color} />
			))}
		</Stack>
	);
}
