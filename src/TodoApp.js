import React, { useState } from "react";
import "./App.css";
import "./TodoMobile.css";
function TodoApp() {
  let [todolist, setTodoList] = useState([]);
  let [slist, setSlist] = useState("");

  function checkSubmit(e) {
    e.preventDefault();
    setTodoList([...todolist, slist]);
    setSlist("");
  }
  function checkremove(ele) {
    var newarr = todolist.filter((item, i) => todolist.indexOf(item) !== ele);
    setTodoList(newarr);
  }
  return (
    <section>
      <div className="section-todoapp">
        <form onSubmit={checkSubmit}>
          <div className="todoapp-content1">
            <input
              type="text"
              name="todo"
              className="todo-input"
              placeholder="Add some todo  here..."
              value={slist}
              onChange={(e) => setSlist(e.target.value)}
            />
            <button className="todo-btn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="todolist-item">
        {todolist.map((item, i) => {
          return (
            <ul>
              <li>
                <span className="data">{item}</span>
                <span onClick={() => checkremove(i)} className="cross-btn">
                  &times;
                </span>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default TodoApp;
