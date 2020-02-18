import {Card, Col, Container, Row, Tab, Tabs} from "react-bootstrap";

import {Userinfo} from "../../Components/UserDash/Userinfo";
import React from "react";
import {Table} from "react-bootstrap";
import ButtonGroup from "reactstrap/es/ButtonGroup";
import Button from "reactstrap/es/Button";

import { ButtonToolbar, Popover, OverlayTrigger } from "react-bootstrap";
import {Teachers} from "../TeacherDashboard/Teachers";
import {NewTeacher} from "../TeacherDashboard/Teacher";


export class Admin extends React.Component{
    render(){
        return(


            <Row sm={12}>
                <Col style={{width:'md-auto', marginRight:'10px'}} >
                    <Container style={{ boxShadow:'2px 2px 10px 0.01px #121212', marginLeft:'40px' , overflow: 'scroll', width:'850px', overflowX:'hidden',height:'610px'}}>
                        <Row>
                            <Userinfo/>
                        </Row>
                        <Row>
                            <Card body style={{backgroundColor: '#2a2438', marginTop:'20px', width:'100%', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212' }}  >

                                <ButtonToolbar>
                                    {['Account Management'].map(placement => (
                                        <OverlayTrigger
                                            trigger="hover"
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Popover  style={{backgroundColor: '#352f44', color:'white'}} id={`popover-positioned-${placement}`}>
                                                    <Popover.Title style={{backgroundColor: '#352f44'}} as="h3">{` ${placement}`}</Popover.Title>
                                                    <Popover.Content className="text-white">
                                                        Check this info.
                                                    </Popover.Content>
                                                </Popover>
                                            }
                                        >
                                            <h2>{placement}</h2>

                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>

                                <Table striped borderless  className="text-white">
                                    <tr>
                                        <td>Full Name</td>
                                        <td>Unique Roll No</td>
                                        <td>Year</td>
                                        <td>Programme</td>

                                        <td>Action</td>
                                    </tr>
                                    <tr>
                                        <td>Anjil Bishowkarma</td>
                                        <td>PUL074BCT005</td>
                                        <td>Third</td>
                                        <td>BCT</td>

                                        <td>
                                            <ButtonGroup size="sm">
                                                <Button outline color='success' >Approve</Button>
                                                <Button outline color='danger'>Reject</Button>
                                                <Button outline color='secondary'>Hold</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Anjil Bishowkarma</td>
                                        <td>PUL074BCT005</td>

                                        <td>
                                            <ButtonGroup size="sm">
                                                <Button outline color='success' >Approve</Button>
                                                <Button outline color='danger'> Reject</Button>
                                                <Button outline color='secondary' >Hold</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>

                                </Table>
                            </Card>
                        </Row>
                        <Row>
                            <br/>
                            <Card  body style={{marginTop: '20px',width:'100%', backgroundColor: '#2a2438', padding:'3px', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                                <Tabs  defaultActiveKey="teacher" id="uncontrolled-tab-example">
                                    <Tab style={{backgroundColor: '#2a2438', padding:'10px'}} eventKey="teacher" title="Teacher List">
                                        <Teachers/>
                                    </Tab>
                                    <Tab style={{padding:'20px', hover: {color: '#2a2438'}}} eventKey="profile" title="NEW">
                                      <NewTeacher/>
                                    </Tab>

                                </Tabs>
                            </Card>
                        </Row>

                    </Container>

                </Col>
            </Row>

        );
    }
}