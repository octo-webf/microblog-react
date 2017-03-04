import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NavigationLink from './NavigationLink'

const navigationLink = { id: 'abcd', url: '/#', icon: 'homeIcon',  label: 'Accueil' }

describe('NavigationLink component', () => {
  describe('on render', () => {
    it('should render the NavigationLink', () => {
      const wrapper = shallow(<NavigationLink navigationLink={navigationLink} />)

      expect(wrapper.contains(navigationLink.url))
      expect(wrapper.contains(navigationLink.icon))
      expect(wrapper.text()).to.contain(navigationLink.label)
    })
  })
})
