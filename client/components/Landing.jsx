import React, { useEffect } from 'react';
import { Button, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init({ startEvent: 'load', duration: 1500, mirror: true, useClassNames: true });
  }, []);
  return (
    <div className="landing">
      <Image className="connection-image" src="../assets/connection.svg" alt="connection" />
      <div className="intro">
          <p className="intro-paragraph" data-aos="fade-up" data-aos-offset="200">
            <span>Did you know you might be able to learn while you're asleep? </span>
          </p>
          <p className="intro-paragraph" data-aos="fade-up" data-aos-offset="200">
            <span>There has been multiple studies demonstarting people's ability</span>
            <span>to learn while they are asleep, in a basic learning form called conditioning.</span>
          </p>
          {/* <Image className="studying-image" src="../assets/studying.svg" alt="studying"/> */}
          <p className="intro-paragraph" data-aos="fade-up">
            <span>Replicating the conditions of these experiments, this application allows</span>
            <span>you to listen to tutorials of your choice while you are under REM sleep.</span>
          </p>
          <p className="intro-paragraph" data-aos="fade-up">
            <span>Will this application really supplement your learning? We can't say for sure.</span>
            <span>But you won't lose anything from trying it out!</span>
          </p>
      </div>
      <Image className="sleeping-image" src="../assets/sleeping.svg" alt="sleeping"/>
    </div>
  );
};


export default Landing;