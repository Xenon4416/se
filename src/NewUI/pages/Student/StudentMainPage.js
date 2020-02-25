import React from 'react';
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import "./StudentMainPage.css";
import * as actions from "../../store/actions/student";
import {Row, Col, Button} from 'reactstrap';
import connect from "react-redux/es/connect/connect";

class StudentMainPage extends React.Component{
    onCardSelectHandler(data){
        // this.props.selectCard(data.batch+data.subCode+data.group, data.sem);
        // this.props.selectActiveComponent('studentList');
    }

    render() {
        /*const classCard = (props) => {
            return (
                <Col sm={3}  md={4}>
                    <Card body inverse color="dark myCardS" >
                        <CardText>Batch: {props.batch}</CardText>
                        <CardText>Subject Code: {props.subCode}</CardText>
                        <CardText>Subject: {props.subName}</CardText>
                        <CardText>Group: {props.group}<Button outline color="success" onClick="" className="buttonS">View</Button></CardText>
                    </Card>
                </Col>
            )
        };*/
        let semesters=[1,2,3,4,5,6,7,8];
        return(
            <Row  className="styles">
                {semesters.map((data, index) => {
                    return <Col xs={8}sm={7}  md={4} lg={3} xl={3} key={index}>
                        <Card body inverse color="dark myCardS" onClick={() => {
                            this.props.setCurrentSem('s3');
                            this.props.setActivePage('marksDisplay')}} >
                            <CardText>Semester: {data}</CardText>
                        </Card>
                    </Col>
                })}
            </Row>
        );
    }

}

const mapStateToProps = state => {
    return {
        username:state.auth.username,
        marks:state.student.marks,
        activeComponent:state.student.activeComponent
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentSem:(sem)=>dispatch(actions.setCurrentSem(sem)),
        setActivePage:(page)=>dispatch(actions.setActivePage(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentMainPage);