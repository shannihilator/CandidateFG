import React, { Component } from 'react';

export default class People extends Component {
    constructor(){
        super();
        this.state = {
            people: [],
        }
    }
    render() {
        return(
            <div>
                list people here
            </div>
        )
    }
}