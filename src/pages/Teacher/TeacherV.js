import {Card, Col, Container, Row} from "react-bootstrap";


import React from "react";
import {CardBody,ButtonGroup, Button, CardTitle} from "reactstrap";
import {MarksEntry} from "./MarksEntry";


export class TeacherV extends React.Component{
    render()
    {
        return(
            <Container style={{overflow: 'scroll', width:'800px', height:'700px'}}>

                <Row sm={12}>
                    <Col className="" sm={9} >
                        <Row>
                            <br/>
                            <Card  body style={{backgroundColor: '#2a2438', marginTop:'20px', overflow: 'scroll', scrollbar:'red', overflowX: 'hidden',  height: '500px' , position: 'flex', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212' }}>
                                <CardTitle  className="text-white "><h2>Available Subjects</h2></CardTitle>
                                <CardBody>

                                    <ButtonGroup vertical >
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
                            <MarksEntry/>

                        </Row>
                    </Col>


                </Row>

            </Container>
        );
    }
}