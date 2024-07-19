import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import Colors from '~/constants/Colors';
import { ProductItemType } from '~/types/productItem';

type ProductItemProps = {
  item: ProductItemType;
};

export const ProdutItem = ({ item }: ProductItemProps) => {
  return (
    <View key={item.id} className="flex-row border-b border-gray-200 px-2 py-4">
      <Text className="flex-1 text-lg text-gray-700">{item.title}</Text>
      <TouchableOpacity>
        <Ionicons size={28} name="add-circle" color={Colors.greenLight} />
      </TouchableOpacity>
    </View>
  );
};
