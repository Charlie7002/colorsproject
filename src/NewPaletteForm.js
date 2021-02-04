import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import { arrayMove } from "react-sortable-hoc";
import DraggableColorList from "./DraggableColorList";

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
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
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
});

class NewPaletteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: true,
			currentColor: "purple",
			colors: [
				{ name: "Beekeeper", color: "#f6e58d" },
				{ name: "SpicedNectarine", color: "#ffbe76" },
				{ name: "PinkGlamour", color: "#ff7979" },
				{ name: "JuneBud", color: "#badc58" },
				{ name: "CoastalBreeze", color: "#dff9fb" },
				{ name: "Turbo", color: "#f9ca24" },
				{ name: "QuinceJelly", color: "#f0932b" },
				{ name: "CarminePink", color: "#eb4d4b" },
				{ name: "PureApple", color: "#6ab04c" },
				{ name: "HintOfIcePack", color: "#c7ecee" },
				{ name: "MiddleBlue", color: "#7ed6df" },
				{ name: "Heliotrope", color: "#e056fd" },
				{ name: "ExodusFruit", color: "#686de0" },
				{ name: "DeepKoamaru", color: "#30336b" },
				{ name: "SoaringEagle", color: "#95afc0" },
				{ name: "GreenlandGreen", color: "#22a6b3" },
				{ name: "SteelPink", color: "#be2edd" },
				{ name: "Blurple", color: "#4834d4" },
				{ name: "DeepCove", color: "#130f40" },
			],
			newNameColor: "",
			newNamePalette: "",
		};
	}

	componentDidMount() {
		// custom rule will have name 'isPasswordMatch'
		ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
			this.state.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule("isColorUnique", (value) =>
			this.state.colors.every(
				({ color }) => color !== this.state.currentColor
			)
		);
		ValidatorForm.addValidationRule("isPaletteUnique", (value) =>
			this.props.palettes.every(
				({ paletteName }) =>
					paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	updateCurrentColor = (newColor) => {
		this.setState({ currentColor: newColor.hex });
	};

	removeColor = (colorName) => {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
	};

	addNewColor = () => {
		console.log(this.state.colors);
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newNameColor,
		};

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

	handleSubmit = () => {
		let newName = this.state.newNamePalette;
		const newPalette = {
			colors: this.state.colors,
			emoji: "",
			id: newName.toLowerCase().replace(/ /g, "-"),
			paletteName: newName,
		};
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	};

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};

	render() {
		const { classes } = this.props;
		const { open } = this.state;

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
							onClick={this.handleDrawerOpen}
							className={classNames(
								classes.menuButton,
								open && classes.hide
							)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Persistent drawer
						</Typography>
						<ValidatorForm onSubmit={this.handleSubmit}>
							<TextValidator
								label="Palette Name"
								value={this.state.newNamePalette}
								onChange={this.handleChange}
								name="newNamePalette"
								validators={["required", "isPaletteUnique"]}
								errorMessages={[
									"Enter a palette name",
									"This palette name is already exist",
								]}
							/>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</ValidatorForm>
					</Toolbar>
				</AppBar>
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
					<Typography variant="h4">Design Your Palette</Typography>
					<div>
						<Button variant="contained" color="secondary">
							Clear Palette
						</Button>
						<Button variant="contained" color="primary">
							Random Color
						</Button>
					</div>
					<ChromePicker
						color={this.state.currentColor}
						onChangeComplete={this.updateCurrentColor}
					/>
					<ValidatorForm onSubmit={this.addNewColor}>
						<TextValidator
							value={this.state.newNameColor}
							name="newNameColor"
							onChange={this.handleChange}
							validators={[
								"required",
								"isColorNameUnique",
								"isColorUnique",
							]}
							errorMessages={[
								"Enter a color name",
								"This color name is already exist",
								"Color already used",
							]}
						/>

						<Button
							variant="contained"
							color="primary"
							style={{ background: this.state.currentColor }}
							type="submit"
						>
							Add Color
						</Button>
					</ValidatorForm>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={this.state.colors}
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
