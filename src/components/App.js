import "./App.scss";
import Header from "./header";
import SearchPanel from "./search-panel";
import TodoList from "./todo-list";
import ItemStatusFilter from "./item-status-filter";
import { useState } from "react";
import AddItemForm from "./add-item-form";

function App() {
  let maxId = 100;

  const [todoData, setTodoData] = useState([
    createTodoItem("Drink Coffee"),
    createTodoItem("Build Awesome Application"),
    createTodoItem("Learn React"),
    createTodoItem("Drink Tea"),
  ]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const deleteItem = (id) => {
    setTodoData((todoData) => {

      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return newArray;
    });
  }

  function createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: maxId++,
    };
  }


  const addItem = (text) => {
    const newItem = createTodoItem(text);
    setTodoData(() => {
      const newArray = [...todoData, newItem];
      console.log(newArray);

      return newArray;
    });
  }

  function toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }


  const onToggleImportant = (id) => {

    setTodoData((todoData) => {
      return toggleProperty(todoData, id, "important");
    });
  }


  const onToggleDone = (id) => {

    setTodoData((todoData) => {
      return toggleProperty(todoData, id, "done");
    });
  }


  const search = (items, term) => {

    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }


  const onSearchChange = (term) => {
    setTerm(term);
  };


  function getFilter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const visibleItems = getFilter(search(todoData, term), filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;
  return (
    <div className="app">
      <Header toDo={todoCount} done={doneCount} />
      <div className="top-panel d-flex">
        <SearchPanel onSearchChange={onSearchChange} />
        <ItemStatusFilter filter={filter} onFilterChange={onFilterChange} />
      </div>
      <TodoList
        todos={visibleItems}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone}
      />
      <AddItemForm onItemAdded={addItem} />
    </div>
  );
}

export default App;
