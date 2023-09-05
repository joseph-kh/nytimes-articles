import React from "react";
import { StyleSheet, Text as TextElement, TextProps } from "react-native";
import { moderateScale } from "@/utils/scaler";

type Props = {
  fontSize?: number;
};

const SemiBoldText: React.FC<Props & TextProps> = (props) => {
  const { style, fontSize, children } = props;

  return (
    <TextElement
      {...props}
      style={StyleSheet.flatten([
        styles.textStyle,
        style,
        !!fontSize && { fontSize: moderateScale(fontSize) },
      ])}
    >
      {children}
    </TextElement>
  );
};

export default SemiBoldText;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "SemiBold",
    fontSize: moderateScale(14),
  },
});
