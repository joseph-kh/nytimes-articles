import React from "react";
import { create } from "react-test-renderer";
import Divider from "@/components/ui/Divider";

describe("Divider Component", () => {
  it("renders correctly", () => {
    const tree = create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    const tree = create(<Divider style={customStyle} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
