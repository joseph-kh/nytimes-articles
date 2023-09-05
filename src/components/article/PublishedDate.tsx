import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Row from "@/components/ui/containers/Row";
import RegularText from "@/components/ui/texts/RegularText";
import { horizontalScale, moderateScale } from "@/utils/scaler";
import COLORS from "@/theme/colors";

type Props = {
  publishedDate: string;
};

const PublishedDate: React.FC<Props> = (props) => {
  const { publishedDate } = props;

  return (
    <Row>
      <MaterialCommunityIcons
        name="calendar-today"
        size={moderateScale(24)}
        style={styles.calendarStyle}
      />
      <RegularText style={styles.textStyle}>{publishedDate}</RegularText>
    </Row>
  );
};

export default PublishedDate;

const styles = StyleSheet.create({
  calendarStyle: {
    color: COLORS.gray,
    marginRight: horizontalScale(5),
  },

  textStyle: {
    color: COLORS.gray,
  },
});
