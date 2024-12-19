import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider, App as AntdApp } from "antd";
import App from "./App.jsx";

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
