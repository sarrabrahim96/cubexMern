import React ,{useContext} from 'react'
import {GlobalState} from '../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page , setPage] = state.offersApi.page
    const [resut] = state.offersApi.result
  return (
    <div className='load_more'>
        {
            resut < page * 9 ? "" :
            <button onClick={()=> setPage(page+1)}>Charger Plus</button>
        }
    </div>
  )
}
export default LoadMore