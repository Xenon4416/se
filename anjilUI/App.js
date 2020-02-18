import React from 'react';
import './App.css';
import {Component} from 'react';
import {Container} from "react-bootstrap";
import {Navbars} from "./Components/NavBar/Navbars";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "./Components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
//import {Admin} from "./Pages/AdminDashBoard/AdminV";
//import {TeacherV} from "./Pages/TeacherDashboard/TeacherV";
import {StudentV} from "./Pages/StudentV";
import {TeacherV} from "./Pages/TeacherDashboard/TeacherV";
import {LoginForm} from "./Components/LogIn/Login";



class App extends Component {
    render() {
        return (
            <LoginForm/>
          /*  <Container fluid>
                <Col>
                    <Navbars/>
                </Col>
                <Row>
                    <Col className="navbar-collapse" style={{ position:'fixed', marginLeft: '30px', marginTop:'80px', width:'10%'  }} sm={3}>
                        <SidebarUI/>
                    </Col>
                            <Col style={{ marginTop:'75px', marginLeft: '0px', width:'md-auto'}} sm={3}>
                                <TeacherV/>
                            </Col>
                </Row>
            </Container>

           */
        );
    }
}

export default App;
