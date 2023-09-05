import React from "react";
import renderer from "react-test-renderer";
import Author from "@/components/article/Author";

describe("Author Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Author author="John Doe" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("applies custom styles", () => {
    const customStyle = { fontSize: 16 };
    const tree = renderer
      .create(<Author author="John Doe" style={customStyle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
