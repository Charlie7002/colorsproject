import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class PaletteMetaForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: "form",
			newNamePalette: "",
			emoji: "",
		};
	}
	componentDidMount = () => {
		ValidatorForm.addValidationRule("isPaletteUnique", (value) =>
			this.props.palettes.every(
				({ paletteName }) =>
					paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	};
	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	showEmojiPicker = () => {
		this.setState({
			stage: "emoji",
		});
	};

	savePalette = (emoji) => {
		this.setState({ emoji: "emoji" });
		const newPalette = {
			paletteName: this.state.newNamePalette,
			emoji: emoji.native,
		};
		this.props.handleSubmit(newPalette);
		this.setState({ stage: "" });
	};

	render() {
		const { newNamePalette, stage } = this.state;
		const { hideForm } = this.props;
		return (
			<>
				<Dialog open={stage === "emoji"} onClose={hideForm}>
					<DialogTitle id="form-dialog-title">
						Choose a Palette Emoji
					</DialogTitle>
					<Picker
						onSelect={this.savePalette}
						title="Choose emoji for your sublime palette"
					/>
				</Dialog>
				<Dialog
					open={stage === "form"}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
					onClose={hideForm}
				>
					<DialogTitle id="form-dialog-title">
						Choose a palette Name
					</DialogTitle>
					<ValidatorForm onSubmit={this.showEmojiPicker}>
						<DialogContent>
							<DialogContentText>
								Please enter a name for new beautiful palette
							</DialogContentText>

							<TextValidator
								label="Palette Name"
								value={newNamePalette}
								onChange={this.handleChange}
								name="newNamePalette"
								fullWidth
								margin="normal"
								validators={["required", "isPaletteUnique"]}
								errorMessages={[
									"Enter a palette name",
									"This palette name is already exist",
								]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={hideForm} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</>
		);
	}
}

export default PaletteMetaForm;
