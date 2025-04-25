import { useState } from "react";
import React from "react";
import Element from "./Element";

const Board = () => {
    const initState = Array(9).fill(null);
    const [state, setState] = useState(initState);
    const [isX, setIsX] = useState(true);
    const [status, setStatus] = useState("active");
    const [winner, setWinner] = useState(null)
    const handleClick = (ind) => {
        if(state[ind]|| status!=="active") {
            return;
        }
        const currState = [...state];
        currState[ind] = isX ? "X" : "O";
        setState(currState);
        setIsX(!isX);
        const winner = checkStatus(currState);
        if (winner) {
            setStatus("win");
            setWinner(winner);
        } else if (isGameOver(currState)) {
            setStatus("over");
        }

    };
    const checkStatus = (currState) => {
        const winCond = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let cond of winCond) {
            const [a,b,c] = cond;
            if(currState[a]!=null && currState[a] === currState[b] && currState[a] === currState[c]) {
                return currState[a];
            }
        }
        return false;
    };
    const isGameOver = (currState) => {
        return currState.every(cell => cell !== null);
    };
    const resetHandler = ()  => {
        setStatus("active");
        setWinner("null");
        setState(initState)
        setIsX(true);
    };
    return (
        <div className="tic-tac-toe-app">
            <div className="board-container">
                <div className="b-row">
                    <Element onClick={() => handleClick(0)} value={state[0]}/>
                    <Element onClick={() => handleClick(1)} value={state[1]}/>
                    <Element onClick={() => handleClick(2)} value={state[2]}/>
                </div>
                <div className="b-row">
                    <Element onClick={() => handleClick(3)} value={state[3]}/>
                    <Element onClick={() => handleClick(4)} value={state[4]}/>
                    <Element onClick={() => handleClick(5)} value={state[5]}/>
                </div>
                <div className="b-row">
                    <Element onClick={() => handleClick(6)} value={state[6]}/>
                    <Element onClick={() => handleClick(7)} value={state[7]}/>
                    <Element onClick={() => handleClick(8)} value={state[8]}/>
                </div>
            </div>
            {status === "win" ? <div className="win">{winner} Won<div/></div> : status === "over" ? <div className="over">Game Over</div> : <div className="turn">{isX ? "X" : "O"} Turn</div>} 
            <div className="reset"><button className="resetBtn" onClick={resetHandler}>Start Over</button></div>
        </div>
        
    );
}

export default Board;