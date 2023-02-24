import React , {useContext} from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';
import {GlobalState} from '../../GlobalState'

export default function PortfolioSlider() {
    
  const state = useContext(GlobalState)
  const [offers , setOffers]= state.offersApi.offers 
  const [isAdmin] = state.UserApi.isAdmin
  const [token] = state.token
  const [callback , setCallback] = state.offersApi.callback

  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow:3,
    speed: 300,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {offers.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            setOffers={setOffers}
            offer = {item}
            key={item._id}
            isAdmin={isAdmin} 
            token={token} 
            callback={callback} 
            setCallback={setCallback}
            variant="cs-style1 cs-type1"
          />
        </Div>
      ))}
    </Slider>
  )
}
