import React from "react";
import { Frame, Navigation } from "@shopify/polaris";

let items = [{ url: "/", label: "Dashboard" }];

const NavigationBar = () => {
  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section items={items} />
      </Navigation>
    </Frame>
  );
};

export default NavigationBar;
