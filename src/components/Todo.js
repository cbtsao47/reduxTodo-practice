import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";

function Todo(props) {
  const { todos, toggleTodo } = props;
  return (
    <div>
      {todos.map((todo, i) => (
        <p
          key={i}
          onClick={() => toggleTodo(todo.task)}
          style={todo.complete ? { textDecoration: "line-through" } : null}
        >
          {todo.task}
        </p>
      ))}
    </div>
  );
}

export default connect(
  null,
  { toggleTodo }
)(Todo);
