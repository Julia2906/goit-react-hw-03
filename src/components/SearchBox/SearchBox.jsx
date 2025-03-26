import css from './SearchBox.module.css';

const SearchBox = ({ searchQuery, onSearch }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
