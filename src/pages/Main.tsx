import Header from "../components/header/Header";
import Education from "../components/sections/education/Education";
import Home from "../components/sections/home/Home";

const Main = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <h2>Experience</h2>
      </section>
    </>
  );
};

export default Main;
