import React from 'react';
import {Component} from 'react';
import {Container} from "reactstrap";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "../../components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
//import {StudentList} from "./StudentList";
import {Navbars} from "../../components/NavBar/Navbars";
import {MarksEntry} from "./MarksEntry";
import {StudentList} from "./StudentList";
import {TeacherV} from "./TeacherV";
import TeacherMainPage from "./TeacherMainPage";
import {AdminV} from "../../../Pages/AdminDashBoard/AdminV";
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
                        <MarksEntry/>
                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Teacher;
