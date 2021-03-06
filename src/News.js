import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';



class News extends Component {
  state = {
    general: [],
    search: ""
  }

  componentWillReceiveProps(props) {
    axios.get(props.endPoint)
      .then(response => {
        this.setState({ general: response.data.slice(-4) })
      })
      .catch((error) => {
        console.log(error);
      })

  }

  



    render(){





      return(

        <div className = 'newssection'>
        <h1 className = 'titlenews'>Recently added</h1>

        <div className = 'allnews'>



        {this.state.general.reverse().map(gen =>



        <div key = {gen._id} className = 'cardsn'>
        <div className = 'imageholder'>
        <img onClick = {() => window.open(gen.link)} className = 'image' src = {gen.image}/>
        </div>
        <div className = 'cardcontent'>
        <p className = 'contenttitle'>{gen.presentation}</p>
        <p className = 'contenttitle2'>{gen.institution}</p>
        <p className = 'contenttitle2'>{gen.date}</p>


        </div>
        </div>
        )}






</div>
</div>

      )

    }
}

export default News;
