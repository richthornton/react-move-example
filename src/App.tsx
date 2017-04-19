import * as React from 'react';
import AnimatedComponent from './AnimatedComponent';
import TransitionedComponent from './TransitionedComponent';
import './App.css';

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="App">
        <AnimatedComponent />
        <TransitionedComponent />
      </div>
    );
  }
}

export default App;
