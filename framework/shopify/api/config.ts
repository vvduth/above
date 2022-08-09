import { SHOPIFY_CHECKOUT_ID_COOKIE } from './../consts';
import { ApiConfig } from "@common/types/api";
import fetchApi from "@framework/utils/fetch-api";

class Config {
    private config: ApiConfig ;
    constructor(config: ApiConfig) {
        this.config = config 
    }

    getConfig():ApiConfig {
        return this.config
    } 
}

const configWrapper = new Config({
    fetch: fetchApi ,
    checkoutCookie: SHOPIFY_CHECKOUT_ID_COOKIE
})

export function getConfig() {
    return configWrapper.getConfig()
}