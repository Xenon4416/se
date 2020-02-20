import React from 'react';
import {Component} from 'react';
import {Container} from "reactstrap";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "../../components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
import {StudentList} from "./StudentList";
import {Navbars} from "../../components/NavBar/Navbars";

class Teacher extends Component {
    render() {
        return (
           <Container fluid={true}>
               <Row>
                   <Col>
                       <Navbars/>
                   </Col>
               </Row>
               <Row>
                   <Col xs={1}>
                        <SidebarUI/>
                   </Col>
                   <Col xs={11}>
                        <StudentList/>
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Teacher;
