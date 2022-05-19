import { Listbox, Thumbnail, Heading } from "@shopify/polaris";
import info from "./info";
import React from "react";

const ListItem = () => {
  let heading = info.data.products.edges[0].node.title;
  return (
    <Listbox.Option>
      <Heading>{heading}</Heading>
    </Listbox.Option>
  );
};

export default ListItem;
