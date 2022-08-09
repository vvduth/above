import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"
import getCheckOutId from "@framework/utils/get-checkout-id";
import checkoutLineItemsAdd from "@framework/utils/mutations/checkout-line-items-add";

//export default useAddItem


export const handler:MutationHook = {
  fetcherOptions: {
    query:checkoutLineItemsAdd
  },
  fetcher: async ({fetch, options, input}) => {
    const variables= {
      checkoutId: getCheckOutId(),
      lineItems: [
        {
          variantId: input.variantId,
          quantity: 1
        }
      ]
    }
    const response = await fetch({
      ...options,
      variables
    }) ;
    return response ;
  },
  useHook: ({fetch}) => {
    return async (input: any) => {
      const response = await fetch(input)
      return {
        output: response
      }
    }
  }
}