import React from 'react'
import * as RB from "react-bootstrap";
import { useMediaQuery } from "react-responsive";


const NavBar = () => (
  <>
    <RB.Navbar bg="dark" variant="dark" sticky="top">
      <RB.Container>
        <RB.Navbar.Header href="/">Sleepy Study</RB.Navbar.Brand>
        <RB.Nav className="me-auto">
          {/* <RB.Nav.Link href="/video">Video</RB.Nav.Link> */}
          <RB.Nav.Link href="/playlist">Playlist</RB.Nav.Link>
        </RB.Nav>
      </RB.Container>
    </RB.Navbar>
  </>
);

export default NavBar;