import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PaletteIcon from "@material-ui/icons/Palette";
import Button from "@material-ui/core/Button";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";

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
	hideForm = () => {
		this.setState({
			show: false,
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
							<PaletteIcon />
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
						hideForm={this.hideForm}
					/>
				)}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
