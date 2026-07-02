import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/utility/layout/Layout.jsx";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout>
            <Home/>
          </Layout>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
