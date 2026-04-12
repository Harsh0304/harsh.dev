import { Link } from "react-router-dom";
import "../pages/home/home.css";
import hero from "../images/hero.svg";


const MainHeader = () => {
  return (
    <header id="menu">
      <div className="container hero__container">
        <div className=" header__container">
          <div className="right" data-aos="fade-right">
            {/* <h3>Hi there!</h3> */}
            <h1>I'm Harsh</h1>
            <div>
              <span className="typingText">
                <span className="highlight-text">Frontend Developer</span> focused on building scalable and user-friendly interfaces
              </span>
            </div>
            <p>
              I build fast, responsive, and scalable web applications using modern technologies like React , JavaScript and NextJS. 
            </p>
            <Link to="/contact" className="btn header__btn">
              Contact me
            </Link>
          </div>
          <div className="left" data-aos="fade-left">
            <div className="header__image-lg">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
