/* eslint-disable react-hooks/rules-of-hooks */



import useCart from "@common/cart/use-cart";
import useUpdateItem, { UseUpdateItem } from "@common/cart/use-update-item";
import { Cart } from "@common/types/cart";
import { MutationHook } from "@common/types/hooks";
import { CheckoutLineItemsUpdatePayload } from "@framework/schema";
import checkoutTocart from '@framework/utils/checkout-to-card';
import getCheckOutId from "@framework/utils/get-checkout-id";
import checkoutLineItemUpdateMutation from "@framework/utils/mutations/checkout-line-items-update";
export default useUpdateItem as UseUpdateItem<typeof handler> ;

export type UpdateItemDescriptor = {
    fetcherInput: {
      id: string
      variantId: string
      quantity: number
    }
    fetcherOutput: {
      checkoutLineItemsUpdate: CheckoutLineItemsUpdatePayload
    }
    data: Cart
  }
export const handler: MutationHook<UpdateItemDescriptor> = {
    fetcherOptions: {
        query: checkoutLineItemUpdateMutation
    },
    async fetcher ({
        input: item, 
        options, 
        fetch, 
    }: any){
        const {data} = await fetch({
            ...options,
            variables: {
                checkoutId: getCheckOutId(),
                lineItems: [
                    {
                        id: item.id, 
                        variantId: item.variantId,
                        quantity: item.quantity ?? 1
                    }
                ]
            }
        })
        const cart = checkoutTocart(data.checkoutLineItemsUpdate.checkout)
        return cart
    }, 
    useHook:  ({fetch}) => () => {
        const { mutate: updateCart } = useCart()
        return async (input) => {
            const data = await fetch(input)
            updateCart(data, false) ;
            return data 
        }
    }
}