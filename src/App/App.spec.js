import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';
import Footer from '../Footer/Footer';
import MessageList from '../MessageList/MessagesList';
import InputMessage from '../InputMessage/InputMessage';
import * as ApiHelper from '../ApiHelper/ApiHelper';

describe('App component', () => {
  beforeEach(() => (
    sinon.stub(ApiHelper, 'fetchMessages')
  ));

  afterEach(() => {
    ApiHelper.fetchMessages.restore();
  });

  it('should contain MessageList component with messages', () => {
    ApiHelper.fetchMessages.returns(Promise.resolve());
    const wrapper = shallow(<App />);
    expect(wrapper.find(MessageList)).to.have.length(1);
  });

  it('should render InputMessage', () => {
    ApiHelper.fetchMessages.returns(Promise.resolve());
    const wrapper = shallow(<App />);
    expect(wrapper.find(InputMessage)).to.have.length(1);
  });

  it('should render Footer', () => {
    ApiHelper.fetchMessages.returns(Promise.resolve());
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).to.have.length(1);
  });

  describe('state management', () => {
    const fakeMessage1 = { id: '123', content: 'fakeContent1', author: 'fakeAuthor1' };
    const fakeMessage2 = { id: '456', content: 'fakeContent2', author: 'fakeAuthor2' };
    const fakeMessages = [
      fakeMessage1,
      fakeMessage2,
    ];

    describe('on component will mount', () => {
      it('should set state messages with data from fetchMessages response', (done) => {
        ApiHelper.fetchMessages.returns(Promise.resolve(fakeMessages));
        const wrapper = shallow(<App />);

        setTimeout(() => {
          expect(ApiHelper.fetchMessages.calledOnce).to.be.true;
          expect(wrapper.state().messages).to.equal(fakeMessages);
          done();
        }, 10);
      });
    });

    describe('on refresh', () => {
      it('should set state messages with data from fetchMessages response', () => {
        // given
        ApiHelper.fetchMessages.returns(Promise.resolve(fakeMessages));
        const wrapper = shallow(<App />);
        ApiHelper.fetchMessages.reset();

        // when
        return wrapper.instance().refresh()
        // then
          .then(() => {
            expect(ApiHelper.fetchMessages.calledOnce).to.be.true;
            expect(wrapper.state().messages).to.equal(fakeMessages);
          });
      });
    });
  });
});
