import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class Female extends Component {
  constructor(props) {
    super(props);

      this.onChangeInstitution = this.onChangeInstitution.bind(this);
      this.onChangePresentation = this.onChangePresentation.bind(this);
      this.onChangeSpeaker = this.onChangeSpeaker.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeLink = this.onChangeLink.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      female: [],
      institution: "",
      presentation: "",
      speaker: "",
      date: "",
      link: ""
    }
  }







  componentDidMount() {
    axios.get('http://localhost:5000/female/')
      .then(response => {
        this.setState({ female: response.data })
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

    const female = {
      institution: this.state.institution,
      presentation: this.state.presentation,
      speaker: this.state.speaker,
      date: this.state.date,
      link: this.state.link
    }

    console.log(female);

    axios.post('http://localhost:5000/female/add', female)
      .then(res => console.log(res.data));

    window.location = '/Female';
  }

  render() {




  return(
<div>



<form onSubmit={this.onSubmit}>
    <div className = 'stickysubmit'>

    <div className = 'submission'>

    <h1>Submit Female Urology videos here:</h1>

    <div className = 'centersubmit'>
    <div class="ui form">
  <div class="fields">
    <div class="field">
      <label>Institution</label>
      <input type="text" placeholder="Institution"
      value = {this.state.institution}
      onChange = {this.onChangeInstitution}/>
    </div>
    <div class="field">
      <label>Presentation</label>
      <input type="text" placeholder="Presentation"
      value = {this.state.presentation}
      onChange = {this.onChangePresentation}/>
    </div>
    <div class="field">
      <label>Speaker</label>
      <input type="text" placeholder="Speaker"
      value = {this.state.speaker}
      onChange = {this.onChangeSpeaker}/>
    </div>
    <div class="field">
      <label>Date</label>
      <input type="text" placeholder="Date"
      value = {this.state.date}
      onChange = {this.onChangeDate}/>
    </div>
    <div class="field">
      <label>Link</label>
      <input type="text" placeholder="Link"
      value = {this.state.link}
      onChange = {this.onChangeLink}/>
    </div>
    </div>

  </div>

</div>

</div>
<input class="submitbtn" type = "submit"/>
</div>
</form>
<br/>
<br/>
<br/>

  <div className = 'colortable'>
  <h1 className = 'archive'>Female Urology Archive</h1>
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
  {this.state.female.reverse().map(fem => (
  <tr key = {fem._id}>
    <td className = 'datatext' data-label="Name">{fem.institution}</td>
    <td className = 'datatext' data-label="Age">{fem.presentation}</td>
    <td className = 'datatext' data-label="Job">{fem.speaker}</td>
    <td className = 'datatext' data-label="Job">{fem.date}</td>
    <td className = 'datatext' className = 'linky' data-label="Job" onClick={()=> window.open(fem.link)}>{fem.link}</td>
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

export default Female;
