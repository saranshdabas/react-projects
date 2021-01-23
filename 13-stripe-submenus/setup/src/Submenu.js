import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { location, submenuOpen } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      ref={container}
      className={`${submenuOpen ? "submenu show" : "submenu"}`}
    >
      <section>
        <h4>Submenu</h4>
      </section>
    </aside>
  );
};

export default Submenu;
