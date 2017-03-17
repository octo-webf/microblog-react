import React from 'react';
import { footerLink } from './FooterLink.css';

const FooterLink = props => (
  <a href={props.footerLink.href} className={footerLink}>{ props.footerLink.text }</a>
);

FooterLink.propTypes = {
  footerLink: React.PropTypes.shape({
    href: React.PropTypes.string,
    text: React.PropTypes.string,
  }).isRequired,
};

export default FooterLink;
