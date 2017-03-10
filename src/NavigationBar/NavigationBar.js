import React from "react";
import NavigationLink from "../NavigationLink/NavigationLink";
import {
  navigationBar,
  navigationBar__inner,
  navigationBar__brand,
  navigationBar__link,
  navigationBar__ul,
  navigationBar__li
} from "./NavigationBar.css";

const NavigationBar = () => (
  <div className={ navigationBar }>
    <div className={ navigationBar__inner }>
      <div className={ navigationBar__link }>
        <ul className={ navigationBar__ul }>
          <li className={ navigationBar__li }>
            <NavigationLink icon="home" url="/#" label="Accueil"/>
          </li>
          <li className={ navigationBar__li }>
            <NavigationLink icon="info-circle" url="/#about" label="A propos"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
)


export default NavigationBar;
