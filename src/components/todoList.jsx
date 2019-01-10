import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderListOfTodos() {
    if (this.props.getListOfTodos) {
      return this.props.getListOfTodos.map((todoItem) => {
        return (<li>
          <p>
            <span>Todo Name:</span>
            <span>{todoItem.todoName}</span>
          </p>
          <p>
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
        <ul className="list-unstyled">
          {this.renderListOfTodos()}
        </ul>
      </div>
    )
  }
}

export default TodoList;
