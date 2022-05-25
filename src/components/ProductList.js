import { Listbox, Thumbnail, Heading } from "@shopify/polaris";
import React from "react";
import CombineArrays from "./CombineArrays";

const ProductList = () => {
  let product_image = "";
  let product_heading;
  let product_handle;

  console.log(CombineArrays);
  return (
    <>
      {CombineArrays.map((edge, productId) => {
        const product = edge.node;
        product_heading = edge.node.title;
        product_handle = edge.node.handle;

        product.media.edges.forEach((media) => {
          if (media.node.image.originalSrc === undefined) {
            //TODO: add missing image
            product_image = "";
          } else {
            product_image = media.node.image.originalSrc;
          }
        });
        return (
          <Listbox.Option key={productId}>
            <Thumbnail source={product_image} alt="image" />
            <a href="#">
              <Heading>{product_heading}</Heading>
            </a>
          </Listbox.Option>
        );
      })}
    </>
  );
};

export default ProductList;
