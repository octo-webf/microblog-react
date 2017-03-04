import React from "react";
import {navigationLink, navigationLink__link, navigationLink__label} from "./NavigationLink.css";

const NavigationLink = (props) => (
  <div className="navigationLink">
    <a href={ props.navigationLink.url } className="navigationLink__link">
      <i aria-hidden="true" className={ props.navigationLink.icon }></i>
      <span className="navigationLink__label">{ props.navigationLink.label }</span>
    </a>
  </div>
);

export default NavigationLink;
