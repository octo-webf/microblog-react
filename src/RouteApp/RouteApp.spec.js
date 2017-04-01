import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from 'react-router';
import RouteApp from './RouteApp';

describe('RouteApp', () => {
  it('should render correct routes', () => {
    const wrapper = shallow(<RouteApp />);
    expect(wrapper.find(Route).at(0).prop('path')).to.equal('/');
    expect(wrapper.find(Route).at(1).prop('path')).to.equal('/about');
    expect(wrapper.find(Route).at(2).prop('path')).to.equal('/login');
  });
});
