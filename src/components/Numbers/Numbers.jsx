import React from "react";
import "D:/dice-game/src/components/Numbers/Numbers.css"


const Numbers = ({ selectedNumber, setSelectedNumber, numberSelected, setNumberSelected }) => {
    
    const numbers = [1,2,3,4,5,6];

    const numberButtonHandler = (number) => {
        setSelectedNumber(number);
        setNumberSelected(true);
    }

    return (
        <div className="select-numbers">
            {!numberSelected ? <h1 className="warning">Please select a number first.</h1> : null}
            <div className="numbers">
                {numbers.map((number) => {
                    return (
                        <button key={number} onClick={() => numberButtonHandler(number)} className={selectedNumber === number ? 'dark-number' : ''}>{number}</button>
                    )  
                })}
            </div>
            {selectedNumber ? <h1>You selected {selectedNumber}. Good Luck!</h1> : null}
        </div>
    )
}

export default Numbers
