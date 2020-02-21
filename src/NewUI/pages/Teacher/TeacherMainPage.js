import React from 'react';
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import "./TeacherMainPage.css";
import * as actions from "../../store/actions/teacher";
import {Row, Col, Button} from 'reactstrap';
import connect from "react-redux/es/connect/connect";

class TeacherMainPage extends React.Component{
    onCardSelectHandler(data){
        
        this.props.selectCard(data.batch+data.subCode+data.group);
        this.props.selectActiveComponent('studentList');
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
        return(
            <Row className="styles">
                {this.props.classes.map((data, index) => {
                    return <Col sm={3}  md={4} key={index}>
                        <Card className="myCards" body inverse color="dark myCardS" onClick={() => this.onCardSelectHandler(data)} >
                            <CardText>Batch: {data.batch}</CardText>
                            <CardText>Subject Code: {data.subCode}</CardText>
                            <CardText>Subject: {data.subName}</CardText>
                            <CardText>Group: {data.group}</CardText>
                        </Card>
                    </Col>
                })}
            </Row>
        );
    }

}

const mapStateToProps = state => {
    return {
        classes: state.teacher.classes
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCard: (data) => dispatch(actions.setActiveClass(data)),
        selectActiveComponent: (comp) => dispatch(actions.setActiveComponent(comp))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherMainPage);