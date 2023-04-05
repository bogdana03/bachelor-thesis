import React from 'react'



export const Card = ({title, imageSource}) => {
    return (
    <div className="card text-center"> 
      <img src={imageSource} alt=""/>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">loee j jkjhkhjn,nklm. öaanebssjnmnx 
          bxm bsdjkhdmnclkedl nkadshieukbsb</p>
          <a href="#!" className='btn btn-outline-secondary ronded-0'>
            See Our Projects
          </a>
      </div>
    </div>
   ) 
}
