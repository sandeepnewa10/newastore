import React from 'react'
import { Container, Nav, Navbar, Button} from "react-bootstrap";
import Logo from "../images/logo.png"
const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className='py-4 fixed-top'>
        <Container>
          <Navbar.Brand href="#home">
          <img src={Logo} className="d-inline-block align-top" alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#collection">Collection</Nav.Link>
              <Nav.Link href="#special">specials</Nav.Link>
              <Nav.Link href="#blog">blogs</Nav.Link>
              <Nav.Link href="#about">about us</Nav.Link>   
              <Nav.Link href="#popular">popular</Nav.Link>           
            </Nav>   
            <div className='order-nav'>
                <Button type='button' className='btn'>
                <i class="fa fa-shopping-cart mr-1"></i>
                <span>5</span>
                </Button>
                <Button type='button' className='btn'>
                <i class="fa fa-heart  mr-1"></i>
                <span>5</span>
                </Button>
                <Button type='button' className='btn'>
                <i class="fa fa-search"></i>
                </Button>
            </div>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header