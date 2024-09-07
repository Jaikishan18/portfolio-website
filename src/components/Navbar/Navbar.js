import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div>
      <section>
        <div className="navbar">
          <a href="#contact" className="name_logo">
            Jai Kishan
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="nav_ham_icon"
            onClick={openMenu}
          >
            <path
              fill="currentColor"
              d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
            ></path>
          </svg>

          <div className="nav_details">
            <ul ref={menuRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="ham_close_icon"
                onClick={closeMenu}
              >
                <path
                  fill="currentColor"
                  d="M7 18a1 1 0 0 1-.707-1.707l10-10a1 1 0 0 1 1.414 1.414l-10 10A1 1 0 0 1 7 18"
                />
                <path
                  fill="currentColor"
                  d="M17 18a1 1 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18"
                />
              </svg>
              {/* <img
                src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-multiplication-icon-png-image_4632386.jpg"
                onClick={closeMenu}
                alt="hamburger"
                className="ham_close_icon"
              /> */}
              <li>
                <AnchorLink href="#home" offset={50}>
                  <p onClick={() => setMenu("home")}>Home</p>
                </AnchorLink>
                {menu === "home" ? (
                  <img
                    src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    alt="Home Icon"
                  />
                ) : null}
              </li>
              <li>
                <AnchorLink href="#about" offset={50}>
                  <p onClick={() => setMenu("about")}>About</p>
                </AnchorLink>
                {menu === "about" ? (
                  <img
                    src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    alt="Home Icon"
                  />
                ) : null}
              </li>
              <li>
                <AnchorLink href="#service" offset={50}>
                  <p onClick={() => setMenu("service")}>Services</p>
                </AnchorLink>
                {menu === "service" ? (
                  <img
                    src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    alt="Home Icon"
                  />
                ) : null}
              </li>
              <li>
                <AnchorLink href="#work" offset={50}>
                  <p onClick={() => setMenu("projects")}>Projects</p>
                </AnchorLink>
                {menu === "projects" ? (
                  <img
                    src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    alt="Home Icon"
                  />
                ) : null}
              </li>
              <li>
                <AnchorLink href="#contact" offset={50}>
                  <p onClick={() => setMenu("contact")}>Contact</p>
                </AnchorLink>
                {menu === "contact" ? (
                  <img
                    src="data:image/svg+xml,%3csvg%20width='37'%20height='12'%20viewBox='0%200%2037%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%209.72421C0%208.80351%200.798853%208.08636%201.71422%208.18532L30.1637%2011.2609C33.6717%2011.6402%2036.6285%208.67298%2036.2369%205.16633C35.8336%201.55539%2032.1094%20-0.6855%2028.7302%200.649534L2.11659%2011.1638C1.10075%2011.5651%200%2010.8165%200%209.72421Z'%20fill='url(%23paint0_linear_2164_71)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2164_71'%20x1='136.358'%20y1='7.62354'%20x2='122.281'%20y2='52.8563'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                    alt="Home Icon"
                  />
                ) : null}
              </li>
            </ul>
          </div>
          <div>
            <AnchorLink href="#contact">Connect With Me</AnchorLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
