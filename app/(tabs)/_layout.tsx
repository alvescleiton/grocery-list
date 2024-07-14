import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';

import Colors from '~/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.white,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.gray100,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list-ul" color={color} />,
        }}
      />
      <Tabs.Screen
        name="items-to-buy"
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="check-square-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
