import React, { useState } from "react";
const PortfolioAnalytics = () => {
  const [activeTab, setActiveTab] = useState("assetAdoption");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <button style={{ fontWeight: activeTab === "assetAdoption" ? "bold" : "normal"}}
          onClick={() => handleTabChange("assetAdoption")}>
          Asset adoption view
        </button>
        <button style={{ fontWeight: activeTab === "portfolio" ? "bold" : "normal" }}
          onClick={() => handleTabChange("portfolio")}>
          Portfolio view
        </button>
      </div>
    </div>
  );
};

export default PortfolioAnalytics;
