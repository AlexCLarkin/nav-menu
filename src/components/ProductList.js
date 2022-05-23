import { Listbox, Thumbnail, Heading } from "@shopify/polaris";
import React from "react";
import info from "./info";

const ProductList = () => {
  let product_image;
  let product_heading;

  info.data.products.edges.forEach((edge) => {
    const product = edge.node;
    product_heading = edge.node.title;
    if (
      product.media !== undefined &&
      product.media.edges !== undefined &&
      product.media.length > 0
    ) {
      product.media.edges.forEach((media) => {
        if (media.node.mediaContentType === "IMAGE") {
          product_image = (
            <Thumbnail
              source={media.node.image.originalSrc}
              alt={product.title}
            />
          );
        }
      });
    }
  });
  return (
    <Listbox.Option>
      <Heading>{product_heading}</Heading>
      {product_image}
    </Listbox.Option>
  );
};

export default ProductList;
