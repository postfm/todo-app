import "./SeachPanel.scss";

function SearchPanel({ onSearchChange }) {
  function getSearchChange(e) {
    onSearchChange(e.target.value);
  }


  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type here to search"
      onChange={getSearchChange}
    />
  );
}

export default SearchPanel;
