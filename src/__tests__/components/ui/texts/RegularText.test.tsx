import React from "react";
import renderer from "react-test-renderer";
import RegularText from "@/components/ui/texts/RegularText";

describe("RegularText Component", () => {
  it("renders correctly with default props", () => {
    const tree = renderer
      .create(<RegularText>Hello, World!</RegularText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom font size", () => {
    const tree = renderer
      .create(<RegularText fontSize={18}>Custom Font Size</RegularText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
