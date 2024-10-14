import { useState } from 'react';
import Board from './Components/Board/Board';
import { FaMoon, FaSun } from 'react-icons/fa';
import './App.css';

function App () {
   const [darkMode, setDarkMode] = useState(false);
   const [isAI, setIsAI] = useState(false);

   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
   };

   const toggleAI = () => {
      setIsAI(!isAI);
   };

   return (
      <div className={ `app ${darkMode ? 'dark' : 'light'}` }>
         <header>
            <h1>Tic-Tac-Toe</h1>
            <div className="controls">
               {/* Dark/Light Toggle*/ }
               <button onClick={ toggleDarkMode } className='dark-mode'>{ darkMode ? <FaSun /> : <FaMoon /> }</button>
               {/* AI Toggle */ }
               <button onClick={ toggleAI } className='toggle-ai'>{ isAI ? "Play vs Human" : "Play vs AI" }</button>
            </div>
         </header>
         <Board isAI={ isAI } />
      </div>
   );
}

export default App;
