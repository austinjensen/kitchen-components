import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Kitchen from './Kitchen'

class App extends Component {
  constructor() {
    super()
    console.log('app.constructor()')
    
  }
  componentWillMount() {
    console.log('app.componentWillMount()')
  }
  
  componentDidMount() {
    console.log('app.componentDidMount()')
  }
  render() {
    console.log('app.render()')
    return (
      <div className="App">
        <Kitchen />
      </div>
    );
  }

}
export default App;
