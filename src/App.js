import "./style/App.css";
import Card from "./components/cards";

const App = () => {
  const countScore = () => {};

  return (
    <div className="App">
      <div className="cards">
        <Card countScore={countScore} />
      </div>
    </div>
  );
};

export default App;
