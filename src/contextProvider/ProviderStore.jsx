import React from 'react';

const ContextStore = React.createContext();

class ProviderStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "Hitesh",
      Age: 23,
      Loc: "Pune"
    }
  }

  render() {
    return (
      <div>
        <ContextStore.Provider value={{
          state: this.state,
          updateAge: () => {
            this.setState({
              Age: this.state.Age + 1
            })
          }
        }}>
          {this.props.children}
        </ContextStore.Provider>
      </div>
    );
  }
}

export { ProviderStore, ContextStore };
