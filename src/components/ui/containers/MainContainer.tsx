import React, { useRef, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

type Props = {
  isKeyboardAvoidingView?: boolean | undefined;
  children?: React.ReactNode;
};

type Ref = ScrollView;

const MainContainer = React.forwardRef<Ref, Props>((props, ref) => {
  const { children, isKeyboardAvoidingView } = props;

  const height = useHeaderHeight();

  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    if (Platform.OS === "ios" && isKeyboardAvoidingView) {
      const showSubscription = Keyboard.addListener("keyboardWillShow", () => {
        scrollRef.current?.scrollToEnd({ animated: true });
      });
      return () => showSubscription.remove();
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={height}
      enabled={isKeyboardAvoidingView}
    >
      <SafeAreaView style={styles.mainContainerStyle}>
        <ScrollView
          bounces={false}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          ref={ref || scrollRef}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
  },
});

export default MainContainer;
