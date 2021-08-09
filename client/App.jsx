import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import * as RB from "react-bootstrap";
import Navbar from './components/Navbar.jsx';
import Landing from './components/Landing.jsx';
import Playlist from './components/Playlist.jsx';


const App = () => (
  <>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        <Route path="/playlist">
          <Playlist />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;