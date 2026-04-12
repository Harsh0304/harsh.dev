import { useNavigate } from "react-router-dom";
import "./plans.css";

const Plans = () => {
  const navigate=useNavigate()

const sendEmail = (e) => {
  e.preventDefault();

   alert("Email send successfully..")
   navigate("/")
};

  return (
    <>
     
      <section className="container">
        <form className="form_container" onSubmit={sendEmail}>
          <h1>Get in touch</h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Message"
              className="form-control"
              id="message"
              name="message"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Plans;
