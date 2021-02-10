import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Page from "./Page";

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalette = JSON.parse(window.localStorage.getItem("palettes"));
		this.state = {
			palettes: savedPalette || seedColors,
		};
		this.savePalette = this.savePalette.bind(this);
	}
	findPalette = (id) => {
		return this.state.palettes.find((palette) => palette.id === id);
	};
	savePalette(newPalette) {
		this.setState(
			{ palettes: [...this.state.palettes, newPalette] },
			this.syncLocalStorage
		);
	}

	deletePalette = (id) => {
		this.setState(
			(st) => ({
				palettes: st.palettes.filter((palette) => palette.id !== id),
			}),
			this.syncLocalStorage
		);
	};

	syncLocalStorage = () => {
		//save palettes to localstorage
		window.localStorage.setItem(
			"palettes",
			JSON.stringify(this.state.palettes)
		);
	};
	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition
							classNames="page"
							key={location.key}
							timeout={1000}
						>
							<Switch location={location}>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<Page>
											<NewPaletteForm
												savePalette={this.savePalette}
												{...routeProps}
												palettes={this.state.palettes}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										<Page>
											<PaletteList
												palettos={this.state.palettes}
												{...routeProps}
												deletePalette={this.deletePalette}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:id"
									render={(routeProps) => (
										<Page>
											<Palette
												palette={generatePalette(
													this.findPalette(
														routeProps.match.params.id
													)
												)}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:paletteId/:colorId"
									render={(routeProps) => (
										<Page>
											<SingleColorPalette
												palette={generatePalette(
													this.findPalette(
														routeProps.match.params.paletteId
													)
												)}
												colorId={routeProps.match.params.colorId}
											/>
										</Page>
									)}
								/>
								<Route
									render={(routeProps) => (
										<Page>
											<PaletteList
												palettos={this.state.palettes}
												{...routeProps}
												deletePalette={this.deletePalette}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
