import { Layout } from "@components/common";
import { Container } from "@components/ui";
import { getConfig } from "@framework/api/config";
import { getProduct, getAllProductsPaths } from "@framework/product";
import { ProductView } from "@components/product";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import React from "react";

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();

  const { products } = await getAllProductsPaths(config);
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct({
    config,
    variables: { slug: params!.slug },
  });
  return {
    props: {
      product,
    },
  };
};

const ProductSlug = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {product && <ProductView product={product}/>}
    </>
  );
};
ProductSlug.Layout = Layout;
export default ProductSlug;
