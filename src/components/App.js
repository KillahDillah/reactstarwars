import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty string).
  // Enter your code below:

  constructor(props){
    super(props)
    this.state = {
      vehicles: [],
      value: "",
      pilot: ""
    }
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange = (e) => { //this.handleNameChange = this.handleNameChange.bind(this)
    this.setState({
      value: e.target.value
    })
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

  handleSubmit = (e) => {
      this.setState({
        pilot: this.state.value
      })
    }


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentWillMount (){
    fetch('https://swapi.co/api/vehicles/')  //fetch data and setState vehicle: 'data'
    .then(response => {
        return response.json()
      }) 
    .then(data => {
      console.log (data.results)
        this.setState ({
          vehicles: data.results
        })
      })
  }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    
    return (
      <div className="App" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
        <form
        {
        /*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
         {this.state.vehicles.map(function(vehicle, i){
          return (
            <div key={'vehicle' + i} className="card" style={{width: '20rem'}}>
              <div className="card-block">
                <h5 className="card-title">Vehicle: {vehicle.name}</h5>
                <h6 className="card-subtitle">Model: {vehicle.model}</h6>
                <div className="card">
                  <h6 className="specs">Specs</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                    <li className="list-group-item">Class: {vehicle.vehicle_class}</li>
                    <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                    <li className="list-group-item">Crew: {vehicle.crew}</li>
                    <li className="list-group-item">Length: {vehicle.length}</li>
                    <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                    <li className="list-group-item">Cargo Capacity: {vehicle.cargo_capacity}</li>
                  </ul>
                </div>
              </div>
            </div>
          )
         })}
      </div>
    );
  }
}

export default App;
