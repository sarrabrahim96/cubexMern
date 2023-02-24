import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { pageTitle } from '../../helper';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';


export default function ContactPage() {
const [form, setForm] = useState({
    username:"",
    email:"",
    numtel:"",
    msg:""
  })
const [images, setImages]=useState('')

const HandleChangeInput = e =>{
    const {name , value} = e.target
    setForm({...form , [name]:value})
    console.log("form",form)


}
const HandleSubmit = async e =>{
  e.preventDefault()
  try {
     
    await axios.post('/contact/addcontact' , {...form , image : images})
     alert("Message envoyée")
  } 
  catch (error) {
     alert(error.response.data.msg)
  }
 }

const HandleUpload = async e =>{
  e.preventDefault()
try {
   const file= e.target.files[0]
   if(!file) return alert("fichier n'existe pas.")

   if(file.size > 1024 * 1024)
       return alert("Size too large!")
   if(file.type !== 'image/jpeg' && file.type !== 'image/pdf' && file.type !== 'image/jpg')
       return alert("incorrect file format")
   setFileToBase(file)
} catch (error) {
   alert(error.response.data.msg)
   
}
} 

const setFileToBase = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
  setImages(reader.result);
 
}
}




  pageTitle('CONTACTEZ-NOUS');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="CONTACTEZ-NOUS"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contactez-nous"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="CONTACTEZ-NOUS"
              subtitle=""
            />
            <Spacing lg="55" md="30" />
            
            <h4>Un de nos Experts prendra contact avec vous si nous pouvons répondre à votre demande.</h4>
            
            <p>Dans le cas contraire , nous regrettons de ne pouvoir vous accompagner .</p>
            <Spacing lg="55" md="30" />
          
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form action="#" className="row" onSubmit={HandleSubmit}>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Nom et prénom*</label>
                <input type="text" name='username' className="cs-form_field" 
                placeholder='Nom et prénom' required onChange={HandleChangeInput}
                value={form.username} />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input type="email"  name= 'email' className="cs-form_field" placeholder='Adresse e-mail' 
                required onChange={HandleChangeInput} value={form.email}  />
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Numéro de téléphone *</label>
                <input type="text" name ='numtel' className="cs-form_field"  
                required onChange={HandleChangeInput}  value={form.numtel}/>
                <Spacing lg="20" md="20" placeholder ='Numéro de téléphone' />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Numéro de téléphone </label>
                <input type="text" className="cs-form_field" onChange={HandleChangeInput}/>
                <Spacing lg="20" md="20" placeholder ='Numéro de téléphone' />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Ajouter un CV </label>
                <input type="file" className="cs-form_field"
                 onChange={HandleUpload} name='file'/>
                <Spacing lg="20" md="20" placeholder ='Numéro de téléphone'
               
                />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message de description*</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  placeholder='Message de description '
                  name='msg'
                  onChange={HandleChangeInput}
                  value={form.msg}
                ></textarea>
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type='submit'>
                  <span>Envoyer</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.3484784728596!2d10.628317861444433!3d35.82348560816371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302757b508a494b%3A0xf30f0332d09aae4!2sUPSAT%20-%20Facult%C3%A9%20des%20Sciences%20de%20la%20Sant%C3%A9%20-%20Sousse!5e0!3m2!1sfr!2stn!4v1675258888023!5m2!1sfr!2stn" 
       allowFullScreen="">
      </iframe>
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
