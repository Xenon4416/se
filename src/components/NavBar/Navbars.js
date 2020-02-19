import React  from 'react';
import {Navbar, NavbarBrand,Nav,NavItem,NavbarText} from 'reactstrap';
import './NavBar.css'
export class Navbars extends React.Component{
    render()
    {
        const styles ={

            width:'100%',
            height:'20%',
            border: '2px',
            boxShadow:'2px 2px 10px 0.01px #121212',
            padding:'8px 8px 8px 8px',
            margin:'20px auto 15px auto '
        };

            return (
                <div>
                    <Navbar className="myNavBar">
                        <NavbarBrand style={{color: 'white'}} href="/">
                            <i className="fa fa-mortar-board"> Internal Marks Management System</i>
                            </NavbarBrand>
                            <NavbarText className="text-white">
                                <i className="fa fa-bell"></i>
                            </NavbarText>
                    </Navbar>

                </div>
            );
    }
}

