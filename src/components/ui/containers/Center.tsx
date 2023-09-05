import React from "react";
import { StyleSheet, View as ViewElement, ViewProps } from "react-native";

const Center: React.FC<ViewProps> = (props) => {
  const { style, children } = props;

  return (
    <ViewElement
      {...props}
      style={StyleSheet.flatten([styles.centerContainer, style])}
    >
      {children}
    </ViewElement>
  );
};

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Center;
