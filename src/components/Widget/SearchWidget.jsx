import { Icon } from '@iconify/react'
import React ,{useContext} from 'react'
import { GlobalState } from '../../GlobalState'

export default function SearchWidget({title}) {
  const state = useContext(GlobalState) 
  const [search , setSearch]= state.offersApi.search
  return (
    <>
      <h4 className="cs-sidebar_widget_title ">{title}</h4>
      <form className="cs-sidebar_search col-sm-4">
        <input type="text" placeholder="Chercher..."
         onChange={e=>setSearch(e.target.value.toLowerCase())}
         value={search}/>
        <button className="cs-sidebar_search_btn">
          <Icon icon="material-symbols:search-rounded" />                   
        </button>
      </form>
    </>
  )
}
