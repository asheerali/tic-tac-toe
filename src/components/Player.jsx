import { useState } from "react";

function Player({ initialName, playerSymbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
    if (isEditing) {
      onChangeName(playerSymbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name"> {playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        className="player-name"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {playerSymbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
