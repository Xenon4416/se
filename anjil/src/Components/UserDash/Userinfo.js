import React from 'react';
import { Card, Col, Row} from "react-bootstrap";
import {LineCharts} from "../Stats/LineCharts";
import CardText from "reactstrap/es/CardText";


export class Userinfo extends React.Component {
    render() {
        return(
            <Card style={{padding:'0.2em', width:'100%', backgroundColor: '#2a2438',boxShadow:'2px 2px 10px 0.01px #121212'}} >
                <h2 className="text-left">Users</h2>


                <Row style={{marginTop:'30px', marginLeft:'80px'}}>
                    <Col sm={3} >
                    <Card className="text-center text-white" style={{ width: '12rem', backgroundColor: '#2a2438', border: '0px'}}>
                        <Card.Img variant="top" style={{width: '30%', marginLeft: '4em'}} src="https://img.icons8.com/color/48/000000/user-male-circle.png" />
                        <Card.Body>
                            <Card.Title>Admin</Card.Title>
                            <Card.Text>
                                1
                            </Card.Text>

                        </Card.Body>
                    </Card>
                    </Col>
                        <Col sm={3} >
                            <Card className="text-center text-white" style={{ width: '12em', backgroundColor: '#2a2438', border: '0px' }}>
                                <Card.Img variant="top" style={{width: '30%', marginLeft: '4em'}} src="https://img.icons8.com/color/48/000000/user-male-circle.png" />
                                <Card.Body>
                                    <Card.Title>Teacher</Card.Title>
                                    <Card.Text>
                                        40
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                    <Col sm={3}>
                        <Card className="text-center text-white" style={{ width: '12rem', backgroundColor: '#2a2438', border: '0px' }}>
                            <Card.Img variant="top" style={{width: '30%', marginLeft: '4em', borderRadius: '50%', stroke: '2px' }} src="https://img.icons8.com/color/48/000000/user-male-circle.png" />
                            <Card.Body>
                                <Card.Title>Student</Card.Title>
                                <Card.Text>
                                    1,723
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Col sm="lg" >
                    <Card style={{borderColor: '#2a2438', backgroundColor: '#2a2438', border: '0px', width:'700px', marginLeft:'50px'}}>
                        <CardText  className="text-white">Active User Graph</CardText>
                        <LineCharts/>
                    </Card>

                </Col>

            </Card>
        );
    }
}