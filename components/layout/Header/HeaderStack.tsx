import { Stack } from 'expo-router';

import Colors from '~/constants/Colors';

type HeaderStackProps = {
  title?: string;
};

export const HeaderStack = ({ title }: HeaderStackProps) => {
  return (
    <Stack.Screen
      options={{
        headerTitle: title,
        headerTitleStyle: {
          color: Colors.primary,
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: Colors.white,
        },
        headerShadowVisible: false,
      }}
    />
  );
};
