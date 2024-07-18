import { Ionicons } from '@expo/vector-icons';
import { FlatList, ListRenderItem, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Container } from '~/components/layout/Container';
import { HeaderStack } from '~/components/layout/header/HeaderStack';
import Colors from '~/constants/Colors';
import productList from '~/data/productList.json';

type ItemType = {
  id: string;
  title: string;
};

export default function Home() {
  const renderItems: ListRenderItem<ItemType> = ({ item }) => {
    return (
      <View key={item.id} className="flex-row border-b border-gray-200 px-2 py-4">
        <Text className="flex-1 text-lg text-gray-700">{item.title}</Text>
        <TouchableOpacity>
          <Ionicons size={28} name="add-circle" color={Colors.greenLight} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <HeaderStack title="Produtos" />
      <Container>
        <View className="h-14 w-full rounded-md bg-white px-3">
          <TextInput className="flex-1" placeholder="Buscar..." placeholderTextColor="#999" />
        </View>

        <View>
          <FlatList
            data={productList}
            renderItem={renderItems}
            showsVerticalScrollIndicator={false}
            contentContainerClassName="pt-4 pb-14"
          />
        </View>
      </Container>
    </>
  );
}
