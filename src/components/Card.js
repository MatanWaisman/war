import React, { Component } from 'react'
import './Card.css'
export default class Card extends Component {

    render() {
        
        
        return (
            <div className='card'>
                <h1 className='cardOne'>{this.props.hand1}</h1>
                <br/>               
                <h1 className='cardTwo'>{this.props.hand2}</h1>
                
             
            

            </div>
        )
    }
}
