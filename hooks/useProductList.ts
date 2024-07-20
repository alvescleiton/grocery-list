import { useEffect, useState } from 'react';

import { listProducts } from '~/services/products';
import { ProductItem } from '~/types/productItem';

function useProductList() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [productList, setProductList] = useState<ProductItem[]>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data, error } = await listProducts();
      data?.sort((a, b) => a.title.localeCompare(b.title));

      setIsLoading(false);
      setError(error?.message);
      setProductList(data);
    })();
  }, []);

  return {
    isLoading,
    error,
    data: productList,
  };
}

export default useProductList;
