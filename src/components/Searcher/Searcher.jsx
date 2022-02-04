function Search(props) {
  const handleCharacter = (e) => {
    props.props.setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="busca por nombre"
        onChange={handleCharacter}
      ></input>
    </div>
  );
}

export default Search;