import React from 'react'
import { Link } from 'react-router-dom'
import Div from '../Div'
import './card.scss'

export default function Card({title, link, src, alt}) {
  return (
    <Link to={link} className="cs-card cs-style1">
      <>
        <img src={src} alt={alt} />
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <p className="cs-card_title" style={{fontSize:"1rem" , textAlign:'center ' , marginTop:"20px"}}>{title}</p>
        </Div>
      </>
    </Link>
  )
}
