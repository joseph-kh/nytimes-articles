import React from "react";
import renderer from "react-test-renderer";
import ItalicText from "@/components/ui/texts/ItalicText";

describe("ItalicText Component", () => {
  it("renders correctly with default props", () => {
    const tree = renderer
      .create(<ItalicText>Hello, World!</ItalicText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom font size", () => {
    const tree = renderer
      .create(<ItalicText fontSize={18}>Custom Font Size</ItalicText>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
