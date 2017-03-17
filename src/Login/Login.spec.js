import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavigationBar from '../NavigationBar/NavigationBar';
import LoginForm from '../LoginForm/LoginForm';
import Login from './Login';

describe('Login component', () => {
  describe('on render', () => {
    it('should render a nav bar', () => {
      const wrapper = shallow(<Login />);

      expect(wrapper.find(NavigationBar)).to.have.length(1);
    });

    it('should render a LoginForm', () => {
      const wrapper = shallow(<Login />);

      expect(wrapper.find(LoginForm)).to.have.length(1);
    });
  });
});
