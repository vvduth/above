import { useMemo } from 'react';
import createCheckout from "@framework/utils/create-checkout";
import checkoutTocart from '@framework/utils/checkout-to-card';
import useCart from "@common/cart/use-cart";
import getCheckout from "@framework/utils/queries/get-checkout";


export default useCart

export const handler = {
  fetchOptions: {
    // get checkout query
    query: getCheckout
  },
  async fetcher({
    fetch,
    options,
    input: { checkoutId }
  }: any) {
    let checkout

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId
        }
      })
      checkout = data.node
    } else {
      checkout = await createCheckout(fetch)
    }

    const cart = checkoutTocart(checkout)
    return cart
  },
  useHook: ({useData}: any) => {
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