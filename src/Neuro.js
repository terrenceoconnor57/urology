import React, { Component } from 'react';
import News from './News';
import axios from 'axios';
import './App.css';
import Twitter from './Twitter';
import ReactGA from 'react-ga';



function initAnalyze(){
ReactGA.initialize("UA-168664374-1")
ReactGA.pageview("/Neurourology")
}



class Neuro extends Component {
  constructor(props) {
    super(props);

      this.onChangeInstitution = this.onChangeInstitution.bind(this);
      this.onChangePresentation = this.onChangePresentation.bind(this);
      this.onChangeSpeaker = this.onChangeSpeaker.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeLink = this.onChangeLink.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      neurou: [],
      search: "",
      allfilters: [],
      institution: "",
      presentation: "",
      speaker: "",
      date: "",
      link: "",
      appliedfilter: "No Filter applied"
    }
  }







  componentDidMount() {
    axios.get('http://52.23.208.167:5000/neurourology/')
      .then(response => {
        this.setState({ neurou: response.data })
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

    const neurourology = {
      institution: this.state.institution,
      presentation: this.state.presentation,
      speaker: this.state.speaker,
      date: this.state.date,
      link: this.state.link
    }

    console.log(neurourology)

    axios.post('http://52.23.208.167:5000/neurourology/add', neurourology)
      .then(res => console.log(res.data));

    window.location = '/Neuro';
  }

  filteredAll = () => {
    this.setState({ search: "",
                  appliedfilter: "ALL LECTURES"})
  }

  filteredUCSF = () => {
    this.setState({ search: 'UCSF',
                    appliedfilter: "UCSF LECTURE SERIES"})

  }

  filteredEmpire = () => {
    this.setState({ search: 'EMPIRE',
                  appliedfilter: "EMPIRE LECTURE SERIES"})
  }

  filteredIcs = () => {
    this.setState({ search: 'ICS',
                  appliedfilter: "ICS LIVE SERIES"})
                }
  render() {

    let filteredSeries = this.state.neurou.filter((neu) => {
            return neu.institution.toLowerCase().includes(this.state.search.toLowerCase())
         })

    initAnalyze()


  return(
<div>



<News endPoint = 'http://52.23.208.167:5000/neurourology/'/>
<br/>
<br/>

<div className = 'stick'>
<div className = 'choices'>
<ul className = 'taglist'>
  <a className = 'filters'>Filters:</a>
  <a className = 'focusin' onClick = {this.filteredAll}>All Lectures</a>
  <a className = 'focusin' onClick = {this.filteredUCSF}>UCSF Series</a>
  <a className = 'focusin' onClick = {this.filteredEmpire}>Empire Series</a>
  <a className = 'focusin' onClick = {this.filteredIcs}>ICS Series</a>
</ul>
<h2 className = 'applyfilter'>Filter applied:  <a class="ui teal tag label" style = {{cursor: 'default'}}>{this.state.appliedfilter}</a></h2>
</div>
</div>

<br/>

<div className = "grid">

  <div className = 'colortable'>
  <h1 className = 'archive'>Neurourology Archive</h1>
    <div className = 'data'>
    <table class="ui celled table">
<thead className = 'datahead'>
  <tr><th>Host</th>
  <th>Presentation</th>
  <th>Speaker</th>
  <th>Date</th>
  <th>Link</th>
</tr></thead>
<tbody>
  {filteredSeries.reverse().map(neu => (
  <tr key = {neu._id}>
    <td className = 'datatext' data-label="Name">{neu.institution}</td>
    <td className = 'datatext' data-label="Age">{neu.presentation}</td>
    <td className = 'datatext' data-label="Job">{neu.speaker}</td>
    <td className = 'datatext' data-label="Job">{neu.date}</td>
    <td className = 'linky' data-label="Job" onClick={()=> window.open(neu.link)}><a className = 'linkicon'><i class="video icon"></i></a></td>
  </tr>
  ))}
</tbody>
</table>
</div>
</div>
<div className = 'twitterdiv'>
<Twitter />
</div>
</div>
    </div>



  )
}
}

export default Neuro;
