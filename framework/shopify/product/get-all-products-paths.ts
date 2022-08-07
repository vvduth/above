import { ProductConnection } from './../schema.d';
import { Product } from "@common/types/product";
import { APIConfig } from "@common/types/api";
import getAllProductsPathQuery from "@framework/utils/queries/get-all-products-paths";

type ReturnType = {
  products: Pick<Product, "slug">[];
};

const getAllProductsPaths = async (config: APIConfig): Promise<ReturnType> => {

    const {data} = await config.fetch<{products: ProductConnection}>({query: getAllProductsPathQuery,
        url: config.apiUrl
    })
    const products = data.products.edges.map(({node:{handle}})=> {
        return {slug: handle}
    })
    console.log(products) 
    return {products}
 
};

export default getAllProductsPaths;
