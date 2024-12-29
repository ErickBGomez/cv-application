import { useState } from "react";
import { ResumeDataContext } from "./ResumeDataContext";

const ResumeDataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const saveData = (newData) => {
    setData(newData);
  };

  return (
    <ResumeDataContext.Provider value={{ data, saveData }}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export default ResumeDataContextProvider;
