import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

import { Container } from '~/components/Container';
import Colors from '~/constants/Colors';

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Lista de Compras',
          headerTitleStyle: {
            color: Colors.white,
          },
          headerStyle: {
            backgroundColor: Colors.primary,
          },
        }}
      />
      <Container>
        <View>
          <Text>Lista de Compras</Text>
        </View>
      </Container>
    </>
  );
}
