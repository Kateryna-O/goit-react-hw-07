import css from "./SearchBox.module.css";
const SearchBox = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleChange}
      placeholder="Search contacts"
      className={css.input}
    />
  );
};

export default SearchBox;
