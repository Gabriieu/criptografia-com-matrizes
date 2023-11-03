import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MainProvider } from "./provider/main.provider.tsx";
import { ResetStyle } from "./styles/resetStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ResetStyle />
    <MainProvider>
      <App />
    </MainProvider>
  </>
);
