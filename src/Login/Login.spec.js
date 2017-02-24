import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import Login from "./Login";
import sinon from 'sinon'

describe('Login component', () => {
  describe('on render', () => {
    it('should render an input', () => {
      const wrapper = shallow(<Login />)

      expect(wrapper.find('input')).to.have.length(1)
    })
  })

  describe('on change', () => {
    it('should set state with input value', () => {
      // given
      const wrapper = shallow(<Login />)
      const input = wrapper.find('input')

      // when
      input.simulate('change', {target: {value: 'toto'}})

      // then
      expect(wrapper.state('inputValue')).to.equal('toto')
    })
  })

  describe('on key press', () => {
    describe('with a key different than enter', () => {
      beforeEach(() => {
          window.localStorage.clear()
      });

      it('should do nothing', () => {
        // given
        const input = shallow(<Login />).find('input')
        const notEnter = 0

        // when
        input.simulate('keyPress', {keyCode: 'notEnter'})

        // then
        expect(window.localStorage.length).to.equal(0)

      })
    })

    describe('with enter', () => {
      it('should save name inside local Storage with value', () => {
        // given
        const wrapper = shallow(<Login />)
        wrapper.setState({inputValue: 'My name'})
        const input = wrapper.find('input')
        const Enter = 13

        // when
        input.simulate('keyPress', {key: 'Enter'})

        // then
        expect(window.localStorage.getItem('name')).to.equal('My name')
      })
    })
  })
})
