import "./styles.css";
import { useState } from "react";

const Square = ({ takeTurn, id }) => {
  const mark = ["O", "X", "+"];
  // id is the square's number
  // filled tells you if square has been filled
  // tik tells you symbol in square (same as player)
  // call takeTurn to tell Parent the square is  filled
  const [filled, setFilled] = useState(true);
  const [tik, setTik] = useState(2);

  return (
    <button
      id={`square-button-${id}`}
      onClick={(e) => {
        setTik(takeTurn(id));
        setFilled(true);
      }}
    >
      <h1>{mark[tik]}</h1>
    </button>
  );
};

const App7 = () => {
  //useState only fires the first time this component is rendered!
  const [player, setPlayer] = useState(0);
  const [mounted, setMounted] = useState(true);

  let status = `Player ${player}`;
  const toggle = () => setMounted(!mounted);

  function takeTurn(id) {
    setPlayer((player + 1) % 2);
    return player;
  }

  function renderSquare(i) {
    return <Square takeTurn={takeTurn} id={i}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div className="grid-row">
        {mounted && renderSquare(0)}
        {mounted && renderSquare(1)}
        {mounted && renderSquare(2)}
      </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide row </button>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

export default App7;
