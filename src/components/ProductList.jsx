import { Listbox, Thumbnail, Heading } from "@shopify/polaris";
import React from "react";
import CombineArrays from "./CombineArrays";
import CheckboxPic from "../images/square-check-solid.svg";

const ProductList = () => {
  let product_image = "";
  let product_heading;
  let product_handle = "";
  let product_checkbox;
  let product_link;

  console.log(CombineArrays);
  return (
    <>
      {CombineArrays.map((edge, productId) => {
        const product = edge.node;
        product_heading = edge.node.title;
        product_handle = edge.node.handle;
        product_link = "/products/" + product_handle;

        product.media.edges.forEach((media) => {
          if (media.node.image.originalSrc === undefined) {
            //TODO: add missing image
            product_image = "";
          } else {
            product_image = media.node.image.originalSrc;
          }
        });

        if (product.checkbox === true) {
          product_checkbox = (
            <img src={CheckboxPic} alt="checkbox" width={20} />
          );
        } else {
          product_checkbox = "";
        }

        return (
          <Listbox.Option key={productId}>
            <Thumbnail source={product_image} alt="image" />
            <a href={product_link}>
              <Heading>{product_heading}</Heading>
            </a>
            <div className="checkbox-div">{product_checkbox}</div>
          </Listbox.Option>
        );
      })}
    </>
  );
};

export default ProductList;
