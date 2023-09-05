import React from "react";
import { create } from "react-test-renderer";
import Loader from "@/components/ui/Loader";

describe("Loader Component", () => {
  it("renders correctly", () => {
    const tree = create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "blue" };
    const tree = create(<Loader style={customStyle} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
