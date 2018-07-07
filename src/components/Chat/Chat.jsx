import React, {Component} from 'react'

import './Chat.css'
import Bubble from '../Bubble/Bubble';
import Textbox from '../Textbox/Textbox';


class Chat extends Component{
  render(){
    return(
      <div className='Chat'>
        <Bubble/>
        <Textbox/>
      </div>
    )
  }
}

export default Chat;