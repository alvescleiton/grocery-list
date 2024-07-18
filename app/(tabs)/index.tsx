import { Text, View } from 'react-native';

import { Container } from '~/components/layout/Container';
import { HeaderStack } from '~/components/layout/header/HeaderStack';

export default function Home() {
  return (
    <>
      <HeaderStack title="Itens para Comprar" />
      <Container>
        <View>
          <Text>Itens para Comprar</Text>
        </View>
      </Container>
    </>
  );
}
