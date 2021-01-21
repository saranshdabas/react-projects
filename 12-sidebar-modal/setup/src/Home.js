import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const msg = useGlobalContext();
  console.log("From Home:" + msg);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">Show modal</button>
    </main>
  );
};

export default Home;
