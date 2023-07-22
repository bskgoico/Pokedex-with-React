

const SearchBar = () => {
    let search = "";

    const onChange = (evt) => {
        console.log(evt.target.value);
        search = evt.taget.value;
    }

    return (
        <div>
            <div>
                <input placeholder="Buscar Pokemon..." onChange={onChange} />
            </div>
            <div>
                {search}
            </div>
        </div>
    );
}

export default SearchBar;