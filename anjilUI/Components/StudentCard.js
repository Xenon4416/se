import React from 'react';
import {
    Card,CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Row, Col
} from 'reactstrap';

export class StudentCard extends React.Component {
    render() {
        return (
            <div>
                <Row>

                    <Col>
                        <Card style={{backgroundColor: '#2a2438', padding:'5px', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212'}} >
                            <CardImg variant="top" style={{width: '50%', marginLeft: '4em'}} src="https://img.icons8.com/color/48/000000/user-male-circle.png" />
                            <CardBody className="text-center text-white">
                                <CardTitle>Anjil Bishowkarma</CardTitle>
                                <CardSubtitle>074BCT505</CardSubtitle>
                                <CardText>Bachelor's Degree in Computer Engineering</CardText>

                            </CardBody>
                        </Card>
                    </Col>
                     <Col >
                        <Card  style={{backgroundColor: '#2a2438', padding:'5px', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212'}} >
                        <CardImg variant="top" style={{width: '50%', marginLeft: '4em'}} src="https://img.icons8.com/color/48/000000/user-male-circle.png" />
                        <CardBody className={"text-center text-white"}>
                            <CardTitle>Random Guy2</CardTitle>
                            <CardSubtitle>074BCT505</CardSubtitle>
                            <CardText>Bachelor's Degree in Computer Engineering</CardText>
                        </CardBody>
                         </Card>
                         </Col>

                    <Col>
                        <Card  style={{backgroundColor: '#2a2438', padding:'5px', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212'}} >
                        <CardImg variant="top" style={{width: '50%', marginLeft: '4em'}} src="https://img.icons8.com/color/48/000000/user-male-circle.png" />
                        <CardBody className={"text-center text-white"}>
                            <CardTitle>Random Guy</CardTitle>
                            <CardSubtitle>074BCT505</CardSubtitle>
                            <CardText>Bachelor's Degree in Computer Engineering</CardText>

                        </CardBody>
                        </Card>
                    </Col>

                </Row>

            </div>
        );
    }
}

