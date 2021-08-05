import React from 'react';

function Landing() {
  return (
    <div className="landing">
      <h1 className="intro">Welcome to Sleepy Study!</h1>
      <img src="../assets/connect.svg" alt="connection"></img>
      <p className="intro-paragraph-1">
        Did you know you might be able to learn while you sleep?
        There has been multiple studies demonstarting people's ability
        to learn while they are asleep, in a basic learning form called conditioning.
      </p>
      <p className="intro-paragraph-2">
        These studies had their subjects listen to different recordings while they were under REM sleep.
        Replicating the conditions of these experiments, this application allows you to listen to
        Youtube tutorials while you are asleep.
      </p>
      <p className="intro-paragraph-3">
        Will this application really supplement your learning? I can't say for sure.
        But you won't lose anything from trying it out!
      </p>
    </div>
  )
}

export default Landing;