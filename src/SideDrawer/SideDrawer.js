import React from 'react';
import { BrowserRouter, Link, Path } from 'react-router-dom';
import '../App.css';

const SideDrawer = props => (

  <nav className = 'side'>
    <ul>
    <li onClick = {props.backdropClick}><Link to = '/' className = 'sidelink'>Home</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Houses' className = 'sidelink'>Open Houses</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/General' className = 'sidelink' >General</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Oncology' className = 'sidelink'>Urologic Oncology</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Infert' className = 'sidelink'>Infertility/Andrology</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Pediatrics' className = 'sidelink'>Pediatric Urology</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Reconstruction' className = 'sidelink'>Reconstruction/Trauma</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Female' className = 'sidelink'>Female Urology</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Endo' className = 'sidelink'>Endourology/MIS</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Neuro' className = 'sidelink'>Neurourology</Link></li>
    <li onClick = {props.backdropClick}><Link to = '/Contact' className = 'sidelink'>Contact</Link></li>
    </ul>
  </nav>
);

export default SideDrawer;
