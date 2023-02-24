import { Icon } from '@iconify/react';
import { pageTitle } from '../../../helper';
import Div from '../../Div';
import Spacing from '../../Spacing';
import React ,{useState , useContext , useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import {useParams} from 'react-router-dom'
import './createOffer.scss'

const initialeState ={
  poste_id:'',
  poste:'',
  description:'',
  compétences:'',
  experience:'',
  pays:'',
  Ville:'',
  region:'',
  nbCandidat:'',
  _id : ''
}


 function CreateOffer() {
  pageTitle('Créer offre');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const state = useContext(GlobalState)
    const [offer , setOffer] = useState(initialeState)
    const [images, setImages]=useState('')
    const [isAdmin] = state.UserApi.isAdmin
    const [token] = state.token
    const param = useParams() 
    const [onEdit , setOnEdit] = useState(false)
    const [callback , setCallback]= state.offersApi.callback    
    const [offers] = state.offersApi.offers

useEffect(()=>{
        if(param.id){
            setOnEdit(true)
            offers.forEach(off => {
                if(off._id === param.id) {
                    setOffer(off)
                    setImages(off.img)
                }
            });
           
        }else{
            setOffer(initialeState)
            setImages('')
            setOnEdit(false)
        }
    },[param.id , offers])

    // handle and convert it in base 64
const setFileToBase = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
      setImages(reader.result);
     
    }
 }
 const HandleUpload = async e =>{
   e.preventDefault()
try {
    if(!isAdmin) return alert("vous n'étes pas un admin.")
    const file= e.target.files[0]
    if(!file) return alert("fichier n'existe pas.")

    if(file.size > 1024 * 1024)
        return alert("Size too large!")
    if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/jpg')
        return alert("incorrect file format")
    setFileToBase(file)
} catch (error) {
    alert(error.response.data.msg)
    
}
} 
const HandleChangeInput = e =>{
    const {name , value} = e.target
    setOffer({...offer , [name]:value})


}
// submit the form
const HandleSubmit = async e =>{
 e.preventDefault()
 try {
    if(!isAdmin) return alert("vous n'étes pas un admin.")
    if(!images) return ('no image Upload.')
    if(onEdit){
        await axios.put(`/api/offer/${offer._id}` , {...offer ,img:images} ,
        {headers :{Authorization :token}}
    )}
    else{
        await axios.post('/api/offer' , {...offer ,img:images} ,
        {headers :{Authorization :token}})
    }
   setCallback(!callback)
 
 } 
 catch (error) {
    alert(error.response.data.msg)
 }
}
const styleUpload ={
        display : images ? "block" : "none"
    }
    const deleteOffer = async() =>{
      console.log(offer)
      try {
        await axios.delete(`/api/offer/${offer._id}` ,{headers : {Authorization:token}})
        setCallback(!callback)
      
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
            <form action="#" className="row" onSubmit={HandleSubmit} encType='multipart/form-data'>
              <Div className="col-sm-6">
                <label className="cs-primary_color">ID Poste</label>
                <input type="text" className="cs-form_field" name='poste_id'
                value={offer.poste_id} onChange={HandleChangeInput} disabled={onEdit} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Poste</label>
                <input type="text" className="cs-form_field" name='poste'
                value={offer.poste} onChange={HandleChangeInput}/>
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Pays</label>
                <input type="text" className="cs-form_field" name='pays'
                value={offer.pays} onChange={HandleChangeInput} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Ville</label>
                <input type="text" name='Ville' className="cs-form_field"
                value={offer.Ville} onChange={HandleChangeInput} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Region</label>
                <input type="text" name='region' className="cs-form_field"
                value={offer.region} onChange={HandleChangeInput} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Compétences</label>
                <input type="text" name='compétences' className="cs-form_field"
                value={offer.compétences} onChange={HandleChangeInput} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Experiences</label>
                <input type="text" name='experience' className="cs-form_field"
                value={offer.experience} onChange={HandleChangeInput} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Nombre de Candidats</label>
                <input type="number" className="cs-form_field" />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Description</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  name='description'onChange={HandleChangeInput}
                  value={offer.description}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Image</label>
                <input type='file' name='file' className="cs-form_field"
                onChange={HandleUpload}
                ></input>
                <Spacing lg="25" md="25" />
                   <div id='file_img'style={styleUpload}>
                    <img src={images} alt=""/>
                    <span onClick={()=>setImages('')}>X</span>
              </div>
              </Div>
              <Spacing lg="25" md="25" />
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type='submit'>
                  <span>{onEdit ? 'Modifier  ' :'créer'}</span>
                  <Icon icon="bi:arrow-right" />
                </button>
                <Spacing lg="25" md="25" />
                {onEdit ? 
                  <button className="cs-btn cs-style1" type='submit' onClick={deleteOffer}>
                    <span>{onEdit ? 'Supprimer' :''}</span>
                    <Icon icon="bi:arrow-right" />
                    </button> :''}

              </Div>
            </form>
          </Div>
        </Div>
      </>
        );
      }
  export default CreateOffer