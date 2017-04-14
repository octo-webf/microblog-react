import { expect } from 'chai';
import { isAuthenticated, authenticate, logout } from './AuthenticationService';

describe('AuthenticationService', () => {
  describe('isAuthenticated', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    describe('when user is authenticated', () => {
      it('should return true', () => {
        // given
        window.localStorage.setItem('name', 'fake name');

        // when
        const result = isAuthenticated();

        // then
        expect(result).to.be.true;
      });
    });

    describe('when user is not authenticated', () => {
      it('should return false', () => {
        // given
        window.localStorage.clear();

        // when
        const result = isAuthenticated();

        // then
        expect(result).to.be.false;
      });
    });
  });

  describe('authenticate', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    it('should authenticate the user', () => {
      // when
      authenticate('toto');

      // then
      expect(window.localStorage.getItem('name')).to.equal('toto');
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      window.localStorage.clear();
    });

    it('should log out the user', () => {
      // given
      window.localStorage.setItem('name', 'lol');

      // when
      logout();

      // then
      expect(window.localStorage.length).to.equal(0);
    });
  });
});
