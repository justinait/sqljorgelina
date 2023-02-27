import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {

  //navbarItems on click docuemnt queryselector
  //removeclass show

  var rightNavbarContainer = document.getElementsByClassName('rightNavbarContainer');
  
  const collapseMenu = () => {
    rightNavbarContainer.removeClassName('show')
  }

  return (
    <Navbar expand="lg" variant="dark" className='navbar'>
      <Container className='navbarContainer'>
        <NavLink className='title' to="/">Jorgelina Parkinson</NavLink>
        
        <Navbar.Toggle expand="lg" aria-controls="basic-navbar-nav" className='hamburgerMenu' variant="light"/>
        <Navbar.Collapse className='rightNavbarContainer'>
          <Nav className='rightNavbar'>
            <NavLink className='navbarItems' onClick={collapseMenu} to="/">Inicio</NavLink>
            <NavLink className='navbarItems' onClick={collapseMenu} to="/about">Biografia</NavLink>
            <NavDropdown title="Obras" id="basic-nav-dropdown">
              <NavDropdown.Item href="/gallery/ports" className='navDropdownItem'>Puentes y puertos</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/cinder" className='navDropdownItem'>Carbonilla</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/situations" className='navDropdownItem'>Situaciones cotidianas</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/faces" className='navDropdownItem'>Rostros</NavDropdown.Item>
              {/* <NavDropdown.Item href="/gallery/human-figure" className='navDropdownItem'>Figura humana</NavDropdown.Item> */}
              <NavDropdown.Item href="/gallery/ink" className='navDropdownItem'>Tinta</NavDropdown.Item>
              {/* <NavDropdown.Item href="/gallery/interiors" className='navDropdownItem'>Interiores</NavDropdown.Item> */}
              <NavDropdown.Item href="/gallery/landscape" className='navDropdownItem'>Paisajes</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/parana" className='navDropdownItem'>Paraná</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/route40" className='navDropdownItem'>Ruta 40</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/still-life" className='navDropdownItem'>Naturaleza muerta</NavDropdown.Item>
              <NavDropdown.Item href="/gallery/women" className='navDropdownItem'>Mujeres en el Siglo XX</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;