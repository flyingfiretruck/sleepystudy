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
            Did you know you might be able to learn while you sleep?
            There has been multiple studies demonstarting people's ability
            to learn while they are asleep, in a basic learning form called conditioning.
          </p>
          <Image className="studying-image" src="../assets/studying.svg" alt="studying"/>
          <p className="intro-paragraph" data-aos="fade-up">
            These studies had their subjects listen to different recordings while they were under REM sleep.
            Replicating the conditions of these experiments, this application allows you to listen to
            Youtube tutorials while you are asleep.
          </p>
          <p className="intro-paragraph" data-aos="fade-up">
              Will this application really supplement your learning? I can't say for sure.
              But you won't lose anything from trying it out!
          </p>
      </div>
    </div>
  );
};


export default Landing;