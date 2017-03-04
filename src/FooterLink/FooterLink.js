import React from 'react';
import { footer_link } from './FooterLink.css'

const FooterLink = (props) => (
    <a href={ props.footer_link.href } className={footer_link}>{ props.footer_link.text }</a>
);

export default FooterLink;
