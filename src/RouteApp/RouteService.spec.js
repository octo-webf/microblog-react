import sinon from 'sinon';
import { expect } from 'chai';
import requireAuth from './RouteService';

describe('RouteApp', () => {
  it('should render correct routes', () => {
    // given
    const replaceSpy = sinon.spy();

    // when
    requireAuth(null, replaceSpy);

    // then
    expect(replaceSpy.calledOnce).to.be.true;
    expect(replaceSpy.calledWith({ pathname: '/login', })).to.be.true;
  });
});
