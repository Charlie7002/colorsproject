import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";

class App extends Component {
	findPalette(id) {
		return seedColors.find((palette) => palette.id === id);
	}
	render() {
		console.log(seedColors);
		console.log(generatePalette(seedColors[1]));
		return (
			<>
				<Switch>
					<Route
						exact
						path="/"
						render={() => <PaletteList palettes={seedColors} />}
					/>
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette
								palette={generatePalette(
									this.findPalette(routeProps.match.params.id)
								)}
							/>
						)}
					/>
				</Switch>
				{/* <div className="App">
					<Palette palette={generatePalette(seedColors[6])} />
				</div> */}
			</>
		);
	}
}

export default App;
