import React from 'react';
import { ContextStore } from '../contextProvider/ProviderStore';


class Children extends React.Component {

  render() {
    return (
      <div>
        <p>Hey there in children:</p>
        <ContextStore.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Context value {context.state.Name}</p>
              <p>Age: {context.state.Age}</p>
              <button onClick={context.updateAge}>click</button>
            </React.Fragment>
          )}
        </ContextStore.Consumer>
      </div>
    )
  }
}

export default Children;
