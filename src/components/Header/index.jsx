import React, { useEffect, useState , useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import {GlobalState} from '../../GlobalState'
import axios from 'axios'



export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  const state = useContext(GlobalState)
  const [isLogged, setIsLogged]= state.UserApi.isLogged
  const [isAdmin, setIsAdmin]= state.UserApi.isAdmin
const logutUser = async() =>{
    await axios.get('/user/logout')
    localStorage.removeItem('firstLogin')
    setIsAdmin(false)
    setIsLogged(false)
  }

const adminRouter =()=>{
  return(
    <>
    <li><Link to='/createOffer'>Create Offers</Link></li>
    </>
  )
 }
const loggedRouter =()=>{
  return(
    <>
    <li><Link to='/' onClick={logutUser}>Se deconnecter</Link></li>
  
    </>
  )
 }


  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  {isAdmin ? 'ADMIN' : <img src="/images/logo.png" alt="Logo" style={{width:"200px"}} />}
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                   
                    {isAdmin ? '' :
                    <>
                    <li>
                    <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Acceuil
                    </NavLink>
                    
                   </li>
                    <li>
                      <NavLink to="about" onClick={() => setMobileToggle(false)}>
                        A Propos
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="contact"onClick={() => setMobileToggle(false)}>
                        Nous Contacter
                      </NavLink>
                    </li>
                    </>}
                    {isAdmin ? <>     
                      <li>
                      <NavLink to="contacts"onClick={() => setMobileToggle(false)}>
                         Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="users" onClick={() => setMobileToggle(false)}>
                         Utilisateurs
                      </NavLink>
                    </li>               
                    <li>
                      <NavLink to="portfolio"onClick={() => setMobileToggle(false)}>
                         Offres
                      </NavLink>
                    </li>

                    
                    
                    </> : 
                    <>                    
                    <li>
                      <NavLink to="portfolio" onClick={() => setMobileToggle(false)}>
                         Offres d'emplois
                      </NavLink>
                    </li></> }


                    {isAdmin && adminRouter()}
      { 
        isLogged ? loggedRouter() :<>
                    <li>
                      <Link to="/login" onClick={() => setMobileToggle(false)}>
                        Se Connecter
                      </Link>
                    </li>
                    <li>
                      <Link to="/registre" onClick={() => setMobileToggle(false)}>
                        S'inscrire
                      </Link>
                    </li>
                    </>}
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact" withIcon />
          </Div>
          <Div className="cs-side_header_box">
          </Div>
        </Div>
      </Div>
    </>
  );
}
