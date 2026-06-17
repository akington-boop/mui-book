import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MuiSelect, { type SelectProps as MuiSelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type PropPickList = "variant" | "size" | "disabled" | "multiple";

type SelectBaseProps = Pick<MuiSelectProps, PropPickList>;

export interface SelectProps extends SelectBaseProps {
	label: string;
}

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

export function Select({ label, variant, size, disabled, multiple }: SelectProps): React.ReactNode {
	return (
		<FormControl sx={{ minWidth: 200 }} variant={variant} size={size} disabled={disabled}>
			<InputLabel>{label}</InputLabel>
			<MuiSelect label={label} variant={variant} size={size} disabled={disabled} multiple={multiple}>
				{options.map((opt) => (
					<MenuItem key={opt} value={opt}>
						{opt}
					</MenuItem>
				))}
			</MuiSelect>
		</FormControl>
	);
}
