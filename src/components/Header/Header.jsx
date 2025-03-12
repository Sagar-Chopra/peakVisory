import React from 'react'
import search from "/images/search.svg";
import bellIcon from "/images/bellIcon.svg";
import setting from "/images/setting.svg";
import profile from "/images/profile.svg";
import "./index.css"

const Header = ({profileOpen , setProfileOpen}) => {
  return (
    <div className="headerContainer">
    <div className="d-flex align-items-center">
      <p className="mr-8 mb-0">Review</p>
      <select className="form-select fs-14">
        <option>Google</option>
      </select>
      <button className="btn greenButton">Quickbook's Data</button>
    </div>
    <div>
      <button className="secondaryButton mr-4">
        <img src={search} alt="search" />
      </button>
      {!profileOpen ? (
        <>
          <button className="secondaryButton mr-4">
            Export to Excel
          </button>
          <button className="secondaryButton mr-4">Add Dcoument</button>
          <button className="secondaryButton mr-4">Connect</button>
          <button className="secondaryButton mr-4">
            <img src={bellIcon} alt="bellIcon" />
          </button>
          <button className="secondaryButton mr-4">
            <img src={setting} alt="setting" />
          </button>
        </>
      ) : null}

      <button
        className="secondaryButton mr-4"
        onClick={() => {
          setProfileOpen(!profileOpen);
        }}
      >
        <img src={profile} alt="profile" />
      </button>
    </div>
  </div>
  )
}

export default Header