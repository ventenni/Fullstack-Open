import React from 'react';
import Part from './Part';

const Content = (props) => {
	const items = props.items;

	return (
		<div>
			{items.map((item, i) => {
				return (
					<Part key={i} name={item.name} exercises={item.exercises} />
				);
			})}
		</div>
	);
};

export default Content;
