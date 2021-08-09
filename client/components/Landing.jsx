import React from 'react';
import { Button, Image } from "react-bootstrap";

function Landing() {
  return (
    <div className="landing">
      <h1 className="intro">Welcome to Sleepy Study!</h1>
      {/* <img className="img-fluid connection" src="../assets/connection.svg" alt="connection"></img> */}
      <Image
          src="../assets/connection.svg"
          roundedCircle
      />
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
        {/* <img className="img-thumbnail" src="../assets/studying.svg" alt="studying"></img> */}
        <Image
          src="../assets/studying.svg"
          roundedCircle
        />
      </div>
    </div>
    // <Container>
    //   <Row>
    //     <Col>1 of 2</Col>
    //     <Col>2 of 2</Col>
    //   </Row>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col>2 of 3</Col>
    //     <Col>3 of 3</Col>
    //   </Row>
    // </Container>
  )
}

export default Landing;