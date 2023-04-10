import Header from "./components/Header";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";

function App() {
  return (
    <div>
      <div className="App">
        <Header />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
