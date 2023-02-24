import React , {createContext , useState , useEffect} from 'react'
import OffersApi from "./api/offerApi"
import UserAPI from "./api/UserApi"
import UsersAPI from './api/UsersAPI'
import axios from 'axios'


export const GlobalState = createContext()

export const DataProvider = ({children}) => {
  const [token , setToken] = useState(false)
  
  useEffect(()=>{
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin ){    
      const refreshToken = async () => {
      const res = await axios.get('/user/refresh_token')
      setToken(res.data.accessToken)

      setTimeout(() =>{
        refreshToken()
      }, 10 * 60 * 1000)
    }
     refreshToken()

    }

  },[])
  
   const state ={
    token : [token , setToken],
    offersApi : OffersApi(),
    UserApi : UserAPI(token),
    UsersAPI : UsersAPI()


  }

  return(
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
  )
}

