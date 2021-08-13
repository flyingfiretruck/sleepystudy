import React from 'react';
import { Image, InputGroup, FormControl, Button } from "react-bootstrap";
import ReactPlayer from 'react-player'

const Video = () => (
  <div className="video">
    <div className="video-empty-space"></div>
    <div className="video-description">
      <p>Choose a tutorial from Youtube</p>
    </div>
    <div className="video-search-bar">
      <InputGroup className="mb-3">
        <FormControl placeholder="Search"
          aria-label="Default"
          aria-descibedby="inputGroup-sizing-default"
        />
        <Button variant="outline-secondary">
          Search
        </Button>
      </InputGroup>
    </div>
    <div className="vido-player">
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
    <div className="video-empty-space"></div>
    <Image className="door-image" src="../assets/door2.svg" alt="door" />
  </div>
)

export default Video;