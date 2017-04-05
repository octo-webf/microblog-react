import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router';
import AuthenticatedRoute from './AuthenticatedRoute';

const MockedSubComponent = () => <div />;

describe('AuthenticatedRoute component', () => {
  describe('on render', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    describe('not logged in', () => {
      it('should redirect to login', () => {
        // given

        // when
        const wrapper = shallow(<AuthenticatedRoute><MockedSubComponent /></AuthenticatedRoute>);

        // then
        const redirectComponent = wrapper.find(Redirect);
        expect(redirectComponent).to.have.length(1);
        expect(redirectComponent.props().to).to.equal('/login');
      });
    });

    describe('logged in', () => {
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
