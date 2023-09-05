import React from "react";
import {
  StyleSheet,
  ActivityIndicator as ActivityIndicatorElement,
  ActivityIndicatorProps,
} from "react-native";
import Center from "@/components/ui/containers/Center";
import COLORS from "@/theme/colors";

const Loader: React.FC<ActivityIndicatorProps> = (props) => {
  const { size = "large", color = COLORS.primary } = props;

  return (
    <Center style={styles.container}>
      <ActivityIndicatorElement {...props} size={size} color={color} />
    </Center>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
