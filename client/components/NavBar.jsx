import React from 'react'
import * as RB from "react-bootstrap";
import { useMediaQuery } from "react-responsive";


const NavBar = () => (
  <>
    <RB.Navbar fixed="top" expand="lg">
        <RB.Navbar.Brand href="/">Sleepy Study</RB.Navbar.Brand>
        <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <RB.Navbar.Collapse id="basic-navbar-nav">
          <RB.Nav className="me-auto">
            <RB.Nav.Link href="/about">About Us</RB.Nav.Link>
          </RB.Nav>
        </RB.Navbar.Collapse>
    </RB.Navbar>
  </>
);

export default NavBar;

