import "./style/App.css";
import Card from "./components/cards";
import ScoreBoard from "./components/scoreboard";

const App = () => {
  const countScore = () => {};

  return (
    <div className="App">
      <h1>Runescape Memory Card Game</h1>
      <ScoreBoard />
      <div className="cards">
        <Card countScore={countScore} />
      </div>
    </div>
  );
};

export default App;
