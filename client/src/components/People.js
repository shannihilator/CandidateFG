import React, { Component } from 'react';
import Button from './Button';

export default class People extends Component {
    constructor(){
        super();
        this.state = {
            people: [],
        }
    }
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