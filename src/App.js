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
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './SideDrawer/Backdrop';
import Houses from './Houses';
import Contact from './Contact';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false

  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });

  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  clickGeneral = () => {
    window.location.assign('/General');
  }

  clickOnco = () => {
    window.location.assign('/Oncology');
  }
  clickInfert = () => {
    window.location.assign('/Infert');
  }
  clickPedi = () => {
    window.location.assign('/Pediatrics');
  }
  clickRecon = () => {
    window.location.assign('/Reconstruction');
  }
  clickFemale = () => {
    window.location.assign('/Female');
  }
  clickEndo = () => {
    window.location.assign('/Endo');
  }
  clickNeuro = () => {
    window.location.assign('/Neuro');
  }
  clickHouses = () => {
    window.location.assign('/Houses');
  }


  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer backdropClick = {this.backdropClickHandler}/>
      backdrop = <Backdrop backdropClick = {this.backdropClickHandler}/>
    }



  return (
    <BrowserRouter>
    <div className="App">

      <header className="App-header">


      <ul className = 'navbar'>
        <li className = 'navspec'><Link to = '/' className = 'links'><img className = 'logotop' src={"/edcentral.png"} /></Link><DrawerToggleButton
        drawerClickHandler = {this.drawerToggleClickHandler}/></li>
        <ul className = 'wrapright'>
        <li className = 'lect'  >
  <div style={{fontSize: 20, fontFamily: "'Oswald', sans-serif"
  }} class="ui simple dropdown item">
    Lectures

    <div class="menu">
      <div class="item"><Link to = '/General' className = 'links2' onClick = {this.clickGeneral}>General</Link></div>
      <div class="item"><Link to = '/Oncology' className = 'links2'onClick = {this.clickOnco}>Urologic Oncology</Link></div>
      <div class="item"><Link to = '/Infert' className = 'links2' onClick = {this.clickInfert}>Infertility/Andrology</Link></div>
      <div class="item"><Link to = '/Pediatrics' className = 'links2' onClick = {this.clickPedi}>Pediatric Urology</Link></div>
      <div class="item"><Link to = '/Reconstruction' className = 'links2' onClick = {this.clickRecon}>Reconstruction/Trauma</Link></div>
      <div class="item"><Link to = '/Female' className = 'links2' onClick = {this.clickFemale}>Female Urology</Link></div>
      <div class="item"><Link to = '/Endo' className = 'links2' onClick = {this.clickEndo}>Endourology/MIS</Link></div>
      <div class="item"><Link to = '/Neuro' className = 'links2' onClick = {this.clickNeuro}>Neurourology</Link></div>
    </div>
  </div>
</li>



<li className = 'lect'  >
<div style={{fontSize: 20, fontFamily: "'Oswald', sans-serif"
}} class="ui simple dropdown item">
Resources

<div  class="menu">

<div class="item"><Link to = '/Houses' className = 'links2'onClick = {this.clickHouses}>Open Houses</Link></div>


</div>
</div>
</li>

<li className = 'lect'  >

<Link to = '/Contact' className = 'links' >Contact</Link>

<div class="menu">


</div>
</li>
        </ul>

        </ul>

      </header>
      {sideDrawer}
      {backdrop}




      <Route path = '/' exact component = {Welcome} />
      <Route path = '/General' component = {General} />
      <Route path = '/Oncology' component = {Oncology} />
      <Route path = '/Infert' component = {Infert} />
      <Route path = '/Pediatrics' component = {Pediatrics} />
      <Route path = '/Reconstruction' component = {Reconstruction} />
      <Route path = '/Female' component = {Female} />
      <Route path = '/Endo' component = {Endo} />
      <Route path = '/Neuro' component = {Neuro} />
      <Route path = '/Houses' component = {Houses} />
      <Route path = '/Contact' component = {Contact} />


    </div>
    </BrowserRouter>
  );
}
}

export default App;
