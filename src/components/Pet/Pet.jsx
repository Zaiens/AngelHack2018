import React, {Component} from 'react'

import './Pet.css'
import rojo from "./pet rojo.png"
import amarillo from "./pet.amarillo.png"


class Pet extends Component{
  render(){
    let pet
    if(this.props.color === "rojo"){
      pet = rojo
    }
    if(this.props.color === "amarillo"){
      pet = amarillo
    }
    return(
      <div className='Pet'>
        <img className='Pet-img' src={pet} alt="pet rojo"/>
      </div>
    )
  }
}

export default Pet;