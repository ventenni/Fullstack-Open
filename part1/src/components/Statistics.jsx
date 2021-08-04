import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, bad, neutral }) => {
	if (good + bad + neutral === 0) {
		return <h4>Feedback not given</h4>;
	}

	return (
		<table>
			<tbody>
				<StatisticLine name={'Good'} value={good} />
				<StatisticLine name={'Neutral'} value={neutral} />
				<StatisticLine name={'Bad'} value={bad} />
				<StatisticLine name={'All'} value={good + bad + neutral} />
				<StatisticLine
					name={'Average'}
					value={(good - bad) / (good + bad + neutral)}
				/>
				<StatisticLine
					name={'Positive'}
					value={(good / (good + bad + neutral)) * 100 + '%'}
				/>
			</tbody>
		</table>
	);
};

export default Statistics;
