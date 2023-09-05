import React from "react";
import renderer from "react-test-renderer";
import PublishedDate from "@/components/article/PublishedDate";

describe("PublishedDate Component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<PublishedDate publishedDate="2023-09-03" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
