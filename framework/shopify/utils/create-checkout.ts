import { SHOPIFY_CHECKOUT_URL_COOKIE, SHOPIFY_COOKIE_EXPIRE } from './../consts';
import { SHOPIFY_CHECKOUT_ID_COOKIE } from '@framework/consts';
import  Cookies from 'js-cookie';


import { ApiFetcher } from "@common/types/api"
import { Checkout,CheckoutCreatePayload,Maybe } from "@framework/schema"
import checkoutCreate from "./mutations/checkout-create"




const createCheckout = async (
  fetch: ApiFetcher<{checkoutCreate: CheckoutCreatePayload}>
): Promise<Checkout> => {
  
  const { data } = await fetch({
    query: checkoutCreate
  })
  
  const {checkout} = data.checkoutCreate

  if (!checkout) {
    throw new Error ("checkou can not be created")
  }
  const checkoutId = checkout?.id
  if (checkoutId) {
    const options = {
      expires: SHOPIFY_COOKIE_EXPIRE
    }
    Cookies.set(SHOPIFY_CHECKOUT_ID_COOKIE, checkoutId, options) ;
    Cookies.set(SHOPIFY_CHECKOUT_URL_COOKIE, checkout?.webUrl, options)
  }

  return checkout
}


export default createCheckout