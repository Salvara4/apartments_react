import React, { Component } from 'react'
import Apartments from './store/Apartments'
import {Link} from 'react-router-dom'

class ApartmentIndex extends Component {
  componentWillMount(){
    this.setState({apartmentsList: Apartments})
  }
  render() {
    let list = this.state.apartmentsList.map(function(apartment){
    return (
      <li key={apartment.id}>
        <Link to={`/apartments/${apartment.id}`} >
          {apartment.address}
        </Link>
      </li>
    )
  })
  return (
    <ul>
      {list}
    </ul>
    );
  }
}

export default ApartmentIndex;
