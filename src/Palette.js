import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import "./Palette.scss";

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
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((c) => (
			<ColorBox
				background={c[format]}
				name={c.name}
				key={c.id}
				colorId={c.id}
				paletteId={id}
			/>
		));

		return (
			<div className="Palette">
				<NavBar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
				/>

				<div className="Palette-colors">{colorBoxes}</div>
				<footer className="Palette-footer">
					{paletteName}
					<span className="emoji">{emoji}</span>
				</footer>
			</div>
		);
	}
}

export default Palette;
