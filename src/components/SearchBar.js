import { useState } from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
    
    const [search, setSearch] = useState('');

    const onChange = (evt) => {
        console.log(evt.target.value);
        setSearch(evt.taget.value);
    }

    const onClick = async (evt) => {
        const data = await searchPokemon(search);
        console.log(data);
    }

    return (
        <div>
            <div>
                <input placeholder="Buscar Pokemon..." onChange={onChange} />
            </div>
            <div>
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    );
}

export default SearchBar;