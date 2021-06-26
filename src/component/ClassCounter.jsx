import React, { Component } from 'react'
class ClassCounter extends Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    handleIncrease(){
this.setState({count: this.state.count+1})

    }
    handleDecrease(){
        this.setState({count: this.state.count-1})

    }
    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.handleIncrease()}>+</button>
            <button onClick={()=>this.handleDecrease()}>-</button>
            </>
        )
    }
}
export default ClassCounter