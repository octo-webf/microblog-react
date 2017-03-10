import React from 'react';
import { footer } from './Footer.css';
import FooterLink from '../FooterLink/FooterLink';

const webfLink = { href: 'https://github.com/octo-web-front-end-tribe', text: 'tribu WEBF' };
const octoLink = { href: 'http://www.octo.com/fr', text: 'OCTO Technology' };

const Footer = () => (
  <div className={footer}>
    Développé avec ♥ par la
    <FooterLink footerLink={webfLink} /> © 2017
    <FooterLink footerLink={octoLink} />
  </div>
);


export default Footer;
