import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Message from './Message';

const message = { id: 'abcd', content: 'fakeContent', author: 'fakeAuthor' };

describe('Message component', () => {
  describe('on render', () => {
    it('should render the Message', () => {
      const wrapper = shallow(<Message message={message} />);

      expect(wrapper.text()).to.contain(message.content);
      expect(wrapper.text()).to.contain(message.author);
    });
  });
});
