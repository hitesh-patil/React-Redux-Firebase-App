import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { AddTodo } from '../actions/todoActions';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoApp container">
        <div className="row">
          <TodoForm AddTodo={this.props.AddTodo}/>
          <TodoList getListOfTodos={this.props.todoList}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.TodoReducer.todo,
})

const mapDispatchToProps = dispatch => ({
  AddTodo: (todoDetails) => dispatch(AddTodo(todoDetails)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
