const Pokemon = (props) => {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <div className="pokemon-card">
      <div className="pokemon.img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div>
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div>
          <div>
            {pokemon.types.map((type, idx) => {
              return <div key={idx}>{type.name}</div>;
            })}
          </div>
          <div>❤️</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
