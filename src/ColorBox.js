import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";

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
						className={`${classes.copyOverlay} ${
							copied && classes.showOverlay
						}`}
						style={{ background }}
					></div>
					<div
						className={`${classes.copyMsg} ${copied && classes.showMsg}`}
					>
						<h1>copied!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
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
