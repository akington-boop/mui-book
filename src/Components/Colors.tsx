import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type SemanticRole = "primary" | "secondary" | "error" | "warning" | "info" | "success";
type Shade = "light" | "main" | "dark";

const roles: SemanticRole[] = ["primary", "secondary", "error", "warning", "info", "success"];
const shades: Shade[] = ["light", "main", "dark"];

function Swatch({ token, hex }: { token: string; hex: string }) {
	return (
		<Stack spacing={0.5} alignItems="center" sx={{ minWidth: 100 }}>
			<Box
				sx={{
					width: 80,
					height: 60,
					borderRadius: 1,
					bgcolor: hex,
					border: "1px solid",
					borderColor: "divider",
				}}
			/>
			<Typography variant="caption" sx={{ fontFamily: "monospace", textAlign: "center" }}>
				{token}
			</Typography>
			<Typography variant="caption" color="text.secondary" sx={{ fontFamily: "monospace" }}>
				{hex}
			</Typography>
		</Stack>
	);
}

export function Colors() {
	const { palette } = useTheme();

	return (
		<Stack spacing={4} sx={{ p: 3 }}>
			{roles.map((role) => (
				<Stack key={role} spacing={1}>
					<Typography variant="subtitle1" sx={{ textTransform: "capitalize", fontWeight: 600 }}>
						{role}
					</Typography>
					<Stack direction="row" spacing={2} flexWrap="wrap">
						{shades.map((shade) => {
							const hex = (palette[role] as Record<Shade, string>)[shade];
							return hex ? (
								<Swatch key={shade} token={`palette.${role}.${shade}`} hex={hex} />
							) : null;
						})}
					</Stack>
				</Stack>
			))}
		</Stack>
	);
}
