import React  from 'react';
import {Navbar, NavbarBrand,Nav,NavItem,NavbarText} from 'reactstrap';
import './NavBar.css'
import Button from "reactstrap/es/Button";
import tuLogo from "../../assests/tu logo official.png";
export class Navbars extends React.Component{
    render()
    {
            return (
                <div>
                    <Navbar className="myNavBar">
                        <NavbarBrand className="text-white" href="/">
                            <img width="40vh" height="50vh" src={tuLogo} alt="." /> Internal Marks Management System
                            </NavbarBrand>
                            <NavbarText className="text-white">
                                <a className="text-white" href="/admin" ><h6>Logout <i className="fa fa-sign-out"> </i></h6></a>
                            </NavbarText>
                    </Navbar>
                </div>
            );
    }
}
