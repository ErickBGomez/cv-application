import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, App as AntdApp } from "antd";
import App from "./App.jsx";
import "./index.scss";

const appTheme = {
  token: {
    colorPrimary: "#426ece",
    colorInfo: "#426ece",
    fontSize: 16,
    borderRadius: 8,
    wireframe: false,
    colorTextBase: "#2c313c",
    colorBgBase: "#fcfcfd",
    colorSuccess: "#43e285",
    fontFamily: "'Raleway', sans-serif",
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider theme={appTheme}>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </StrictMode>
);
