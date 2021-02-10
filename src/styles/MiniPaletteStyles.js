export default {
	root: {
		background: "white",
		border: "1px grey solid",
		borderRadius: "5px",
		padding: ".5rem",
		position: "relative",
		overflow: "hidden",
		cursor: "pointer",
		"&:hover svg": {
			opacity: 1,
		},
	},
	colors: {
		background: "#dae1e4",
		height: "150px",
		width: "100%",
		borderRadius: "5px",
		overflow: "hidden",
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: ".5rem",
		fontSize: "1rem",
		position: "relative",
	},
	emoji: {
		marginLeft: ".5rem",
		fontSize: "1.5rem",
	},
	miniColor: {
		height: "25%",
		width: "20%",
		display: "inline-block",
		margin: "auto",
		position: "relative",
		marginBottom: "-5.5px",
	},

	delete: {},
	deleteIcon: {
		color: "white",
		height: "35px",
		width: "35px",
		position: "absolute",
		top: 0,
		right: 0,
		background: "red",
		zIndex: 10,
		opacity: 0,
		padding: "6px",
	},
};
