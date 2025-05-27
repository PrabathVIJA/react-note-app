import { MdSearch } from "react-icons/md";
function Search({ searchHandler }) {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search"
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
}

export default Search;
