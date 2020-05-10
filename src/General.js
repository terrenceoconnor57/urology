import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class General extends Component {
  state = {
    general: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/videos/')
      .then(response => {
        this.setState({ general: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {




  return(
<div>


    

    <div className = 'stickysubmit'>
    <div className = 'submission'>
    <h1>Submit your videos here:</h1>

    <div class="ui form">
  <div class="fields">
    <div class="field">
      <label>Institution</label>
      <input type="text" placeholder="Institution"/>
    </div>
    <div class="field">
      <label>Presentation</label>
      <input type="text" placeholder="Presentation"/>
    </div>
    <div class="field">
      <label>Speaker</label>
      <input type="text" placeholder="Speaker"/>
    </div>
    <div class="field">
      <label>Date</label>
      <input type="text" placeholder="Date"/>
    </div>
    <div class="field">
      <label>Link</label>
      <input type="text" placeholder="Link"/>
    </div>

  </div>

</div>

</div>
<button class="submitbtn">Submit</button>
</div>
<br/>
<br/>
<br/>

  <div className = 'colortable'>
  <h1>General</h1>
  <h3>General bla bla bla</h3>
    <div className = 'data'>
    <table class="ui celled table">
<thead>
  <tr><th>Institution</th>
  <th>Presentation</th>
  <th>Speaker</th>
  <th>Date</th>
  <th>Link</th>
</tr></thead>
<tbody>
  {this.state.general.reverse().map(gen => (
  <tr key = {gen._id}>
    <td data-label="Name">{gen.institution}</td>
    <td data-label="Age">{gen.presentation}</td>
    <td data-label="Job">{gen.speaker}</td>
    <td data-label="Job">{gen.date}</td>
    <td className = 'linky' data-label="Job" onClick={()=> window.open(gen.link)}>{gen.link}</td>
  </tr>
  ))}
</tbody>
</table>
</div>
</div>
    </div>



  )
}
}

export default General;
