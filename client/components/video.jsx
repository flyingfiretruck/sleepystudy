import React from 'react';
import { Image, InputGroup, FormControl, Button } from "react-bootstrap";
import ReactPlayer from 'react-player'

const Video = () => (
  <div className="video">
    <div className="video-empty-space"></div>
    <div className="video-description">
      <p>Choose a tutorial.</p>
      <p className="video-reminder">Remember not to click out of the website!</p>
    </div>
    <div className="video-search-bar">
      <InputGroup className="video-video-search">
        <FormControl placeholder="Search"
          aria-label="Default"
          aria-descibedby="inputGroup-sizing-default"
        />
        <Button variant="outline-secondary">
          Search
        </Button>
      </InputGroup>
    </div>
    <div className="video-player">
      <ReactPlayer url='https://youtu.be/cfD9Oz_8BwM' width="auto" height='13em'/>
    </div>
    <div className="video-empty-space"></div>
    <Image className="door-image" src="../assets/door2.svg" alt="door" />
  </div>
)

export default Video;