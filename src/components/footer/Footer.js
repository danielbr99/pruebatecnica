import React from 'react';
import './Footer.css';

import facebookWhite from '../../assets/social/facebook-white.svg';
import instagramWhite from '../../assets/social/instagram-white.svg';
import twitterWhite from '../../assets/social/twitter-white.svg';

import appStore from '../../assets/store/app-store.svg';
import playStore from '../../assets/store/play-store.svg';
import windowsStore from '../../assets/store/windows-store.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-links">
          <li>Home</li>
          <li>|</li>
          <li>Terms and Conditions</li>
          <li>|</li>
          <li>Privacy Policy</li>
          <li>|</li>
          <li>Collection Statement</li>
          <li>|</li>
          <li>Help</li>
          <li>|</li>
          <li>Manage Account</li>
        </ul>
        <p className="footer-copyright">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
      </div>

      <div className="footer-bottom">
        <div className="footer-social-media">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookWhite} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterWhite} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramWhite} alt="Instagram" />
          </a>
        </div>
        <div className="footer-app-downloads">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={appStore} alt="Descargar en la App Store" />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src={playStore} alt="consiguelo en google Play" />
          </a>
          <a href="https://www.microsoft.com/store" target="_blank" rel="noopener noreferrer">
            <img src={windowsStore} alt="Descargar en windows" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;