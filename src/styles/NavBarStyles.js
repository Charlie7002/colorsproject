export default {
	slider: {
		width: "340px",
		margin: " 0 10px",
		display: " inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent !important",
		},

		"& .rc-slider-rail": {
			height: " 8px !important",
		},
		"& .rc-slider-handle,.rc-slider-handler:active,.rc-slider-handler:hover,.rc-slider-handler:focus": {
			backgroundColor: " green !important",
			outline: "none !important",
			border: "2px solid green !important",
			boxShadow: "none !important",
			width: "13px !important",
			height: "13px !important",
			marginLeft: "-7px !important",
			marginTop: "-3px !important",
		},
	},

	NavBar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "5vh",
	},
	logo: {
		marginRight: "15px",
		padding: " 0 13px",
		fontSize: "22px",
		backgroundColor: " #eceff1",
		fontFamily: "Roboto",
		height: "100%",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black",
		},
	},

	selectContainer: {
		marginLeft: "auto",
		marginRight: "1rem",
	},
};
