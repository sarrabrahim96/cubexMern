import React, { useEffect, useState } from "react";
import Spacing from "../../Spacing";
import Div from "../../Div";
import { pageTitle } from "../../../helper";
import {saveAs} from 'file-saver'
import axios from "axios";

function Contact() {

  pageTitle("Contact");
  const [Contact, setContact] = useState([]);
  const axiosInstance = axios.create({baseURL :"https://cubexback.online"})

  useEffect(() => {
    const getContact = async () => {
      const res = await axios.get("/contact/getcontact"); 
      setContact(res.data.response);
    };
    getContact();
  }, []);

  return (
    <>
      <Spacing lg="110" md="80" />
      <Div className="container">
        <Div className="col-lg-12">
          <table>
            <tr>
              <th>Nom et prénom</th>
              <th>Email</th>
              <th>Numéro de téléphone</th>
              <th>Message de description</th>
              <th>CV </th>
            </tr>
            {Contact?.map((item,index)=>(
                                <tr key={index}>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.numtel}</td>
                                <td>{item.msg}</td>
                                <td>
                                  <img src={item.image} style={{width:'100%' , height : "100%"}}></img>
                                </td>
                              </tr>
              ))} 

          </table>
        </Div>
      </Div>
    </>
  );
}

export default Contact;
