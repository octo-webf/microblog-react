import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import NavigationBar from './NavigationBar'
import NavigationLink from '../NavigationLink/NavigationLink'

describe('NavigationBar component', () => {
  describe('on first render', () => {
    describe('with defined props', () => {
      it('should render 2 NavigationLinks', () => {
        const wrapper = shallow(<NavigationBar/>)

        expect(wrapper.find(NavigationLink)).to.have.length(2)
      })

      it('should construct NavigationLink with home props', () => {
        const wrapper = shallow(<NavigationBar/>)

        expect(wrapper.find(NavigationLink).at(0).prop('icon')).to.equal('home')
        expect(wrapper.find(NavigationLink).at(0).prop('url')).to.equal('/#')
        expect(wrapper.find(NavigationLink).at(0).prop('label')).to.equal('Accueil')
      })

      it('should construct NavigationLink with about props', () => {
        const wrapper = shallow(<NavigationBar/>)

        expect(wrapper.find(NavigationLink).at(1).prop('icon')).to.equal('info-circle')
        expect(wrapper.find(NavigationLink).at(1).prop('url')).to.equal('/#about')
        expect(wrapper.find(NavigationLink).at(1).prop('label')).to.equal('A propos')
      })
    })
  })
})
