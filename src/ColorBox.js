import React, { Component } from "react";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.scss";

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
	}

	changeCopyState = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1500);
		});
	};

	render() {
		const { name, background, colorId, paletteId, showLink } = this.props;
		const { copied } = this.state;
		const isDarkColor = chroma(background).luminance() <= 0.07;
		const isLightColor = chroma(background).luminance() >= 0.55;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className="ColorBox" style={{ background }}>
					<div
						className={`copy-overlay ${copied && "show"}`}
						style={{ background }}
					></div>
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>copied!</h1>
						<p className={isLightColor && "darkText"}>
							{this.props.background}
						</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className={isDarkColor ? "lightText" : ""}>
								{name}
							</span>
						</div>
						<button
							className={`copy-button ${isLightColor && "darkText"}`}
						>
							Copy
						</button>
						{showLink && (
							<Link
								to={`/palette/${paletteId}/${colorId}`}
								onClick={(e) => e.stopPropagation()}
							>
								<span
									className={`see-more ${isLightColor && "darkText"}`}
								>
									More
								</span>
							</Link>
						)}
					</div>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
