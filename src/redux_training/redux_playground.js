const Redux = require('redux');

const { createStore } = Redux;

const initState = {
  todos: [],
  posts: [],
}


function todoReducer(state = initState, action) {
  if (action.type == "ADD_TODO") {
    debugger
    return {
      todos: [...state.todos, action.todo]
    }
    debugger
  }
  if (action.type == "DELETE_TODO") {
    const filterTodo = state.todos.filter( item => item !== action.todo)

    return {
      ...state,
      todos: filterTodo
    }
  }
}

const store = createStore(todoReducer);

store.subscribe(() => {
  console.log(`Redux Store: `, store.getState())
})

const todoAction = { type: 'ADD_TODO', todo: 'add me' }

const deleteAction = { type: 'DELETE_TODO', todo: 'buy milk'}

store.dispatch({ type: 'ADD_TODO', todo: 'buy milk' })
store.dispatch({ type: 'ADD_TODO', todo: 'drink milk' })
store.dispatch({ type: 'ADD_TODO', todo: 'shopping' })
store.dispatch({ type: 'ADD_TODO', todo: 'reading' })
store.dispatch({ type: 'DELETE_TODO', todo: 'buy milk' })

// store.dispatch(deleteAction)