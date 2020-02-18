import React from 'react';
import './App.css';
import {Component} from 'react';
//import {TeacherV} from "./Pages/TeacherDashboard/TeacherV";
import {Container} from "react-bootstrap";
//import {TeacherV} from "./Pages/TeacherDashboard/TeacherV";
import {Navbars} from "./Components/NavBar/Navbars";

import Col from "reactstrap/es/Col";
import {Sidebar} from "./Components/Slidebar/Slidebar";
import Row from "reactstrap/es/Row";
import { Card} from 'reactstrap';
//import {LineCharts} from './Components/Stats/LineCharts';
import {Admin} from "./Pages/adminv/adminv";
import {MBody} from "./Pages/StudentMarksheet/MBody";
import {Mheader} from "./Pages/StudentMarksheet/Mheader";
import {MFooter} from "./Pages/StudentMarksheet/MFooter";
//import {Login} from "./Components/LogIn/Login";
//import { Card} from 'reactstrap';
//import {MarksEntry} from "./Pages/TeacherDashboard/MarksEntry";
//import SortingTables from "./Components/ReactTable";
//import {TeacherV} from "./Pages/TeacherDashboard/TeacherV";
//import {MarksEntry} from "./Pages/TeacherDashboard/MarksEntry";
//import ReactTables from "./Components/ReactTable";


class App extends Component {
    render() {



        return (
            <Container fluid>
                <div>;
                    <Col>
                        <Navbars/>
                    </Col>
                    <Row sm={12}>
                        <Row sm={12} >
                            <Col style={{marginLeft: '30px', marginTop:'15px'  }} sm={3}>
                                <Sidebar/>
                            </Col>
                            <Col style={{ marginTop:'60px', marginLeft: '10px', width:'md-auto'   }} >
                                <Card style={{width: '900px', marginLeft:'310px', borderColor:'#2a2438'}}>

                                    <MBody/>
                                    <MFooter/>
                                </Card>

                            </Col>

                        </Row>
                    </Row>

                </div>


            </Container>

        );
    }
}

export default App;
