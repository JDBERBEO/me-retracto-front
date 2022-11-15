import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../../assets/styles/components/DefaultNavbar.scss';
import types from '../../constants/types';

export const DefaultNavbar = ({ type }) => {
  const [isAllowed, setstate] = useState<string | null | boolean>(true);

  const logout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('lawyer');
  };
  const styleNavDropDownItem = {
    color: type === 'white' ? 'white' : 'black',
    fontSize: '15px',
    fontWeight: 'bold',
    letterSpacing: '5px'
  };

  const styleNavItem = {
    color: type === 'white' ? 'white' : 'black',
    fontFamily: 'Raleway, sans-serif',
    letterSpacing: '3px',
    fontWeight: 450,
    fontSize: '15px'
    // borderBottom: 'solid 3px'
  };

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    const lawyer = localStorage.getItem('lawyer');
    const token = lawyer || admin;
    setstate(token);
  }, []);

  return (
    <Navbar className="defaultNavbar" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://res.cloudinary.com/me-retracto/image/upload/v1667914984/platform%20Imgs/reducedLogo_jxkj1w.png"
            alt="logo"
          />
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Container className="justify-content-between">
        <Nav.Link href="/aboutUs" className="DefaultNavbar__link" style={styleNavItem}>
          {types.navbar.links.us}
        </Nav.Link>
        <NavDropdown
          title={<span style={styleNavItem}>{types.navbar.dropdowns.documents.title}</span>}
          id="basic-nav-dropdown">
          <NavDropdown.Item href="/#misleadingAdvertisement" style={styleNavDropDownItem}>
            {types.navbar.dropdowns.documents.itemOne}
          </NavDropdown.Item>
          <NavDropdown.Item href="/#missingInfo" style={styleNavDropDownItem}>
            {types.navbar.dropdowns.documents.itemTwo}
          </NavDropdown.Item>
          <NavDropdown.Item href="/#withdrawalRight" style={styleNavDropDownItem}>
            {types.navbar.dropdowns.documents.itemThree}
          </NavDropdown.Item>
          <NavDropdown.Item href="/#exclusionLiability" style={styleNavDropDownItem}>
            {types.navbar.dropdowns.documents.itemOne}
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link" style={styleNavItem}>
          {types.navbar.links.contact}
        </Nav.Link>
        {!isAllowed ? null : (
          <NavDropdown
            title={<span style={styleNavItem}>{types.navbar.dropdowns.records.title}</span>}
            id="basic-nav-dropdown">
            <NavDropdown.Item href="/lawyerClaims" style={styleNavDropDownItem}>
              {types.navbar.dropdowns.records.itemOne}
            </NavDropdown.Item>
            {localStorage.getItem('admin') ? (
              <NavDropdown.Item href="/suitsTemplates" style={styleNavDropDownItem}>
                {types.navbar.dropdowns.records.itemTwo}
              </NavDropdown.Item>
            ) : null}
          </NavDropdown>
        )}
        {!isAllowed ? (
          <Nav.Link href="/login" style={styleNavItem}>
            {types.navbar.links.login}
          </Nav.Link>
        ) : (
          <Nav.Link href="/" style={styleNavItem} onClick={logout}>
            {types.navbar.links.logout}
          </Nav.Link>
        )}
      </Container>
    </Navbar>
  );
};
