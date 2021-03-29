import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from "./App";
configure({ adapter: new Adapter() });


describe("Render App", () => {
  let container : ShallowWrapper< any, Readonly<{}>,React.Component<{}, {}, any> >
  beforeEach(() => (container = shallow(<App />)));
  it("should render div", () => {
    expect(container.find("div").length).toEqual(1);
  });
  it("should render handelIdchange", () => {
    expect(container.find("handelIdchange").length).toBeCalled;
  });

  it("should render LaunchList", () => {
    expect(container.find("LaunchList").length).toBeCalled;
  });
});