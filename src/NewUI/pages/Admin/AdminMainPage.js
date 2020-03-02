import React from 'react';
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import "./AdminMainPage.css";
import * as actions from "../../store/actions/admin";
import {Row, Col, Button} from 'reactstrap';
import connect from "react-redux/es/connect/connect";

class AdminMainPage extends React.Component{
    onCardSelectHandler(data){
        this.props.selectCard(data.username);
        this.props.selectActiveComponent('teacherPage');
    }

    render() {
        return(
            <Row xs="2" className="styles">
                {this.props.teachers.map((data, index) => {
                    return <Col sm={3}  md={4} key={index}>
                        <Card body inverse color="dark myCardS" onClick={() => this.onCardSelectHandler(data)} >
                            <CardText>Teacher Name: {data.name}</CardText>
                        </Card>
                    </Col>
                })}
            </Row>
        );
    }

}

const mapStateToProps = state => {
    return {
        teachers: state.admin.teachers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCard: (data) => dispatch(actions.setActiveTeacher(data)),
        selectActiveComponent: (comp) => dispatch(actions.setActiveComponent(comp))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminMainPage);