import React from "react";
import Image from "next/image";
import facebookIcon from "../assets/icons/facebook.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import googlePlayIcon from "../assets/icons/googlePlay.svg";
import appleStoreIcon from "../assets/icons/appleStore.svg";

const Footer = () => {
  return (
    <footer className="ml-footer">
      <div className="footer-grid">
        <h3>methodloop</h3>
        <p className="grid-text">
          Optimize the entire design process
          <br /> in one simple to use platform.
        </p>
        <ul className="social-list">
          <li>
            <Image src={twitterIcon} height="17" width="20" alt="twitter" />
          </li>
          <li>
            <Image src={linkedinIcon} height="17" width="20" alt="twitter" />
          </li>
          <li>
            <Image src={facebookIcon} height="17" width="20" alt="twitter" />
          </li>
          <li>
            <Image src={instagramIcon} height="17" width="20" alt="twitter" />
          </li>
        </ul>
        <p className="copyright-text">Copyright 2023. Clue Group Pty Ltd</p>
      </div>
      <div className="footer-grid">
        <h4 className="list-header">Company</h4>
        <ul className="grid-list">
          <li className="grid-item">About</li>
          <li className="grid-item">Careers</li>
          <li className="grid-item">Mobile</li>
        </ul>
      </div>
      <div className="footer-grid">
        <h4 className="list-header">Contact</h4>
        <ul className="grid-list">
          <li className="grid-item">Help/FAQ</li>
          <li className="grid-item">Press</li>
          <li className="grid-item">Affiliates</li>
        </ul>
      </div>
      <div className="footer-grid">
        <h4 className="list-header">More</h4>
        <ul className="grid-list">
          <li className="grid-item">UXDCards®</li>
          <li className="grid-item">SXDCards®</li>
          <li className="grid-item">Design Compass®</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
