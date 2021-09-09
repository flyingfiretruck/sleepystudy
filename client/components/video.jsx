import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Image, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import ReactPlayer from 'react-player';
import {decode} from 'html-entities';
// import {Howl, Howler} from 'howler';


const Video = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [video, setVideo] = useState("");
  const [playList, setPlayList] = useState([]);
  const [volume, setVolume] = useState(0);
  const [started, setStarted] = useState(false);

  const handleChange = e => {
    setSearch(e.target.value);
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

  return (
    <div className="video">
      <div className="video-empty-space"></div>
      <div className="video-search-window">
        <div className="video-description">
          {
            !video ?
              <div>
                <p>What are you studying tonight?</p>
                <p className="video-reminder">Choose a study material.</p>
              </div>
            : <div>
                <p>When will you fall asleep?</p>
                <p className="video-reminder">In
                  <Button />
                minutes!</p>
              </div>
          }
        </div>
        <div className="video-player">
          {
            started ?
              <ReactPlayer url={'https://youtu.be/' + video} width="auto" height='13em' controls={true} volume={volume}/>
            : <div />
          }
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
                      onClick={() => {setVideo(result['id']['videoId'])}}
                    />
                    <div className="video-text-info">
                      <div className="video-title"
                        onClick={() => {setVideo(result['id']['videoId'])}}>
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
        <div className="playlist-no-longin">
          Login for access to more features
        </div>
      </div>
      <Image className="door-image" src="../assets/door2.svg" alt="door" />
    </div>
  );
};

export default Video;