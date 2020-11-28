import React from "react"
import * as ReactBootstrap from "react-bootstrap";

function Navbar(){
    return(
   
               <ReactBootstrap.Navbar bg="primary"  expand="lg">
                <ReactBootstrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link href="/">Home</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/login">Login</ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="/register">Register</ReactBootstrap.Nav.Link>
                  
                    </ReactBootstrap.Nav>
                   
                </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Navbar>
      
    )
}


export default Navbar;