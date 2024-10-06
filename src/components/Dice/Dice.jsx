
import React from "react";
import "D:/dice-game/src/components/Dice/Dice.css"

const Dice = ({ randomNumber, setRandomNumber, animation, setAnimation, numberSelected, setNumberSelected, setDiceRolls, setScore, setSelectedNumber, winner }) => {

    const [showRules, setShowRules] = React.useState(false)

    const random = () => {
        if (winner) return;
        if (!numberSelected) return;
        if (animation) return;

        setAnimation(true)
        setDiceRolls(prevRolls => prevRolls + 1);
        setTimeout(() => {
            const generatedNumber = Math.floor(Math.random() * 6 + 1);
            if (generatedNumber != 0) {
                setRandomNumber(generatedNumber);
            } else {
                random();
            }
            setAnimation(false);
        }, 3000);
    }

    const reset = () => {
        setSelectedNumber(null);
        setNumberSelected(false)
        setScore(0);
        setDiceRolls(0);
    }

    const rules = () => {
        console.log("clicked")
        setShowRules(prev => !prev);
    }

    return (
        <div>
            <div className='dice-roll'>
                <div className="number-area" onClick={random}>
                    <span className={animation ? `num n1` : `n1`} data-attr="123456">{randomNumber}</span>
                </div>
                <h2>Click on Dice to roll</h2>
                <div className='imp-btn'>
                    <button onClick={reset} className="normal">Reset Score</button>
                    <button onClick={rules} className={showRules ? `inverted` : `normal`}>Show Rules</button>
                </div>
            </div>
            <div className={showRules ? `rules-info` : `hidden`}>
                <h1>How to play this dice game?</h1>
                <ol>
                    <li>Select any number.</li>
                    <li>Click on dice image.</li>
                    <li>After clicking on dice if the selected number is equal to dice number you will get same point as dice.</li>
                    <li>If your guess was wrong then the number on the dice will be deducted from your points.</li>
                    <li>If you reach a total score of 10, the game is finished. So let's see how many rolls it is required for you to win.</li>
                </ol>
            </div>
        </div>
    )
}

export default Dice
