import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {browserHistory} from 'react-router';
import Dropdown from './Dropdown';

class AutoCompleteSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: 'San Francisco, CA',
      lat:'13.34444',
      lng:'76.4789'
    }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>{
        this.setState({
          lat:latLng.lat,
          lng:latLng.lng
        });
        console.log('Success', this.state.lng);
      }
      )
      .catch(error => console.error('Error', error))
      browserHistory.push({pathname: '/searchResult', state: {message: this.state}});
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form onSubmit={this.handleFormSubmit} className="main-container">
        <PlacesAutocomplete inputProps={inputProps} />
        <Dropdown/>
        <button type="submit" className="search-button">Search</button>
      </form>
    )
  }
}

export default AutoCompleteSearch