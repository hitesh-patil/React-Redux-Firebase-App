export const AddTodo = ({ todoName, todoDesc }) => ({
  type: 'ADD_TODO',
  todo: {
    todoName,
    todoDesc
  }
});