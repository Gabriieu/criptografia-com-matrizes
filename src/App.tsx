import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer } from "./components/footer/footer.index";
import { Header } from "./components/header/header.index";
import { MainRoutes } from "./routes/routes.index";

function App() {
  return (
    <>
    <Header />
    <MainRoutes/>
    <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
