import { FaServicestack } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { services } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import "../pages/home/home.css";

const Services = () => {

  const scrollToProjects = () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <section className="services" style={{ marginTop: "6rem" }}>
      <div className="container program__container">
        <SectionHead icon={<FaServicestack />} title="Services" />
        <div className="programs__wrapper" data-aos="flip-left">
          {services.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs__program" key={id}>
                <span style={{ color: "var(--color-light)" }}>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link onClick={scrollToProjects} className="btn btn__sm">
                  Learn More✍️
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
