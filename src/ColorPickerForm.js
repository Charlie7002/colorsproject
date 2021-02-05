import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: "purple",
			newNameColor: "",
		};
	}
	componentDidMount() {
		// custom rule will have name 'isPasswordMatch'
		ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule("isColorUnique", (value) =>
			this.props.colors.every(
				({ color }) => color !== this.state.currentColor
			)
		);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	updateCurrentColor = (newColor) => {
		this.setState({ currentColor: newColor.hex });
	};

	handleSubmit = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newNameColor,
		};
		this.props.addNewColor(newColor);
		this.setState({ newNameColor: "" });
	};
	render() {
		const { paletteFull, addNewColor } = this.props;
		const { currentColor, newNameColor } = this.state;
		return (
			<>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
				/>
				<ValidatorForm onSubmit={this.handleSubmit}>
					<TextValidator
						value={newNameColor}
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
						style={{
							background: paletteFull ? "grey" : currentColor,
						}}
						type="submit"
						disabled={paletteFull}
					>
						{paletteFull ? "Palette Full" : "Add Color"}
					</Button>
				</ValidatorForm>
			</>
		);
	}
}

export default ColorPickerForm;
