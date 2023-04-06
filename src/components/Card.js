import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'


export const Card = ({title, imageSource, text, url}) => {
    return (
    <div className="card text-center"> 
      <img src={imageSource} alt=""/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {
            text ? text : 'loee j jkjhkhjn,nklm. öaanebssjnmnx bxm bsdjkhdmnclkedl nkadshieukbsb?'
        
          }
        </p>
          <a href={url} className='btn btn-outline-secondary ronded-0'>
            See Our Projects
          </a>
      </div>
    </div>
   ) 
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}


