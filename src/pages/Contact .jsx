import React from "react";
import Input from '../components/input/Input'
import TextBox from '../components/textBox/textBox'
import './contact/contact.css'
import {GrInstagram} from 'react-icons/gr'
import {GrFacebook} from 'react-icons/gr'
import {GrLinkedin} from 'react-icons/gr'
import {GrTwitter} from 'react-icons/gr'


const Contact = () => {
  return( 
    <div className="contact-container">
      <div className="contact-content">
        <form className="contact-form">
          <Input name="name" type="text" text='Name'/>
          <Input name="Email" type="email" text='Email'/>
          <TextBox text='Enter your message here please'/>
          <div className='submit-btn'>
            <button>Submit</button>
          </div> 
        </form>
        <div className="contact-social">
          <div className="contact-social_head">
            <span>For further info follow us on our social platform!</span>
          </div>
          <div className="contact-social_instagram">
            <a href="https://instagram.com"><GrInstagram /> <span>instagram</span></a>
          </div>
          <div className="contact-social_facebook">
            <a href="https://www.facebook.com"><GrFacebook /> <span>Facebook</span></a>
          </div>
          <div className="contact-social_linkedin">
          <a href="https://www.linkedin.com"><GrLinkedin /><span>Linkedin</span></a>
          </div>
          <div className="contact-social_twitter">
          <a href="https://www.twitter.com"><GrTwitter /><span>Twitter</span></a>
          </div>
        </div>
      </div>
    </div>
  )
  ;
};

export default Contact;
