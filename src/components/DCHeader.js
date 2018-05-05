import React from "react"

import {
  Header,
  HeaderSection,
  LogoBrand,
  LogoText,
  Nav,
  NavItem,
  StyledLink as Link
} from "../components-styled"

/**
 * DCHeader: Dumb Component Header
 */
const DCHeader = () => (
  <Header>
    <HeaderSection>
      <Link to="/">
        <LogoBrand>Persiska Pistachios</LogoBrand>
      </Link>
      <Nav>
        <Link to="/products">
          <NavItem>Our Pistachios</NavItem>
        </Link>{" "}
        <Link to="/about">
          <NavItem>About us</NavItem>
        </Link>
        <Link to="/production">
          <NavItem>Our Production</NavItem>
        </Link>{" "}
        <Link to="/contact">
          <NavItem>Contact us</NavItem>
        </Link>
        <Link to="/blogs">
          <NavItem>Blogs</NavItem>
        </Link>{" "}
      </Nav>
    </HeaderSection>
  </Header>
)

export default DCHeader
