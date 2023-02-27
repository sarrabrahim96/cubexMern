import React , {useState} from 'react'
import  axios from 'axios'
import Div from '../Div';
import Spacing from '../Spacing';
import { Icon } from '@iconify/react';
import SectionHeading from '../SectionHeading';
import { pageTitle } from '../../helper';

function Login() {
  pageTitle("se connecter");
 
  const [user , setUser]= useState({
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
      
      const res =await axios.post('/user/login' , {...user})
      console.log(res)
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
            title="Se Connecter"
            subtitle=""
            
    />
</Div>
    <Div className="col-sm-6" style={{alignItems:'center' , right:'50px'}}>
    <form action="#" className="row" onSubmit={loginSubmit}>
      <Div className="col-sm-12">
        <label className="cs-primary_color">Email</label>
        <input type="text" className="cs-form_field" name='email' onChange={onChangeInput} value={user.email}/>
        <Spacing lg="20" md="20" />
      </Div>

      <Div className="col-sm-12">
        <label className="cs-primary_color">Password</label>
        <input type="password" className="cs-form_field"  name='password'  onChange={onChangeInput} value={user.password} />
        <Spacing lg="20" md="20" />
      </Div>
      <Div className="col-sm-12">
        <button className="cs-btn cs-style1" type='submit'>
          <span>Se connecter</span>
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

export default Login