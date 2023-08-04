import { FC } from "react";
import React from "react";
import MeeLogo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { ImFacebook, ImYoutube } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import FooterStyle from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <section>
      <div className={FooterStyle.holdAll}>
        <div className={FooterStyle.Location}>
          <img src={MeeLogo} alt="MeeLogo" />
          <h5>Our Location</h5>
          <p>
            Head Office: 31, Theophilus Oji Street, Lekki Phase 1, Lagos,
            Nigeria.
            <br />
            Mainland Cooperate Office: 65, Allen Avenue, First Bank Bus-stop,
            Ikeja, Lagos, Nigeria.
          </p>
        </div>
        <div className={FooterStyle.AboutTiwa}>
          <ul>
            <h5>Our Service</h5>
            <li>
              <Link to="/">Real Estate Videos</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to={"inspection"}>Book an Inspection</Link>
            </li>
            <li>
              <Link to="/">How To Use Zylus Portal</Link>
            </li>
            <li>
              <Link to="/">Purchase</Link>
            </li>
          </ul>
        </div>
        <div className={FooterStyle.Support}>
          <ul>
            <h5>Contact us</h5>
            <li>
              <Link to="/">FAQS</Link>
            </li>
            <li>
              <Link to={"/"}>Customer Care</Link>
            </li>
            <li>
              <Link to={"inspection"}>Book an Inspection</Link>
            </li>
            <li>
              <Link to="/">How To Use Zylus Portal</Link>
            </li>
            <li>
              <Link to="/">News</Link>
            </li>
          </ul>
        </div>
        <div className={FooterStyle.Support1}>
          <h5>Follow Us</h5>
          <div>
            <a
              href="https://www.facebook.com/groups/1107458949860758/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <ImFacebook />
              </div>
            </a>
            <a
              href="https://www.instagram.com/zylushomes/"
              target="_blank"
              rel="noreferrer"
              style={{ margin: "0 10px" }}
            >
              <div>
                <AiOutlineInstagram />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@zylustv6590"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <ImYoutube />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
