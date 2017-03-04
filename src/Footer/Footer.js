import React, {Component} from "react";
import {footer} from "./Footer.css";
import FooterLink from "../FooterLink/FooterLink";

const webf_link = { href: 'https://github.com/octo-web-front-end-tribe', text: 'tribu WEBF' }
const octo_link = { href: 'http://www.octo.com/fr', text: 'OCTO Technology' }

class Footer extends Component {
  render() {
    return (
      <div className={footer}>
        Développé avec ♥ par la <FooterLink footer_link={webf_link}/> © 2017 <FooterLink footer_link={octo_link}/>
      </div>
    )
  }
}

export default Footer;
