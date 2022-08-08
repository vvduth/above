import { ImageEdge, CurrencyCode, MoneyV2, ProductOption,  } from "./../schema.d";
import { Product as ShopityProducts , ProductVariantConnection, SelectedOption} from "../schema";
import { Product } from "@common/types/product";

function normalizeProductImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}
const normalizeProductVariants = ({edges}:ProductVariantConnection) => {
    return edges.map(({node}) => {
        const {id, selectedOptions, sku, title, priceV2, compareAtPriceV2} =  node
        return {
            id , 
            name: title, 
            sku: sku || id , 
            price: +priceV2.amount,
            listPrice: +compareAtPriceV2?.amount,
            requireShipping: true,
            options: selectedOptions.map(({name, value}:SelectedOption ) => {
                const option = normalizeProductOption({
                    id, 
                    name,
                    values: [value]
                })
                return option; 
            })
        }
    })
}

const normalizeProductOption = ({
  id,
  values,
  name: displayName,
}: ProductOption) => {
    const normalized = {
        id, displayName, 
        values: values.map(value => {
            let output : any = {
                label: value, 
            }
            if (displayName.match(/colou?r/gi)) {
                output = {
                    ...output,
                    hexColor: value 
                }
            }
            return output
        })
    }    
    return normalized
};

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  };
};

export function normalizeProduct(productNode: ShopityProducts): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options
      ? options
          .filter((o) => o.name !== "Title")
          .map((o) => normalizeProductOption(o))
      : [],
      variants : variants ? normalizeProductVariants(variants) : [],
    ...rest,
  };

  return product;
}
