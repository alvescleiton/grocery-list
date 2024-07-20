import { ItemsToBuy } from '~/types/itemsToBuy';
import { supabase } from '~/utils/supabase';

export async function itemsToBuy() {
  const { data, error } = await supabase.from('items_to_buy').select('*');

  const products = data as ItemsToBuy[];

  return {
    data: products,
    error,
  };
}

export async function addProductToItemsToBuy(item: ItemsToBuy) {
  const { error } = await supabase.from('items_to_buy').insert(item);

  return {
    error: error?.message,
  };
}

export async function removeProductFromItemsToBuy(item: ItemsToBuy) {
  const { error } = await supabase.from('items_to_buy').delete().eq('product_id', item.product_id);

  return {
    error: error?.message,
  };
}

export async function itemsToBuyUpdate(item: ItemsToBuy) {
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
