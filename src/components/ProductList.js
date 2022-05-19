import { Thumbnail, Card } from "@shopify/polaris";
import React from "react";
import info from "./info";

const ProductList = () => {
  let product_tiles,
    product_tile,
    product_image,
    product_title,
    product_link,
    product_check;

  info.data.products.edges.forEach((edge) => {
    const product = edge.node;
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
    } else {
      //TODO: change to empty image
      product_image = "Nothing";
    }
    product_tile = `<Card>`;
  });

  return <div>{product_tiles}</div>;
};

export default ProductList;
