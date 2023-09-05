import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Row from "@/components/ui/containers/Row";
import { horizontalScale, moderateScale } from "@/utils/scaler";
import COLORS from "@/theme/colors";

const HeaderRight: React.FC = () => {
  return (
    <Row style={styles.container}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="magnify"
          size={moderateScale(24)}
          color={COLORS.white}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="dots-vertical"
          size={moderateScale(24)}
          color={COLORS.white}
        />
      </TouchableOpacity>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: moderateScale(90),
    paddingLeft: horizontalScale(20),
  },
});

export default HeaderRight;
