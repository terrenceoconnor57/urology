import React, { Component } from 'react';
import './App.css';



class Welcome extends Component {
  render() {




  return(
<div className = 'welcomediv'>
    <h1>Welcome to UroEdCentral!</h1>
    <h3>Due to the recent COVID-19 outbreak,
    there has been a boom in virtual education
    resources for urology. We designed this website
    with one goal in mind: create an organized central
    hub for all of these amazing resources. The page is
     organized by subspeciality, making it easier for you
     to browse the specific presentations that interest you.</h3>
     <h3>In addition, we encourage you to submit educational material
     directly to UroEdCentral as it becomes available! Just input the
     necessary information at the top of each page with the corresponding
     link to the video/presentation.</h3>
     <h3>This page is very much a work in progress, so we are interested
     in hearing your feedback! Please submit any questions, comments,
     concerns, ect. to the email address listed below. We greatly
     appreciate your interest in our website and hope that you find
     this helpful during this difficult time.</h3>

    </div>



  )
}
}

export default Welcome;
