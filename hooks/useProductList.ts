import { useEffect, useState } from 'react';

import { listProducts } from '~/services/products';
import { ProductItemType } from '~/types/productItem';

function useProductList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();
  const [productList, setProductList] = useState<ProductItemType[]>([]);

  useEffect(() => {
    (async () => {
      const { products, error } = await listProducts();
      products?.sort((a, b) => a.title.localeCompare(b.title));

      setTimeout(() => {
        setIsLoading(false);
        setError(error?.message);
        setProductList(products);
      }, 5000);
    })();
  }, []);

  return {
    isLoading,
    error,
    productList,
  };
}

export default useProductList;
