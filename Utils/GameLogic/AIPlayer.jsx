// AI Logic
export const AIPlayer = (squares) => {
   const availableSquares = squares.map((square, index) => square === null ? index : null).filter(val => val !== null);
   if (availableSquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSquares.length);
      squares[availableSquares[randomIndex]] = "O"; // AI plays as "O"
   }
   return squares;
};
