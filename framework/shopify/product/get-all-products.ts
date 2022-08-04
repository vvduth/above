import { APIConfig } from "./../../common/types/api";
import getAllProductsQuery from "../utils/queries/get-all-products";

import fetchApi from "../utils/fetch-api";
import { normalizeProduct } from "../utils/normalize";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (config: APIConfig): Promise<any> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });
  // normalize and return new data
  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

export default getAllProducts;
