import React from "react";
import MainContainer from "@/components/ui/containers/MainContainer";
import { act, create } from "react-test-renderer";

jest.mock("@react-navigation/elements", () => ({
  useHeaderHeight: () => 30,
}));

describe("MainContainer Component", () => {
  it("renders correctly without KeyboardAvoidingView", async () => {
    await act(async () => {
      const tree = create(<MainContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("renders correctly with KeyboardAvoidingView", async () => {
    await act(async () => {
      const tree = create(
        <MainContainer isKeyboardAvoidingView={true} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
