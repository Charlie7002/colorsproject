import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openDeleteDialog: false,
			deleteId: "",
		};
	}
	goToPalette = (id) => {
		this.props.history.push(`/palette/${id}`);
	};
	openDialog = (id) => {
		this.setState({ openDeleteDialog: true, deleteId: id });
	};
	closeDialog = () => {
		this.setState({ openDeleteDialog: false, deleteId: "" });
	};
	handleDelete = () => {
		this.props.deletePalette(this.state.deleteId);
		this.closeDialog();
	};
	render() {
		const { palettos, classes } = this.props;
		const { openDeleteDialog } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors 🐈</h1>
						<Link to="/palette/new">Create Palette</Link>
					</nav>

					<TransitionGroup className={classes.palettes}>
						{palettos.map((palette) => (
							<CSSTransition
								key={palette.id}
								classNames="fade"
								timeout={500}
							>
								<MiniPalette
									{...palette}
									handleClick={this.goToPalette}
									// handleDelete={deletePalette}
									openDialog={this.openDialog}
									key={palette.id}
									id={palette.id}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog open={openDeleteDialog} onClose={this.closeDialog}>
					<DialogTitle id="delete-dialog-palette">
						Delete this palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar
									style={{ background: red[100], color: red[700] }}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar
									style={{ background: blue[100], color: blue[700] }}
								>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
