import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Welcome from './Welcome';
import General from './General';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {





  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <ul className = 'navbar'>
        <li className = 'navspec'><Link to = '/General' className = 'links'>General</Link></li>
        <li className = 'navspec'><Link className = 'links'>Oncology</Link></li>
        <li className = 'navspec'><Link className = 'links'>Infertility /Andrology</Link></li>
        <li className = 'navspec'><Link className = 'links'>Pediatrics</Link></li>
        <li className = 'navspec'><Link className = 'links'>Reconstruction /Trauma</Link></li>
        <li className = 'navspec'><Link className = 'links'>Female Urology</Link></li>
        <li className = 'navspec'><Link className = 'links'>Endourology /MIS</Link></li>
        <li className = 'navspec'><Link className = 'links'>Neurourology</Link></li>
        </ul>
      </header>
      <Route path = '/' exact component = {Welcome} />
      <Route path = '/General' component = {General} />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
