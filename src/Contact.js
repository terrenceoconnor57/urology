import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
    render(){



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
