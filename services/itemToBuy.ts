import { ProductItemType } from '~/types/productItem';
import { supabase } from '~/utils/supabase';

export async function itemsToBuy() {
  const { data, error } = await supabase.from('items_to_buy').select('*');

  const products = data as ProductItemType[];

  return {
    products,
    error,
  };
}
