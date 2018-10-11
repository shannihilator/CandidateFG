import React, { Component } from 'react';
import Button from './Button';
//connecting button component to show duplicates

//set the state for rendering people data
export default class People extends Component {
    constructor(){
        super();
        this.state = {
            people: [],
        }
    }
    //map through list of people and display their name, email, and job title
    render() {
        let peopleList = this.state.peopleList.map((response, index) => {
      return <div key={index}>
        <h2>{response.display_name}</h2>
        <p>{response.email_address}</p>
        <p>{response.title}</p>
      </div>
        
         });
    }
}