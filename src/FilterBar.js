import React, { Component } from 'react';
import './App.css';


class FilterBar extends Component {




    render(props){




      return (

        <div className = 'stick'>
        <div className = 'choices'>
        <ul className = 'taglist'>
          <a className = 'filters'>Filters:</a>
          <a className = 'focusin' onClick = {this.props.filteredAll}>All Lectures</a>
          <a className = 'focusin' onClick = {this.props.filteredUCSF}>UCSF Series</a>
          <a className = 'focusin' onClick = {this.props.filteredEmpire}>Empire Series</a>
          <a className = 'focusin' style = {{display: this.props.nodisplay}}onClick = {this.props.filteredEmpire}>Urology Teaching Collaborative</a>
        </ul>
        <h2 className = 'applyfilter'>Filter applied:  <a class="ui teal tag label" style = {{cursor: 'default'}}>{this.props.appliedfilter}</a></h2>
        </div>
        </div>




      )
    }
}

export default FilterBar;
