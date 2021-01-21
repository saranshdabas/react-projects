import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useGlobalContext } from "./context";

function App() {
  const msg = useGlobalContext();
  console.log("From App:" + msg);
  return (
    <>
      <Modal />
      <Sidebar />
      <Home />
    </>
  );
}

export default App;
