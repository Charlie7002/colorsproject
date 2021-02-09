import { DRAWER_WITH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WITH;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	hide: {
		display: "none",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		height: "64px",
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	navBtn: {
		marginRight: "1rem",
		"& a": {
			textDecoration: "none",
		},
		[sizes.down("xs")]: {
			marginRight: 0,
		},
	},
	bt: {
		margin: "0 .5rem",
		[sizes.down("xs")]: {
			margin: 0,
		},
	},
});

export default styles;
