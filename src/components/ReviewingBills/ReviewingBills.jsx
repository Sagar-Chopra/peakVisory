import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import bill from "/images/bill.svg";
import billImage from "/images/billImage.svg";
import Sidebar from "../SideBar/Sidebar";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
const ReviewingBills = () => {
  const [option, setOption] = useState("accounting");
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Bills");
  const tabs = ["All Document", "Bills", "Receipts"];
  const profileRef = useRef(null);

  useEffect(() => {
    if (profileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [profileOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    if (profileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileOpen]);
  return (
    <>
      <div className="d-flex">
        <Sidebar option={option} setOption={setOption} />
        <div className="w-100">
          <Header profileOpen={profileOpen} setProfileOpen={setProfileOpen} />
          {option === "accounting" ? (
            <div className="billContainer">
              <div className="w-100 d-flex justify-content-end">
                <button className="primaryButton">
                  Add to Expenses Report
                </button>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="tabContainer d-flex">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`btn text-decoration-none fs-14 tabButton ${
                          selectedTab === tab ? "blackColor" : "secondaryColor"
                        } mx-2`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="billListing">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div className="billDiv" key={index}>
                        <img src={bill} className="billImg" alt="bill" />
                        <div>
                          <p className="mb-0">Bill 1</p>
                          <p className="mb-0">Date: Nov 1, 2019</p>
                          <p className="mb-0">₤ 50.59</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-7 billSection">
                  <img src={billImage} alt="bill" className="billImage" />
                </div>
              </div>
            </div>
          ) : (
            <div className="billContainer">{option}</div>
          )}
        </div>
        {
        profileOpen ? 
        <div ref={profileRef}>
            <Profile />
        </div>
        : null
        }
      </div>
    </>
  );
};

export default ReviewingBills;
