import { useEffect, useState } from "react";
import { App } from "antd";
import ResumeDataContext from "./ResumeDataContext";

const ResumeDataProvider = ({ children }) => {
  const { message } = App.useApp();

  const [data, setData] = useState(null);

  const loadData = () => {
    return JSON.parse(localStorage.getItem("resumeData"));
  };

  useEffect(() => {
    if (!data) {
      const loaded = loadData();

      if (!loaded) return;

      setData(loaded);
      message.info("Resume information recovered");
    }
  }, [data]);

  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem("resumeData", JSON.stringify(newData));
  };

  const removeData = () => {
    setData(null);
    localStorage.removeItem("resumeData");
  };

  return (
    <ResumeDataContext.Provider value={{ data, saveData, removeData }}>
      {children}
    </ResumeDataContext.Provider>
  );
};

export default ResumeDataProvider;
