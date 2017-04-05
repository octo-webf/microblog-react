import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router';
import Logout from './Logout';

describe('Logout component', () => {
  describe('on render', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    it('should redirect to login and remove name in localstorage', () => {
      // given
      window.localStorage.setItem('name', 'fake name');

      // when
      const wrapper = shallow(<Logout />);

      // then
      expect(window.localStorage.length).to.equal(0);

      const redirectComponent = wrapper.find(Redirect);
      expect(redirectComponent).to.have.length(1);
      expect(redirectComponent.props().to).to.equal('/login');
    });
  });
});
