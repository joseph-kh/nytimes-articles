import React from "react";
import { create } from "react-test-renderer";
import Center from "@/components/ui/containers/Center";

describe("Center Component", () => {
  it("renders correctly", () => {
    const tree = create(<Center>Hello, World!</Center>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    const tree = create(
      <Center style={customStyle}>Hello, World!</Center>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
