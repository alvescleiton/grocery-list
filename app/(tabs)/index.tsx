import { Alert, FlatList, ListRenderItem, View } from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';
import { NoItem } from '~/components/atoms/noItems/NoItems';
import { ProdutItem } from '~/components/atoms/product/ProductItem';
import { ProductItemSkeleton } from '~/components/atoms/product/ProductItemSkeleton';
import { Search } from '~/components/atoms/search/Search';
import useProductList from '~/hooks/useProductList';
import { ProductItemType } from '~/types/productItem';

export default function Home() {
  const { isLoading, error, productList } = useProductList();

  if (error) {
    Alert.alert('Erro', error);
  }

  const renderItems: ListRenderItem<ProductItemType> = ({ item }) => {
    return <ProdutItem item={item} />;
  };

  return (
    <>
      <HeaderStack title="Produtos" />
      <Container>
        {!isLoading && !productList.length && <NoItem />}

        {!isLoading ? (
          <>
            <Search />
            <View>
              <FlatList
                data={productList}
                renderItem={renderItems}
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pt-4 pb-14"
              />
            </View>
          </>
        ) : (
          <ProductItemSkeleton qtd={10} />
        )}
      </Container>
    </>
  );
}
