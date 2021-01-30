import React, { Component } from "react";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import "./ColorBox.scss";

const styles = {
	copyText: {
		color: (props) =>
			chroma(props.background).luminance() <= 0.07 ? "black" : "white",
	},
	nameColor: {
		color: (props) =>
			chroma(props.background).luminance() >= 0.55 ? "black" : "white",
	},
	seeMore: {
		background: "rgba(255, 255, 255, 0.3)",
		position: "absolute",
		color: (props) =>
			chroma(props.background).luminance() >= 0.55 ? "grey" : "white",
		right: 0,
		bottom: 0,
		width: "60px",
		height: "30px",
		textAlign: "center",
		lineHeight: "30px",
	},
	copyBtn: {
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "50%",
		left: "50%",
		marginLeft: " -50px",
		marginTop: " -15px",
		textAlign: "center",
		outline: "none",
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		color: (props) =>
			chroma(props.background).luminance() >= 0.55 ? "grey" : "white",
		border: "none",
		textDecoration: "none",
		textTransform: "uppercase",
		opacity: 0,
	},
	ColorBox: {
		width: "20%",
		height: (props) => (props.showFullPalette ? "25%" : "50%"),
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: "uppercase",
		marginBottom: "-4px",
		"& goback": {
			background: "black",
		},
		"&:hover button": {
			opacity: 1,
		},
	},
};

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
		const {
			name,
			background,
			colorId,
			paletteId,
			showFullPalette,
			classes,
		} = this.props;
		const { copied } = this.state;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div className={classes.ColorBox} style={{ background }}>
					<div
						className={`copy-overlay ${copied && "show"}`}
						style={{ background }}
					></div>
					<div className={`copy-msg ${copied && "show"}`}>
						<h1>copied!</h1>
						<p className={classes.copyText}>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className={classes.nameColor}>{name}</span>
						</div>
						<button className={classes.copyBtn}>Copy</button>
						{showFullPalette && (
							<Link
								to={`/palette/${paletteId}/${colorId}`}
								onClick={(e) => e.stopPropagation()}
							>
								<span className={classes.seeMore}>More</span>
							</Link>
						)}
					</div>
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
