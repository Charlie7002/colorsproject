import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
	root: {
		background: "white",
		border: "1px grey solid",
		borderRadius: "5px",
		padding: ".5rem",
		position: "relative",
		overflow: "hidden",
		"&:hover": {
			cursor: "pointer",
		},
	},
	colors: {
		background: "#dae1e4",
		height: "150px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: ".5rem",
		fontSize: "1rem",
		position: "relative",
	},
	emoji: {
		marginLeft: ".5rem",
		fontSize: "1.5rem",
	},
	miniColor: {
		height: "25%",
		width: "20%",
		display: "inline-block",
		margin: "auto",
		position: "relative",
		marginBottom: "-3.5px",
	},
};

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
