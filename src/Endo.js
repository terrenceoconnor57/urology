import React, { Component } from 'react';
import News from './News';
import axios from 'axios';
import './App.css';
import ReactGA from 'react-ga';



function initAnalyze(){
ReactGA.initialize("UA-168664374-1")
ReactGA.pageview("/Endourology")
}


class Endo extends Component {
  constructor(props) {
    super(props);

      this.onChangeInstitution = this.onChangeInstitution.bind(this);
      this.onChangePresentation = this.onChangePresentation.bind(this);
      this.onChangeSpeaker = this.onChangeSpeaker.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onChangeLink = this.onChangeLink.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      endou: [],
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
    axios.get('http://52.23.208.167:5000/endourology/')
      .then(response => {
        this.setState({ endou: response.data })
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

    const endourology = {
      institution: this.state.institution,
      presentation: this.state.presentation,
      speaker: this.state.speaker,
      date: this.state.date,
      link: this.state.link
    }

    console.log(endourology)

    axios.post('http://52.23.208.167:5000/endourology/add', endourology)
      .then(res => console.log(res.data));

    window.location = '/Endo';
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

  filteredEau = () => {
    this.setState({ search: 'EAU',
                  appliedfilter: "EAU - UROWEBINAR SERIES"})
  }

  filteredCollab = () => {
    this.setState({ search: 'TEACHING COLLABORATIVE',
                  appliedfilter: "TEACHING COLLABORATIVE SERIES"})
  }

  render() {

    let filteredSeries = this.state.endou.filter((end) => {
            return end.institution.toLowerCase().includes(this.state.search.toLowerCase())
         })

    initAnalyze()


  return(
<div>



<News endPoint = 'http://52.23.208.167:5000/endourology/'/>
<br/>
<br/>

<div className = 'stick'>
<div className = 'choices'>
<ul className = 'taglist'>
  <a className = 'filters'>Filters:</a>
  <a className = 'focusin' onClick = {this.filteredAll}>All Lectures</a>
  <a className = 'focusin' onClick = {this.filteredUCSF}>UCSF Series</a>
  <a className = 'focusin' onClick = {this.filteredEmpire}>Empire Series</a>
  <a className = 'focusin' onClick = {this.filteredEau}>EAU Series</a>
  <a className = 'focusin' onClick = {this.filteredCollab}>Teaching Collab Series</a>
</ul>
<h2 className = 'applyfilter'>Filter applied:  <a class="ui teal tag label" style = {{cursor: 'default'}}>{this.state.appliedfilter}</a></h2>
</div>
</div>

<br/>

  <div className = 'colortable'>
  <h1 className = 'archive'>Endourology Archive</h1>
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
  {filteredSeries.reverse().map(end => (
  <tr key = {end._id}>
    <td className = 'datatext' data-label="Name">{end.institution}</td>
    <td className = 'datatext' data-label="Age">{end.presentation}</td>
    <td className = 'datatext' data-label="Job">{end.speaker}</td>
    <td className = 'datatext' data-label="Job">{end.date}</td>
    <td className = 'linky' data-label="Job" onClick={()=> window.open(end.link)}><a className = 'linkicon'><i class="video icon"></i></a></td>
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

export default Endo;
