import { useIntl } from "react-intl";
import "./Searcher.scss";

function Search(props) {
  const handleCharacter = (e) => {
    props.props.setSearch(e.target.value.toLowerCase());
  };
  const intl = useIntl();
  return (
    <div className="searcher">
      <img className="searcher-img" src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644003936/Game%20of%20thrones/lupa_islg9b.svg" alt="Lupa icono"/>
      <input className="searcher-input" type="text" placeholder={intl.formatMessage({ id: "app.placeholder" })} onChange={handleCharacter}></input>
    </div>
  );
}

export default Search;
