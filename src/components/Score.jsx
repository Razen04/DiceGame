import React from "react"
import "D:/dice-game/src/components/Score.css"

const Score = ({ selectedNumber, randomNumber, diceRolls, score, setScore, winner, setWinner }) => {

  

    React.useEffect(() => {
      if (selectedNumber === randomNumber) {
        setScore(prevScore => prevScore + selectedNumber)
      } else {
        setScore(prevScore => prevScore - randomNumber)
      }

      if(score >= 9) {
        setWinner(true)
      }

    }, [randomNumber])


  return (
    <div>
      <div className='user-score'>
        <div className="scores">
          <h1>{score}</h1>
          <h2>Total Score</h2>
        </div>
        <div className="total-rolls">
          <h1>{diceRolls}</h1>
          <h2>Total Dice Rolls</h2>
        </div>
      </div>
      <div className={winner ? 'show' : 'hidden'}>
        <h1>🎉 Congratulations! You won the game. It took you {diceRolls} rolls to finish the game. 🎉</h1>
      </div>
    </div>
    
  )
}

export default Score
