import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import '../../assets/styles/components/DefaultNavbar.scss';
import types from '../../constants/types';

export const DefaultNavbar = ({ type }) => {
  const [isAllowed, setstate] = useState<string | null | boolean>(true);

  const logout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('lawyer');
  };

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    const lawyer = localStorage.getItem('lawyer');
    const token = lawyer || admin;
    setstate(token);
  }, []);

  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">
          <Image
            src="https://res.cloudinary.com/me-retracto/image/upload/v1671555730/logo2_y4qhnd.png"
            alt="Logo"
            style={{ paddingLeft: '10px' }}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end w-100 nav-item nav-item-medium">
            {' '}
            <Nav.Link
              href="/aboutUs"
              // className="nav-item nav-item-medium"
              style={type === 'white' ? {} : { color: 'black' }}>
              {types.navbar.links.us}
            </Nav.Link>
            <NavDropdown
              title={
                <span
                  // className="nav-item nav-item-medium"
                  style={type === 'white' ? {} : { color: 'black' }}>
                  {types.navbar.dropdowns.documents.title}
                </span>
              }
              id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/#misleadingAdvertisement"
                className={
                  type === 'white'
                    ? 'dropdown-item dropdown-item-custom dropdown-item-medium'
                    : 'text-black'
                }>
                {types.navbar.dropdowns.documents.itemOne}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#missingInfo"
                className={
                  type === 'white'
                    ? 'dropdown-item dropdown-item-custom dropdown-item-medium'
                    : 'text-black'
                }>
                {types.navbar.dropdowns.documents.itemTwo}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#withdrawalRight"
                className={
                  type === 'white'
                    ? 'dropdown-item dropdown-item-custom dropdown-item-medium'
                    : 'text-black'
                }>
                {types.navbar.dropdowns.documents.itemThree}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/#exclusionLiability"
                className={
                  type === 'white'
                    ? 'dropdown-item dropdown-item-custom dropdown-item-medium'
                    : 'text-black'
                }>
                {types.navbar.dropdowns.documents.itemOne}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#link"
              // className="nav-item nav-item-medium"
              style={type === 'white' ? {} : { color: 'black' }}>
              {types.navbar.links.contact}
            </Nav.Link>
            {!isAllowed ? null : (
              <NavDropdown
                title={
                  <span style={type === 'white' ? {} : { color: 'black' }}>
                    {types.navbar.dropdowns.records.title}
                  </span>
                }
                id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="/lawyerClaims"
                  className={
                    type === 'white'
                      ? 'dropdown-item dropdown-item-custom dropdown-item-medium'
                      : 'text-black'
                  }>
                  {types.navbar.dropdowns.records.itemOne}
                </NavDropdown.Item>
                {localStorage.getItem('admin') ? (
                  <NavDropdown.Item
                    href="/suitsTemplates"
                    className={
                      type === 'white'
                        ? 'dropdown-item dropdown-item-custom dropdown-item-medium'
                        : 'text-black'
                    }>
                    {types.navbar.dropdowns.records.itemTwo}
                  </NavDropdown.Item>
                ) : null}
              </NavDropdown>
            )}
            {!isAllowed ? (
              <Nav.Link href="/login" style={type === 'white' ? {} : { color: 'black' }}>
                {types.navbar.links.login}
              </Nav.Link>
            ) : (
              <Nav.Link
                href="/"
                style={type === 'white' ? {} : { color: 'black' }}
                onClick={logout}>
                {types.navbar.links.logout}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
