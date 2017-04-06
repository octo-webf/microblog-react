import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from './About';

describe('About component', () => {
  it('should contain About', () => {
    const wrapper = shallow(<About />);

    expect(wrapper.text()).to.contain('About');
  });
});
