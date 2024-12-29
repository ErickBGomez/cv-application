import { useState } from "react";
import { App } from "antd";
import ResumeDataContext from "./ResumeDataContext";

const ResumeDataProvider = ({ children }) => {
  const { message } = App.useApp();

  const [data, setData] = useState([]);

  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem("resumeData", JSON.stringify(newData));
  };

  const loadData = () => {
    const data = localStorage.getItem("resumeData");
    message.success("Resume information loaded successfully");
    return data ? JSON.parse(data) : [];
  };

  return (
    <ResumeDataContext.Provider value={{ data, saveData }}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export default ResumeDataProvider;
