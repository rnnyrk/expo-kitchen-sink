import { useCallback, useEffect } from 'react';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from 'common/interaction';
import { SplashScreen, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { BottomTabBar } from 'modules/BottomBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import theme from 'styles/theme';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 60 seconds
      retry: false,
    },
  },
});

export default function AppLayout() {
  const tabBar = useCallback((props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />;
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <StatusBar
                style="dark"
                backgroundColor={theme.colors.white}
              />
              <Tabs
                initialRouteName="index"
                screenOptions={{ header: () => null }}
                tabBar={tabBar}
              />
            </GestureHandlerRootView>
          </ToastProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
