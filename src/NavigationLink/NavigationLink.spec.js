import React from 'react';
import FontAwesome from 'react-fontawesome';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import NavigationLink from './NavigationLink';

const props = { id: 'abcd', url: '/', icon: 'info-circle', label: 'Accueil', isActive: 'active' };

describe('NavigationLink component', () => {
  describe('on render', () => {
    it('should render the NavigationLink', () => {
      const wrapper = shallow(<NavigationLink {...props} />);

      expect(wrapper.find(Link).prop('to')).to.equal(props.url);
      expect(wrapper.contains(props.icon));
      expect(wrapper.find('.navLinkLabel').at(0).text()).to.contain(props.label);
    });

    it('should add a FontAwesome component', () => {
      const wrapper = shallow(<NavigationLink {...props} />);

      expect(wrapper.find(FontAwesome)).to.have.length(1);
    });

    it('should define a name to the component', () => {
      const wrapper = shallow(<NavigationLink {...props} />);

      expect(wrapper.find(FontAwesome).prop('name')).to.equal('info-circle');
    });

    it('should set active into class when isActive is active', () => {
      const wrapper = shallow(<NavigationLink {...props} />);

      expect(wrapper.contains('propsLink'));
      expect(wrapper.contains('active'));
    });

    it('should not set active when isActive is not active', () => {
      const notActiveNavigationLink = {
        id: 'abcd',
        url: '/#',
        icon: 'info-circle',
        label: 'Accueil',
        isActive: '' };
      const wrapper = shallow(<NavigationLink {...notActiveNavigationLink} />);

      expect(!wrapper.contains('active'));
      expect(wrapper.contains('propsLink'));
    });
  });
});
