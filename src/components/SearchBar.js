import { useState } from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (evt) => {
    setSearch(evt.target.value);
  };

  const onClick = async (evt) => {
    const data = await searchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default SearchBar;
