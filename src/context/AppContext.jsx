// Create context
import { use, useEffect } from "react";
import { createContext, useContext, useState } from "react";

// Create context with initial value
const AppContext = createContext();

// Create provider component
export const AppProvider = ({ children }) => {
  const [countryCode, setCountryCode] = useState("CA");

  // fetch counrty code
  const fetchCountryCode = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const validCountries = ["US", "GB", "CA"];
      const countryCode = data.country_code;
      setCountryCode(validCountries.includes(countryCode) ? countryCode : "CA");
    } catch (error) {
      console.error("Error fetching country code:", error);
    }
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);
  // Add values/functions to be shared
  const value = {
    countryCode,
    setCountryCode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook to use context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
