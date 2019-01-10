const initialState = {
  todo: [],
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [...state.todo, action.todo],
      }
    default:
      return state;
  }
}

export default TodoReducer;
