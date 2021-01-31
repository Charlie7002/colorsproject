import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from "@material-ui/styles";

import ColorBox from "./ColorBox";

const styles = {
	Palette: {
		height: "98vh",
		display: "flex",
		flexDirection: "column",
	},
	PaletteColors: {
		height: "90%",
	},
	goBack: {
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: "uppercase",
		marginBottom: "-4px",
		opacity: 1,
		background: "black",
		"& a": {
			width: "100px",
			height: "30px",
			position: "absolute",
			display: "inline-block",
			top: "50%",
			left: "50%",
			marginLeft: "-50px",
			marginTop: "-15px",
			textAlign: "center",
			outline: "none",
			background: "rgba(255, 255, 255, 0.3)",
			fontSize: "1rem",
			lineheight: "30px",
			color: "white",
			border: "none",
			textDecoration: "none",
			textTransform: "uppercase",
		},
	},
};

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = { format: "hex" };
	}

	gatherShades = (palette, colorToFilterBy) => {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorToFilterBy)
			);
		}

		return shades.slice(1);
	};

	changeFormat = (val) => {
		this.setState({ format: val });
	};

	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				color={color.hex}
				showFullPalette={false}
				background={color[format]}
			/>
		));
		return (
			<div className={classes.Palette}>
				<NavBar handleChange={this.changeFormat} showSlider={false} />
				<div className={classes.PaletteColors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link className="backbtn" to={`/palette/${id}`}>
							Go back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
