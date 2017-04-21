import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router';
import sinon from 'sinon';
import AuthenticatedRoute from './AuthenticatedRoute';
import * as AuthenticationService from '../AuthenticationService/AuthenticationService';

const MockedSubComponent = () => <div />;

describe('AuthenticatedRoute component', () => {
  describe('on render', () => {
    let stubIsAuthenticated;

    describe('not logged in', () => {
      beforeEach(() => {
        window.localStorage.clear();
        stubIsAuthenticated = sinon.stub(AuthenticationService, 'isAuthenticated')
          .returns(false);
      });

      afterEach(() => {
        stubIsAuthenticated.restore();
      });

      it('should redirect to login', () => {
        // when
        const wrapper = shallow(<AuthenticatedRoute><MockedSubComponent /></AuthenticatedRoute>);

        // then
        const redirectComponent = wrapper.find(Redirect);
        expect(redirectComponent).to.have.length(1);
        expect(redirectComponent.props().to).to.equal('/login');
      });
    });

    describe('logged in', () => {
      beforeEach(() => {
        window.localStorage.clear();
        stubIsAuthenticated = sinon.stub(AuthenticationService, 'isAuthenticated')
          .returns(true);
      });

      afterEach(() => {
        stubIsAuthenticated.restore();
      });

      it('should display children', () => {
        // given
        window.localStorage.setItem('name', 'fake name');

        // when
        const wrapper = shallow(<AuthenticatedRoute><MockedSubComponent /></AuthenticatedRoute>);

        // then
        const redirectComponent = wrapper.find(MockedSubComponent);
        expect(redirectComponent).to.have.length(1);
      });
    });
  });
});
