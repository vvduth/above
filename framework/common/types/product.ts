export interface ProductImages {
    url: string, 
    alt?: string
}

export interface Product {
    id: string, 
    name: string, 
    description: string , 
    slug: string,
    path: string, 
    images: ProductImages[]
}