import React from "react";
import { StyleSheet, View as ViewElement, ViewProps } from "react-native";

const Row: React.FC<ViewProps> = (props) => {
  const { style, children } = props;

  return (
    <ViewElement style={StyleSheet.flatten([styles.centerContainer, style])}>
      {children}
    </ViewElement>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Row;
