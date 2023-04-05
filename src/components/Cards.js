
import React from 'react'
import { Card } from './Card'
import './Cards.css'
import image1 from '../assets/fullst.jpg'
import image2 from '../assets/uiux.jpg'
import image3 from '../assets/webApp.jpg'

const myCards = [
   {
      id: 1,
      title: 'Full Stack',
      image: image1
   },
   {
      id: 2,
      title: 'UI/UX',
      image: image2
   },
   {
      id: 3,
      title: 'Web Application',
      image: image3
   }
]
 
export const Cards = () => {
    return ( 
    <div className="container cards-style d-flex justify-content-center align-items-center">
       <div className="row">
        {
          myCards.map(card => (
            <div className='col-md-4 cards-image' key={card.id}>
            <Card title={card.title} imageSource={card.image} />
            </div>
          ))
        }
       </div>
    </div>
   ) 
}





