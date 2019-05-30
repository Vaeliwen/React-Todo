import React from "react";

import FormComponent from "./components/TodoComponents/TodoForm.js";
import ListComponent from "./components/TodoComponents/TodoList.js";

class App extends React.Component {
  taskArray = [];
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  addItem(array) {
    let task = document.getElementById("task");
    let todo = new Object();

    todo.task = task;
    todo.id = Date.now();
    todo.completed = false;
    array.push(todo);
  }

  makeArray(array) {
    let list = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
      let item = document.createElement("p");

      item.appendChild(document.createTextNode(array[i]));
      list.appendChild(item);

      return list;
    }
  }

  render() {
    return (
      <div>
        <ListComponent />
        <FormComponent
          onSubmit={this.addItem(this.taskArray)}
          onSubmit={this.makeArray(this.taskArray)}
        />
      </div>
    );
  }
}

export default App;
