import React, { Component } from 'react'
import Apartments from './store/Apartments'
import {Link} from 'react-router-dom'

class ApartmentDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: Apartments
    }
  }
  componentWillMount(){
  const id = this.props.match.params.id
  this.setState({apartmentId: id})
  let apartment = this.state.apartments.find(function(listing){
    return listing.id === parseInt(id)
  })
  if(apartment){
  this.setState({apartment: apartment})
  }
}

render() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <h2>{this.state.apartment.address}</h2>
      <h2>{this.state.apartment.price}</h2>
    </div>
  );
}
}

export default ApartmentDetail;
