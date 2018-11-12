import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu'
import Landing from './Components/Landing/Landing'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact';
import TimeLine from './Components/TimeLine/TimeLine'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopMenu />
        </header>
          <Landing />
          <Projects />
          <TimeLine />
          <Contact />
      </div>
    );
  }
}

export default App;
