import { Text, View } from 'react-native';

import { Container } from '~/components/layout/Container/Container';
import { HeaderStack } from '~/components/layout/Header/HeaderStack';

export default function Home() {
  return (
    <>
      <HeaderStack title="Itens Para Comprar" />
      <Container>
        <View>
          <Text>Itens Para Comprar</Text>
        </View>
      </Container>
    </>
  );
}
