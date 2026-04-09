import FAQs from "../../components/FAQs";
import MainHeader from "../../components/MainHeader";
import Services from "../../components/Services";
import About from "../../components/About";
import "./home.css";
import Skills from "../../components/Skills";

const Home = () => {
  return (
    <>
      <MainHeader />
      <Services />
      <About />
      <Skills />
      <FAQs />
    </>
  );
};

export default Home;
