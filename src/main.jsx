import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, App as AntdApp } from "antd";
import { IconContext } from "react-icons";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import ResumeDataProvider from "./context/ResumeDataProvider.jsx";
import appTheme from "./helpers/theme.js";
import "./assets/scss/main.scss";
import "./assets/scss/antd-reset.scss";

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
