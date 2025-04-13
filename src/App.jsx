import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Footer, Navbar } from "./components";
import styles from "./style";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LoanApplicationForm from "./pages/Apply";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-primary w-full overflow-hidden">
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Navbar />
                </div>
              </div>{" "}
              <Outlet />
              <div
                className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="apply" element={<LoanApplicationForm />} />
          <Route />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
