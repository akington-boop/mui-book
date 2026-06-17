import { useState } from "react";
import Button from "@mui/material/Button";
import MuiDialog, { type DialogProps as MuiDialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type PropPickList = "fullWidth" | "maxWidth" | "fullScreen";

type DialogBaseProps = Pick<MuiDialogProps, PropPickList>;

export interface DialogProps extends DialogBaseProps {
	triggerLabel: string;
}

export function Dialog({ triggerLabel, fullWidth, maxWidth, fullScreen }: DialogProps): React.ReactNode {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button variant="contained" onClick={() => setOpen(true)}>
				{triggerLabel}
			</Button>
			<MuiDialog
				open={open}
				onClose={() => setOpen(false)}
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				fullScreen={fullScreen}
			>
				<DialogTitle>Dialog Title</DialogTitle>
				<DialogContent>
					<DialogContentText>
						This is the dialog content. Close it using the button below.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>Close</Button>
				</DialogActions>
			</MuiDialog>
		</>
	);
}
