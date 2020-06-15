import React, { Component} from 'react';
import General from './General';




class SearchBar extends Component{
  state = {
    general: [],
    search: ''
  }

  componentWillReceiveProps(props){
    this.setState({general: props.generalState,
                   search: props.searchState})
  }

  handleInput = (e) => {
    this.setState({ search: e.target.value })
    console.log(this.state.search);
  }

    render(props){




let filteredSeries = this.state.general.filter((gen) => {
        return gen.institution.toLowerCase().includes(this.state.search.toLowerCase())
     })

      return(

        <form>
          <input onChange = {this.handleInput} type = 'text' placeholder = 'Search'/>
          </form>

      )
    }
}

export default SearchBar;
