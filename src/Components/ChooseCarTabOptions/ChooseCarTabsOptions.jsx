import React from "react";
import "./chooseCarTabs.css";
import { FaTaxi } from "react-icons/fa";

const tabs = [
  {
    id: 1,
    name: "HYBRID TAXI",
  },
  {
    id: 2,
    name: "TOWN TAXI",
  },
  {
    id: 3,
    name: "SUV TAXI",
  },
];

const ChooseCarTabsOptions = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="tab-options">
        <div className=" options-wrapper">
          {tabs.map((tab) => {
            return (
              <div
                onClick={() => setActiveTab(tab.name)}
                className={`tab-item absolute-center cur-po ${
                  activeTab === tab.name && "active-tab"
                }`}
                key={tab.id}
              >
                <div
                  className="tab-image-container absolute-center"
                  style={{
                    color: `${activeTab === tab.name ? "#FFCC00" : "#fff"}`,
                    cursor: "pointer",
                  }}
                >
                  <div className="tab-name">
                    <FaTaxi /> {tab.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ChooseCarTabsOptions;
