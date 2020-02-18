import {Card, Image, Nav} from "react-bootstrap";
import React from "react";

export class Sidebar extends React.Component{
    render()
    {
        return (
            <Card body style={{backgroundColor: '#2a2438', position: 'fixed', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212', height:'md-auto', width:'md-auto', marginTop:'60px'}}>
                <Nav fixed="left" defaultActiveKey="/home" className="flex-column">



                    <Nav.Item style={{padding: '3px'}}>
                        <Image style={{width: '100%', backgroundColor: '#411e8f', borderRadius: '50%', padding: '0px' ,boxShadow:'4px 4px 10px 1px'}} src="https://img.icons8.com/color/96/000000/user-female-circle.png" alt="fddfdf"/>
                        <h6 style={{padding:'13px'}} className="text-white">Welcome! Dr. Aman Shakya</h6>
                    </Nav.Item>

                  
                    <Nav.Link style={{padding: '13px'}}  className="text-white" href="/admin">Admin Panel</Nav.Link>
                    <Nav.Link style={{padding: '13px'}}  className="text-white" eventKey="link-1">Marksheet</Nav.Link>
                    <Nav.Link style={{padding: '13px'}}  className="text-white" eventKey="link-1">Marks Entry</Nav.Link>
                    <Nav.Link style={{padding: '13px'}}  className="text-white" eventKey="link-1">Check Progress</Nav.Link>

                    <Nav.Item>

                        <h5 style={{padding: '13px'}} className="text-white">Log Out   <img src="https://img.icons8.com/material-outlined/24/000000/logout-rounded-left.png" alt="Logout"/> </h5>

                    </Nav.Item>
                </Nav>
            </Card>
            );
    }
}
