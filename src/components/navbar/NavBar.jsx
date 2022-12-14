import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import  Button  from 'react-bootstrap/Button';
const NavBar = () => {
  return (
    <div>
         <Navbar expand="lg" className='back'>
      <Container>
        <Navbar.Brand className='logo' >
          <div className='reo'>
          REO
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='px-4 opps'>Home</Nav.Link>
            <Nav.Link className='px-4 opps' >Messages</Nav.Link>
            <Nav.Link className='px-4 opps'>Audios</Nav.Link>
            <Nav.Link className='px-4 opps'>Pdf's</Nav.Link>
           
             
           
          </Nav>
          <button className='sup' >support us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar
