import React from "react";
const FontAwesome = require("react-fontawesome");
import {navigationLink, navigationLink__icon, navigationLink__link, navigationLink__label} from "./NavigationLink.css";

const NavigationLink = (props) => (
  <div className={navigationLink}>
    <a href={ props.navigationLink.url } className={navigationLink__link}>
      <FontAwesome name="home" size="2x" className={navigationLink__icon}/>
      <span className={navigationLink__label}>{ props.navigationLink.label }</span>
    </a>
  </div>
);

export default NavigationLink;
