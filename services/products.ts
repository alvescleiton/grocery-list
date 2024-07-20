import { ProductItem } from '~/types/productItem';
import { supabase } from '~/utils/supabase';

export async function listProducts() {
  const { data, error } = await supabase.from('product_list').select('*');

  const products = data as ProductItem[];

  return {
    data: products,
    error,
  };
}
