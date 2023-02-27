import React  , {useEffect  , useState}from 'react'
import Spacing from '../../Spacing';
import Div from '../../Div'
import { pageTitle } from '../../../helper';
import axios from 'axios'
import {Link} from 'react-router-dom'


function Users() {
  pageTitle('Utilisateurs');
  const [Users, setUsers] = useState([]);
  const axiosInstance = axios.create({baseURL :"https://cubexback.online"})
  useEffect(()=>{
    const getAllUser =  async()=>{
     const res= await axios.get('/user/users');
     setUsers(res.data.response);
    }
   getAllUser();
    
  },[])

  return (
    <>
      <Spacing lg="110" md="80" />
      <Div className="container">
      <Div className="col-lg-12">
        <table>
        <tr>
         <th>Nom et prénom</th>
         <th>email</th>
         <th>Mot de passe</th>
         <th>Role</th>
         <th>Modifier</th>
         </tr>
         
         {Users?.map((item,index)=>(
                                <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.role}</td>
                                <td>
                                <button  className="cs-btn cs-style1">
                                <Link to={`/user/updateUser/${item._id}`}>Modifier</Link>
                                </button>
                              
                                </td>
                              </tr>
              ))} 
       </table>
     </Div>
      </Div>
      </>
  )
}

export default Users