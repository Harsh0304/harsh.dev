import React from "react";
import "./portfolio.css";
import PortfolioSingle from "../../components/PortfolioSingle";
import { portfolios } from "../../data";
import SectionHead from "../../components/SectionHead";
import { PiProjectorScreenBold } from "react-icons/pi";
import Header from "../../components/Header";
import view2 from "../../images/view2.mp4";

const Portfolio = () => {
  return (
    <>
      <Header title="Our Portfolio" view2={view2}>
        A showcase of my work featuring modern, scalable, and user-focused web applications built using React, Node.js, and the latest web technologies.
      </Header>
      <section style={{ marginTop: "6rem" }}>
        <div className="container portfolio__container">
          <SectionHead icon=<PiProjectorScreenBold /> title="My Portfolio" />
        </div>
        <div className="container trainers__container" data-aos="zoom-in">
          {portfolios.map(({ id, image, name, job, github, link }) => {
            return (
              <div data-aos="zoom-in-up">
                <PortfolioSingle
                  key={id}
                  image={image}
                  name={name}
                  job={job}
                  github={github}
                  link={link}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
