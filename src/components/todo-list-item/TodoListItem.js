import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./TodoListItem.scss";

const TodoListItem = (props) => {
  const { label, onDeleted, onToggleImportant, onToggleDone, done, important } =
    props;

  let classNames = "todo-list-item";

  if (done) {
    classNames += " done";
  }

  if (important) {
    classNames += " important";
  }

  return (
    <span className={classNames}>
      <span className="todo-list-item-label" onClick={onToggleDone}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={onToggleImportant}
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
};

export default TodoListItem;
