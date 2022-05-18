import React from "react";
import { Page, Card, EmptyState } from "@shopify/polaris";

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
                <h1>Side Panel</h1>
              </Card.Section>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
};

export default Dashboard;
