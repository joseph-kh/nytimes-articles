import React from "react";
import { create } from "react-test-renderer";
import Row from "@/components/ui/containers/Row";

describe("Row Component", () => {
  it("renders correctly", () => {
    const tree = create(<Row>Hello, World!</Row>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    const tree = create(<Row style={customStyle}>Hello, World!</Row>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
