import React, { Component } from 'react';
import axios from 'axios';
import './App.css';




class Upcoming extends Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomings: [],
      program: "",
      description: "",
      date: "",
      link: "",
      page: "",
      bottom: ""
    }
  }

  componentDidMount() {
    axios.get('http://52.23.208.167:5000/upcoming/')
      .then(response => {
        this.setState({ upcomings: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

  }

    render(){
      return(


<div>
<h1 className = 'leftheader'>UPCOMING</h1>



<div class="ui cards">
  {this.state.upcomings.map(upcoming => (
<div class="card" key = {upcoming._id}>
<div className = 'incard'>
<div className = 'program'>{upcoming.program}</div>
<div className = "descpro">
{upcoming.description}
</div>
<div className = "descpro">
{upcoming.date}
</div>
<div className = 'container'>
<div className = "access">
{upcoming.link}
</div>
</div>
</div>
<div className = 'butbtm' onClick = {() => window.location.assign(upcoming.page)}>
{upcoming.bottomtext}
</div>
</div>
))}
</div>

</div>









      )






    }

}

export default Upcoming;
