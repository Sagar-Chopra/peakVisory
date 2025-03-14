import React, { useState } from "react";
import quickbook from "/images/quickbook.svg";
import leftarrow from "/images/leftarrow.svg";
import rightarrow from "/images/rightarrow.svg";
import uparrow from "/images/uparrow.svg";
import downarrow from "/images/downarrow.svg";
import './index.css'

const Profile = () => {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  return (
    <div className="profileContainer">
      <div className="quickBook">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-flex-start">
            <img src={quickbook} alt="quickbook" className="mr-8" />
            <div>
              <p className="mb-0 fw-700 fs-16">Quickbook</p>
              <p className="fs-14 secondaryColor mb-0">16 June, 2024</p>
              <p className="fs-14 secondaryColor mb-0">8:15 PM</p>
            </div>
          </div>
          <div>
            <p className="fs-12 fw-700 secondaryColor mb-0">Publishing...</p>
            <p className="fs-12 fw-700 secondaryColor">Jimmy Jason</p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-16">
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="auto1"
              id="auto1"
              className="mr-8"
              checked={isChecked1}
              onChange={() => setIsChecked1(!isChecked1)}
            />
            <p className="fs-16 fw-500 mb-0">Auto-sync</p>
          </div>

          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              name="auto2"
              id="auto2"
              className="mr-8"
              checked={isChecked2}
              onChange={() => setIsChecked2(!isChecked2)}
            />
            <p className="fs-16 fw-500 mb-0">Auto-sync</p>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex">
          <p className="fs-12 fw-500 darkColor tab border border-secondary-subtle border-opacity-25">
            Comment
          </p>
          <p className="fs-12 fw-500 darkColor tab">Query</p>
        </div>
      </div>

      <div>
        <p className="fw-700 fs-16 secondaryColor">Type Comment</p>
        <p className="fw-500 fs-12 secondaryColor">Start typing…</p>
        <input type="text" className="inputField" />
      </div>

      <div>
        <button className="greyButton secondaryColor fs-14">Add Comment</button>
        <button className="primaryButton secondaryColor fs-14 w-100 mb-24">
          View Line Items
        </button>
      </div>

      <div className="d-flex justify-content-between border-bottom mb-24">
        <div>
          <img src={leftarrow} alt="leftarrow" />
        </div>
        <div>
          <p className="fw-700 fs-16">Payment Details</p>
        </div>
        <div>
          <img src={rightarrow} alt="rightarrow" />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div>
          <p className="fw-700 fs-16">Payment Details</p>
        </div>
        <div>
          <img src={uparrow} alt="uparrow" />
        </div>
      </div>
      <div className="d-flex row border-bottom pb-3 mb-2">
        <div className="d-flex col-md-6 align-items-center">
          <input
            type="radio"
            name="auto"
            id="auto"
            className="mr-8 radio"
            checked
          />
          <p className="fs-16 fw-500 mb-0 ">Paid</p>
        </div>
        <div className="d-flex col-md-6">
          <input
            type="radio"
            name="auto"
            id="auto"
            className="mr-8 radio"
            checked
          />
          <p className="fs-16 fw-500 mb-0 ">UnPaid</p>
        </div>
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Bill Number</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>

      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Bill Date</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Paid Amount</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="£ 1900.00"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Paid Date</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Bank Transaction Ref</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Total Amount</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Tax Amount</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Total Amount (GBP)</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Tax Amount (GBP)</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">FX Rate</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Start Typing"
        />
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p className="fw-700 fs-16">Description</p>
        </div>
        <div>
          <img src={uparrow} alt="uparrow" />
        </div>
      </div>
      <div className="d-flex row border-bottom pb-3 mb-2">
        <div className="d-flex col-md-6 align-items-center">
          <input
            type="radio"
            name="auto"
            id="auto"
            className="mr-8 radio"
            checked
          />
          <p className="fs-16 fw-500 mb-0 ">Single</p>
        </div>
        <div className="d-flex col-md-6">
          <input
            type="radio"
            name="auto"
            id="auto"
            className="mr-8 radio"
            checked
          />
          <p className="fs-16 fw-500 mb-0 ">Multiple</p>
        </div>
      </div>
      <div className="border-bottom pb-12 mb-18">
        <p className="fs-14 fw-400 secondaryColor mb-1">Description</p>
        <input
          type="text"
          className="inputField fs-14 fw-400 border-bottom-0 mb-0"
          placeholder="Enter Description"
        />
      </div>
      <div>
        <button className="greyButton secondaryColor fs-14">Save</button>
        <button className="primaryButton secondaryColor fs-14 w-100 mb-24 mr-8">
          Publish <img src={downarrow} alt="down arrow" />
        </button>
      </div>
    </div>
  );
};

export default Profile;
