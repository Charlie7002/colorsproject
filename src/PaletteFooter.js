import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/FooterStyles";

function PaletteFooter(props) {
	const { paletteName, emoji, classes } = props;
	return (
		<footer className={classes.PaletteFooter}>
			{paletteName}
			<span className={classes.PaletteEmoji}>{emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(PaletteFooter);
