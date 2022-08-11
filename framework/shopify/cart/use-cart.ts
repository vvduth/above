import { Checkout } from '@framework/schema';
import { SWRHook } from './../../common/types/hooks';
import { useMemo } from 'react';
import createCheckout from "@framework/utils/create-checkout";
import checkoutTocart from '@framework/utils/checkout-to-card';
import useCart from "@common/cart/use-cart";
import getCheckout from "@framework/utils/queries/get-checkout";
import { Cart } from '@common/types/cart';

export type UseCartHookDescriptor = {
  fetcherInput: {
    checkoutId: string
  }
  fetcherOutput: any
  data: Cart
}

export default useCart
export type AddItemHookDescriptor = {
  fetcherInput: {
    variantId: string
    quantity: number
  }
  fetcherOutput: {
    node: Checkout
  }
  data: Cart
}
export const handler:SWRHook<UseCartHookDescriptor> = {
  fetcherOptions: {
    // get checkout query
    query: getCheckout
  },
  async fetcher({
    fetch,
    options,
    input: { checkoutId }
  }: any) {
    let checkout: Checkout

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId
        }
      })
      checkout = data.node
    } else {
      checkout = await createCheckout(fetch as any)
    }

    const cart = checkoutTocart(checkout)
    return cart
  },
  useHook: ({useData}) => {
    const data = useData({
      swrOptions: {
        revalidateOnFocus: false
      }
    })

    return useMemo(() => {
      return data
    }, [data])
  }
}