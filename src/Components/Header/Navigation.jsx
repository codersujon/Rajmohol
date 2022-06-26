import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Navigation(props) {
    return (
        <div>
            <Navbar dark color="dark"> 
                <div className="container">
                    <NavbarBrand href="/">Rajmohol Restaurant</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}

export default Navigation;