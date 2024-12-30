import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, App as AntdApp } from "antd";
import App from "./App.jsx";
import "./main.scss";
import "./assets/scss/antd-reset.scss";
import { IconContext } from "react-icons";
import { BrowserRouter } from "react-router";
import ResumeDataProvider from "./context/ResumeDataProvider.jsx";
import appTheme from "./helpers/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <ConfigProvider theme={appTheme}>
          <AntdApp>
            <ResumeDataProvider>
              <App />
            </ResumeDataProvider>
          </AntdApp>
        </ConfigProvider>
      </IconContext.Provider>
    </BrowserRouter>
  </StrictMode>
);
