import React from "react";
import logo from "/images/logo.svg";
import help from "/images/help.svg";
import { sideBarOption } from "../../dummyJson";
import "./index.css";

const Sidebar = ({ option, setOption }) => {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="mb-2" />
      {sideBarOption.map((data, index) => {
        return (
          <div
            className={`d-flex flex-column align-items-center ${
              option == data.heading ? "selectedOptionDiv" : "optionDiv"
            }`}
            key={index}
            onClick={() => {
              setOption(data.heading);
            }}
          >
            <img src={data?.img} className="sidebarImage" alt="home" />
            <h5 className="sidebarText">{data?.heading}</h5>
          </div>
        );
      })}
      <div
        className={`d-flex flex-column align-items-center`}
      >
        <img src={help} className="sidebarImage" alt="home" />
        <h5 className="sidebarText">{"help"}</h5>
      </div>
    </div>
  );
};

export default Sidebar;
