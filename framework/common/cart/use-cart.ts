import { ApiHooks } from '@common/types/api';
import { useHook } from '@common/utils/use-hook';
const useCart = () => {
    const hook = useHook((hooks: ApiHooks) => hooks.cart.useCart) ;

    return hook.useHook({
        fetch: hook.fetcher
    })

}
export default useCart 