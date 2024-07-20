import { ProductItemType } from '~/types/productItem';
import { supabase } from '~/utils/supabase';

export async function productUpdate(item: ProductItemType) {
  const { error } = await supabase
    .from('items_to_buy')
    .update({
      checked: item.checked,
    })
    .eq('id', item.id);

  return {
    error: error?.message,
  };
}
