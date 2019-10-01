import React from "react";

class FilterObject extends React.Component {
	constructor() {
		super();
		this.updateInput = this.updateInput.bind(this);
		this.solveToyProblem = this.solveToyProblem.bind(this);
		this.state = {
			unFilteredArray: [
				{
					name: "shredder",
					human: true
				},
				{
					name: "Leonardo",
					turtle: true
				},

				{
					name: "Splinter",
					rat: true
				}
			],
			userInput: "",
			filteredArray: []
		};
	}

	updateInput(e) {
		this.setState({ userInput: e.target.value });
	}

	solveToyProblem(input) {
		let newArray = this.state.unFilteredArray.slice();

		let newFilter = newArray.filter(obj => {
			return obj[input];
		});

		this.setState({ filteredArray: newFilter });
	}

	render() {
		return (
			<div className='puzzleBox filterObjectPB'>
				<h4>Filter Object</h4>
				<span className='puzzleText'>
					Original: {JSON.stringify(this.state.unFilteredArray)}
				</span>
				<input
					onChange={this.updateInput}
					className='inputLine'
					placeholder='search'
				/>
				<button
					onClick={() => this.solveToyProblem(this.state.userInput)}
					className='confirmationButton'
				>
					Enter
				</button>
				<span className='resultsBox filterObjectRB'>
					Filtered: {JSON.stringify(this.state.filteredArray)}
				</span>
			</div>
		);
	}
}

export default FilterObject;
