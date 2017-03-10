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

const NavigationBar = (props) => {
  return props.navigationLinks ?
    (
      <div className={ navigationBar }>
        <div className={ navigationBar__inner }>
          <div className={ navigationBar__link }>
            <ul className={ navigationBar__ul }>
              { props.navigationLinks.reverse()
                .map(navigationLink =>
                  <li className={ navigationBar__li }>
                    <NavigationLink key={navigationLink.id} navigationLink={navigationLink}/>
                  </li>) }
            </ul>
          </div>
        </div>
      </div>
    )
    : null
}

export default NavigationBar;
