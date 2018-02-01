import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {browserHistory} from 'react-router';

class AutoCompleteSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      address: 'San Francisco, CA',
      lat:'',
      long:''
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
      browserHistory.push('/searchResult');
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AutoCompleteSearch