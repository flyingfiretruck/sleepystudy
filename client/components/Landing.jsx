import React from 'react';
import { Button, Image } from "react-bootstrap";

const Landing = () => (
  <div className="landing">
    <Image className="connection-image" src="../assets/connection.svg" alt="connection"/>
    <p className="intro-paragraph">
      Did you know you might be able to learn while you sleep?
      There has been multiple studies demonstarting people's ability
      to learn while they are asleep, in a basic learning form called conditioning.
    </p>
    <p className="intro-paragraph">
      These studies had their subjects listen to different recordings while they were under REM sleep.
      Replicating the conditions of these experiments, this application allows you to listen to
      Youtube tutorials while you are asleep.
    </p>
    <Button variant="primary" className="btn-primary">
    Large button
  </Button>
    <div className="p3">
      <p className="intro-paragraph">
        Will this application really supplement your learning? I can't say for sure.
        But you won't lose anything from trying it out!
      </p>
      <Image className="studying-image" src="../assets/studying.svg" alt="studying"/>
    </div>
  </div>
);


export default Landing;