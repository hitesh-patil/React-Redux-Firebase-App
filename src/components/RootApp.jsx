import React from 'react';
import ReactDOM from 'react-dom';

class RootApp extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Root App</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <RootApp />,
  document.getElementById('root')
);

export default RootApp;
