import React from "react";
import "./SeachPanel.scss";

class SearchPanel extends React.Component {
  state = { term: "" };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type here to search"
        onChange={this.onSearchChange}
      />
    );
  }
}

export default SearchPanel;
