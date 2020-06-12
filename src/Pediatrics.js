import React, { Component } from 'react';
import News from './News';
import axios from 'axios';
import './App.css';
import ReactGA from 'react-ga';



function initAnalyze(){
ReactGA.initialize("UA-168664374-1")
ReactGA.pageview("/Pediatrics")
}



class Pediatrics extends Component {
  constructor(props) {
    super(props);

      this.onChangeInstitution = this.onChangeInstitution.bind(this);
      this.onChangePresentation = this.onChangePresentation.bind(this);
      this.onChangeSpeaker = this.onChangeSpeaker.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeLink = this.onChangeLink.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pediat: [],
      institution: "",
      presentation: "",
      speaker: "",
      date: "",
      link: ""
    }
  }







  componentDidMount() {
    axios.get('http://52.23.208.167:5000/pediatric/')
      .then(response => {
        this.setState({ pediat: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeInstitution(e) {
    this.setState({
      institution: e.target.value
    })
  }

  onChangePresentation(e) {
    this.setState({
      presentation: e.target.value
    })
  }

  onChangeSpeaker(e) {
    this.setState({
      speaker: e.target.value
    })
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    })
  }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const pediatric = {
      institution: this.state.institution,
      presentation: this.state.presentation,
      speaker: this.state.speaker,
      date: this.state.date,
      link: this.state.link
    }

    console.log(pediatric);

    axios.post('http://52.23.208.167:5000/pediatric/add', pediatric)
      .then(res => console.log(res.data));

    window.location = '/Pediatrics';
  }

  render() {


    initAnalyze()

  return(
<div>



<News endPoint = 'http://52.23.208.167:5000/pediatric/'/>
<br/>
<br/>
<br/>

  <div className = 'colortable'>
  <h1 className = 'archive'>Pediatric Urology Archive</h1>
    <div className = 'data'>
    <table class="ui celled table">
<thead>
  <tr><th>Host</th>
  <th>Presentation</th>
  <th>Speaker</th>
  <th>Date</th>
  <th>Link</th>
</tr></thead>
<tbody>
  {this.state.pediat.reverse().map(ped => (
  <tr key = {ped._id}>
    <td className = 'datatext' data-label="Name">{ped.institution}</td>
    <td className = 'datatext' data-label="Age">{ped.presentation}</td>
    <td className = 'datatext' data-label="Job">{ped.speaker}</td>
    <td className = 'datatext' data-label="Job">{ped.date}</td>
    <td className = 'linky' data-label="Job" onClick={()=> window.open(ped.link)}><a className = 'linkicon'><i class="video icon"></i></a></td>
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

export default Pediatrics;
