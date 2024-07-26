import { useIsFocused } from '@react-navigation/native';
import { Alert, FlatList, ListRenderItem } from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';
import { NoItem } from '~/components/atoms/noItems/NoItems';
import { AddRemoveProduct } from '~/components/atoms/product/AddRemoveProduct';
import { ProdutItem } from '~/components/atoms/product/ProductItem';
import { ProductItemSkeleton } from '~/components/atoms/product/ProductItemSkeleton';
import { Search } from '~/components/atoms/search/Search';
import useItemsToBuy from '~/hooks/useItemsToBuy';
import useProductList from '~/hooks/useProductList';
import { ProductItem } from '~/types/productItem';

export default function HomePage() {
  const pageLoaded = useIsFocused();
  const { isLoading, error, data: productList } = useProductList();
  const { data: itemsToBuyList } = useItemsToBuy(pageLoaded);

  if (error) {
    Alert.alert('Erro', error);
  }

  const renderItems: ListRenderItem<ProductItem> = ({ item }) => {
    return (
      <ProdutItem title={item.title}>
        <AddRemoveProduct item={item} itemsToBuy={itemsToBuyList} />
      </ProdutItem>
    );
  };

  return (
    <>
      <HeaderStack title="Produtos" />
      <Container>
        {!isLoading && !productList.length && <NoItem />}

        {!isLoading ? (
          <>
            <Search />
            <FlatList
              data={productList}
              renderItem={renderItems}
              showsVerticalScrollIndicator={false}
              contentContainerClassName="pt-4 pb-14"
            />
          </>
        ) : (
          <ProductItemSkeleton qtd={10} />
        )}
      </Container>
    </>
  );
}
