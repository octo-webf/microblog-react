import React from "react";
import {expect} from "chai";
import {shallow} from "enzyme";
import About from "./About";
import NavigationBar from "../NavigationBar/NavigationBar";

describe('About component', () => {

  it('should contain About', () => {
    const wrapper = shallow(<About />)

    expect(wrapper.text()).to.contain("About")
  })

  it('should render NavigationBar', () => {
    const wrapper = shallow(<About />)

    let navigationBar = wrapper.find(NavigationBar);
    expect(navigationBar).to.have.length(1)
  })

})
