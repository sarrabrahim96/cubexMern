
import { Icon } from '@iconify/react';
import Div from '../../Div';
import Spacing from '../../Spacing';
import React ,{useState , useContext , useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'

const initialeState ={
    username:'',
    email:'',
    password:'',
    role:'',
    _id : ''
  }

function UpdateUser() {
     const param = useParams()
     const state = useContext(GlobalState)
     const [User , setUser] = useState(initialeState)
     const [isAdmin] = state.UserApi.isAdmin
     const [onEdit , setOnEdit] = useState(false)
     const [Users] = state.UsersAPI.Users


     useEffect(()=>{
        if(param.id){
            setOnEdit(true)
            Users.forEach(user => {
                if(user._id === param.id) {
                    setUser(user)
                   
                }
            });
           
        }else{
            setUser(initialeState)
            setOnEdit(false)
        }
    },[param.id , Users])




    const HandleChangeInput = e =>{
        const {name , value} = e.target
        setUser({...User , [name]:value})
    }

    const HandleSubmit = async e =>{
        e.preventDefault()
        try {
        if(!isAdmin) return alert("vous n'étes pas un admin.")
        await axios.put(`https://cubexback.online/user/updateUser/${Users._id}` , {...User})
          } 
        catch (error) {
           alert(error.response.data.msg)
        }
       }


 
    
  return (
    <>

     <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
    
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row" onSubmit={HandleSubmit}>
              <Div className="col-sm-6">
                <label className="cs-primary_color">ID User</label>
                <input type="text" className="cs-form_field" name='User_id'
                value={User._id} onChange={HandleChangeInput} disabled={onEdit} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Username</label>
                <input type="text" className="cs-form_field" name='username'
                value={User.username} onChange={HandleChangeInput} disabled={onEdit}/>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email</label>
                <input type="text" className="cs-form_field" name='email'
                value={User.email} onChange={HandleChangeInput} disabled={onEdit}/>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Password</label>
                <input type="text" name='password' className="cs-form_field"
                value={User.password} onChange={HandleChangeInput} disabled={onEdit} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Role</label>
                <input type="number" name='role' className="cs-form_field"
                value={User.role} onChange={HandleChangeInput} />
                <Spacing lg="20" md="20" />
              </Div>
              <Spacing lg="25" md="25" />
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type='submit'>
                  <span>Modifier</span>
                  <Icon icon="bi:arrow-right" />
                </button>
                <Spacing lg="25" md="25" />
              

              </Div>
            </form>
          </Div>
        </Div>
      </>
  )
}

export default UpdateUser