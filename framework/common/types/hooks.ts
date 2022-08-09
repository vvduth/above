import { ApiFetcher, ApiFetcherOptions } from './api';


export type MutationHookContext = {
    fetch: (input: any) => any
}

export type FetcherHooksContext = {
    input?: any ,
    fetch: ApiFetcher,
    options: ApiFetcherOptions
}
export type MutationHook = {
    fetcherOptions: ApiFetcherOptions ,
    fetcher: (context: FetcherHooksContext) => any, 
    useHook(
        context: MutationHookContext
    ) : (input:any) => any
}