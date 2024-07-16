import { Text, View } from 'react-native';

import { Container } from '~/components/layout/Container';
import { HeaderStack } from '~/components/layout/header/HeaderStack';

export default function Home() {
  return (
    <>
      <HeaderStack title="Lista de Compras" />
      <Container>
        <View>
          <Text>Lista de Compras</Text>
        </View>
      </Container>
    </>
  );
}
