import React from 'react';
import './App.css';
import { Counter } from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <Counter count={this.state.count} handleClick={this.handleClick} />
    );
  }
}

export default App;
