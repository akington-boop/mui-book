import MuiTextField, { type TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

type PropPickList = "variant" | "size" | "disabled" | "multiline";

type TextFieldBaseProps = Pick<MuiTextFieldProps, PropPickList>;

export interface TextFieldProps extends TextFieldBaseProps {
	label: string;
}

export function TextField({ label, variant, size, disabled, multiline }: TextFieldProps): React.ReactNode {
	return (
		<MuiTextField
			label={label}
			variant={variant}
			size={size}
			disabled={disabled}
			multiline={multiline}
			rows={multiline ? 4 : undefined}
		/>
	);
}
