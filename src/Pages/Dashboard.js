import React from "react";
import ProductList from "../components/ProductList";
import { Page, Card, EmptyState, Listbox } from "@shopify/polaris";

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
            <Card.Section>
              <Listbox>
                <ProductList />
              </Listbox>
            </Card.Section>
          </Card>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
