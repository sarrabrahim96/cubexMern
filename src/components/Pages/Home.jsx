import React, { useEffect , useContext } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import PortfolioSlider from '../Slider/PortfolioSlider';
import { pageTitle } from '../../helper';
import {GlobalState} from '../../GlobalState'

export default function Home() {
  pageTitle('Acceuil');

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: 'Facebook',
      links: 'https://www.facebook.com/profile.php?id=100089169018858',
    },
    {
      name: 'Instagram',
      links: 'https://instagram.com/cube_xpro?igshid=NmE0MzVhZDY=',
    },

  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const state = useContext(GlobalState)
  const [isAdmin, setIsAdmin]= state.UserApi.isAdmin
  return (
    <>
    {isAdmin ? <>       
    <Hero
        title="CUBEXPRO DASHBORD"
        bgImageUrl="/images/bg.jpg"
  
      />
      </> : <>
     
      <Hero
        title="Le talent au-delà des frontières"
        subtitle=""
        btnText="Contacter"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Suivez-nous"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/bg.jpg"
  
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
        
/>
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services avec lesquels nous pouvons vous aider"
                subtitle="Que pouvons-nous faire ?"
             
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Décrocher un CDI à l'étranger"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Obtenir un visa de travail pour l'étranger "
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Obtenir l'autorisation de travail"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Décrocher un CDD à l'étranger"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Nos Offres"
            subtitle="Nos derniers offres"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}

      <Spacing lg="150" md="80" />
    <Div className="container">
        <Cta
          title="CONTACTEZ-NOUS"
          btnText="postuler à une réunion"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
}
    </>
  );
}
