import React, { Component } from 'react';
import './App.css';



class Welcome extends Component {
  render() {




  return(
    <div className = 'mainpage'>
<div className = 'welcomediv'>
    <h1 className = 'titlemain'>Welcome to UroEdCentral!</h1>
    <h2 className = 'titleunder'>The central hub for educational urology resources</h2>




    <h1 className = 'mission' >Our Mission</h1>

    <h3 className = 'mainpar'>Due to the recent COVID-19 outbreak,
    there has been a boom in virtual education
    resources for urology. We designed this website
    with one goal in mind: create an organized central
    hub for all of these amazing resources. The page is
     organized by subspeciality, making it easier for you
     to browse the specific presentations that interest you.</h3>
      <br/>
      <div className = 'linkin'>
      <ul className = 'iconslist'>
      <li className = 'socialicon'><i onClick={()=> window.open("https://www.linkedin.com/in/terrencewoconnor/")} class="fa fa-linkedin-square" style={{color: "blue", fontSize: "50px"}} /></li>
      <li className = 'socialicon'><i onClick={()=> window.open("https://twitter.com/LOConnor_")} class="fa fa-twitter-square" style={{color: "blue", fontSize: "50px"}} /></li>
      </ul>
      <h3 className = 'develop'>Developed by Terrence and Luke O'Connor</h3>
      </div>
      <br/>

    </div>

</div>



  )
}
}

export default Welcome;
