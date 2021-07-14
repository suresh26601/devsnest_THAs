import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            val:0
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.val}</h1>
                <button onClick={()=>this.setState({val:this.state.val+1})}>click me</button>
            </div>
        )
    }
}
