import React from 'react';
import { BrowserRouter, Link, Path } from 'react-router-dom';
import '../App.css';

const SideDrawer = props => (

  <nav className = 'side'>
    <ul>
    <li><Link to = '/' className = 'sidelink'>Home</Link></li>
    <li><Link to = '/' className = 'sidelink'>Home</Link></li>
    </ul>
  </nav>
);

export default SideDrawer;
