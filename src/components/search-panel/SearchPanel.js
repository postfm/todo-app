import { useState } from "react";
import "./SeachPanel.scss";

function SearchPanel({ onSearchChange }) {
  const [term, setState] = useState("");

  onSearchChange = (e) => {
    setState(e.target.value);
    onSearchChange(term);
  };
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type here to search"
      onChange={onSearchChange}
    />
  );
}

export default SearchPanel;
