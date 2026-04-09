import Card from "../UI/Card";
const PortfolioSingle = ({ image, name, job, github, link }) => {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
          }}
          src={image}
          // autoPlay
          onMouseOver={(e) => e.target.play()}
          onMouseLeave={(e) => {
            e.target.currentTime = 0;
            e.target.pause();
          }}
          muted
          loop
        />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="portfolio__actions">
        <a href={link} target="_blank" className="btn btn__sm">
          Live
        </a>
        <a href={github} target="_blank" className="btn github">
          Github
        </a>
      </div>
    </Card>
  );
};

export default PortfolioSingle;
