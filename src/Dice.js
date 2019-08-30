import React, { Component } from 'react'
import './App.css'
import './die.css'
class Dice extends Component{
    render(){
        return(
            <div>
                <i className={`fas fa-dice-${this.props.face} ${this.props.rolling? 'shaking':''}`}></i>
                
            </div>
        );
    }
}
export default Dice;