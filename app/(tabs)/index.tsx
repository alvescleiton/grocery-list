import { Text, View } from 'react-native';

import { Container } from '~/components/Container';
import { HeaderStack } from '~/components/HeaderStack';

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
