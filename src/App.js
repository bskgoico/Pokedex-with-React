import "./styles.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <SearchBar />
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
