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
<<<<<<< HEAD

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type here to search"
      onChange={getSearchChange}
    />
  );
=======
>>>>>>> parent of bf2a108 (made functional components)
}

export default SearchPanel;
