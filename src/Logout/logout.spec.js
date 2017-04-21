import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router';
import Logout from './Logout';
import * as AuthenticationService from '../AuthenticationService/AuthenticationService';

describe('Logout component', () => {
  describe('on render', () => {

    let stubLogout;

    beforeEach(() => {
      window.localStorage.clear();
      stubLogout = sinon.stub(AuthenticationService, 'logout');
    });

    afterEach(() => {
      stubLogout.restore();
    });


    it('should redirect to login and remove name in localstorage', () => {
      // given
      window.localStorage.setItem('name', 'fake name');

      // when
      const wrapper = shallow(<Logout />);

      // then
      expect(stubLogout.calledOnce).to.be.true;

      const redirectComponent = wrapper.find(Redirect);
      expect(redirectComponent).to.have.length(1);
      expect(redirectComponent.props().to).to.equal('/login');
    });
  });
});
