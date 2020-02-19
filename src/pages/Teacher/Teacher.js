import React from 'react';
// import './App.css';
import {Component} from 'react';
import {Container} from "react-bootstrap";
//import {Navbars} from "./../../components/NavBar/"
import {Navbars} from "../../components/NavBar/Navbars";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "../../components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
//import {Admin} from "./Pages/AdminDashBoard/AdminV";
//import {TeacherV} from "./Pages/TeacherDashboard/TeacherV";
//import {StudentV} from "./Pages/StudentV";
import {TeacherV} from "./TeacherV";
//import {LoginForm} from "./Components/LogIn/Login";



class Teacher extends Component {
    render() {
        return (
            // <LoginForm/>
           <Container fluid>
                <Row >
                    <Col>
                        <Navbars/>
                    </Col>
                </Row>
                <Row >
                    <Col sm={1}  md={1} lg={1}>
                        <SidebarUI/>
                    </Col>
                    <Col  sm={11}  md={11} lg={11}>
                            <TeacherV/>
                    </Col>
                </Row>
            </Container>

           
        );
    }
}

export default Teacher;
