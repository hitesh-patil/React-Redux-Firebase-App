import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';
import TodoContainer from './todoContainer';

const store = createStore(rootReducer, applyMiddleware(logger));

class RootApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    );
  }
}

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);

export default RootApp;
