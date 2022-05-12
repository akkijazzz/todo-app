import React from "react-bootstrap";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/common/Login";
import List from "./components/common/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./scss/_index.sass";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />

          {/* <Login /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
