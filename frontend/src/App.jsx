import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./components/utility/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  const theme = useSelector(state => state.theme.value);

  useEffect(() => {
    toggleStyle();
  }, [theme]);

  const toggleStyle = () => {
    const app = document.getElementById("app");

    if (theme === "dark") {
      app.classList.remove("bg-light-3");
      app.classList.add("bg-dark-3");
    }

    if (theme === "light") {
      app.classList.remove("bg-dark-3");
      app.classList.add("bg-light-3");
    }
  };

  return (
    <div className={"App bg-light-3"} id={"app"}>
      <div className={"App-content"}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Layout>
              <Home/>
            </Layout>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
