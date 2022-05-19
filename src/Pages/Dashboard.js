import React from "react";
import ProductList from "../components/ProductList";
import {
  Page,
  Card,
  EmptyState,
  Listbox,
  Heading,
  Thumbnail,
} from "@shopify/polaris";

const Dashboard = () => {
  return (
    <Page>
      <div className="ui grid ">
        <div className="center-paneln">
          <Card>
            <div className="center-card">
              <Card.Section>
                <EmptyState
                  heading="Create new Showroom"
                  action={{ content: "Choose page" }}
                ></EmptyState>
              </Card.Section>
            </div>
          </Card>
        </div>
        <div className="side-panel">
          <Card>
            <div className="side-card">
              <Card.Section>
                <Listbox>
                  <Listbox.Option vlaue="UniqueValue-1">
                    <ProductList />
                  </Listbox.Option>
                </Listbox>
              </Card.Section>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
