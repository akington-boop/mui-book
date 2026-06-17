import { useState } from "react";
import Button from "@mui/material/Button";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export interface MenuProps {
	triggerLabel: string;
	anchorOriginVertical: "top" | "center" | "bottom";
	anchorOriginHorizontal: "left" | "center" | "right";
	dense: boolean;
}

const items = ["Profile", "Settings", "Logout"];

export function Menu({ triggerLabel, anchorOriginVertical, anchorOriginHorizontal, dense }: MenuProps): React.ReactNode {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	return (
		<>
			<Button variant="contained" onClick={(e) => setAnchorEl(e.currentTarget)}>
				{triggerLabel}
			</Button>
			<MuiMenu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{ vertical: anchorOriginVertical, horizontal: anchorOriginHorizontal }}
				MenuListProps={{ dense }}
			>
				{items.map((item) => (
					<MenuItem key={item} onClick={() => setAnchorEl(null)}>
						{item}
					</MenuItem>
				))}
			</MuiMenu>
		</>
	);
}
