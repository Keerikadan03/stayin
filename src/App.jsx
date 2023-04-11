import Header from "./components/Header";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Hero from "./components/Hero";
import './styles/App.css'
import Value from "./components/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  );
}

export default App;
