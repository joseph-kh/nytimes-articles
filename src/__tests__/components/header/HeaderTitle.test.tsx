import React from "react";
import renderer from "react-test-renderer";
import HeaderTitle from "@/components/header/HeaderTitle";

describe("HeaderTitle Component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<HeaderTitle>Header Text</HeaderTitle>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
