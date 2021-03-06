import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Playlist from './components/Playlist.jsx';
import Video from './components/Video.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/about">
          <Landing />
        </Route>
        <Route exact path="/">
          <Video />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;