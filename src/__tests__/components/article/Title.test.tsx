import React from "react";
import renderer from "react-test-renderer";
import Title from "@/components/article/Title";

describe("Title Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Title title="Sample Title" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
