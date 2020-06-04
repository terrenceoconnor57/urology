import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactGA from 'react-ga';



function initAnalyze(){
ReactGA.initialize("UA-168664374-1")
ReactGA.pageview("/Reconstruction")
}



class Reconstruction extends Component {
  constructor(props) {
    super(props);

      this.onChangeInstitution = this.onChangeInstitution.bind(this);
      this.onChangePresentation = this.onChangePresentation.bind(this);
      this.onChangeSpeaker = this.onChangeSpeaker.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeLink = this.onChangeLink.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      recon: [],
      institution: "",
      presentation: "",
      speaker: "",
      date: "",
      link: ""
    }
  }







  componentDidMount() {
    axios.get('http://52.23.208.167:5000/reconstruction/')
      .then(response => {
        this.setState({ recon: response.data })
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

    const reconstruction = {
      institution: this.state.institution,
      presentation: this.state.presentation,
      speaker: this.state.speaker,
      date: this.state.date,
      link: this.state.link
    }

    console.log(reconstruction);

    axios.post('http://52.23.208.167:5000/reconstruction/add', reconstruction)
      .then(res => console.log(res.data));

    window.location = '/Reconstruction';
  }

  render() {

    initAnalyze()


  return(
<div>



<form onSubmit={this.onSubmit}>
    <div className = 'stickysubmit'>
    <div className = 'welcomedivmobile'>
    <h3>If you would like to submit any
    information, please use the desktop
    version of our site.</h3>
    </div>

    <div className = 'submission'>

    <h1>Submit Reconstruction and Trauma videos here:</h1>

    <div className = 'centersubmit'>
    <div class="ui form">
  <div class="fields">
    <div class="field">
      <label>Lecture Host</label>
      <input type="text" placeholder="Institution"
      value = {this.state.institution}
      onChange = {this.onChangeInstitution}
      required/>
    </div>
    <div class="field">
      <label>Presentation</label>
      <input type="text" placeholder="Presentation"
      value = {this.state.presentation}
      onChange = {this.onChangePresentation}
      required/>
    </div>
    <div class="field">
      <label>Speaker</label>
      <input type="text" placeholder="Speaker"
      value = {this.state.speaker}
      onChange = {this.onChangeSpeaker}
      required/>
    </div>
    <div class="field">
      <label>Date</label>
      <input type="text" placeholder="Date"
      value = {this.state.date}
      onChange = {this.onChangeDate}
      required/>
    </div>
    <div class="field">
      <label>Link</label>
      <input type="text" placeholder="Link"
      value = {this.state.link}
      onChange = {this.onChangeLink}
      required/>
    </div>
    </div>

  </div>

</div>

</div>
<input class="submitbtn" type = "submit"/>
<h3 className = 'bold'>If you are having any issues submitting, or would like to delete or edit
 one of your posts, please contact us at uroedcentral@gmail.com. We will
check this email often to ensure that any changes will be made as quickly as
possible.</h3>
</div>
</form>
<br/>
<br/>
<br/>

  <div className = 'colortable'>
  <h1 className = 'archive'>Reconstruction and Trauma Archive</h1>
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
  {this.state.recon.reverse().map(rec => (
  <tr key = {rec._id}>
    <td className = 'datatext' data-label="Name">{rec.institution}</td>
    <td className = 'datatext' data-label="Age">{rec.presentation}</td>
    <td className = 'datatext' data-label="Job">{rec.speaker}</td>
    <td className = 'datatext' data-label="Job">{rec.date}</td>
    <td className = 'linky' data-label="Job" onClick={()=> window.open(rec.link)}><a className = 'linkicon'><i class="video icon"></i></a></td>
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

export default Reconstruction;
