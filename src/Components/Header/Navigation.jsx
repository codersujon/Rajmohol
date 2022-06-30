import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Link, NavLink } from "react-router-dom";


class Navigation extends Component {

    constructor(props){
        super(props)
        this.state={
            isNavOpen: false
        }
    }

     navToggle = () =>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarBrand href="/">Rajmohol Restaurant</NavbarBrand>
                        <NavbarToggler onClick={this.navToggle} />
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink to="/" className="nav-link active">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/menu" className="nav-link">Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/about" className="nav-link">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;