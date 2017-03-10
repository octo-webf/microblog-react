import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { about } from './About.css';

const navigationLink1 = { id: 'abcd', url: '/#', icon: 'homeIcon', label: 'Accueil' };
const navigationLink2 = { id: 'abcd2', url: '/#about', icon: 'icon', label: 'A propos' };

const navigationLinks = [
  navigationLink1,
  navigationLink2,
];

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationLinks,
    };
  }

  render() {
    return (
      <div>
        <NavigationBar navigationLinks={this.state.navigationLinks} />
        <h1 className={about}>About the page</h1>
      </div>
    );
  }
}

export default About;

