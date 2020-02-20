import {Card, Navbar} from "react-bootstrap";
import React from "react";
import NavbarBrand from "reactstrap/es/NavbarBrand";


export class SidebarUI extends React.Component{
    render()
    {
        return (
            <Card body>

                <Navbar style={{height:'80vh', width:'75px',margin:'auto'}} className=" flex-column" >
                            <NavbarBrand href="/components/">
                                <i  className="fa fa-address-card-o text-center" style={{fontsize:'120px', color:'white'}}><h6>Admin</h6></i>
                            </NavbarBrand>
                            <NavbarBrand href="/components/">
                                <i  className="fa fa-television text-center" style={{fontsize:'72px', color:'white'}}><h6>Teacher</h6></i>
                            </NavbarBrand>
                    <NavbarBrand href="/components/">
                        <i  className="fa fa-plus text-center" style={{fontsize:'72px', color:'white'}}><h6>Add New</h6></i>
                    </NavbarBrand>
                            <NavbarBrand href="/components/">
                                <i  className="fa fa-pencil-square-o text-center" style={{fontsize:'72px', color:'white'}}><h6>Marks Entry</h6></i>
                            </NavbarBrand>
                            <NavbarBrand href="/components/">
                                <i  className="fa fa-television text-center" style={{fontsize:'72px', color:'white'}}><h6>Student View</h6></i>
                        </NavbarBrand>

                    <NavbarBrand href="/components/">
                        <i  className="fa fa-power-off text-center" style={{fontsize:'72px', color:'white'}}><h6>Logout</h6></i>
                    </NavbarBrand>
                </Navbar>
            </Card>
        );
    }
}
