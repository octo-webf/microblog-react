import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FooterLink from './FooterLink';

const webfLink = { href: 'https://github.com/octo-web-front-end-tribe', text: 'tribu WEBF' };

describe('FooterLink component', () => {
  describe('on render', () => {
    it('should render the FooterLink', () => {
      const wrapper = shallow(<FooterLink footerLink={webfLink} />);

      expect(wrapper.contains(webfLink.href));
      expect(wrapper.text()).to.contain(webfLink.text);
    });
  });
});
