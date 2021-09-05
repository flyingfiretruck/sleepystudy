import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Image, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import ReactPlayer from 'react-player';
import {decode} from 'html-entities';


const Video = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState();

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const getResults = e => {
    e.preventDefault();
    axios.get(`/video/${search}`)
      .then((response) => {
        setResults(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="video">
      <div className="video-empty-space"></div>
      <div className="video-search-window">
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
        <div className="search-results">
          {results ?
            results.map(result =>
              {
                return (
                  <div className="results-video-info">
                    <img className="video-thumbnail"
                      src={"https://img.youtube.com/vi/" + result['id']['videoId'] + "/mqdefault.jpg"}
                    />
                    <div className="video-text-info">
                      <div className="video-title">
                        {decode(result['snippet']['title'])}
                      </div>
                      <div className="video-channel">
                        {decode(result['snippet']['channelTitle'])}
                      </div>
                    </div>
                  </div>
                );
              }
            )
            : <div />
          }
        </div>
        <div className="video-player">
          <ReactPlayer url='https://youtu.be/cfD9Oz_8BwM' width="auto" height='13em'/>
        </div>
        <div className="playlist-no-longin">
          Login for access to more features
        </div>
      </div>
      <Image className="door-image" src="../assets/door2.svg" alt="door" />
    </div>
  );
};

export default Video;