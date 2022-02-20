import React, { useState } from "react";
import Input from "../../components/input/Input";
import TextBox from "../../components/textBox/textBox";
import "./contact.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "../../components/Footer";
import { InstagramDiv } from "../../components/Footer";
import styled from "styled-components";
import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const SocialIconContact = styled(SocialIcon)`
  margin: 0;
  height: 45px;
  width: 45px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  transition: all 0.3s ease;
`;

const InstagramContact = styled(InstagramDiv)`
  margin: 0;
  height: 45px;
  width: 45px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  transition: all 0.3s ease;
`;

const Contact = () => {
  const form = useRef();
  const [userName, setUserName] = useState();
  const [userMail, setUserMail] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_bp5i3x7",
        "template_p29ffg9",
        form.current,
        "user_z4qU2XvXdxi4sUTtnIf5I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="social-media">
        <SocialIconContact color="#3b5998">
          <Facebook style={{ fontSize: "33px" }} />
        </SocialIconContact>
        <InstagramContact>
          <Instagram style={{ fontSize: "33px" }} />
        </InstagramContact>
        <SocialIconContact color="#1289e4">
          <Twitter style={{ fontSize: "33px" }} />
        </SocialIconContact>
        <SocialIconContact color="#0d648c">
          <LinkedIn style={{ fontSize: "33px" }} />
        </SocialIconContact>
      </div>
      <div className="contact-content">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <p className="contact-text">Contact Form</p>
          <Input
            type="text"
            name="user_name"
            text="Name"
            setvalue={(e) => setUserName(e.target.value)}
          />
          <Input
            type="email"
            name="user_email"
            text="Email"
            setvalue={(e) => setUserMail(e.target.value)}
          />
          <TextBox name="message" text="Enter your message here please" />

          <button className="contact-button">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
