import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Upcoming from './Upcoming';




class Houses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [],
      program: "",
      description: "",
      date: "",
      link: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/houses/')
      .then(response => {
        this.setState({ houses: response.data })
      })
      .catch((error) => {
        console.log(error);
      })

  }

    render(){
      return(
        <div className = 'wholehouse'>




        <h1 className = 'mainhouse'>OPEN HOUSES</h1>

        <Upcoming />

<h1 className = 'leftheader'>PREVIOUSLY RECORDED</h1>



<div class="ui cards">
  {this.state.houses.map(house => (
<div class="card" key = {house._id}>
<div className = 'incard2'>
<div className = 'program'>{house.program}</div>
<div className = "descpro">
{house.description}
</div>
<div className = "descpro">
{house.date}
</div>
</div>
<div className = 'butbtm2' onClick = {() => window.open(house.link)}>
<i class="add icon"></i>
View
</div>
</div>
))}

</div>



</div>



      )






    }

}

export default Houses;
