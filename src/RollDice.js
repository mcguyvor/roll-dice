 import React, { Component } from 'react'
 import Dice from './Dice'
 import './RollDice.css'
 class RollDice extends Component{
     static defaultProps ={
         sides:['one','two','three','four','five','six']
     };
     constructor(props){
        super(props);
        this.state ={die1:'one',die2:'one',rolling:false};
        this.roll = this.roll.bind(this);
     }
     roll(){
        const newDie1 = Math.floor(Math.random()*6 + 1);
        let dieside1 ;
        switch (newDie1) {
            case 1:
                dieside1 = 'one';
                break;
                case 2:
                dieside1 = 'two';
                break;
                case 3:
                dieside1 = 'three';
                break;
                case 4:
                dieside1 = 'four';
                break;
                case 5:
                dieside1 = 'five';
                break;
                case 6:
                dieside1 = 'six';
                break;
            default:
                break;
        }
        const NewDie2 = Math.floor(Math.random()*6 +1)
        let dieside2;
        switch (NewDie2) {
            case 1:
            dieside2 = 'one';
            break;
            case 2:
            dieside2 = 'two';
            break;
            case 3:
            dieside2 = 'three';
            break;
            case 4:
            dieside2 = 'four';
            break;
            case 5:
            dieside2 = 'five';
            break;
            case 6:
            dieside2 = 'six';
            break;
            default:
                break;
        }
        //set state to die face
        this.setState({die1:dieside1,die2:dieside2,rolling:true});
        setTimeout(()=>
        {
            this.setState({rolling:false});
        }
        ,1000)

     }

     render(){
        return (
            <div className='RollDice'>
                <div className ='Dice'>
                    <Dice face={this.state.die1} rolling={this.state.rolling}/>
                    <Dice face={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <button onClick ={this.roll} disabled={this.state.rolling}>
                {this.state.rolling ? 'Rolling...' : 'Roll'}
                </button>
            </div>
        )
     }
 }
 export default RollDice;

