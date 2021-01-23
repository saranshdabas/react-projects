import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { submenuOpen } = useGlobalContext();

  return (
    <aside className={`${submenuOpen ? "submenu show" : "submenu"}`}>
      <section>
        <h4>Submenu</h4>
      </section>
    </aside>
  );
};

export default Submenu;
