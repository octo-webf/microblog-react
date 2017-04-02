import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import InputMessage from './InputMessage';
import * as ApiHelper from '../ApiHelper/ApiHelper';

describe('InputMessage component', () => {
  describe('on render', () => {
    it('should render an input', () => {
      const wrapper = shallow(<InputMessage />);

      expect(wrapper.find('input')).to.have.length(1);
    });

    it('should input element have the right className', () => {
      const wrapper = shallow(<InputMessage />);
      expect(wrapper.find('input').hasClass('message-input__content')).to.be.true;
    });
  });

  describe('on change', () => {
    it('should set state with input value', () => {
      // given
      const wrapper = shallow(<InputMessage />);
      const input = wrapper.find('input');

      // when
      input.simulate('change', { target: { value: 'toto' } });

      // then
      expect(wrapper.state('inputValue')).to.equal('toto');
    });
  });

  describe('on key press', () => {
    let spyApiHelperPostMessage;

    beforeEach(() => {
      spyApiHelperPostMessage = sinon.stub(ApiHelper, 'postMessage')
        .returns(Promise.resolve());
    });

    afterEach(() => {
      spyApiHelperPostMessage.restore();
    });

    describe('with a key different than enter', () => {
      it('should do nothing', () => {
        // given
        const input = shallow(<InputMessage />).find('input');

        // when
        input.simulate('keyPress', { keyCode: 'notEnter' });

        // then
        sinon.assert.notCalled(spyApiHelperPostMessage);
      });
    });

    describe('with enter', () => {
      it('should call ApiHelper.postMessage with value', () => {
        // given
        const wrapper = shallow(<InputMessage />);
        wrapper.setState({ inputValue: 'My new message' });
        const input = wrapper.find('input');

        // when
        input.simulate('keyPress', { key: 'Enter' });

        // then
        sinon.assert.calledOnce(spyApiHelperPostMessage);
        sinon.assert.calledWith(spyApiHelperPostMessage,
          { author: 'John Smith', content: 'My new message' });
        expect(wrapper.state('inputValue')).to.equal('');
      });

      it('should invoke prop onEnter', (done) => {
        // given
        const onEnterStub = sinon.stub();
        const wrapper = shallow(<InputMessage onEnter={onEnterStub} />);
        wrapper.setState({ inputValue: 'My new message' });
        const input = wrapper.find('input');

        // when
        input.simulate('keyPress', { key: 'Enter' });

        // then
        setTimeout(() => {
          expect(onEnterStub.callCount).to.equal(1);
          done();
        }, 10);
      });
    });
  });
});
