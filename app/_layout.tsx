import '../src/translation';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';

import { useUserStore } from '@/store/userSlice';

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  const { i18n } = useTranslation();
  const lang = useUserStore((state) => state.language);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
      if (loaded) SplashScreen.hideAsync();
    }
  }, [loaded, lang]);

  if (!loaded || !lang) return null;

  return (
    <TamaguiProvider config={config}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(profileStack)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </TamaguiProvider>
  );
}
