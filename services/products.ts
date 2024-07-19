import { ProductItemType } from '~/types/productItem';
import { supabase } from '~/utils/supabase';

export async function listProducts() {
  const { data, error } = await supabase.from('product_list').select('*');

  const products = data as ProductItemType[];

  return {
    products,
    error,
  };
}
