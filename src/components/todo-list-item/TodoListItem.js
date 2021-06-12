import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./TodoListItem.scss";
import React from "react";

class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  onLabelClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { label, onDeleted } = this.props;

    const { done, important } = this.state;
    let classNames = "todo-list-item";

    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-end"
          onClick={this.onMarkImportant}
        >
          <FontAwesomeIcon icon={faExclamation} />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-end"
          onClick={onDeleted}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </span>
    );
  }
}

// const TodoListItem = ({ label, important = false }) => {
//   const style = { color: important ? "tomato" : "black" };

//   return (
//     <span className="todo-list-item">
//       <span className="todo-list-item-label" style={style}>
//         {label}
//       </span>

//       <button
//         type="button"
//         className="btn btn-outline-success btn-sm float-end"
//       >
//         <FontAwesomeIcon icon={faExclamation} />
//       </button>

//       <button type="button" className="btn btn-outline-danger btn-sm float-end">
//         <FontAwesomeIcon icon={faTrashAlt} />
//       </button>
//     </span>
//   );
// };

export default TodoListItem;
