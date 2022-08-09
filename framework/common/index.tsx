import { createContext, ReactNode, useContext, useMemo } from "react";
import { APIConfig, ApiHooks } from "./types/api";

interface ApiProviderProps {
  children: ReactNode | ReactNode[];
  config: APIConfig ;
  hooks: ApiHooks
}

export const ApiContext = createContext({});
export const ApiProvider = ({ children, config, hooks }: ApiProviderProps) => {
  const coreConfig = useMemo(() => {
    return {
      fetcher: config.fetch,
      hooks
    };
  }, [config.fetch, hooks]);

  return (
    <ApiContext.Provider value={coreConfig}>{children}</ApiContext.Provider>
  );
};

export const useApiProvider = () => {
  return useContext(ApiContext);
};
