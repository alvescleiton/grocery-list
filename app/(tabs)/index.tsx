import { FlatList, ListRenderItem, View } from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';
import { ProdutItem } from '~/components/atoms/product/ProductItem';
import { Search } from '~/components/atoms/search/Search';
import productList from '~/data/productList.json';
import { ProductItemType } from '~/types/productItem';

export default function Home() {
  const renderItems: ListRenderItem<ProductItemType> = ({ item }) => {
    return <ProdutItem item={item} />;
  };

  return (
    <>
      <HeaderStack title="Produtos" />
      <Container>
        <Search />

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
