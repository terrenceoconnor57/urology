import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';



function initAnalyze(){
ReactGA.initialize("UA-168664374-1")
ReactGA.pageview("/Contact")
}


class Contact extends Component {
    render(){

      initAnalyze()



      return (
        <div>
        <div className = 'contactdiv'>

        <h1 className = 'contactheader'>Let us know what you think.</h1>

        <br/>
        <br/>

        <ul className = 'bottomcards'>

      <div className = 'cardtact'>
        <div className = 'inner'>
        <i class="envelope icon" style = {{fontSize: 40}}></i>
          </div>

          <div className = 'inner'>
            uroedcentral@gmail.com
            </div>

          </div>

          <div className = 'cardtact'>
            <div className = 'inner'>
            <i class="twitter icon" style = {{fontSize: 40}}></i>
              </div>

              <div className = 'inner'>
                @uroedcentral
                </div>

              </div>

          </ul>


        </div>







        </div>

      )




    }


}

export default Contact;
