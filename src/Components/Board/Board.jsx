/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { checkWinner } from '../../../Utils/GameLogic/CheckWinner';
import { AIPlayer } from '../../../Utils/GameLogic/AIPlayer';
import './Board.css';
import Square from '../Square/Square';

const Board = ({ isAI }) => {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [xIsNext, setXIsNext] = useState(true); // Track whose turn it is
   const [winner, setWinner] = useState(null);

   useEffect(() => {
      const winner = checkWinner(squares);
      if (winner) setWinner(winner);

      if (isAI && !xIsNext && !winner) {
         const newSquares = AIPlayer(squares);
         setSquares(newSquares);
         setXIsNext(true);
      }
   }, [squares, xIsNext, isAI]);

   const handleClick = (index) => {
      if (squares[index] || winner) return; // Prevent clicking on already filled or winning squares
      const newSquares = squares.slice(); // Create a copy of squares
      newSquares[index] = xIsNext ? "X" : "O";
      setSquares(newSquares);
      setXIsNext(!xIsNext);
   };

   const resetGame = () => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
      setWinner(null);
   };

   return (
      <div className="board-container">
         <div className="board">
            { squares.map((square, index) => (
               <Square key={ index } value={ square } onClick={ () => handleClick(index) } />
            )) }
         </div>
         { winner && <p className="winner">Winner: { winner }</p> }
         <button className="reset-button" onClick={ resetGame }>Restart Game</button>
      </div>
   );
};

export default Board;
