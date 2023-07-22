import "./styles.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";
import { useState, useEffect } from "react";
import { getPokemons } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    } catch(err) {

    };
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="App">
        <SearchBar />
        <Pokedex pokemons={pokemons}/>
      </div>
    </div>
  );
}

export default App;
