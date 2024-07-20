import { useEffect, useState } from 'react';

import { listProducts } from '~/services/products';
import { ProductItemType } from '~/types/productItem';

function useProductList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [productList, setProductList] = useState<ProductItemType[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { products, error } = await listProducts();
      products?.sort((a, b) => a.title.localeCompare(b.title));

      setIsLoading(false);
      setError(error?.message);
      setProductList(products);
    })();
  }, []);

  return {
    isLoading,
    error,
    productList,
  };
}

export default useProductList;
