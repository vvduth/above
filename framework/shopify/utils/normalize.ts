import { ImageEdge, CurrencyCode, MoneyV2 } from './../schema.d';
import { Product as ShopityProducts} from "../schema";
import { Product } from '@common/types/product';

function normalizeProductImages({edges}: {edges: Array<ImageEdge>}) {
    return edges.map(({node: {originalSrc: url, ...rest}}) => {
        return {
            url: `/images/${url}`,
            ...rest
        }
    })
}

const normalizeProductPrice = ({currencyCode, amount}:MoneyV2) => {
    return {
        value: +amount ,
        currencyCode
    }
}

export function normalizeProduct(productNode: ShopityProducts) : Product{
    const {
        id, 
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
        priceRange, 
        ...rest 

    } = productNode

    const product = {
        id, 
        name, 
        vendor, 
        description, 
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g,""),
        images: normalizeProductImages(imageConnection),
        price: normalizeProductPrice(priceRange.minVariantPrice),
        ...rest
    }

    return product
}