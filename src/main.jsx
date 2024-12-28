import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, App as AntdApp } from "antd";
import App from "./App.jsx";
import "./main.scss";
import "./assets/scss/antd-reset.scss";
import { IconContext } from "react-icons";
import { BrowserRouter } from "react-router";

const appTheme = {
  token: {
    colorTextBase: "#2c313c",
    colorPrimary: "#426ece",
    colorInfo: "#426ece",
    fontSize: 16,
    borderRadius: 8,
    wireframe: false,
    colorBgBase: "#fcfcfd",
    colorSuccess: "#43e285",
    fontFamily: "'Raleway', sans-serif",
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ size: "1.5rem" }}>
        <ConfigProvider theme={appTheme}>
          <AntdApp>
            <App />
          </AntdApp>
        </ConfigProvider>
      </IconContext.Provider>
    </BrowserRouter>
  </StrictMode>
);
