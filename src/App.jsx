import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Sidebar from "./component/Sidebar";
import News from "./pages/News";
import Transaction from "./pages/Transaction";
import Performance from "./pages/Performance";
import Setting from "./pages/Setting";
import Support from "./pages/support";
import { useEffect, useState } from "react";

function App() {
  const [sideNav, setSideNav] = useState(true);

  return (
    <BrowserRouter basename="/sidebar">
      <Sidebar sideNav={sideNav} setSideNav={setSideNav}></Sidebar>
      <Routes>
        <Route path="/" element={<DashBoard sideNav={sideNav} />}></Route>
        <Route path="/news" element={<News sideNav={sideNav} />}></Route>
        <Route
          path="/transaction"
          element={<Transaction sideNav={sideNav} />}
        ></Route>
        <Route
          path="/performance"
          element={<Performance sideNav={sideNav} />}
        ></Route>
        <Route path="/settings" element={<Setting sideNav={sideNav} />}></Route>
        <Route path="/support" element={<Support sideNav={sideNav} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
