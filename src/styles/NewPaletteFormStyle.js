import { DRAWER_WITH } from "../constants";

const drawerWidth = DRAWER_WITH;
const styles = (theme) => ({
	root: {
		display: "flex",
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},

	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		display: "flex",
		alignItems: "center",
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
		width: "100%",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
		height: "calc(100vh - 64px)",
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	container: {
		display: "flex",
		flexDirection: "column",
		width: "90%",
		height: "100%",
		justifyContent: "center",
		"& h4": {
			textAlign: "center",
			marginBottom: "1rem",
		},
	},
	btns: {
		with: "100%",
	},
	btn: { width: "100%" },
});

export { styles };
