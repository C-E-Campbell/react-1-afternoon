import React from "react";

class EvenAndOdd extends React.Component {
	constructor() {
		super();
		this.solveToyProblem = this.solveToyProblem.bind(this);
		this.state = { evenArray: [], oddArray: [], userInput: "" };
	}

	solveToyProblem() {
		let newString = this.state.userInput;
		let newArray = newString.split(",");
		let newEvenArray = [];
		let newOddArray = [];
		for (let i = 0; i < newArray.length; i++) {
			if (newArray[i] % 2 === 0) {
				newEvenArray.push(Number(newArray[i]));
			} else {
				newOddArray.push(Number(newArray[i]));
			}
		}

		this.setState({ evenArray: newEvenArray, oddArray: newOddArray });
	}

	render() {
		return (
			<div className='puzzleBox evenAndOddPB'>
				<h4 value='Evens and Odds'>Evens and Odds</h4>
				<input
					value={this.state.userInput}
					placeholder='Enter a string'
					onChange={e => {
						this.setState({ userInput: e.target.value });
					}}
					className='inputLine'
				></input>
				<button onClick={this.solveToyProblem} className='confirmationButton'>
					Enter
				</button>
				<span className='resultsBox'>{this.state.evenArray}</span>
				<span className='resultsBox'>{this.state.oddArray}</span>
			</div>
		);
	}
}

export default EvenAndOdd;
