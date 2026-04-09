import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        
        {/* Logo / Name */}
        <h3 className="footer__logo">
          Harsh<span>.dev</span>
        </h3>

        {/* Links */}
        <div className="footer__links">
          <Link to="/">About</Link>
          <Link to="/portfolio">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="footer__socials">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="copyright">
          © {new Date().getFullYear()} Harsh Mishra. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;