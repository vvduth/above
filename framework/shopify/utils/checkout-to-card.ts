import { normalizeCart } from './normalize'
import { Checkout, Maybe } from '@framework/schema'

const checkoutTocart = (checkout?: Maybe<Checkout>) => {
    if (!checkout) {
        throw new Error("Missing checkout obejct")
    }

    return normalizeCart(checkout)
}
export default checkoutTocart