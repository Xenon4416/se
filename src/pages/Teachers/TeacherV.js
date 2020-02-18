import {Card, Col, Container, Row} from "react-bootstrap";


import React from "react";
import {CardBody, ButtonGroup, Button, CardTitle, Table} from "reactstrap";
import CardText from "reactstrap/es/CardText";
import Input from "reactstrap/es/Input";
import {StudentList} from "./StudentList";


export class TeacherV extends React.Component{
    render()
    {
        return(
            <Container style={{  marginLeft:'150px',  marginTop:'-60px', width:'1300px'}}>
                <Row style={{marginTop:'30px'}}>
                    <Col sm={3}>
                        <Card  body style={{backgroundColor: '#2a2438', overflow: 'scroll', width: '250px', overflowX: 'hidden',  height: '600px' , border: '0px',boxShadow:'2px 2px 10px 0.01px #121212' }}>
                                <CardTitle  className="text-white text-center "><h4>Available Subjects</h4></CardTitle>
                                <CardBody>
                                    <ButtonGroup style={{padding:'5px'}} vertical size="sm" >
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>

                                    </ButtonGroup>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <StudentList/>
                    </Col>
                    <Col>
                        <Card style={{padding:'5px', backgroundColor: '#2a2438', width:'800px',height:'700px', border: '0px', overflow: 'scroll',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                            <CardText className="text-white shadow">Enter Marks</CardText>
                            <Table borderless striped style={{backgroundColor: '#2a2438'}} >
                                <thead>
                                <tr className="text-white">
                                    <th>S.N</th>
                                    <th>Roll No</th>
                                    <th>Full Name</th>
                                    <th>Full Marks</th>
                                    <th>Pass Marks</th>
                                    <th>Marks Obtained</th>
                                    <th>Total</th>
                                    <th>Remarks</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-white">
                                    <td>1</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>2</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>3</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>4</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>4</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>4</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>4</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>4</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>4</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                <tr className="text-white">
                                    <td>4</td>
                                    <td>PUL074BCT005</td>
                                    <td>Anjil Bishowkarma</td>
                                    <td>100</td>
                                    <td>80</td>
                                    <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                                    <td>75</td>
                                    <td>Excellent</td>
                                </tr>
                                </tbody>
                                <tr><Button outline color="success">Submit</Button></tr>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}