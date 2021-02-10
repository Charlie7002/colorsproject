import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
	constructor(props) {
		super(props);
	}
	deletePalette = (e) => {
		e.stopPropagation();
		this.props.openDialog(this.props.id);
	};
	render() {
		const {
			classes,
			paletteName,
			emoji,
			colors,
			handleClick,
			id,
		} = this.props;
		const miniColorBoxes = colors.map((c) => (
			<div
				key={c.name}
				className={classes.miniColor}
				style={{ background: c.color }}
			></div>
		));
		return (
			<div className={classes.root} onClick={() => handleClick(id)}>
				<DeleteIcon
					onClick={this.deletePalette}
					className={classes.deleteIcon}
					style={{ transition: "all ease .3s" }}
				/>

				<div className={classes.colors}>{miniColorBoxes}</div>
				<h5 className={classes.title}>
					{paletteName}
					<span className={emoji}>{emoji}</span>
				</h5>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
