import { ImageEdge } from './../schema.d';
import { Product as ShopityProducts} from "../schema";

function normalizeProductImages({edges}: {edges: Array<ImageEdge>}) {
    return edges.map(({node: {originalSrc: url, ...rest}}) => {
        return {
            url: `/images/${url}`,
            ...rest
        }
    })
}

export function normalizeProduct(productNode: ShopityProducts) : any{
    const {
        id, 
        title: name,
        handle,
        vendor,
        description,
        images: imageConnection,
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
        ...rest
    }

    return product
}