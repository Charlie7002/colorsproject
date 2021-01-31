import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors, handleClick } = props;
	const miniColorBoxes = colors.map((c) => (
		<div
			key={c.name}
			className={classes.miniColor}
			style={{ background: c.color }}
		></div>
	));
	return (
		<div className={classes.root} onClick={handleClick}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName}
				<span className={emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
