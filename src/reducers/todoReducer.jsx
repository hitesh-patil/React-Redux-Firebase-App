const initialState = {
  todo: [],
}

const TodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_TODO":
    return [
      ...state,
      action.todo
    ]
    default:
    return state;
  }
}

export default TodoReducer;