import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ListRenderItem, View } from 'react-native';

import { Container } from '~/components/atoms/container/Container';
import { HeaderStack } from '~/components/atoms/headerStack/HeaderStack';
import { ProdutItem } from '~/components/atoms/product/ProductItem';
import { Search } from '~/components/atoms/search/Search';
import { ProductItemType } from '~/types/productItem';
import { supabase } from '~/utils/supabase';

export default function Home() {
  const [productList, setProductList] = useState<ProductItemType[]>([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('product_list')
        .select('*')
        .order('title', { ascending: true });

      if (error) {
        Alert.alert('Erro', 'Erro ao retornar a lista de produtos');
      }

      const list = data?.sort((a, b) => a.title.localeCompare(b.title));

      setProductList(list as ProductItemType[]);
    })();
  }, []);

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
