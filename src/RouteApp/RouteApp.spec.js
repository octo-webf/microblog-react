import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import RouteApp from './RouteApp';
import NavigationBar from '../NavigationBar/NavigationBar';

describe('RouteApp', () => {
  it('should render correct routes', () => {
    const wrapper = shallow(<RouteApp />);
    expect(wrapper.find(Route).at(0).prop('path')).to.equal('/');
    expect(wrapper.find(Route).at(1).prop('path')).to.equal('/about');
    expect(wrapper.find(Route).at(2).prop('path')).to.equal('/login');
  });

  it('should render NavigationBar', () => {
    const wrapper = shallow(<RouteApp />);

    const navigationBar = wrapper.find(NavigationBar);
    expect(navigationBar).to.have.length(1);
    expect(wrapper.find(NavigationBar).at(0).prop('onHomepage')).to.equal('true');
  });
});
