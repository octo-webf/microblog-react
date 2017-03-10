import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';
import FooterLink from '../FooterLink/FooterLink';

const webfLink = { href: 'https://github.com/octo-web-front-end-tribe', text: 'tribu WEBF' };
const octoLink = { href: 'http://www.octo.com/fr', text: 'OCTO Technology' };

describe('Footer component', () => {
  describe('on first render', () => {
    describe('with defined props', () => {
      it('should render Footer', () => {
        const wrapper = shallow(<Footer />);

        expect(wrapper.find(FooterLink)).to.have.length(2);
        expect(wrapper.contains(<FooterLink footerLink={webfLink} />)).to.be.true;
        expect(wrapper.contains(<FooterLink footerLink={octoLink} />)).to.be.true;
      });
    });
  });
});
