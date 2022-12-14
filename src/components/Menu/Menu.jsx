import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Menu.css'

import { useEffect } from "react";

function Menu() {
    return (
        <Navbar className='Navbar p-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand className="p">SNEAKER</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/categoria/deportivas">Deportivas</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/categoria/moda">Moda</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/categoria/accesorios">Accesorios</Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to={"/cart"}>
                            <CartWidget />
                        </Link>
                        {/*<Nav.Link href="#">
                            <div className='img'><img src='./src/assets/logo/logo.png'/></div>
                        </Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;
