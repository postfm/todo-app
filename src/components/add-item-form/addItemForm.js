import { useState } from "react";
import "./addItemForm.scss";

function AddItemForm({ onItemAdded }) {
  const [label, setState] = useState("");
  const onLabelChange = (e) => {
    setState(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onItemAdded(label);
    setState("");
  };
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
