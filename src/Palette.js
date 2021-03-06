import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
import styles from "./styles/PaletteStyles";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: "hex",
		};
	}
	changeLevel = (level) => {
		this.setState({ level });
		console.log(this.state.level);
	};

	changeFormat = (val) => {
		this.setState({ format: val });
	};
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((c) => (
			<ColorBox
				background={c[format]}
				name={c.name}
				key={c.id}
				colorId={c.id}
				paletteId={id}
				showFullPalette={true}
			/>
		));

		return (
			<div className={classes.Palette}>
				<NavBar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showSlider={true}
				/>

				<div className={classes.PaletteColors}>{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
