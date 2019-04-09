import {
  ADD_NEW_TODO,
  CHANGE_INPUT_TEXT,
  DELETE_TODO,
  TOGGLE_TODO
} from "../actions/index.js";
const initState = {
  todos: [],
  inputText: ""
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, { task: action.payload, complete: false }],
        inputText: ""
      };
    case CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.complete === false)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.task === action.payload) {
            return { task: action.payload, complete: !todo.complete };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
export default rootReducer;
