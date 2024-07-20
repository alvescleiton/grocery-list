import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

import Colors from '~/constants/Colors';
import { ProductItemTypeEnum } from '~/enum/productItemEnum';
import { productUpdate } from '~/services/productUpdate';
import { ProductItemType } from '~/types/productItem';

type ProductItemProps = {
  item: ProductItemType;
  type?: ProductItemTypeEnum;
};

export const ProdutItem = ({ item, type = ProductItemTypeEnum.List }: ProductItemProps) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(item?.checked || false);
  }, [item]);

  const handleCheck = async () => {
    const chk = !check;
    item.checked = chk;

    const { error } = await productUpdate(item);

    if (error) {
      Alert.alert('Erro', error);
      return;
    }

    setCheck(chk);
  };

  return (
    <View key={item.id} className="flex-row border-b border-gray-200 px-2 py-4">
      <Text className="flex-1 text-lg text-gray-700">{item.title}</Text>

      {type === ProductItemTypeEnum.List && (
        <TouchableOpacity>
          <Ionicons size={28} name="add-circle" color={Colors.greenLight} />
        </TouchableOpacity>
      )}

      {type === ProductItemTypeEnum.Buy && (
        <TouchableOpacity>
          <Ionicons
            size={28}
            name={check ? 'checkmark-circle' : 'checkmark-circle-outline'}
            color={check ? Colors.greenLight : Colors.grayMedium}
            onPress={() => handleCheck()}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
