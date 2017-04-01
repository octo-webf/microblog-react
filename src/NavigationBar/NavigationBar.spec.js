import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';
import NavigationLink from '../NavigationLink/NavigationLink';

describe('NavigationBar component', () => {
  describe('on first render', () => {
    describe('with defined props', () => {
      it('should render 4 NavigationLinks', () => {
        const wrapper = shallow(<NavigationBar />);

        expect(wrapper.find(NavigationLink)).to.have.length(4);
      });

      it('should construct NavigationLink with home props', () => {
        const wrapper = shallow(<NavigationBar />);

        expect(wrapper.find(NavigationLink).at(0).prop('icon')).to.equal('home');
        expect(wrapper.find(NavigationLink).at(0).prop('url')).to.equal('/');
        expect(wrapper.find(NavigationLink).at(0).prop('label')).to.equal('Accueil');
        expect(wrapper.find(NavigationLink).at(0).prop('isActive')).to.equal('active');
      });

      it('should construct NavigationLink with about props', () => {
        const wrapper = shallow(<NavigationBar />);

        expect(wrapper.find(NavigationLink).at(1).prop('icon')).to.equal('info-circle');
        expect(wrapper.find(NavigationLink).at(1).prop('url')).to.equal('/about');
        expect(wrapper.find(NavigationLink).at(1).prop('label')).to.equal('À propos');
        expect(wrapper.find(NavigationLink).at(1).prop('isActive')).to.equal('');
      });

      it('should construct NavigationLink with about props', () => {
        const wrapper = shallow(<NavigationBar />);

        expect(wrapper.find(NavigationLink).at(2).prop('icon')).to.equal('rocket');
        expect(wrapper.find(NavigationLink).at(2).prop('url')).to.equal('/login');
        expect(wrapper.find(NavigationLink).at(2).prop('label')).to.equal('Login');
        expect(wrapper.find(NavigationLink).at(2).prop('isActive')).to.equal('');
      });

      it('should construct NavigationLink with about props', () => {
        const wrapper = shallow(<NavigationBar />);

        expect(wrapper.find(NavigationLink).at(3).prop('icon')).to.equal('power-off');
        expect(wrapper.find(NavigationLink).at(3).prop('url')).to.equal('/logout');
        expect(wrapper.find(NavigationLink).at(3).prop('label')).to.equal('Déconnecter');
        expect(wrapper.find(NavigationLink).at(3).prop('isActive')).to.equal('');
      });
    });
  });
});
