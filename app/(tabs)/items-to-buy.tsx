import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';
import { NoItem } from '~/components/atoms/noItems/NoItems';
import { CheckUncheckProduct } from '~/components/atoms/product/CheckUncheckProduct';
import { ProdutItem } from '~/components/atoms/product/ProductItem';
import { ProductItemSkeleton } from '~/components/atoms/product/ProductItemSkeleton';
import useItemsToBuy from '~/hooks/useItemsToBuy';
import { ItemsToBuy } from '~/types/itemsToBuy';

export default function ItemsToBuyPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const pageLoaded = useIsFocused();
  const { isLoading, error, data: productList } = useItemsToBuy(pageLoaded);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (error) {
    Alert.alert('Erro', error);
  }

  const handleCompleteOrder = () => {
    const allChecked = _allProductsChecked();
    _showCompleteOrderAlert(allChecked);
  };

  const _allProductsChecked = () => {
    const allChecked = productList.every((item) => !!item.checked);

    return allChecked;
  };

  const _showCompleteOrderAlert = (allChecked: boolean) => {
    let title = 'Finalizar Pedido';
    let message = 'Deseja realmente finalizar o pedido?';

    if (!allChecked) {
      title = 'ATENÇÃO';
      message = 'Há itens que não foram marcados. Deseja mesmo finalizar o pedido?';
    }

    Alert.alert(title, message, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => completeOrder(),
      },
    ]);
  };

  const completeOrder = () => {
    setLoading(true);

    setTimeout(() => {
      Alert.alert('Success', 'Finalizar Pedido');
      setLoading(false);
    }, 3000);
  };

  const renderItems: ListRenderItem<ItemsToBuy> = ({ item }) => {
    return (
      <ProdutItem title={item.title}>
        <CheckUncheckProduct item={item} />
      </ProdutItem>
    );
  };

  return (
    <>
      <HeaderStack title="Itens Para Comprar" />
      <Container>
        {!isLoading && !productList.length && <NoItem />}

        {!isLoading ? (
          <>
            <View>
              <FlatList
                data={productList}
                renderItem={renderItems}
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pt-4 pb-14"
              />
            </View>

            <View className="absolute bottom-2 left-4 w-full">
              <TouchableOpacity
                activeOpacity={0.7}
                className={`flex h-14 w-full items-center justify-center rounded-md ${loading ? 'bg-grayMedium' : 'bg-greenLight'}`}
                onPress={() => (loading ? {} : handleCompleteOrder())}>
                {!loading ? (
                  <Text className="text-lg font-bold text-white">Finalizar Pedido</Text>
                ) : (
                  <ActivityIndicator color="white" size="small" />
                )}
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <ProductItemSkeleton qtd={10} />
        )}
      </Container>
    </>
  );
}
