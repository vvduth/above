/* eslint-disable react-hooks/rules-of-hooks */
import {  CheckoutLineItemsRemovePayload } from '@framework/schema';

import useRemoveItem, {UseRemoveItem} from "@common/cart/use-remove-item";
import { Cart } from '@common/types/cart';
import { MutationHook } from '@common/types/hooks';
import getCheckOutId from '@framework/utils/get-checkout-id';
import checkoutTocart from '@framework/utils/checkout-to-card';
import checkoutLineItemRemoveMutation from '@framework/utils/mutations/checkout-line-items-remove';
import useCart from '@common/cart/use-cart';
export default useRemoveItem as UseRemoveItem<typeof handler>

export type RemoveItemDecscriptor = {
    fetcherInput: {
        id: string
    },
    fetcherOutput: {
        checkoutLineItemsRemove: CheckoutLineItemsRemovePayload
    },
    data: Cart
}

export const handler: MutationHook<RemoveItemDecscriptor> = {
  fetcherOptions: {
    query: checkoutLineItemRemoveMutation,
  },
  async fetcher({ input: {id}, options, fetch }) {
    const { data } = await fetch({
      ...options,
      variables: {
        checkoutId: getCheckOutId(),
        lineItemIds: [id]
      }
    });

    const cart = checkoutTocart(data.checkoutLineItemsRemove.checkout)
    return cart
  },
  useHook: ({fetch}) => () => {
    const { mutate: updateCart } = useCart()

    return async (input) => {
      const data = await fetch(input)
      updateCart(data, false)
      return data
    }
  }
};
