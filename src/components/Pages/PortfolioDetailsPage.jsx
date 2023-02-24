import React, { useEffect , useState , useContext} from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import Spacing from '../Spacing'
import {GlobalState} from '../../GlobalState'

export default function PortfolioDetailsPage() {
  const params = useParams()
  const state=useContext(GlobalState)
  const [offers]= state.offersApi.offers 
  const [detailOffer , setDetailOffer] = useState([])
  pageTitle('Offre Detail');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(()=>{
    console.log('re render')
    if(params.id){
        offers.forEach(offer =>{
            if(offer._id === params.id) setDetailOffer(offer)

        })
    }
},[params.id , offers])

  return (
    <>
      <PageHeading 
        title='Offre Details'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText={detailOffer.poste}
      />
      
      <Div className="container">
        <img src={detailOffer.img}  className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='' 
              subtitle='' 
            >
           <h2 className='cs-font_30 cs-font_26_sm cs-m0'>{detailOffer.poste}</h2>
              <Spacing lg='40' md='20'/>
              <p>{detailOffer.description}</p>
              <Spacing lg='10' md='10'/>
              </SectionHeading>  
           
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Offre Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Pays:</h3>
                <p className='cs-m0'>{detailOffer.pays}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Ville:</h3>
                <p className='cs-m0'>{detailOffer.Ville}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Région:</h3>
                <p className='cs-m0'>{detailOffer.region}r</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Compétences :</h3>
                <p className='cs-m0'>{detailOffer.compétences}</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Experiences :</h3>
                <p className='cs-m0'>{detailOffer.experience}</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
       
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='cubexpro73@gmail.com' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  )
}
