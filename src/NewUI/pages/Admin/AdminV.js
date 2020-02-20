import {Card, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import React from "react";
import {Table} from "react-bootstrap";
import ButtonGroup from "reactstrap/es/ButtonGroup";
import Button from "reactstrap/es/Button";
import { ButtonToolbar, Popover, OverlayTrigger } from "react-bootstrap";
import {LineCharts} from "./LineCharts";
import {TeacherDetails} from "./TeacherDetails";
import {AddNew} from "./AddNew";


export class Admin extends React.Component{
    render(){
        return(
                        <Container style={{  marginLeft:'150px', marginTop:'-60px', width:'1300px'}}>
                            <Row>
                                <LineCharts/>
                            </Row>
                            <Row style={{marginLeft:'-30px', marginTop:'15px', marginRight:'115px'}}>
                                <Col sm={3} >
                                    <Card className="text-center text-white" style={{ width: '15rem',backgroundColor: '#272a3d',boxShadow:'2px 2px 10px 0.01px #121212', border: '0px'}}>

                                        <Card.Body>
                                            <Card.Title>Admin</Card.Title>
                                            <Card.Text>
                                                1
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={3}>
                                    <Card className="text-center text-white" style={{ width: '15rem',backgroundColor: '#272a3d',boxShadow:'2px 2px 10px 0.01px #121212', border: '0px'}}>

                                        <Card.Body>
                                            <Card.Title>Teacher</Card.Title>
                                            <Card.Text>
                                                100
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={3}>
                                    <Card className="text-center text-white" style={{ width: '15rem', backgroundColor: '#272a3d',boxShadow:'2px 2px 10px 0.01px #121212', border: '0px'}}>

                                        <Card.Body>
                                            <Card.Title>Student</Card.Title>
                                            <Card.Text>
                                                1765
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={3}>
                                    <Card className="text-center text-white" style={{ width: '16rem', backgroundColor: '#272a3d',boxShadow:'2px 2px 10px 0.01px #121212', border: '0px'}}>

                                        <Card.Body>
                                            <Card.Title>Total Users</Card.Title>
                                            <Card.Text>
                                                2000
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>


                            </Row>

                            <Row>
                                <Card body style={{backgroundColor: '#272a3d', marginTop:'20px', width:'90%', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212' }}  >

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


                                    </Table>
                                </Card>
                            </Row>

                            <Row>
                                
                                <Card  body style={{marginTop: '20px', width:'1012px', backgroundColor: '#2a2438', padding:'3px', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                                    <Tabs  defaultActiveKey="teacher" id="uncontrolled-tab-example">
                                        <Tab style={{backgroundColor: '#2a2438', padding:'10px'}} eventKey="teacher" title="Teacher List">
                                            <TeacherDetails/>
                                        </Tab>
                                        <Tab style={{padding:'20px', hover: {color: '#2a2438'}}} eventKey="profile" title="NEW">
                                            <AddNew/>
                                        </Tab>

                                    </Tabs>
                                </Card>
                            </Row>

                        </Container>

        );
    }
}