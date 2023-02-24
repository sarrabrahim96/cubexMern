import React , {useState} from 'react'
import  axios from 'axios'
import Div from '../Div';
import Spacing from '../Spacing';
import { Icon } from '@iconify/react';
import SectionHeading from '../SectionHeading';
import { pageTitle } from '../../helper';

function Registre() {
pageTitle("s'inscrire");
  const [user , setUser]= useState({
    username:'',
    email:'',
    password:''
  })
  const onChangeInput = e =>{
    const {name , value}= e.target;
    setUser({...user, [name]:value})
  }
  const loginSubmit = async  e => {
    e.preventDefault()
    try {
      await axios.post('/user/register' , {...user})
      localStorage.setItem('firstLogin' , true)
      window.location.href ="/";
    
    
    } catch (error) {
      alert(error.response.data.msg)
    }
  }
  return (
    <>
<Spacing lg="150" md="80" />
<Div className="container">
      <Div className="row">
        <Div className="col-lg-12">
          <SectionHeading
            title="créer votre compte"
            subtitle=""
            
    />
</Div>
<Div className="col-sm-6" style={{alignItems:'center' , right:'50px'}}>
<form action="#" className="row" onSubmit={loginSubmit}>
    <Div className="col-sm-12">
        <label className="cs-primary_color">Nom</label>
        <input type="text" name='username' className="cs-form_field" onChange={onChangeInput} value={user.username}/>
        <Spacing lg="20" md="20" />
      </Div>
     <Div className="col-sm-12">
        <label className="cs-primary_color">Email</label>
        <input type="email" name='email' className="cs-form_field" onChange={onChangeInput} value={user.email}/>
        <Spacing lg="20" md="20" />
      </Div>
     <Div className="col-sm-12">
        <label className="cs-primary_color">Password</label>
        <input type="password" name='password' className="cs-form_field" onChange={onChangeInput} value={user.password} />
        <Spacing lg="20" md="20" />
      </Div>
      <Div className="col-sm-12">
        <button className="cs-btn cs-style1" type='submit'>
          <span>S'inscrire</span>
          <Icon icon="bi:arrow-right" />
        </button>
      </Div>
     
    </form>
   </Div>
   </Div>
  </Div>
  </>
  )
}

export default Registre