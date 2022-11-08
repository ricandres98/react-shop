import React, { Component } from 'react'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: 'Ricardo'
        }
    }
    render() {
        return(
            <div>
                <h1>Hello, {this.name}</h1>
            </div>
        )
    }
}