import {Card, Navbar} from "react-bootstrap";
import React from "react";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import './SideBar.css'
import NavbarText from "reactstrap/es/NavbarText";

export class SidebarUI extends React.Component{
    render()
    {
        return (
                <Navbar  className="myNav flex-column" >

                            <NavbarBrand className="myNavBrand text-white" href="/components/">
                                <i className="fa fa-address-card-o text-center"><h6 className="textSize">Admin</h6></i>

                            </NavbarBrand>

                            <NavbarBrand className="myNavBrand text-white" href="/components/">
                                <i className="fa fa-television text-center"><h6 className="textSize">Teacher</h6></i>
                            </NavbarBrand>
                            <NavbarBrand className="myNavBrand text-white" href="/components/">
                                <i  className="fa fa-plus text-center"><h6 className="textSize">New</h6></i>
                            </NavbarBrand>
                            <NavbarBrand className="myNavBrand text-white" href="/components/">
                                <i  className="fa fa-pencil-square-o text-center" style={{fontsize:'72px', color:'white'}}><h6 className="textSize">Entry</h6></i>
                            </NavbarBrand>
                            <NavbarBrand className="myNavBrand" href="/components/">
                                <i  className="fa fa-television text-center" style={{fontsize:'72px', color:'white'}}><h6 className="textSize">Student</h6></i>
                        </NavbarBrand>

                </Navbar>
        );
    }
}
