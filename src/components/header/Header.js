import "./Header.scss";

function Header({ toDo, done = 0 }) {
  return (
    <div className="header d-flex">
      <h1 className="header">Todo List</h1>
      <h2>{`${toDo} more to do, ${done} done`}</h2>
    </div>
  );
}

export default Header;
