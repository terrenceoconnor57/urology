import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class Oncology extends Component {
  state = {
    urologic: []
  }


  componentDidMount() {
    axios.get('http://localhost:5000/urologic/')
      .then(response => {
        this.setState({ urologic: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }



  render() {




  return(
<div>
    <h1>Oncology</h1>
    <h3>Oncology bla bla bla</h3>

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
  {this.state.urologic.reverse().map(uro => (
  <tr key = {uro._id}>
    <td data-label="Name">{uro.institution}</td>
    <td data-label="Age">{uro.presentation}</td>
    <td data-label="Job">{uro.speaker}</td>
    <td data-label="Job">{uro.date}</td>
    <td className = 'linky' data-label="Job" onClick={()=> window.open(uro.link)}>{uro.link}</td>
  </tr>
  ))}
</tbody>
</table>
</div>



    </div>



  )
}
}

export default Oncology;
