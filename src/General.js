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
  {this.state.general.map(gen => (
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



  )
}
}

export default General;
