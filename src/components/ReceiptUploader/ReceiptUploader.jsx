import { useState } from "react";
import { Clipboard } from "lucide-react";
import "./index.css";

const ReceiptUploader = () => {
    const [selectedTab, setSelectedTab] = useState("Receipts");

  const tabs = ["Bills", "Receipts", "Bank"];

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    alert("Copied: " + email);
  };
  return (
    <div className="container mt-5 p-4 border rounded shadow bg-white">
      {/* Tab Navigation */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <button className={`btn text-decoration-none secondaryColor fs-14`}>
          EasyUpload
        </button>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`btn text-decoration-none fs-14 ${
              selectedTab === tab
                ? "text-primary border-bottom border-primary"
                : "darkColor"
            } mx-2`}
          >
            {tab}
          </button>
        ))}

        <button className="btn text-secondary fs-4">✕</button>
      </div>

      {/* Content Section */}
      <div className="row g-4 mb-4">
        <div className="col-md-6 border-bottom">
          <p className="secondaryColor small mb-1 fs-14">Document Owner</p>
          <p className="fw-bold fs-14">Accountant 01</p>
        </div>

        <div className="col-md-6 border-bottom">
          <p className="secondaryColor small mb-1 fs-14">Client</p>
          <select className="form-select fs-14">
            <option>Select Client</option>
          </select>
        </div>
      </div>

      {/* Upload Section */}
      <div className="border border-dashed rounded p-5 text-center mb-4">
        <div className="mb-3">
          <span className="text-muted display-6">📤</span>
        </div>
        <p className="text-primary fw-medium mb-1">
          Drag & Drop or Choose file to upload
        </p>
        <p className="text-muted small">JPG, PNG, PDF, CVS</p>
      </div>
      <div className="w-100 d-flex justify-content-center">
        <button className="btn btn-primary mb-4 addbutton fs-14">
          Add Receipt
        </button>
      </div>

      {/* Email Section */}
      <div>
        <p className="small mb-3 secondaryColor fs-14">Send Over Email</p>

        <div className="d-flex align-items-center mb-3">
          <span className="textColor">
            <span className="fw-semibold text-dark fs-14">Single :</span>{" "}
            abc.single@gmail.com
          </span>
          <Clipboard
            className="cursor-pointer text-secondary hover-text-primary fs-14"
            size={18}
            onClick={() => copyToClipboard("abc.single@gmail.com")}
          />
        </div>

        <div className="d-flex align-items-center">
          <span className="textColor fs-14">
            <span className="fw-semibold textColor text-dark fs-14">
              Multiple :
            </span>{" "}
            abc.multiple@gmail.com
          </span>
          <Clipboard
            className="cursor-pointer text-secondary hover-text-primary fs-14"
            size={18}
            onClick={() => copyToClipboard("abc.multiple@gmail.com")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReceiptUploader;
