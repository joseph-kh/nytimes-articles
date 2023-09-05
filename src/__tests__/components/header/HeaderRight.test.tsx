import React from "react";
import renderer from "react-test-renderer";
import HeaderRight from "@/components/header/HeaderRight";

describe("HeaderRight Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HeaderRight />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
