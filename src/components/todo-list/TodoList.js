import TodoListItem from "../todo-list-item";
import _ from "lodash";
import "./TodoList.scss";

function TodoList({ todos, onDeleted, onToggleImportant, onToggleDone }) {
  const list = _.map(todos, (item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{list}</ul>;
}

export default TodoList;
