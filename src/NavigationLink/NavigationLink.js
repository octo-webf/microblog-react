import React from "react";
import FontAwesome from "react-fontawesome";
import {navigationLink, navigationLink__icon, navigationLink__link, navigationLink__label} from "./NavigationLink.css";

const NavigationLink = (props) => (
  <div className={navigationLink}>
    <a href={ props.url } className={navigationLink__link}>
      <FontAwesome name={ props.icon } size="2x" className={navigationLink__icon}/>
      <span className={navigationLink__label}>{ props.label }</span>
    </a>
  </div>
);

export default NavigationLink;
