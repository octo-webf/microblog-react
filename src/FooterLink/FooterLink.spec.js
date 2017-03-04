import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import FooterLink from './FooterLink'

const webf_link = { href: 'https://github.com/octo-web-front-end-tribe', text: 'tribu WEBF' }

describe('FooterLink component', () => {
  describe('on render', () => {
    it('should render the FooterLink', () => {
      const wrapper = shallow(<FooterLink footer_link={webf_link} />)

      expect(wrapper.contains(webf_link.href))
      expect(wrapper.text()).to.contain(webf_link.text)
    })
  })
})
