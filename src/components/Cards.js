
import React from 'react'
import { Card } from './Card'
import './cards.css'
import image1 from '../assets/fullst.jpg'
import image2 from '../assets/uiux.jpg'
import image3 from '../assets/webApp.jpg'

const myCards = [
   {
      id: 1,
      title: 'Full Stack',
      image: image1,
      url: 'https://github.com/',
      text: 'Fullstack Projects'
   },
   {
      id: 2,
      title: 'UI/UX',
      image: image2,
      url: 'https://github.com/',
      text: 'UX/UI Projects'
   },
   {
      id: 3,
      title: 'Web Application',
      image: image3,
      url: 'https://github.com/',
      text: 'Frotend Projects'
   }
]
 
export const Cards = () => {
    return ( 
    <div className="container cards-style d-flex justify-content-center align-items-center">
       <div className="row">
        {
          myCards.map((card) => (
            <div className='col-md-4 cards-image' key={card.id}>
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
            </div>
          ))
        }
       </div>
    </div>
   ) 
}





