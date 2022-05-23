import { Listbox, Thumbnail, Heading } from "@shopify/polaris";
import React from "react";
import info from "./info";

const ProductList = () => {
  let product_image;
  let product_heading;
  return (
    <>
      {info.data.products.edges.map((edge, productId) => {
        const product = edge.node;
        product_heading = edge.node.title;
        if (
          product.media !== undefined &&
          product.media.edges !== undefined &&
          product.media.length > 0
        ) {
          product.media.edges.forEach((media) => {
            if (media.node.mediaContentType === "IMAGE") {
              product_image = media.node.image.originalSrc;
            }
          });
        }
        return (
          <Listbox.Option key={productId}>
            <Heading>{product_heading}</Heading>
            <Thumbnail source={product_image} />
          </Listbox.Option>
        );
      })}
    </>
  );
};

export default ProductList;
