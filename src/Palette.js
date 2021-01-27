import React, { Component } from "react";
import seedColors from "./seedColors";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import NavBar from "./NavBar";
import "./Palette.css";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
		};
	}
	changeLevel = (level) => {
		this.setState({ level });
		console.log(this.state.level);
	};
	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorBoxes = colors[level].map((c) => (
			<ColorBox background={c.hex} name={c.name} />
		));

		return (
			<div className="Palette">
				<NavBar level={level} changeLevel={this.changeLevel} />

				<div className="Palette-colors">{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
