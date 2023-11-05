import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MainProvider } from "./provider/main.provider.tsx";
import { ResetStyle } from "./styles/resetStyles.ts";
import { GlobalStyle } from "./styles/globalStyles.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <ResetStyle />
    <GlobalStyle/>
    <BrowserRouter><MainProvider>
      <App />
    </MainProvider></BrowserRouter>
  </>
);
