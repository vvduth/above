import getAllProductsQuery from "../utils/queries/get-all-products";

import fetchApi from "../utils/fetch-api";
import { normalizeProduct } from "../utils/normalize";
import { ProductConnection } from "../schema";

type ReturnType = {
  products: ProductConnection;
};
const getAllProducts = async (): Promise<any> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });
  // normalize and return new data
  return data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? [];
};

export default getAllProducts;
