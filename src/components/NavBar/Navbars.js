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

            width:'100%',

            border: '0px',
            //boxShadow:'2px 2px 10px 0.01px #121212',

        };

            return (
                <div>

                    <Navbar style={styles}>
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

