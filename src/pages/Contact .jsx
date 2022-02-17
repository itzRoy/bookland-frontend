import React from "react";
import Input from "../components/input/Input";
import TextBox from "../components/textBox/textBox";
import "./contact/contact.scss";
import { GrInstagram } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { useRef } from "react";
import { GrTwitter } from "react-icons/gr";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      <div className="contact-content">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" text="Name" />
          <Input type="email" name="user_email" text="Email" />
          <TextBox name="message" text="Enter your message here please" />
          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </form>
        <div className="contact-social">
          <div className="contact-social_head">
            <span>For further info follow us on our social platform!</span>
          </div>
          <div className="contact-social_instagram">
            <a href="https://instagram.com">
              <GrInstagram /> <span>instagram</span>
            </a>
          </div>
          <div className="contact-social_facebook">
            <a href="https://www.facebook.com">
              <GrFacebook /> <span>Facebook</span>
            </a>
          </div>
          <div className="contact-social_linkedin">
            <a href="https://www.linkedin.com">
              <GrLinkedin />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="contact-social_twitter">
            <a href="https://www.twitter.com">
              <GrTwitter />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
