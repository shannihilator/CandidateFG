import React, { Component } from 'react';

//created a component here to reach to the controller and fetch the data 
//from that API call and render it in this component
export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = {
          people: []
        };
      }
      componentDidMount(){
        fetch('/app/controllers/api/people_controller.rb')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ people: data }) });
      }
    render() {
        const people = this.state.people.map((data) => {
            return(
            <H2>List of People at SalesLoft</H2>
             <div key={data.id}>
              <p>{data.display_name}</p>
              <p>{data.email_address}</p>
              <p>{data.title}</p>
             </div>
             //add button component here
             //in button component, add a map method I can compare each set of data or words 
             //and see if they match, if so, add to the count
        
        );

    }
 }

}

    
