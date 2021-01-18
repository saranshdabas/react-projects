import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

//The issue with dynamic class is that in our case heigh is 10rem for links-container
//We can only see 4 items while our data has 5
//We need to dynamically adjust the height of links-container based on no of links using useRef
const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  //Every time showList value changes we dynamically adjust the height of linksContainer
  useEffect(() => {
    //getBoundingClientRect() gets us things like position and height of element (Javascript)
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showList) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showList]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowList(!showList)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
