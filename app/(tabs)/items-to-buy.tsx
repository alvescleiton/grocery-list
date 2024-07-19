import { Text, View } from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';

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
