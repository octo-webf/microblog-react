import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import {
  navigationBar,
  navigationBarInnerContainer,
  navigationBarUl,
  navigationBarLi,
} from './NavigationBar.css';

const NavigationBar = (props) => {
  const homeActive = ((props.onHomepage === 'true') ? 'active' : '');
  const aboutActive = ((props.onHomepage === 'true') ? '' : 'active');

  return (
    <div className={navigationBar}>
      <div className={navigationBarInnerContainer}>
        <div>
          <ul className={navigationBarUl}>
            <li className={navigationBarLi}>

              <NavigationLink icon="home" url="/" label="Accueil" isActive={homeActive} />
            </li>
            <li className={navigationBarLi}>
              <NavigationLink
                icon="info-circle" url="/about"
                label="À propos" isActive={aboutActive}
              />
            </li>
          </ul>
        </div>

        <div>
          <NavigationLink icon="power-off" url="/logout" label="Déconnecter" isActive="" />
        </div>
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  onHomepage: React.PropTypes.string.isRequired,
};

export default NavigationBar;
