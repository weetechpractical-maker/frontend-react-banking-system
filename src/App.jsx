import { useRoutes } from "react-router-dom";
import "./App.css";
import { theme } from "../src/theme";
import { routeComponents } from "./routeComponents";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

function AppRoutes() {
  const element = useRoutes(routeComponents);
  return element;
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
