import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Image, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import ReactPlayer from 'react-player'

const Video = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const getResults = e => {
    e.preventDefault();
    console.log(search)
    axios.get(`/video/${search}`)
      .then((response) => {
        setResults(response);
        console.log(response);
      })
      .catch("Error!");
  }

  return (
    <div className="video">
      <div className="video-empty-space"></div>
      <div className="video-empty-space"></div>
      <div className="video-description">
        <p>Choose a video</p>
        <p className="video-reminder">Remember not to click out of the website!</p>
      </div>
      <div className="video-search-bar">
        <Form onSubmit={getResults}>
          <InputGroup className="video-search">
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
        </Form>
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