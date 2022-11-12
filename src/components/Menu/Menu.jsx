import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget/CartWidget';

import './Menu.css'

const Menu = () => {
    return (
        <Navbar className='Navbar p-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                
                <Navbar.Brand href="#home" className='p'>SNEAKER</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav-text me-auto">
                        <Nav.Link href="#">Sobre Nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item to="/categoria/deportivas">Deportivas</NavDropdown.Item>
                            <NavDropdown.Item to="/categoria/moda">Moda</NavDropdown.Item>
                            <NavDropdown.Item to="/categoria/accesorios">Accesorios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#">
                            <div className='cart'><CartWidget /></div>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <div className='img'><img src='./src/assets/logo/logo.png'/></div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;