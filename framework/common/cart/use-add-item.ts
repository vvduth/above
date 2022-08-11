import { MutationHook } from '@common/types/hooks';

import { useMutationHook } from './../utils/use-hook';

import { useHook } from "@common/utils/use-hook";

export type UseAddItem<
H extends MutationHook = MutationHook<any>
> = ReturnType<H["useHook"]>

const useAddItem:UseAddItem = () => {
  const hook = useHook((hooks) => {return hooks.cart.useAddItem})

  
  return useMutationHook({...hook})()
};

export default useAddItem;
