import React from "react";
import COLORS from "@/theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { moderateScale } from "@/utils/scaler";

const HeaderLeft: React.FC = () => {
  return (
    <TouchableOpacity>
      <MaterialIcons
        name="menu"
        size={moderateScale(24)}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
