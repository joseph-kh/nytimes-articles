import React from "react";
import renderer from "react-test-renderer";
import HeaderLeft from "@/components/header/HeaderLeft";

describe("HeaderLeft Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HeaderLeft />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
