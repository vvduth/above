
import { useAddItem } from "@common/cart"
import { UseAddItem } from "@common/cart/use-add-item"
import useCart from "@common/cart/use-cart"
import { Cart } from "@common/types/cart"
import { MutationHook } from "@common/types/hooks"
import { CheckoutLineItemsAddPayload } from "@framework/schema"
import checkoutTocart from "@framework/utils/checkout-to-card"
import getCheckoutId from "@framework/utils/get-checkout-id"
import checkoutLineItemsAdd from "@framework/utils/mutations/checkout-line-items-add"

export default useAddItem as UseAddItem<typeof handler>

export type AddItemHookDescriptor = {
  fetcherInput: {
    variantId: string
    quantity: number
  }
  fetcherOutput: {
    checkoutLineItemsAdd: CheckoutLineItemsAddPayload
  }
  data: Cart
}


export const handler: MutationHook<AddItemHookDescriptor> = {
  fetcherOptions: {
    query: checkoutLineItemsAdd
  },
  fetcher: async ({fetch, options, input}) => {

    const variables = {
      checkoutId: getCheckoutId(),
      lineItems: [
        {
         variantId: input.variantId,
         quantity: 1
        }
      ]
    }

    const { data } = await fetch({
       ...options,
       variables
    })

    const cart = checkoutTocart(data.checkoutLineItemsAdd.checkout)
    return cart
  },
  useHook: ({fetch}) => () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { mutate: updateCart } = useCart()

    return async (input) => {
      const response = await fetch(input)
      await updateCart(response, false)
      return response
    }
  }
}