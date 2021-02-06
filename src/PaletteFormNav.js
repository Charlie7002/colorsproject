import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import PaletteMetaForm from "./PaletteMetaForm";

const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: "flex",
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
	navBtn: { marginRight: "1rem" },
	bt: {
		marginRight: "2rem",
	},
});

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			newNamePalette: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	showForm = () => {
		this.setState({
			show: true,
		});
	};
	render() {
		const {
			classes,
			open,
			handleDrawerOpen,
			palettes,
			handleSubmit,
		} = this.props;
		const { newNamePalette } = this.state;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={handleDrawerOpen}
							className={classNames(
								classes.menuButton,
								open && classes.hide
							)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Create a Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtn}>
						<Link to="/">
							<Button
								variant="contained"
								color="secondary"
								className={classes.bt}
							>
								Go Back
							</Button>
						</Link>
						<Button
							className={classes.bt}
							variant="contained"
							color="primary"
							onClick={this.showForm}
						>
							Save
						</Button>
					</div>
				</AppBar>
				{this.state.show && (
					<PaletteMetaForm
						palettes={palettes}
						handleSubmit={handleSubmit}
					/>
				)}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);