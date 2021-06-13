import React from "react";
import "./addItemForm.scss";

class AddItemForm extends React.Component {
  state = {
    label: "",
  };
  onLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form className="add-item-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control "
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        ></input>
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}

export default AddItemForm;
