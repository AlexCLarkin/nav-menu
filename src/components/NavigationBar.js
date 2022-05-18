import React from "react";
import { Frame, Navigation } from "@shopify/polaris";

const NavigationBar = () => {
  const items = [{ url: "/", label: "Dashboard" }];

  return (
    <Frame>
      <Navigation location="/">
        <Navigation.Section items={items} />
      </Navigation>
    </Frame>
  );
};

export default NavigationBar;
