import React from 'react';
// import './App.css';
import {Component} from 'react';
import {Container} from "reactstrap";
//import {Navbars} from "./../../components/NavBar/"
import {Navbars} from "../../components/NavBar/Navbars";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "../../components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
import {StudentList} from "./StudentList";
//import {Admin} from "./Pages/AdminDashBoard/AdminV";
//import {TeacherV} from "./Pages/TeacherDashboard/TeacherV";
//import {StudentV} from "./Pages/StudentV";
import {TeacherV} from "./TeacherV";
//import {LoginForm} from "./Components/LogIn/Login";



class Teacher extends Component {
    render() {
        return (
           <Container fluid={true}>
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
