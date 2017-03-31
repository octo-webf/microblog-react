import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import RouteApp from './RouteApp';
import App from '../App/App';
import About from '../About/About';
import Login from '../Login/Login';
import { requireAuth } from './RouteService';


describe('RouteApp', () => {
  it('should render correct routes', () => {
    const wrapper = shallow(<RouteApp />);

    expect(wrapper.find(Route).at(0).prop('path')).to.equal('/');
    expect(wrapper.find(Route).at(0).prop('component')).to.equal(App);
    expect(wrapper.find(Route).at(0).prop('onEnter')).to.equal(requireAuth);

    expect(wrapper.find(Route).at(1).prop('path')).to.equal('about');
    expect(wrapper.find(Route).at(1).prop('component')).to.equal(About);

    expect(wrapper.find(Route).at(2).prop('path')).to.equal('login');
    expect(wrapper.find(Route).at(2).prop('component')).to.equal(Login);
  });
});
