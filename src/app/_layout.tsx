import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import MainProvider from "@/contexts/MainProvider";
import HeaderTitle from "@/components/header/HeaderTitle";
import HeaderRight from "@/components/header/HeaderRight";
import HeaderLeft from "@/components/header/HeaderLeft";
import COLORS from "@/theme/colors";

//Fonts
import Bold from "@/assets/fonts/poppins-bold.ttf";
import Regular from "@/assets/fonts/poppins-regular.ttf";
import Italic from "@/assets/fonts/poppins-italic.ttf";
import SemiBold from "@/assets/fonts/poppins-semi-bold.ttf";

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    Bold: Bold,
    SemiBold: SemiBold,
    Regular: Regular,
    Italic: Italic,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
};

const RootLayoutNav = () => {
  return (
    <ThemeProvider value={DefaultTheme}>
      <MainProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: COLORS.white,
            headerTitleStyle: { color: COLORS.white },
            animation: "slide_from_left",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitleAlign: "center",
              title: "NY Times Most Popular Articles",
              headerTitle: (props) => <HeaderTitle {...props} />,
              headerLeft: () => <HeaderLeft />,
              headerRight: () => <HeaderRight />,
            }}
          />
          <Stack.Screen name="article" options={{ title: "Article Details" }} />
        </Stack>

        <StatusBar style="dark" backgroundColor={COLORS.green} />
      </MainProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
