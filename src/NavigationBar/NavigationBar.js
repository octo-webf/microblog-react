import React from 'react';
import NavigationLink from '../NavigationLink/NavigationLink';
import {
  navigationBar,
  navigationBarInner,
  navigationBarInnerContainer,
  navigationBarLinks,
  navigationBarUl,
  navigationBarLi,
} from './NavigationBar.css';

const NavigationBar = () => (
  <div className={navigationBar}>
    <div className={navigationBarInnerContainer}>
      <div className={navigationBarInner}>
        <div className={navigationBarLinks}>
          <ul className={navigationBarUl}>
            <li className={navigationBarLi}>
              <NavigationLink icon="home" url="/#" label="Accueil" isActive="active" />
            </li>
            <li className={navigationBarLi}>
              <NavigationLink icon="info-circle" url="/#about" label="À propos" isActive="" />
            </li>
            <li className={navigationBarLi}>
              <NavigationLink icon="rocket" url="/#login" label="Login" isActive="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);


export default NavigationBar;
