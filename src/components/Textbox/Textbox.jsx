import React, {Component} from 'react'

import './Textbox.css'

class Textbox extends Component{

  render(){
    return(
      <div className='Textbox'>
        <input className='Textbox-input' type="text"/>
      </div>
    )
  }
}

export default Textbox;