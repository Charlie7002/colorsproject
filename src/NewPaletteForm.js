import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { arrayMove } from "react-sortable-hoc";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	hide: {
		display: "none",
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
		// alignItems: "center",
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

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColor: 20,
	};
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			colors: this.props.palettes[0].colors,
		};
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	removeColor = (colorName) => {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
	};

	addNewColor = (newColor) => {
		this.setState({
			colors: [...this.state.colors, newColor],
			newNameColor: "", //clear input
		});
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (newPaletteName) => {
		const newPalette = {
			colors: this.state.colors,
			id: newPaletteName.toLowerCase().replace(/ /g, "-"),
			paletteName: newPaletteName,
		};
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	};

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};
	clearColor = () => {
		this.setState({ colors: [] });
	};

	randomColor = () => {
		const allColor = this.props.palettes.map((p) => p.colors).flat();
		var rand = Math.floor(Math.random() * allColor.length);
		let newColor = allColor[rand];
		this.setState({ colors: [...this.state.colors, newColor] });
	};

	render() {
		const { classes, maxColor, palettes } = this.props;
		const { open, colors } = this.state;
		const paletteFull = colors.length >= maxColor;

		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					handleSubmit={this.handleSubmit}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant="h4">Design Your Palette</Typography>
						<div className={classes.btns}>
							<Button
								variant="contained"
								color="secondary"
								onClick={this.clearColor}
								className={classes.btn}
							>
								Clear Palette
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={this.randomColor}
								disabled={paletteFull}
								className={classes.btn}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm
							paletteFull={paletteFull}
							addNewColor={this.addNewColor}
							colors={this.state.colors}
						/>
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={colors}
						removeColor={this.removeColor}
						axis="xy"
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);
