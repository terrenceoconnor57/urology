import React, { Component } from 'react';
import './App.css';

class Twitter extends Component {
    state = {
    twitter: []
  }

componentDidMount = () => {
  fetch('http://52.23.208.167/twitterfetch')
          .then(res => res.json())
          .then(json => {

              this.setState({
                  twitter: [ { "text": json.statuses[0].text,
                                "name": json.statuses[0].user.name,
                                "screen_name": "@" + json.statuses[0].user.screen_name,
                                "image": json.statuses[0].user.profile_image_url_https,
                                "url": "https://twitter.com/i/web/status/" + json.statuses[0].id_str},
                             { "text": json.statuses[1].text,
                              "name": json.statuses[1].user.name,
                            "screen_name": "@" + json.statuses[1].user.screen_name,
                            "image": json.statuses[1].user.profile_image_url_https,
                            "url": "https://twitter.com/i/web/status/" + json.statuses[1].id_str},
                              { "text": json.statuses[2].text,
                              "name": json.statuses[2].user.name,
                            "screen_name": "@" + json.statuses[2].user.screen_name,
                            "image": json.statuses[2].user.profile_image_url_https,
                            "url": "https://twitter.com/i/web/status/" + json.statuses[2].id_str}]


              })
              console.log(this.state.twitter);
          }).catch((err) => {
              console.log(err);
          });

}

    render(){



      return (
        <div>

        <div className = "tsize">

        <div className = 'ttitle'>
        <i class="twitter icon" style = {{color: '#00acee'}}/>
        #UroSoMe
        </div>
        {this.state.twitter.map(twit => (



        <ul className = 'tlist'>
        <li className = 'titems' onClick = {() => window.open(twit.url)}>
        <div className = 'tinlist'>
        <img src = {twit.image} className = "tpic" />
        <div className = 'tusercontainer'>
        <p className = 'ttext'>{twit.name}</p>
        <p className = 'ttext2'>{twit.screen_name}</p>
        </div>
        </div>
        <div className = 'twholetext'>
        {twit.text}
        </div>
        </li>
        </ul>


))}
</div>
</div>

      )
    }
}

export default Twitter;
