import "./App.scss";
import Header from "./header";
import SearchPanel from "./search-panel";
import TodoList from "./todo-list";
import ItemStatusFilter from "./item-status-filter";
import React from "react";
import AddItemForm from "./add-item-form";

class App extends React.Component {
  state = {
    todoData: [
      { label: "Drink Coffe", important: false, id: 1 },
      { label: "Build Awesome Application", important: true, id: 2 },
      { label: "Learn React", important: false, id: 3 },
      { label: "Drink Tea", important: false, id: 4 },
    ],
  };

  maxId = 100;

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [
        ...todoData.splice(0, idx),
        ...todoData.splice(idx + 1),
      ];
      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <AddItemForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

export default App;
