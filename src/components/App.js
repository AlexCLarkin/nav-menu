import React from "react";
import { Frame, Navigation, Page } from "@shopify/polaris";
import Route from "./Route";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <Frame>
            <Navigation location="/">
              <Navigation.Section
                items={[
                  {
                    url: "/1",
                    label: "Tab 1",
                  },
                  {
                    url: "/2",
                    label: "Tab 2",
                  },
                  {
                    url: "/3",
                    label: "Tab 3",
                  },
                  {
                    url: "/4",
                    label: "Tab 4",
                  },
                ]}
              />
            </Navigation>
          </Frame>
        </div>
        <div>
          <Route path="/1">
            <Page>
              <h1>uno</h1>
            </Page>
          </Route>
          <Route path="/2">
            <Page>
              <h1>dos</h1>
            </Page>
          </Route>
          <Route path="/3">
            <Page>
              <h1>tres</h1>
            </Page>
          </Route>
          <Route path="/4">
            <Page>
              <h1>cuatro</h1>
            </Page>
          </Route>
        </div>
      </div>
    );
  }
}
