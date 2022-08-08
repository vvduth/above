import { APIConfig, Variables } from "@common/types/api";
import getProductQuery from "@framework/utils/queries/get-product";
import { Product as ShopifyProduct } from "@framework/schema";
import { Product } from "@common/types/product";
import React from "react";
import { normalizeProduct } from "@framework/utils/normalize";

type FetchType = {
  productByHandle : ShopifyProduct ;
}
type ReturnType = {
  product: Product | null
}

const getProduct = async (options: {
  config: APIConfig;
  variables: Variables;
}): Promise<ReturnType> => {
  const { config, variables } = options;
  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    url: config.apiUrl,
    variables,
  });
  
  const {productByHandle} = data ;
  return {
    product:  productByHandle ? normalizeProduct(productByHandle) : null
  };
};

export default getProduct;
