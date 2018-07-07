import React, {Component} from 'react'

import './Banner.css'
import BannerImg from './BannerImg.png'

class Banner extends Component{
  render(){
    return(
      <div className='Banner'>
        <img src={BannerImg} className="Banner-img" alt="banner" />
      </div>
    )
  }
}

export default Banner;