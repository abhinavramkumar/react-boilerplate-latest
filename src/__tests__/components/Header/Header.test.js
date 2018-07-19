import React from "react";
import { shallow } from "enzyme";
import Header from "../../../components/Header";
import "jest-styled-components";

test("should render Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
