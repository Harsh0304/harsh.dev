import React from "react";

const Header = ({ title, view2, children }) => {
  return (
    <header className="header">
      <div className="header__container-wrapper">
        <div className="header__container-bg">
          {/* <img src={image} alt="" /> */}
          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1rem",
              opacity: "0.3",
            }}
            src={view2}
            autoPlay
            playsInline
            muted
            loop
          />
        </div>
        <div className="header__container-content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
