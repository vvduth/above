import { UseCart } from '@common/cart/use-cart';
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
  fetcherOutput: {
    node: Checkout
  }
  data: Cart
}

export default useCart as UseCart<typeof handler>

export const handler: SWRHook<UseCartHookDescriptor> = {
  fetcherOptions: {
    // get checkout query
    query: getCheckout
  },
  async fetcher({
    fetch,
    options,
    input: { checkoutId }
  }) {
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
  useHook: ({useData}) => () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = useData({
      swrOptions: {
        revalidateOnFocus: false
      }
    })


    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMemo(() => {
      return {
        ...result, 
        isEmpty: (result.data?.lineItems.length ?? 0) <= 0
      }
    }, [result])
  }
}