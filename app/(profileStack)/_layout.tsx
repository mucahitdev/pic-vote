import { Feather } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { t } from 'i18next';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <Link href="/(tabs)/profile" asChild suppressHighlighting>
            <Feather name="arrow-left" size={24} />
          </Link>
        ),
      }}>
      <Stack.Screen name="language" options={{ title: t('language') }} />
    </Stack>
  );
}
