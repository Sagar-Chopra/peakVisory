import React, { useEffect, useState } from 'react'
import search from "/images/search.svg";
import bellIcon from "/images/bellIcon.svg";
import setting from "/images/setting.svg";
import profile from "/images/profile.svg";
import "./index.css"

const Header = ({profileOpen , setProfileOpen}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const renderButtons = () => (
    <>
      <button className="secondaryButton mr-4">Export to Excel</button>
      <button className="secondaryButton mr-4">Add Document</button>
      <button className="secondaryButton mr-4">Connect</button>
      <button className="secondaryButton mr-4">
        <img src={bellIcon} alt="bellIcon" />
      </button>
      <button className="secondaryButton mr-4">
        <img src={setting} alt="setting" />
      </button>
    </>
  );

  return (
    <div className="headerContainer">
    <div className="d-flex align-items-center">
      <p className="mr-8 mb-0">Review</p>
      <select className="form-select fs-14">
        <option>Google</option>
      </select>
      <button className="btn greenButton">Quickbook's Data</button>
    </div>
    <div className='d-flex'>
      <button className="secondaryButton mr-4">
        <img src={search} alt="search" />
      </button>

      {!profileOpen ? (
          isLargeScreen ? (
            renderButtons()
          ) : (
            <select className="form-select fs-14 mr-4">
              <option>Export to Excel</option>
              <option>Add Document</option>
              <option>Connect</option>
              <option>Notifications</option>
              <option>Settings</option>
            </select>
          )
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