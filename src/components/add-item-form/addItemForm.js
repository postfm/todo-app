import React from "react";
import "./addItemForm.scss";

class AddItemForm extends React.Component {
  render() {
    return (
      <div className="add-item-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            this.props.onItemAdded("Hello World");
          }}
        >
          Add Item
        </button>
      </div>
    );
  }
}

export default AddItemForm;
