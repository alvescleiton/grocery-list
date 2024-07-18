import { TextInput, View } from 'react-native';

import { Container } from '~/components/layout/Container';
import { HeaderStack } from '~/components/layout/header/HeaderStack';

export default function Home() {
  return (
    <>
      <HeaderStack title="Itens para Comprar" />
      <Container>
        <View className="h-14 w-full rounded-md bg-white px-3">
          <TextInput className="flex-1" placeholder="Buscar..." placeholderTextColor="#999" />
        </View>
      </Container>
    </>
  );
}
