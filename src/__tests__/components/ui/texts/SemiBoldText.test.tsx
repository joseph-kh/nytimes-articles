import React from "react";
import renderer from "react-test-renderer";
import SemiBoldText from "@/components/ui/texts/SemiBoldText";

describe("SemiBoldText Component", () => {
  it("renders correctly with default props", () => {
    const tree = renderer
      .create(<SemiBoldText>Hello, World!</SemiBoldText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom font size", () => {
    const tree = renderer
      .create(<SemiBoldText fontSize={18}>Custom Font Size</SemiBoldText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
