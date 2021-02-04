import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
const styles = {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: "uppercase",
		marginBottom: "-4px",
		"&:hover svg": {
			color: "white",
			transform: "scale(1.5)",
		},
	},
	boxContent: {
		position: "absolute",
		padding: "10px",
		width: "100%",
		left: 0,
		bottom: 0,
		color: "black",
		letterSpacing: "1px",
		fontSize: "12px",
		display: "flex",
		justifyContent: "space-between",
	},
	DeleteIcon: {
		color: "rgba(0,0,0,.5)",
		transition: "all .3s ease",
	},
};

const DraggColorBox = SortableElement((props) => {
	const { classes, color, name, handleClick } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				<span> {name}</span>
				<DeleteIcon className={classes.DeleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggColorBox);
