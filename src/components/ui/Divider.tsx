import React from "react";
import { StyleSheet, View as ViewElement, ViewProps } from "react-native";
import COLORS from "@/theme/colors";
import { moderateScale } from "@/utils/scaler";

const Divider: React.FC<ViewProps> = (props) => {
  const { style } = props;

  return (
    <ViewElement
      {...props}
      style={StyleSheet.flatten([styles.seperatorContainer, style])}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  seperatorContainer: {
    borderBottomWidth: moderateScale(0.5),
    backgroundColor: COLORS.gray,
    opacity: 0.4,
  },
});
