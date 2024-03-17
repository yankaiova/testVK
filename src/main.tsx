import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
