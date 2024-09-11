import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="wrapper">
          <h1>Send us a message</h1>

          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />

            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Message"
            ></textarea>
            <button class="btn">Connect</button>
          </form>
        </div>

        <div class="contact-info">
          <h3>Contact Us</h3>

          <p>We're open for any suggestion or just to have a chat</p>

          <a className="info-wrapper" href="">
            <div className="icons">
              <SiMinutemailer />
            </div>
            <p>Email:</p>
            <span>ishwabharati@gmail.com</span>{" "}
          </a>

          <a className="info-wrapper" href="">
            <div className="icons">
              <FaGithubSquare />
            </div>
            <p>Github:</p>
            <span>BharatiPatra</span>
          </a>
          <a className="info-wrapper" href="">
            <div className="icons">
              <CiLinkedin />
            </div>
            <p>Linkedin:</p>
            <span>Ishwa Bharati</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
