import React from "react"
import Numbers from "./components/Numbers/Numbers"
import Score from "D:/dice-game/src/components/Score.jsx"
import "D:/dice-game/src/App.css"
import Dice from "./components/Dice/Dice"

const App = () => {
  const [selectedNumber, setSelectedNumber] = React.useState(null);
  const [randomNumber, setRandomNumber] = React.useState(0);
  const [animation, setAnimation] = React.useState(false)
  const [numberSelected, setNumberSelected] = React.useState(false);
  const [diceRolls, setDiceRolls] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [winner, setWinner] = React.useState(false);

  return (
    <div>
      <header className="nav">
        <Score selectedNumber={selectedNumber} randomNumber={randomNumber} animation={animation} diceRolls={diceRolls} score={score} setScore={setScore} winner={winner} setWinner={setWinner} />
        <Numbers selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} numberSelected={numberSelected} setNumberSelected={setNumberSelected} />
      </header>
      <Dice winner={winner} randomNumber={randomNumber} setRandomNumber={setRandomNumber} animation={animation} setAnimation={setAnimation} numberSelected={numberSelected} setNumberSelected={setNumberSelected} diceRolls={diceRolls} setDiceRolls={setDiceRolls} setScore={setScore} setSelectedNumber={setSelectedNumber} />
    </div>
  )
}

export default App
