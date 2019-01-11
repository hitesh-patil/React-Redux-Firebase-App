import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderListOfTodos() {
    if (this.props.getListOfTodos) {
      return this.props.getListOfTodos.map((todoItem, index) => {
        return (<li key={index} className="listItem">
          <p className="m-0">
            <span>Todo Name:</span>
            <span>{todoItem.todoName}</span>
          </p>
          <p className="m-0">
            <span>Todo Description:</span>
            <span>{todoItem.todoDesc}</span>
          </p>
        </li>)
      });
    }
    return null;
  }

  render() {
    return (
      <div className="col">
        <ul className="list-unstyled todoList">
          {this.renderListOfTodos()}
        </ul>
      </div>
    )
  }
}

export default TodoList;
