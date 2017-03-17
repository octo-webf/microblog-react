import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FontAwesome from 'react-fontawesome';
import NavigationLink from './NavigationLink';

const navigationLink = { id: 'abcd', url: '/#', icon: 'info-circle', label: 'Accueil', isActive: 'active' };

describe('NavigationLink component', () => {
  describe('on render', () => {
    it('should render the NavigationLink', () => {
      const wrapper = shallow(<NavigationLink {...navigationLink} />);

      expect(wrapper.find('a').prop('href')).to.equal(navigationLink.url);
      expect(wrapper.contains(navigationLink.icon));
      expect(wrapper.text()).to.contain(navigationLink.label);
    });

    it('should add a FontAwesome component', () => {
      const wrapper = shallow(<NavigationLink {...navigationLink} />);

      expect(wrapper.find(FontAwesome)).to.have.length(1);
    });

    it('should define a name to the component', () => {
      const wrapper = shallow(<NavigationLink {...navigationLink} />);

      expect(wrapper.find(FontAwesome).prop('name')).to.equal('info-circle');
    });

    it('should set active into class when isActive is active', () => {
      const wrapper = shallow(<NavigationLink {...navigationLink} />);

      expect(wrapper.contains('navigationLinkLink'));
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
      expect(wrapper.contains('navigationLinkLink'));
    });
  });
});
