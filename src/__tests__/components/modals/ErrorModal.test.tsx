import React from "react";
import renderer from "react-test-renderer";
import ErrorModal from "@/components/modals/ErrorModal";

describe("ErrorModal Component", () => {
  it("renders correctly when visible", () => {
    const tree = renderer
      .create(
        <ErrorModal
          isVisible={true}
          title="Error Title"
          message="Error Message"
          ctaText="Confirm"
          toggleModal={() => {}}
          onConfirm={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when not visible", () => {
    const tree = renderer
      .create(
        <ErrorModal
          isVisible={false}
          title="Error Title"
          message="Error Message"
          ctaText="Confirm"
          toggleModal={() => {}}
          onConfirm={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
