import sizes from "./sizes";
import bg from "./bg.svg";

export default {
	"@global": {
		".fade-exit": {
			opacity: 1,
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease",
		},
	},
	root: {
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		backgroundColor: " #4d0fa3",
		backgroundImage: `url(${bg})`,
		/* background by SVGBackgrounds.com */
		overflow: "scroll",
		"& h1": { fontSize: "2rem" },
	},
	container: {
		width: "50%",

		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("xl")]: {
			width: "80%",
		},
		[sizes.down("xs")]: {
			width: "70%",
		},
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		color: "white",
		"& a": {
			color: "white",
		},
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gap: "2.5rem",
		[sizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)",
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
		},
	},
};
