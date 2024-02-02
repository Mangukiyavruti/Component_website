import { Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hero from './image/hero.svg';
import { Link } from "react-router-dom";
// import Home from "./Components/Home.js";


function Header() {
  return (
    <div className="Website_header">
      <div className="header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home"><img src={require('./image/1.jpg')}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Nav.Link > <Link to="/">home</Link></Nav.Link>
                
                <Nav.Link > <Link to="/pages">pages</Link></Nav.Link>
                <Nav.Link > <Link to="/">menu</Link></Nav.Link>
                                <Nav.Link > <Link to="/shop">shop</Link></Nav.Link>
                 
                <Nav.Link > <Link to="/blog">blog</Link></Nav.Link>
                  
                <Nav.Link > <Link to="/contactus">Contact</Link></Nav.Link>
                 
                
              </Nav>
            </Navbar.Collapse>
            <div className="button_1">
              <button>+258(21)21583</button>
            </div>
          </Container>
        </Navbar>
      </div>

    </div>
    
  );
}
{/*                         
<Link to="/home">Home</Link>
<Link to="/pages">Pages</Link>
<Link to="/menus">Menus</Link>
<Link to="/shop">Shop</Link>
<Link to="/blog">Blog</Link> */}
export default Header;
