function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

export default GameOver;
