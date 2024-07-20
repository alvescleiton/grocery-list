import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import Colors from '~/constants/Colors';
import { addProductToItemsToBuy, removeProductFromItemsToBuy } from '~/services/itemToBuy';
import { ItemsToBuy } from '~/types/itemsToBuy';
import { ProductItem } from '~/types/productItem';

type AddRemoveProductProps = {
  item: ProductItem;
  itemsToBuy: ItemsToBuy[];
};

export const AddRemoveProduct = ({ item, itemsToBuy }: AddRemoveProductProps) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const find = itemsToBuy.find((i) => i.product_id === item.id);

    if (find) {
      setCheck(true);
    }
  }, [item, itemsToBuy]);

  const handleAddProduct = async () => {
    const itb: ItemsToBuy = {
      product_id: item.id,
      title: item.title,
      checked: false,
    };

    const { error } = await addProductToItemsToBuy(itb);

    if (error) {
      Alert.alert('Erro', error);
    }

    setCheck(true);
  };

  const handleRemoveProduct = async () => {
    const itb: ItemsToBuy = {
      product_id: item.id,
      title: item.title,
      checked: false,
    };
    const { error } = await removeProductFromItemsToBuy(itb);

    if (error) {
      Alert.alert('Erro', error);
    }

    setCheck(false);
  };

  if (!check) {
    return (
      <TouchableOpacity onPress={() => handleAddProduct()}>
        <Ionicons size={28} name="add-circle" color={Colors.greenLight} />
      </TouchableOpacity>
    );
  }

  if (check) {
    return (
      <TouchableOpacity onPress={() => handleRemoveProduct()}>
        <Ionicons size={28} name="remove-circle" color={Colors.redDark} />
      </TouchableOpacity>
    );
  }
};
