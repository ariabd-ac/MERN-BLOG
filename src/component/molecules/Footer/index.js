import React from "react";
import "./footer.scss";
import {
  Logo,
  ICFacebook,
  ICInstagram,
  ICLinkedin,
  ICTelegram,
  ICWhatsapp,
  ICTwitter,
  LogoJPG,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICInstagram} />
          <Icon img={ICLinkedin} />
          <Icon img={ICTelegram} />
          <Icon img={ICWhatsapp} />
          <Icon img={ICTwitter} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
