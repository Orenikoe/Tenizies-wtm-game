import React from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from "react-confetti"

function App() {
	// State of dice + mapping the array of the state to render dice components
	const [diceNums, setDiceNums] = React.useState(generateDiceObj());
	const [tenzies, setTenzies] = React.useState(false);

	React.useEffect(() => {
const allHeld = diceNums.every(die => die.isHeld);
let index = diceNums[(Math.floor(Math.random() * 9))].value
const sameValue = diceNums.every(die => die.value === index);
if (sameValue && allHeld) {
  console.log(tenzies);
  setTenzies(true);
    console.log('Winner');
   

  }
}, [diceNums, tenzies]);


	const printDice = diceNums.map((num) => (
		<Die
			value={num.value}
			key={num.id}
			isHeld={num.isHeld}
			hold={() => holdDice(num.id)}
		/>
	));

	// Generating a die object
	function generateNewDie() {
		return {
			value: Math.floor(Math.random() * 6) + 1,
			isHeld: false,
			id: nanoid(),
		};
	}

	// Pushing dice objects to an array
	function generateDiceObj() {
		const diceNumArr = [];

		for (let i = 0; i < 10; i++) {
			diceNumArr.push(generateNewDie());
		}

		return diceNumArr;
	}

	// Handler for roll button
	function rollHandler() {
    if (tenzies === true) {
  setDiceNums(generateDiceObj()); 
   setTenzies(false);
    
    }
		setDiceNums((diceNums) =>
			diceNums.map((item) => {
				return item.isHeld === true ? item : generateNewDie();
			})
		);


	}

	// Handler for holding dice functionality
	function holdDice(id) {
		console.log(id);
		setDiceNums((diceNums) =>
			diceNums.map((item) => {
				return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
			})
		);
	}




	return (
		<main>
      {tenzies && <Confetti />}
			<div className="dice-container">{printDice}</div>
			<button className="button" onClick={rollHandler}>
				{tenzies ? 'New Game': 'Roll'}
			</button>
		</main>
	);
}

export default App;
