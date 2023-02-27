import { Icon } from '@iconify/react';
import React, { useEffect , useContext} from 'react';
import { useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Portfolio from '../Portfolio';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import {GlobalState} from '../../GlobalState'
import LoadMore from '../LoadMore/LoadMore'
import PortfolioAdmin from '../Portfolio/PortfoioAdmin'
import Search from '../Widget/SearchWidget'

export default function PortfolioPage() {
  pageTitle(' Nos offres');
  const [itemShow, setItemShow] = useState(9);
  const state = useContext(GlobalState)
  const [offers , setOffers]= state.offersApi.offers 
  const [isAdmin] = state.UserApi.isAdmin
  const [token] = state.token
  const [callback , setCallback] = state.offersApi.callback
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {isAdmin ? '' :  
    <>  
    <PageHeading
        title="NOS OFFRES"
        bgSrc="images/portfolio_hero_bg.jpeg"
        pageLinkText="Offres"
        
      /> 
    
    </>
      }

<Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Nos Offres" subtitle="" />
        </Div>
        <Spacing lg="90" md="45" />
        <Search />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {offers.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? 'col-lg-4' : 'col-lg-4'
              }`}
              key={index}
            >
             {isAdmin ? 
              <PortfolioAdmin
              setOffers={setOffers}
              offer = {item}
              key={index}
              isAdmin={isAdmin} 
              token={token} 
              callback={callback} 
              setCallback={setCallback}
              variant="cs-style1 cs-type1"/>
             :
             <Portfolio
              setOffers={setOffers}
              offer = {item}
              key={index}
              isAdmin={isAdmin} 
              token={token} 
              callback={callback} 
              setCallback={setCallback}
              variant="cs-style1 cs-type1"
              />
             
             
             
             
             }

             
              <Spacing lg="25" md="25" />
             
            </Div>
          ))}
        </Div>
      
        <Div className="text-center">
          {offers.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 1)}
              >
                <span><LoadMore/>Charger plus ...</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {isAdmin ? "" :       
      <Cta
        title="contact@cubexpro.net"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />}

    </>
  );
}
