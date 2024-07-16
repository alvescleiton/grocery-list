import { Text, View } from 'react-native';

import { Container } from '~/components/layout/Container';
import { HeaderStack } from '~/components/layout/header/HeaderStack';

export default function Home() {
  return (
    <>
      <HeaderStack title="Lista de Itens" />
      <Container>
        <View>
          <Text>Lista de Itens</Text>
        </View>
      </Container>
    </>
  );
}
