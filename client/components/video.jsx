import React, {useState} from 'react';
import axios from 'axios';
import { Image, InputGroup, FormControl, Button } from "react-bootstrap";
import ReactPlayer from 'react-player'

const Video = () => {
  const [search, setSearch] = useState("");
  // const [handleEnter] = useState()
  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="video">
      <div className="video-empty-space"></div>
      <div className="video-empty-space"></div>
      <div className="video-description">
        <p>Choose a video</p>
        <p className="video-reminder">Remember not to click out of the website!</p>
      </div>
      <div className="video-search-bar">
        <InputGroup className="video-search" onSubmit={(e) => this.handleEnter(e)}>
          <FormControl
            className="search-bar"
            onChange={handleChange}
            placeholder="Search"
            area-label="Default"
            area-descibedby="inputGroup-sizing-default"
          />
          <Button className="search-button" type="submit" variant="outline-dark">
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="video-player">
        <ReactPlayer url='https://youtu.be/cfD9Oz_8BwM' width="auto" height='13em'/>
      </div>
      <div className="playlist-no-longin">
        Login for access to more features
      </div>
      <Image className="door-image" src="../assets/door2.svg" alt="door" />
    </div>
  );
};

export default Video;