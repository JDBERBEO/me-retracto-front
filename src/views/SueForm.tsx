import React from 'react'
import { DefaultNavbar } from '../components/navbar/DefaultNavbar.tsx'
import { SueFormContainer } from '../components/SueForm/SueFormContainer.tsx'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'



export const SueForm = () => {

  return (
    <>
    <DefaultNavbar />
    <SueFormContainer />
    </>
  )
}
