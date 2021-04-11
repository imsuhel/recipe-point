import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {Link} from "react-router-dom"

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="navigation">
      <div className="container">
      <NavbarBrand exact tag={Link} to="/">Recipe Point</NavbarBrand>
      <NavbarToggler onClick={toggle} > <span className="fa fa-ellipsis-v" aria-hidden="true"></span> </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink exact tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact tag={Link} to="/recipes">recipes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact tag={Link} to="/categories">categories</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
