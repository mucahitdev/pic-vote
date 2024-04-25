import { Tabs } from 'expo-router';
import { t } from 'i18next';

import { TabBarIcon } from '@/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          display: 'flex',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('home'),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <HeaderButton />
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: t('profile'),
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
