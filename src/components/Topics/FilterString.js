import React from "react";

class FilterString extends React.Component {
	constructor() {
		super();
		this.solveToyProblem = this.solveToyProblem.bind(this);
		this.state = {
			unfilteredArray: [
				"James",
				"Jessica",
				"Melody",
				"Tyler",
				"Blake",
				"Jennifer",
				"Mark",
				"Maddy"
			],
			userInput: "",
			filteredArray: []
		};
	}

	solveToyProblem(input) {
		let names = this.state.unfilteredArray;
		let filteredNames = [];

		for (let i = 0; i < names.length; i++) {
			if (names[i].includes(input)) {
				filteredNames.push(names[i]);
			}
		}

		this.setState({ filteredArray: filteredNames });
	}

	render() {
		return (
			<div className='puzzleBox filterStringPB'>
				<h4>Filter Strings</h4>
				<span className='puzzleText'>
					Filtered Names: {this.state.unfilteredArray}
				</span>
				<input
					onChange={e => {
						this.setState({ userInput: e.target.value });
					}}
					className='inputLine'
				/>
				<button
					onClick={() => this.solveToyProblem(this.state.userInput)}
					className='confirmationButton'
				>
					Enter
				</button>
				<span className='resultsBox filterStringRB'>
					FIltered: {JSON.stringify(this.state.filteredArray, null, 10)}
				</span>
			</div>
		);
	}
}

export default FilterString;
