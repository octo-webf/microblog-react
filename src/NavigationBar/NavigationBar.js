import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import {
  navigationBar,
  navigationBarInner,
  navigationBarLink,
  navigationBarUl,
  navigationBarLi,
} from './NavigationBar.css';

const NavigationBar = () => (
  <div className={navigationBar}>
    <div className={navigationBarInner}>
      <div className={navigationBarLink}>
        <ul className={navigationBarUl}>
          <li className={navigationBarLi}>
            <NavigationLink icon="home" url="/#" label="Accueil" />
          </li>
          <li className={navigationBarLi}>
            <NavigationLink icon="info-circle" url="/#about" label="A propos" />
          </li>
        </ul>
      </div>
    </div>
  </div>
);


export default NavigationBar;
