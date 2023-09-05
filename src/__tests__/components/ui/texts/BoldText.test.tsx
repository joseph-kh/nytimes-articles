import React from "react";
import renderer from "react-test-renderer";
import BoldText from "@/components/ui/texts/BoldText";

describe("BoldText Component", () => {
  it("renders correctly with default props", () => {
    const tree = renderer.create(<BoldText>Hello, World!</BoldText>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom font size", () => {
    const tree = renderer
      .create(<BoldText fontSize={18}>Custom Font Size</BoldText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
