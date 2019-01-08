import React from 'react';
import { connect } from 'react-redux';
import { AddTodo } from '../actions/todoActions';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: '',
      todoDesc: '',
      todoNamePresent: '',
      todoDescPresent: '',
    }
    this.handleChangeFieldtext = this.handleChangeFieldtext.bind(this);
  }
  
  handleChangeFieldtext(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    !_.isEmpty(event.target.value) ? this.setState({ [`${event.target.name}Present`]: 'present' }) : this.setState({ [`${event.target.name}Present`]: '' });
  }

  render() {
    return (
      <div className="col-4">
        <form>
          <h1 className="todoHeading">Check your daily todos</h1>
          <div className="d-flex textField">
            <input
              type="text"
              name="todoName"
              onChange={(event) => this.handleChangeFieldtext(event)}
              data-value={this.state.todoNamePresent}
              className="form-control"
              autoFocus
              />
            <label>Enter todo activity</label>
          </div>
          <div className="d-flex textField">
            <input
              type="text"
              name="todoDesc"
              onChange={(event) => this.handleChangeFieldtext(event)}
              data-value={this.state.todoDescPresent}
              className="form-control"
              />
            <label>Enter todo description</label>
          </div>
          <div className="formBtns">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                this.props.dispatch(AddTodo(this.state));
              }}
              className="btn submitBtn"
              >SUBMIT</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(TodoForm);
