import React, { Component } from 'react';
import './App.css';



class Welcome extends Component {
  render() {




  return(
    <div className = 'mainpage'>
<div className = 'welcomediv'>
    <h1 className = 'titlemain'>Welcome to UroEdCentral!</h1>
    <h2 className = 'titleunder'>The central hub for educational urology resources</h2>

    <h3 className = 'mainpar'>Due to the recent COVID-19 outbreak,
    there has been a boom in virtual education
    resources for urology. We designed this website
    with one goal in mind: create an organized central
    hub for all of these amazing resources. The page is
     organized by subspeciality, making it easier for you
     to browse the specific presentations that interest you.</h3>
     <h3 className = 'mainpar'>In addition, we encourage you to submit educational material
     directly to UroEdCentral as it becomes available! Just input the
     necessary information at the top of each page with the corresponding
     link to the video/presentation.</h3>
     <h3 className = 'mainpar'>This page is very much a work in progress, so we are interested
     in hearing your feedback! Please submit any questions, comments,
     concerns, etc. to uroedcentral@gmail.com. We greatly
     appreciate your interest in our website and hope that you find
     this helpful during this difficult time.</h3>
     <h4 className = 'mainpar'>*Due to the short period of time we had to develop the
     site, submissions may only be available on Google Chrome, Firefox,
      and Microsoft Edge. We appreciate your patience while we work out these
      kinks!*</h4>
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
