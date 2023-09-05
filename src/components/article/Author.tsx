import React from "react";
import { TextProps, StyleProp, TextStyle, StyleSheet } from "react-native";
import ItalicText from "@/components/ui/texts/ItalicText";
import COLORS from "@/theme/colors";

type Props = {
  author: string;
  style?: StyleProp<TextStyle>;
};

const Author: React.FC<Props & TextProps> = (props) => {
  const { author, style } = props;

  return (
    <ItalicText
      {...props}
      style={StyleSheet.flatten([styles.textStyle, style])}
    >
      {author}
    </ItalicText>
  );
};

export default Author;

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.gray,
  },
});
