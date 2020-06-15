import React, { Component } from 'react';
import News from './News';
import axios from 'axios';
import './App.css';
import ReactGA from 'react-ga';



function initAnalyze(){
ReactGA.initialize("UA-168664374-1")
ReactGA.pageview("/Infertility")
}



class Infert extends Component {
  constructor(props) {
    super(props);

      this.onChangeInstitution = this.onChangeInstitution.bind(this);
      this.onChangePresentation = this.onChangePresentation.bind(this);
      this.onChangeSpeaker = this.onChangeSpeaker.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeLink = this.onChangeLink.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      infert: [],
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
    axios.get('http://52.23.208.167:5000/infertility/')
      .then(response => {
        this.setState({ infert: response.data })
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

    const infertility = {
      institution: this.state.institution,
      presentation: this.state.presentation,
      speaker: this.state.speaker,
      date: this.state.date,
      link: this.state.link
    }

    console.log(infertility);

    axios.post('http://52.23.208.167:5000/infertility/add', infertility)
      .then(res => console.log(res.data));

    window.location = '/Infert';
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

  filteredSmiles = () => {
    this.setState({ search: 'SMILES',
                  appliedfilter: "SMILES LECTURE SERIES"})
  }

  render() {

    let filteredSeries = this.state.infert.filter((inf) => {
            return inf.institution.toLowerCase().includes(this.state.search.toLowerCase())
         })

    initAnalyze()


  return(
<div>



<News endPoint = 'http://52.23.208.167:5000/infertility/'/>
<br/>
<br/>

<div className = 'stick'>
<div className = 'choices'>
<ul className = 'taglist'>
  <a className = 'filters'>Filters:</a>
  <a className = 'focusin' onClick = {this.filteredAll}>All Lectures</a>
  <a className = 'focusin' onClick = {this.filteredUCSF}>UCSF Series</a>
  <a className = 'focusin' onClick = {this.filteredEmpire}>Empire Series</a>
  <a className = 'focusin' onClick = {this.filteredSmiles}>SMILES Series</a>
</ul>
<h2 className = 'applyfilter'>Filter applied:  <a class="ui teal tag label" style = {{cursor: 'default'}}>{this.state.appliedfilter}</a></h2>
</div>
</div>

<br/>

  <div className = 'colortable'>
  <h1 className = 'archive'>Infertility and Andrology Archive</h1>
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
  {filteredSeries.reverse().map(inf => (
  <tr key = {inf._id}>
    <td className = 'datatext' data-label="Name">{inf.institution}</td>
    <td className = 'datatext' data-label="Age">{inf.presentation}</td>
    <td className = 'datatext' data-label="Job">{inf.speaker}</td>
    <td className = 'datatext' data-label="Job">{inf.date}</td>
    <td className = 'linky' data-label="Job" onClick={()=> window.open(inf.link)}><a className = 'linkicon'><i class="video icon"></i></a></td>
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

export default Infert;
