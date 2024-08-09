function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //   function handleSelectSquare(rowIndex, cellIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerarray) => [...innerarray]),
  //       ];
  //       updatedBoard[rowIndex][cellIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, cellIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
