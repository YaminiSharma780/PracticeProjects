import "./App.css";
import Header from "./components/Header";
import UseContext from "./components/UseContext";
import UseReducer from "./components/UseReducer";
import { Outlet } from "react-router";
import MyThemeProvider from "./contexts/MyThemeProvider";

function App() {
  return (
    <MyThemeProvider>
      <Header />
      <Outlet />
    </MyThemeProvider>
  );
}

export default App;
