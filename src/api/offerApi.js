import  {useState , useEffect }from 'react'
import axios from "axios"


function Offerapi() {
const [offers , setOffers] = useState([])
const [callback , setCallback] = useState(false)
const [pays , setpays]= useState('')
const [sort , setSort]= useState('')
const [search , setSearch]= useState('')
const [page , setpage]= useState(1)
const [result , setResult]= useState(0)

useEffect(() =>{
  const getoffers = async () => {
    const res = await axios.get(`/api/offer?limit=${page*9}&${pays}&${sort}&poste[regex]=${search}`)
    setResult(res.data.result)
    setOffers(res.data.Offers)
  
 }
 try {
  getoffers()
} catch (error) {
  console.log(error)
}
  
},[callback,pays,sort,search,page]);

  return {
    offers :[offers , setOffers],
    callback : [callback , setCallback], 
    pays : [pays , setpays],
    sort : [sort , setSort] ,
    search :[search , setSearch] ,
    page :[page , setpage],
    result :[result , setResult]

   
  }}

export default Offerapi