import TodoListItem from "../todo-list-item";
import _ from "lodash";
import "./TodoList.scss";

const TodoList = ({ todos, onDeleted }) => {
  const list = _.map(todos, (item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{list}</ul>;
};

export default TodoList;
