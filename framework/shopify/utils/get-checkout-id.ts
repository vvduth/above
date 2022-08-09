import Cookies from "js-cookie"
import { SHOPIFY_CHECKOUT_ID_COOKIE } from "@framework/consts"

const getCheckOutId = () => 
    Cookies.get(SHOPIFY_CHECKOUT_ID_COOKIE)

export default getCheckOutId