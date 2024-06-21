import css from "./SearchBox.module.css";
const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search contacts"
      className={css.input}
    />
  );
};

export default SearchBox;
