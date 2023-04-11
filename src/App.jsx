import Header from "./components/Header";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Hero from "./components/Hero";
import './styles/App.css'

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
    </div>
  );
}

export default App;
