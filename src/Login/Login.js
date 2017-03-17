import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import LoginForm from '../LoginForm/LoginForm';
import {
  login,
  loginHeader,
  loginHeaderLogo,
  loginBody,
  loginBodyDescription,
  loginBodyForm,
  loginHeaderLogoImage,
} from './Login.css';

const imgLink = 'https://facebook.github.io/react/img/logo.svg';
const altLink = 'react logo';

const Login = () => (
  <div className={login}>
    <NavigationBar />
    <div className={loginHeader}>
      <div className={loginHeaderLogo}>
        <img alt={altLink} src={imgLink} className={loginHeaderLogoImage} />
      </div>
    </div>
    <div className={loginBody}>
      <p className={loginBodyDescription}>
        Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii
        montis illius celsi praetermeans funditur in Parthenium mare,
        Gnaeus Pompeius superato Tigrane regnis
        Armeniorum abstractas dicioni Romanae coniunxit.
      </p>
      <div className={loginBodyForm}>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default Login;
