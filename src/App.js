import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.max = 20;
    this.min = 0;
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count < this.max ? this.state.count + 1 : this.max });
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count > this.min ? this.state.count - 1 : this.min });
  }

  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={ this.handlePlusButton }>+1</button>
        <button onClick={ this.handleMinusButton }>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
