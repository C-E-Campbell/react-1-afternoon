import React from "react";

class Sum extends React.Component {
	constructor() {
		super();
		this.findSum = this.findSum.bind(this);
		this.state = {
			number1: null,
			number2: null,
			sum: null
		};
	}

	findSum(num1, num2) {
		let total = Number(num1) + Number(num2);
		this.setState({ sum: total });
	}

	render() {
		return (
			<div className='puzzleBox filterStringPB'>
				<h4>Sum</h4>
				<input
					placeholder='First Number'
					onChange={e => {
						this.setState({ number1: e.target.value });
					}}
					className='inputLine'
				></input>
				<input
					placeholder='Second Number'
					onChange={e => {
						this.setState({ number2: e.target.value });
					}}
					className='inputLine'
				></input>
				<button
					onClick={() => this.findSum(this.state.number1, this.state.number2)}
					className='confirmationButton'
				>
					Enter
				</button>
				<span className='resultsBox'>The Sum is: {this.state.sum}</span>
			</div>
		);
	}
}
export default Sum;
