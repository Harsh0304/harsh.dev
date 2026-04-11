import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  // ✅ Handle scroll navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrollNav(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ✅ Overlay (click outside) */}
      {isOpen && <div className="nav__overlay" onClick={() => setIsOpen(false)} />}

      <nav className={scrollNav ? "nav nav-active" : "nav"}>
        <div className="nav__container" ref={navRef}>
          {/* Logo */}
          <Link to="/" className="logo">
            <h3>
              Harsh<span>.dev</span>
            </h3>
          </Link>

          {/* Links */}
          <ul className={`nav__links ${isOpen ? "show__nav" : "hide__nav"}`}>
            {links?.map(({ name, path }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Toggle Button */}
          <button
            className="nav__toggle-btn"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;