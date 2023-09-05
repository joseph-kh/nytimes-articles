import React from "react";
import { Modal, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BoldText from "@/components/ui/texts/BoldText";
import SemiBoldText from "@/components/ui/texts/SemiBoldText";
import RegularText from "@/components/ui/texts/RegularText";
import Divider from "@/components/ui/Divider";
import Center from "@/components/ui/containers/Center";
import COLORS from "@/theme/colors";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/scaler";

type Props = {
  isVisible: boolean;
  title: string;
  message: string;
  ctaText: string;
  toggleModal: () => void;
  onConfirm: () => void;
};

const ErrorModal: React.FC<Props> = (props) => {
  const { isVisible, title, message, ctaText, toggleModal, onConfirm } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}
    >
      <Center style={styles.container}>
        <View style={styles.innercontainerStyle}>
          <View style={styles.topContainerStyle}>
            <MaterialCommunityIcons
              name="close-circle"
              size={moderateScale(42)}
              color={COLORS.error}
              style={styles.iconStyle}
            />
            <BoldText style={styles.titleTextStyle}>{title}</BoldText>
            <RegularText style={styles.messageTextStyle}>{message}</RegularText>
          </View>
          <Divider style={styles.dividerStyle} />
          <TouchableOpacity onPress={onConfirm}>
            <SemiBoldText style={styles.ctaTextStyle}>{ctaText}</SemiBoldText>
          </TouchableOpacity>
        </View>
      </Center>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innercontainerStyle: {
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(15),
    backgroundColor: COLORS.white,
    elevation: 5,
    shadowRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },

  topContainerStyle: {
    paddingHorizontal: horizontalScale(30),
  },

  iconStyle: {
    alignSelf: "center",
  },

  titleTextStyle: {
    textAlign: "center",
  },

  messageTextStyle: {
    textAlign: "center",
  },

  dividerStyle: {
    marginVertical: verticalScale(10),
  },

  ctaTextStyle: {
    textAlign: "center",
    color: COLORS.primary,
    fontSize: moderateScale(16),
    alignSelf: "center",
  },
});

export default ErrorModal;
