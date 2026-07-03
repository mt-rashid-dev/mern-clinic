import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/utility/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  useEffect(() => {
    document.getElementById("app").classList.add("bg-light-3");
  }, []);

  return (
    <div className={"App"} id={"app"}>
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
