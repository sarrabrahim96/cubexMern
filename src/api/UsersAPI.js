import {useEffect , useState} from 'react'
import axios from 'axios'

function UsersAPI() {
    const [Users , setUsers] = useState([])


    useEffect(()=>{
        const getAllUser =  async()=>{
         const res= await axios.get('/user/users');
         setUsers(res.data.response);
        }
       getAllUser();
        
      },[])
  return {
    Users : [Users , setUsers]
  }
}

export default UsersAPI