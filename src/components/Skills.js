import React from "react";
import Card from "../UI/Card";
import SectionHead from "./SectionHead";
import { GrCode } from "react-icons/gr";
import { BsDatabaseAdd } from "react-icons/bs";
import "../pages/home/home.css";
import { backend, frontend } from "../data";

const Skills = () => {
  return (
    <section id="projects" className="skills">
      <div className="container skills__container">
        <div className="frontend" data-aos="fade-right">
          <SectionHead icon=<GrCode /> title="Frontend" />
          <Card>
            <div className="skills__wrapper">
              {frontend.map((skill) => {
                return (
                  <div className="skill" key={skill.id}>
                    <h3>👉 {skill.title}</h3>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
        <div className="backend" data-aos="fade-left">
          <SectionHead icon=<BsDatabaseAdd /> title="Backend" />
          <Card>
            <div className="skills__wrapper">
              {backend.map((skill) => {
                return (
                  <div className="skill" key={skill.id}>
                    <h3>👉 {skill.title}</h3>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
