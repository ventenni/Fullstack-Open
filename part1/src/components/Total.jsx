import React from 'react';

const Total = (props) => {
	let num = 0;
	props.num.forEach((item) => {
		num += item.exercises;
	});
	return <p>Number of exercises {num}</p>;
};

export default Total;
