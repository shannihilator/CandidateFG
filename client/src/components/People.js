import React, { Component } from 'react';

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
        
        );

    }
 }

}

    
