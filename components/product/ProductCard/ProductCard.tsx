import { FC } from "react";

import { Product } from "@common/types/product";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css";

interface Props {
  product: Product;
}
const placeHolderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        <div className={s.productBg}></div>
        <div className={s.productTag}>
          <h3 className={s.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={s.productPrice}>{product.price.value} {product.price.currencyCode}</span>
          {product.images && (
            <Image
              className={s.productImage}
              alt={product.name ?? "Product image"}
              src={product.images[0].url ?? placeHolderImage}
              height={540}
              width={540}
              quality="85"
              layout="responsive"
            />
          )}
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
