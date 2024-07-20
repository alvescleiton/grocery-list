import { useIsFocused } from '@react-navigation/native';
import { Alert, FlatList, ListRenderItem, View } from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';
import { NoItem } from '~/components/atoms/noItems/NoItems';
import { ProdutItem } from '~/components/atoms/product/ProductItem';
import { ProductItemSkeleton } from '~/components/atoms/product/ProductItemSkeleton';
import useItemsToBuy from '~/hooks/useItemsToBuy';
import { ProductItemType } from '~/types/productItem';

export default function ItemsToBuy() {
  const isFocused = useIsFocused();
  const { isLoading, error, productList } = useItemsToBuy({ isFocused });

  if (error) {
    Alert.alert('Erro', error);
  }

  const renderItems: ListRenderItem<ProductItemType> = ({ item }) => {
    return <ProdutItem item={item} />;
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
      </Container>
    </>
  );
}
