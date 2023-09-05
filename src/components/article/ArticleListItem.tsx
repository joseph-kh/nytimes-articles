import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/scaler";
import Row from "@/components/ui/containers/Row";
import RegularText from "@/components/ui/texts/RegularText";
import Title from "@/components/article/Title";
import Author from "@/components/article/Author";
import PublishedDate from "@/components/article/PublishedDate";
import COLORS from "@/theme/colors";

type ArticleListItemProps = {
  article: Article;
  onArticlePress?: () => void;
};

const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { onArticlePress, article } = props;

  const { title, published_date, section, byline, media } = article;

  return (
    <TouchableOpacity onPress={onArticlePress} style={styles.container}>
      <Image source={{ uri: media }} style={styles.imageStyle} />

      <View style={styles.infoContainer}>
        <Title title={title} style={styles.titleStyle} />
        <Author author={byline} />
        <Row style={{ justifyContent: "space-between" }}>
          <RegularText style={styles.grayText}>{section}</RegularText>
          <PublishedDate publishedDate={published_date} />
        </Row>
      </View>

      <View style={styles.iconContainer}>
        <MaterialIcons
          name="arrow-forward-ios"
          size={moderateScale(26)}
          color={COLORS.gray}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
  },

  infoContainer: {
    flex: 0.8,
    marginLeft: horizontalScale(10),
  },

  titleStyle: {
    marginBottom: verticalScale(15),
  },

  grayText: {
    color: COLORS.gray,
  },

  imageStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(50) / 2,
  },

  iconContainer: {
    alignItems: "flex-end",
    flex: 0.2,
  },
});

export default ArticleListItem;
