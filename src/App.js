import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Welcome from './Welcome';
import General from './General';
import Oncology from './Oncology';
import Infert from './Infert';
import Pediatrics from './Pediatrics';
import Reconstruction from './Reconstruction';
import Female from './Female';
import Endo from './Endo';
import Neuro from './Neuro';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {





  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <ul className = 'navbar'>
        <li className = 'navspec'><Link to = '/' className = 'links'>Home</Link></li>
        <li className = 'navspec'><Link to = '/General' className = 'links'>General</Link></li>
        <li className = 'navspec'><Link to = '/Oncology' className = 'links'>Urologic Oncology</Link></li>
        <li className = 'navspec'><Link to = '/Infert' className = 'links'>Infertility /Andrology</Link></li>
        <li className = 'navspec'><Link to = '/Pediatrics' className = 'links'>Pediatric Urology</Link></li>
        <li className = 'navspec'><Link to = '/Reconstruction' className = 'links'>Reconstruction /Trauma</Link></li>
        <li className = 'navspec'><Link to = '/Female' className = 'links'>Female Urology</Link></li>
        <li className = 'navspec'><Link to = '/Endo' className = 'links'>Endourology /MIS</Link></li>
        <li className = 'navspec'><Link to = '/Neuro' className = 'links'>Neurourology</Link></li>
        </ul>
      </header>
      <Route path = '/' exact component = {Welcome} />
      <Route path = '/General' component = {General} />
      <Route path = '/Oncology' component = {Oncology} />
      <Route path = '/Infert' component = {Infert} />
      <Route path = '/Pediatrics' component = {Pediatrics} />
      <Route path = '/Reconstruction' component = {Reconstruction} />
      <Route path = '/Female' component = {Female} />
      <Route path = '/Endo' component = {Endo} />
      <Route path = '/Neuro' component = {Neuro} />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>ajslhdfkjhasdfkjs</p>
      <br/>
      <p>ajslhdfkjhasdfkjs</p>
      <br/>
      <br/>
      <br/>
      <p>ajslhdfkjhasdfkjs</p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
