import React, { useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import Statistics from './components/Statistics';
import Button from './components/Button';

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
	];

	const [selected, setSelected] = useState(
		Math.floor(Math.random() * anecdotes.length)
	);
	const [votes, setVotes] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
	});

	return (
		<div>
			<h1>Part 1</h1>
			<hr />

			<div>
				<h2>Exercises 1.1 - 1.5</h2>

				<Header course={course.name} />

				<Content items={course.parts} />

				<Total num={course.parts} />
			</div>

			<hr />

			<div>
				<h2>Exercises 1.6-1.11</h2>

				<div>
					<h3>Give Feedback</h3>

					<div>
						<Button text={'Good'} func={() => setGood(good + 1)} />
						<Button
							text={'Neutral'}
							func={() => setNeutral(neutral + 1)}
						/>
						<Button text={'Bad'} func={() => setBad(bad + 1)} />
					</div>
				</div>

				<div>
					<h3>Statistics</h3>

					<div>
						<Statistics good={good} bad={bad} neutral={neutral} />
					</div>
				</div>
			</div>

			<div>
				<h2>Exercise 1.12*</h2>

				<div>
					<h3>Anecdote of the Day</h3>
					<div>
						<button
							onClick={() =>
								setSelected(
									Math.floor(Math.random() * anecdotes.length)
								)
							}
						>
							Next
						</button>

						<button
							onClick={() =>
								setVotes({
									...votes,
									[selected]: votes[selected] + 1,
								})
							}
						>
							Vote
						</button>
					</div>
					{anecdotes[selected]}
				</div>

				<div>
					<h3>Anecdote with the most votes</h3>

					<div>
						{
							anecdotes[
								Object.keys(votes).reduce((a, b) =>
									votes[a] > votes[b] ? a : b
								)
							]
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
