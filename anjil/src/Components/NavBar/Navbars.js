import React  from 'react';
import {

    Navbar,
    NavbarBrand,
    Nav,
    NavItem,

    NavbarText
} from 'reactstrap';



export class Navbars extends React.Component{
    render()
    {
        const styles ={
            backgroundColor: '#2a2438',
            width:'1320px',
            position: 'fixed',
            border: '0px',
            boxShadow:'2px 2px 10px 0.01px #121212',

        };

            return (
                <div>

                    <Navbar style={styles}>
                        <NavbarBrand style={{color: 'white'}} href="/">Internal Marks Management System</NavbarBrand>

                            <Nav navbar>


                                <NavItem>

                                </NavItem>

                            </Nav>
                            <NavbarText className="text-white">Notification</NavbarText>

                    </Navbar>

                </div>
            );
    }
}

