import { useIsFocused } from '@react-navigation/native';
import { Alert, FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';
import { NoItem } from '~/components/atoms/noItems/NoItems';
import { CheckUncheckProduct } from '~/components/atoms/product/CheckUncheckProduct';
import { ProdutItem } from '~/components/atoms/product/ProductItem';
import { ProductItemSkeleton } from '~/components/atoms/product/ProductItemSkeleton';
import useItemsToBuy from '~/hooks/useItemsToBuy';
import { ItemsToBuy } from '~/types/itemsToBuy';

export default function ItemsToBuyPage() {
  const pageLoaded = useIsFocused();
  const { isLoading, error, data: productList } = useItemsToBuy(pageLoaded);

  if (error) {
    Alert.alert('Erro', error);
  }

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
          <View>
            <FlatList
              data={productList}
              renderItem={renderItems}
              showsVerticalScrollIndicator={false}
              contentContainerClassName="pt-4 pb-14"
            />
          </View>
        ) : (
          <ProductItemSkeleton qtd={10} />
        )}

        <View className="absolute bottom-2 left-4 w-full">
          <TouchableOpacity
            className="bg-greenLight flex h-14 w-full items-center justify-center rounded-md"
            onPress={() => {}}>
            <Text className="text-lg font-bold text-white">Finalizar Pedido</Text>
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
}
