import chroma from "chroma-js";
import sizes from "./sizes";

export default {
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
		marginBottom: "-6px",

		"&:hover button": {
			opacity: 1,
			transition: ".3s",
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: (props) => (props.showFullPalette ? "20%" : "33.33%"),
		},
		[sizes.down("md")]: {
			width: "50%",
			height: (props) => (props.showFullPalette ? "10%" : "20%"),
		},

		[sizes.down("xs")]: {
			width: "100%",
			height: (props) => (props.showFullPalette ? "5%" : "10%"),
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
	},
	copyOverlay: {
		opacity: 0,
		transition: "0.6s transform ease-in-out",
		transform: "scale(0.1)",
		zIndex: 0,
		width: " 100%",
		height: "100%",
	},
	showOverlay: {
		opacity: 1,
		transform: "scale(50)",
		zIndex: 10,
		position: "absolute",
	},
	copyMsg: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		fontSize: "4rem",
		transform: "scale(0.1)",
		opacity: 0,
		color: "white",
		"& h1": {
			fontWeight: 400,
			textShadow: " 1px 2px black",
			background: "rgba(255, 255, 255, 0.2)",
			marginBottom: 0,
			textAlign: "center",
			width: "100%",
			padding: 0,
			[sizes.down("xs")]: {
				fontSize: "4rem",
			},
		},
		"& p": {
			fontSize: "2rem",
			textTransform: "lowercase",
			fontWeight: 100,
		},
	},
	showMsg: {
		opacity: 1,
		transform: "scale(1)",
		zIndex: 10,
		transition: "all 0.4s ease-in-out",
		transitionDelay: "0.3s",
	},
};
