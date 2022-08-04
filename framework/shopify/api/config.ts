import { APIConfig } from "@common/types/api";
import fetchApi from "@framework/utils/fetch-api";

class Config {
    private config: APIConfig ;
    constructor(config: APIConfig) {
        this.config = config 
    }

    getConfig():APIConfig {
        return this.config
    } 
}

const configWrapper = new Config({
    apiUrl: "http://localhost:4000/graphql",
    fetch: fetchApi 
})

export function getConfig() {
    return configWrapper.getConfig()
}