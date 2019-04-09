import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import { connect } from "react-redux";
import { submit, change, deleteTodo, toggleTodo } from "./actions/index";

const App = props => {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Todo todos={props.todos} />
      <input
        name="inputText"
        onChange={e => props.change(e.target.value)}
        value={props.inputText}
      />
      <button onClick={e => props.submit(props.inputText)}>Submit</button>
      <button onClick={props.deleteTodo}>Delete</button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
  inputText: state.inputText
});

export default connect(
  mapStateToProps,
  { change, submit, deleteTodo, toggleTodo }
)(App);
