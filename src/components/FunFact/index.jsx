import React from 'react'
import Div from '../Div'
import './funfact.scss'
import localisation from './location.png'
import portfolio from './briefcase.png'
import Button from '../Button';

export default function FunFact({variant}) {
  return (
    <Div className={variant ? `cs-funfact_wrap ${variant}`: 'cs-funfact_wrap'} style={{textAlign:'center'}}>
    <Div className="cs-funfact_shape"  style={{backgroundImage: 'url(./images/funfact_shape_bg.svg)'}} />
      <Div className="cs-funfact_left">
        <Div className="cs-funfact_heading">
          <img src={localisation} ></img>
          <br></br>
          <br></br>
          
          <h4>Vous avez trouvé la perle rare à l’étranger ?</h4>
          <p>Laissez-nous vous accompagner jusqu’à l’obtention de l’autorisation de travail à l'étranger de votre futur collaborateur. </p>
        </Div>
      </Div>
      <Div className="cs-funfact_right">
        <Div>
        <img src={portfolio}></img>
        <br></br>
        <br></br>
        
        <h4>Administratives  et juridiques</h4>
        <p>Nous réalisons pour vous toutes les procédures d'embauches des TET auprés de gouvernourat :<br></br>
          affichage des postes selon les normes déclaration de l'employeur , EIMT , permis de travail temporairre
        </p>
   
      </Div>
      </Div>
     
    </Div>
  )
}
