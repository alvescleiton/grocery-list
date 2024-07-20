import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';

import Colors from '~/constants/Colors';
import { itemsToBuyUpdate } from '~/services/itemToBuy';
import { ItemsToBuy } from '~/types/itemsToBuy';

type AddRemoveProductProps = {
  item: ItemsToBuy;
};

export const CheckUncheckProduct = ({ item }: AddRemoveProductProps) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (item.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [item]);

  const handleCheckItem = async () => {
    item.checked = !check;
    await itemsToBuyUpdate(item);
    setCheck(item.checked);
  };

  return (
    <TouchableOpacity onPress={() => handleCheckItem()}>
      <Ionicons
        size={28}
        name={check ? 'checkmark-circle' : 'checkmark-circle-outline'}
        color={check ? Colors.greenLight : Colors.grayMedium}
      />
    </TouchableOpacity>
  );
};
