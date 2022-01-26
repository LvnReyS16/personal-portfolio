import React,{useState} from 'react';
import {AiOutlineMail, AiOutlinePhone,AiOutlineEnvironment} from 'react-icons/ai';
import {FiSend} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import {ToastContainer,toast } from 'react-toastify';
import {CircularProgress} from '@material-ui/core';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const [isLoading, setIsLoading] = useState(false);

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: "",
    })



    const sendEmail = (e) =>{
        setIsLoading(true);
        e.preventDefault();
        console.log(values)
        emailjs.send('service_4c8gpdc', 'template_0g3bx2o', values, 'user_NPU9jRD38QG7bjKnj1qca')
        .then((result) => {
            toast.success('Message Send',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setIsLoading(false);
                console.log(result.text)
        }, (error) => {
            toast.error('Message not send', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        });
        setValues({
            name: "",
            email: "",
            message: "",
        })
    }

    const handleChange = (e) =>{
        const name = e.target.name;
        
        setValues(values => ({
            ...values, [name] : e.target.value
        }))
       
    }


  return(
       <div className='contact-container'>
            <div className="contact-header">
               <h2>Contact Me</h2>
               
            </div>

           <div className="contact-details">
            <div className="contact-content">                   
                   <div className="contact-details-content">
                   <AiOutlineMail className='AiOutlineMail'/>
                       <div className="contact-details-content-text">
                            <h3>Email Address</h3>
                            <p>saavedra.lvnry@gmail.com</p>
                       </div>
                        
                   </div>
                   <div className="contact-details-content">
                   <AiOutlinePhone className='AiOutlineMail'/>
                       <div className="contact-details-content-text">
                            <h3>Contact Number</h3>
                            <p>+639664039699</p>
                       </div>
                        
                   </div>
                   <div className="contact-details-content">
                   <AiOutlineEnvironment className='AiOutlineMail'/>
                       <div className="contact-details-content-text">
                            <h3>Home Address</h3>
                            <p>Zamboanga City, Philippines</p>
                       </div>
                        
                   </div>
                    
               
              
            </div> 
            <div className="contact-form">
            <ToastContainer />
                {isLoading?(
                    <div className='loading'> 
                    <CircularProgress size="5rem"/>
                    </div>

                ):(
                
                    <form className="form-details" onSubmit={sendEmail}>
                        <div className="input-header">  
                            <input type="text" placeholder='Name' name="name" value={values.name} onChange={handleChange}></input>
                            <input type="text" placeholder='Email Address' name="email" value={values.email} onChange={handleChange}></input>
                        </div>
                        <div className="input-messsage">
                            <textarea placeholder='Message' name="message" value={values.message} onChange={handleChange}></textarea>
                        </div>
                        <div className="button-submit">
                        <button type="submit">Send Message <FiSend/></button>
                       
                        </div>
                    </form>
                    
                )}
                    
               </div>
        </div>
      </div>
  )}

export default Contact;
