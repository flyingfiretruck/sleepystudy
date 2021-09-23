import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Image, InputGroup, FormControl, Button, ToggleButton, Form } from "react-bootstrap";
import ReactPlayer from 'react-player';
import {decode} from 'html-entities';
import Timer from './timer.jsx';

const Video = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [video, setVideo] = useState("uX4wJeGc7tU");
  const [videoChannel, setVideoChannel] = useState("K'eyush The Stunt Dog");
  const [videoTitle, setVideoTitle] = useState("This Puppy LOVES My Husky, But He Blanks Her!");
  const [volume, setVolume] = useState(0);
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  const handleSearch = e => {
    setSearch(e.target.value);
  };
  const handleTimer = e => {
    setTime(parseInt(e.target.value));
  };
  const getResults = e => {
    e.preventDefault();
    axios.get(`/search/${search}`)
      .then((response) => {
        setResults(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let mainScreen;

  if(!video) {
    mainScreen =
    <div>
    <p>What are you studying tonight?</p>
    <p className="video-reminder">Choose a study material.</p>
    <div className="video-search-bar">
      <Form onSubmit={getResults}>
        <InputGroup className="video-search">
          <FormControl
            className="search-bar"
            onChange={handleSearch}
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
                  onClick={() => {setVideo(result['id']['videoId']), setVideoTitle(decode(result['snippet']['title'])), setVideoChannel(decode(result['snippet']['channelTitle']))}}
                />
                <div className="video-text-info">
                  <div className="video-title"
                    onClick={() => {setVideo(result['id']['videoId']), setVideoTitle(decode(result['snippet']['title'])), setVideoChannel(decode(result['snippet']['channelTitle']))}}>
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
  </div>
  }
  if (video && (time !== 0 || time !== NaN)) {
    mainScreen =
    <div>
    {
      started ?
      <div className="video-player">
        <ReactPlayer url={'https://youtu.be/' + video} width="auto" height='13em' controls={true} volume={volume}/>
      </div>
      :
      <div>
        <div className="pre-video-message">Sleep tight! Your studying will begin when you are ready :)</div>
        <div className="study-video-header">Your study material is:</div>
        <div className="study-video-info">
          <img className="video-thumbnail" src={"https://img.youtube.com/vi/" + video + "/mqdefault.jpg"}></img>
          <div className="study-video-text-info">
            <div className="video-title">{videoTitle}</div>
            <div className="video-channel">{videoChannel}</div>
            <Button
            onClick={()=>{setVideo(''), setVideoTitle(''), setVideoChannel('')}}
            variant="outline-dark"
            >
              Change Video
            </Button>
          </div>
        </div>
      </div>
    }
    </div>
  }
  if (video && !time) {
    mainScreen =
    <div>
      <Form>
        <p>When will you fall asleep?</p>
        <p className="video-reminder">In
        <Form.Select
          aria-label="Timer"
          onChange={handleTimer}
        >
          <option value="">...</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </Form.Select>
        minutes.</p>
      </Form>
    </div>
  }

  return (
    <div className="video">
      <div className="video-empty-space"></div>
      <div className="video-search-window">
        <div className="video-description">
          {mainScreen}
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