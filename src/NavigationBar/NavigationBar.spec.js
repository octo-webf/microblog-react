import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NavigationBar from './NavigationBar'
import NavigationLink from '../NavigationLink/NavigationLink'

const navigationLink1 = { id: 'abcd', url: '/#', icon: 'homeIcon',  label: 'Accueil' }
const navigationLink2 = { id: 'abcd2', url: '/#about', icon: 'icon',  label: 'A propos' }

const navigationLinks = [
  navigationLink1,
  navigationLink2
]

describe('NavigationBar component', () => {
  describe('on first render', () => {
    describe('with defined props', () => {
      it('should render NavigationBar components with data from fetchLinks response', () => {
        const wrapper = shallow(<NavigationBar navigationLinks={navigationLinks}/>)

        expect(wrapper.find(NavigationLink)).to.have.length(2)
        expect(wrapper.contains(<NavigationLink navigationLink={navigationLink1}/>)).to.be.true
        expect(wrapper.contains(<NavigationLink navigationLink={navigationLink2}/>)).to.be.true
      })
    })

    describe('without props', () => {
      it('should render nothing', () => {
        const wrapper = shallow(<NavigationBar/>)

        expect(wrapper.find(NavigationLink)).to.have.length(0)
      })
    })
  })
})
