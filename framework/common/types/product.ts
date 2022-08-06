
export interface ProductImages {
    url: string, 
    alt?: string
}

export interface ProductPrice {
    value: number, 
    currencyCode: "USD" |"EUR" | string
}

export interface Product {
    id: string, 
    name: string, 
    description: string , 
    slug: string,
    path: string, 
    images: ProductImages[],
    price: ProductPrice, 
}