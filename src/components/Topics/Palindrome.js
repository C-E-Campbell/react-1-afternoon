import React from "react";

class Palindrome extends React.Component {
	constructor() {
		super();
		this.checkPalindrome = this.checkPalindrome.bind(this);
		this.inputChange = this.inputChange.bind(this);
		this.state = {
			userInput: "",
			palindrome: ""
		};
	}

	inputChange(input) {
		this.setState({ userInput: input });
	}

	checkPalindrome(input) {
		let newArray = input.split("");
		let isPalindrome = null;
		for (let i = 0; i < newArray.length - 1; i++) {
			for (let j = newArray.length - 1; j > 0; j--) {
				if (newArray[i] === newArray[j]) {
					isPalindrome = true;
				} else {
					isPalindrome = false;
				}
			}
		}

		this.setState({ palindrome: isPalindrome });
	}

	render() {
		return (
			<div className='puzzleBox filterStringPB'>
				<h4>Palindrome</h4>
				<input
					value={this.state.userInput}
					onChange={e => this.inputChange(e.target.value)}
					className='inputLine'
				></input>
				<button
					onClick={() => this.checkPalindrome(this.state.userInput)}
					className='confirmationButton'
				>
					Enter
				</button>
				<span className='resultsBox'>
					Palindrome: {this.state.palindrome.toString()}
				</span>
			</div>
		);
	}
}

export default Palindrome;
