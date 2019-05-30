import React from "react";

const FormComponent = () => {
  return (
    <div class="toDoForm">
      <form>
        <input id="task" placeholder="What needs doing?" />
        <button type="submit">Add Todo</button>
        <button type="clear">Clear Completed</button>
      </form>
    </div>
  );
};

export default FormComponent;
