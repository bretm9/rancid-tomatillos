import React from 'react';
import Header from './Header'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      movies: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
