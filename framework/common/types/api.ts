
export type ApitFetcherOptions = {
    url: string , 
    query: string, 
    variables?: {[key: string]: string} | undefined
}

export type Variables = {[key:string]: string } ;
export type  ApiFetcherResults<T> =  {
    data: T 
}

export interface APIConfig {
    apiUrl: string ; 
    fetch<T>(
        options: ApitFetcherOptions
    ): Promise<ApiFetcherResults<T>>
}