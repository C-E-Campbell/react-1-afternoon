import React from "react";
import EvenOrOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";
import FilterString from "../Topics/FilterString";
import Palindrome from "../Topics/Palindrome";
import Sum from "../Topics/Sum";
const TopicBrowser = () => {
	return (
		<div>
			<EvenOrOdd />
			<FilterObject />
			<FilterString />
			<Palindrome />
			<Sum />
		</div>
	);
};

export default TopicBrowser;
