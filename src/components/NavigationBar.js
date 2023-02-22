import { useEffect, useState } from "react";
import { LoginButton, TrialButton } from "./buttons";
import Link from "next/link";
import Image from "next/image";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Offcanvas,
  Navbar,
  Col,
} from "react-bootstrap";
import navButton from "../assets/icons/navButton.svg";

const NavigationBar = ({ global }) => {
  

  const renderMobileNav = () => (
    <navbar className="navbar-main">
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">methodloop</Navbar.Brand>
          <div className="left-nav">
            <LoginButton id={"login"} route={"/login"} />
            <div className="nav-button">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${false}`}
              />
              <span>
                <Image src={navButton} />
              </span>
            </div>
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${false}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </navbar>
  );

  const renderDesktopNav = () => {
    return (
      <navbar className="navbar-main">
        <Navbar>
          <div className="brand-home">
            <Link href="/">
              <Navbar.Brand className="brand" href="#home">
                methodloop
              </Navbar.Brand>
            </Link>
          </div>
          <Nav className="align-self-end linkbox">
            <Nav.Link id="#home" href="#home">
              Home
            </Nav.Link>
            <Nav.Link id="#methods" href="#methods">
              Methods
            </Nav.Link>
            <Nav.Link id="#workspace" href="#workspace">
              Workspace
            </Nav.Link>
            <LoginButton id={"login"} route={"/login"} />
            <TrialButton
              id={"free-trial"}
              text={"Start Free Trial"}
              route={"/free-trial"}
            />
          </Nav>
        </Navbar>
      </navbar>
    );
  };

  return (
    <>
      {global.deskTopView && renderDesktopNav()}
      {global.mobileView && renderMobileNav()}
    </>
  );
};

export default NavigationBar;
