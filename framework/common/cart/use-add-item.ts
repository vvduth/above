import { useMutationHook } from './../utils/use-hook';

import { useHook } from "@common/utils/use-hook";

const useAddItem = () => {
  const hook = useHook((hooks) => {return hooks.cart.useAddItem})

  
  return useMutationHook({...hook})
};

export default useAddItem;
