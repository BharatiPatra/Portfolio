import React from "react";
import hero from "./data/hero.json";

const About = () => {
  return (
    <div id="about" data-aos="fade-up">
      <div id="container">
        <h1> About</h1>

        <p>
          Welcome I'm E Bharati Patra,With 4 years dedicated to mastering the
          intricacies of Bachelor's degree , I've honed my craft in computer
          Science. My passion lies in FRontend developer, where I've earned a
          reputation for delivering exceptional impact. Driven by curiosity and
          creativity, I thrive on tackling challenges head-on and transforming
          ideas into reality. Whether it's JAVA,JAVASCRIPT,REACT I approach each
          project with enthusiasm and precision, ensuring every detail exceeds
          expectations. Let's connect and explore how we can collaborate to
          achieve your goals. Together, we can turn visions into victories.
        </p>
        <div>
          <a href="./assets/Bharati_resume.pdf" download="" class="btn">
            Resume
          </a>
        </div>
      </div>
      <div data-aos="fade-left">
        <img id="image" src={`/assets/${hero.imgSrc}`} alt="My Pic" />
      </div>
    </div>
  );
};

export default About;
