import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { about } from './About.css';

const About = function() {
  return (
    <div>
      <NavigationBar />
      <h1 className={about}>About the page</h1>
    </div>
  );
};

export default About;

