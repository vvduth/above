import { FC } from "react";

import { Product } from "@common/types/product";
import React from "react";
import Link from "next/link";
import Image from "next/image"

interface Props {
  product: Product;
}
const placeHolderImage = "/product-image-placeholder.svg"

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a>
        <div>
          <h3>
            <span>{product.name}</span>
          </h3>
          <span>
            14$
          </span>
          {
            product.images && (
                <Image 
                    alt={product.name ?? "Product image"}
                    src= {product.images[0].url ?? placeHolderImage}
                    height={540}
                    width={540}
                    quality="85"
                    layout="responsive"
                />

            )
          }
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
