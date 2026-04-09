import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 20) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <nav className={scrollNav ? "nav-active" : ""}>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <h3>
            Harsh
            <span>.dev</span>
          </h3>
        </Link>

        <ul className={`nav__links ${toggleMenu ? "show__nav" : "hide__nav"}`}>
          {links?.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>

        <button
          className="nav__toggle-btn"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
