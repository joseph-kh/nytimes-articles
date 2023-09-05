import React from "react";
import renderer from "react-test-renderer";
import { TouchableOpacity } from "react-native";
import ArticleListItem from "@/components/article/ArticleListItem";

const mockArticle = {
  id: "1",
  title: "Sample Article",
  published_date: "2023-09-01",
  section: "React Native",
  byline: "John Doe",
  media:
    "https://cdn.discordapp.com/attachments/1148605640856572054/1148605814857277581/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",
  abstract: "samle abstract",
};

describe("ArticleListItem Component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<ArticleListItem article={mockArticle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls onArticlePress when pressed", () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(
      <ArticleListItem article={mockArticle} onArticlePress={mockOnPress} />
    );

    const touchableOpacity = component.root.findByType(TouchableOpacity);
    touchableOpacity.props.onPress();

    expect(mockOnPress).toHaveBeenCalled();
  });
});
