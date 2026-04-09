import Card from "../UI/Card";
import { about } from "../data";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import Pdf from "../docs/harshmishra.pdf";
import view1 from "../images/view.mp4";
import view2 from "../images/view2.mp4";

const About = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left" data-aos="zoom-in-left">
          {/* <img src={AboutImg} alt="" /> */}
          <video
            src={view1}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="About" />

          <div className="values__wrapper">
            {about.map(({ id, icon, title, desc }) => {
              return (
                <div data-aos="flip-left">
                  <Card className="values__value" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                </div>
              );
            })}
          </div>

          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href={Pdf}
            download
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "1rem",
          marginTop: "10rem",
        }}
        src={view2}
        autoPlay
        playsInline
        muted
        loop
      />
    </section>
  );
};

export default About;
