import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import NavigationLink from "./NavigationLink";
import FontAwesome from "react-fontawesome";

const navigationLink = {id: 'abcd', url: '/#', icon: 'info-circle', label: 'Accueil'}

describe('NavigationLink component', () => {
  describe('on render', () => {
    it('should render the NavigationLink', () => {
      const wrapper = shallow(<NavigationLink {...navigationLink}/>)

      expect(wrapper.contains(navigationLink.url))
      expect(wrapper.contains(navigationLink.icon))
      expect(wrapper.text()).to.contain(navigationLink.label)
    })

    it('should add a FontAwesome component', () => {
      const wrapper = shallow(<NavigationLink {...navigationLink}/>)

      expect(wrapper.find(FontAwesome)).to.have.length(1)
    })

    it('should define a name to the component', () => {
      const wrapper = shallow(<NavigationLink {...navigationLink}/>)

      expect(wrapper.find(FontAwesome).prop('name')).to.equal('info-circle')
    })
  })
})
