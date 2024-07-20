import { useEffect, useState } from 'react';

import { itemsToBuy } from '~/services/itemToBuy';
import { ItemsToBuy } from '~/types/itemsToBuy';

function useItemsToBuy(loadData = false) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [productList, setProductList] = useState<ItemsToBuy[]>([]);

  useEffect(() => {
    if (loadData) {
      (async () => {
        setIsLoading(true);
        const { data, error } = await itemsToBuy();
        data?.sort((a, b) => a.title.localeCompare(b.title));

        setIsLoading(false);
        setError(error?.message);
        setProductList(data);
      })();
    }
  }, [loadData]);

  return {
    isLoading,
    error,
    data: productList,
  };
}

export default useItemsToBuy;
