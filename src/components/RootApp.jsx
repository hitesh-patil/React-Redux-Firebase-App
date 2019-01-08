import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

class RootApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todoApp container">
          <div className="row">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);

export default RootApp;
