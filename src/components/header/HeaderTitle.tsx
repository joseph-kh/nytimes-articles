import React from "react";
import { StyleSheet, View } from "react-native";
import SemiBoldText from "@/components/ui/texts/SemiBoldText";
import { horizontalScale, moderateScale } from "@/utils/scaler";
import COLORS from "@/theme/colors";

type Props = {
  children: React.ReactNode;
};

const HeaderTitle: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <View style={styles.header}>
      <SemiBoldText
        style={styles.headerText}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {children}
      </SemiBoldText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingRight: horizontalScale(20),
    width: moderateScale(200),
  },

  headerText: {
    fontSize: moderateScale(20),
    color: COLORS.white,
  },
});

export default HeaderTitle;
