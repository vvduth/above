import createCheckout from "@framework/utils/create-checkout";

import useCart from "@common/cart/use-cart"
export default useCart 
export const handler = {
    fetchOptions: {
        query: "query {hello}"
    },
    async fetcher({fetch, options, input: {checkoutId}}: any) {
        let checkout ; 
        if (checkoutId) {
            const {data} = await fetch({...options})
            checkout = data.node
        } else {
            checkout = await createCheckout(fetch)
        }
        
        // get check out

        // if there is none create checkout mate
        
        return checkout
    },
    useHook:({useData}: any) => {
        const data = useData() 
        return {data}
    }
}