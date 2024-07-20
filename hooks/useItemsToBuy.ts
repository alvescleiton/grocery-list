import { useEffect, useState } from 'react';

import { itemsToBuy } from '~/services/itemToBuy';
import { ProductItemType } from '~/types/productItem';

type UseItemsToBuyProps = {
  isFocused?: boolean;
};

function useItemsToBuy({ isFocused = false }: UseItemsToBuyProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [productList, setProductList] = useState<ProductItemType[]>([]);

  useEffect(() => {
    if (isFocused) {
      (async () => {
        setIsLoading(true);
        const { products, error } = await itemsToBuy();
        products?.sort((a, b) => a.title.localeCompare(b.title));

        setIsLoading(false);
        setError(error?.message);
        setProductList(products);
      })();
    }
  }, [isFocused]);

  return {
    isLoading,
    error,
    productList,
  };
}

export default useItemsToBuy;
