import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className='navbar-fixed-top'>
      <Navbar className="navbar navbar-default navbar-fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>MHS SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/order"}>Order</Nav.Link>
              <Nav.Link as={Link} to={"/admin"}>Admin</Nav.Link>
              <Nav.Link className='disabled'>{loggedInUser.name}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>

  );
};

export default Header;