import { Listbox, Heading } from "@shopify/polaris";
import info from "./info";
import React from "react";

const ListItem = () => {
  var heading = [
    info.data.products.edges.map((edges) => (
      <Listbox.Option>
        <Heading>{edges.node.title}</Heading>
      </Listbox.Option>
    )),
  ];
  return heading;
};

export default ListItem;
