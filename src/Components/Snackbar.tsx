import { useState } from "react";
import Button from "@mui/material/Button";
import MuiSnackbar from "@mui/material/Snackbar";

export interface SnackbarProps {
	message: string;
	autoHideDuration: number;
	anchorVertical: "top" | "bottom";
	anchorHorizontal: "left" | "center" | "right";
	triggerLabel: string;
}

export function Snackbar({
	message,
	autoHideDuration,
	anchorVertical,
	anchorHorizontal,
	triggerLabel,
}: SnackbarProps): React.ReactNode {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button variant="contained" onClick={() => setOpen(true)}>
				{triggerLabel}
			</Button>
			<MuiSnackbar
				open={open}
				message={message}
				autoHideDuration={autoHideDuration}
				anchorOrigin={{ vertical: anchorVertical, horizontal: anchorHorizontal }}
				onClose={() => setOpen(false)}
			/>
		</>
	);
}
