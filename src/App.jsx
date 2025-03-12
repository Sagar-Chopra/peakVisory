import "./App.css";
import ReceiptUploader from "./components/ReceiptUploader/ReceiptUploader";
import ReviewingBills from "./components/ReviewingBills/ReviewingBills";
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <>
     {/* <ReceiptUploader /> */}
     {/* <ReviewingBills /> */}
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReviewingBills />} />
        <Route path="receipt" element={<ReceiptUploader />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
