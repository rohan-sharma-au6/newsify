import React from 'react';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return (
        <div>
            <Navbar fixed="top" style={{ height: "80px" }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to={"/"}><img  src={logo} style={{width:"80px",height:"80px"}} alt=""/></Link>
                <Navbar.Brand style={{ color: "cyan", fontSize: "50px" }} className="title" href="/">NEWSIFY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link style={{fontSize:"20px"}} href="/channels">Channels</Nav.Link>
                    <Nav.Link style={{fontSize:"20px"}} href="/bit">₿itcoin</Nav.Link>
                        <NavDropdown style={{fontSize:"20px"}} title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                            <NavDropdown.Item href="/sports">Sports</NavDropdown.Item>
                            <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/health">Health</NavDropdown.Item>
                            <NavDropdown.Item href="/science">Science</NavDropdown.Item>
                            <NavDropdown.Item href="/entertainment">Entertainment</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link style={{fontSize:"20px"}} href="/covid">Covid-19 Tracker</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Navbar1;