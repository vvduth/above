
export type ApitFetcherOptions = {
    url: string , 
    query: string, 
}
export type  ApiFetcherResults<T> =  {
    data: T 
}

export interface APIConfig {
    apiUrl: string ; 
    fetch<T>(
        options: ApitFetcherOptions
    ): Promise<ApiFetcherResults<T>>
}