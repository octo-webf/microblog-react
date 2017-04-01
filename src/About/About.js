import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { app, container } from './About.css';

const About = () =>
  (
    <div className={app}>
      <NavigationBar />
      <div className={container}>
        <h1>About</h1>
      </div>
    </div>
  );

export default About;

