import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type PropPickList = "raised" | "variant";

type CardBaseProps = Pick<MuiCardProps, PropPickList>;

export interface CardProps extends CardBaseProps {
	sx?: MuiCardProps["sx"];
}

export function Card({ raised, variant }: CardProps): React.ReactNode {
	return (
		<MuiCard raised={raised} variant={variant} sx={{ maxWidth: 360 }}>
			<CardContent>
				<Typography variant="h5" gutterBottom>
					Card Title
				</Typography>
				<Typography variant="body2" color="text.secondary">
					This is the card body text. It provides a brief description of the card content.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
				<Button size="small">Share</Button>
			</CardActions>
		</MuiCard>
	);
}
