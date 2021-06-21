import { useState } from "react";
import "./addItemForm.scss";

function AddItemForm({ onItemAdded }) {
  const [label, setLabel] = useState("");
  function onLabelChange(e) {
    setLabel(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    onItemAdded(label);
    setLabel("");
  }
  return (
    <form className="add-item-form d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control "
        onChange={onLabelChange}
        placeholder="What needs to be done"
        value={label}
      ></input>
      <button className="btn btn-outline-secondary">Add Item</button>
    </form>
  );
}

export default AddItemForm;
