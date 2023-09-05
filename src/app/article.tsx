import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Image, View } from "react-native";
import MainContainer from "@/components/ui/containers/MainContainer";
import Row from "@/components/ui/containers/Row";
import RegularText from "@/components/ui/texts/RegularText";
import PublishedDate from "@/components/article/PublishedDate";
import Author from "@/components/article/Author";
import Title from "@/components/article/Title";
import { moderateScale, verticalScale } from "@/utils/scaler";

const ArticleDetails: React.FC = () => {
  const item = useLocalSearchParams<Article>();

  const { title, byline, published_date, media, abstract } = item ?? {};

  return (
    <MainContainer>
      <View style={styles.titleContainer}>
        <Title title={title} fontSize={18} />
      </View>

      <Image source={{ uri: media }} style={styles.imageStyle} />

      <View style={styles.abstractContainer}>
        <RegularText>{abstract}</RegularText>
      </View>

      <Row style={styles.infoContainer}>
        <Author author={byline} style={styles.authorStyle} />
        <PublishedDate publishedDate={published_date} />
      </Row>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    padding: moderateScale(15),
  },

  imageStyle: {
    width: "100%",
    height: moderateScale(300),
  },

  abstractContainer: {
    padding: moderateScale(15),
    marginBottom: verticalScale(10),
  },

  infoContainer: {
    justifyContent: "space-between",
    padding: moderateScale(15),
  },

  authorStyle: {
    width: "60%",
  },
});

export default ArticleDetails;
