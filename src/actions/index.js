export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = action => {
  return {
    type: TOGGLE_TODO,
    payload: action
  };
};
export const deleteTodo = action => {
  return {
    type: DELETE_TODO,
    payload: action
  };
};
export const submit = action => {
  return {
    type: ADD_NEW_TODO,
    payload: action
  };
};
export const change = action => {
  return {
    type: CHANGE_INPUT_TEXT,
    payload: action
  };
};
