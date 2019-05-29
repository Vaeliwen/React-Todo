import React from "react";

import FormComponent from "./components/TodoComponents/TodoForm.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "this",
      id: "Time Stamp",
      completed: "false"
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <FormComponent />
      </div>
    );
  }
}

export default App;
