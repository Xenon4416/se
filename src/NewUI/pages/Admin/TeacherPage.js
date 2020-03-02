import React from 'react';
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import "./TeacherPage.css";
import * as actions from "../../store/actions/admin";
import {Row, Col, Button} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import * as uris from "../../store/uris";

class TeacherPage extends React.Component{
    componentDidMount(){
        console.log("In Admin",this.props);
        let i;
        for(i=0;i<this.props.teacherClasses.length;i++){
            if (this.props.teacherClasses[i].username === this.props.activeTeacher){
                this.props.setActiveTeacherClassesIndex(i);
                break;
            }
        }
        //fetch(`http://localhost:3000/api/record/class?class=${this.props.tutorClass}&subjectCode=${this.props.subjectCode}&sem=1`)
        if (i === this.props.teacherClasses.length){
            // let dat = this.props.classes.find((cls) => this.props.activeClass === cls.batch+cls.subCode+cls.group);
            // let sem = ((parseInt(this.props.activeSem[0])-1)*2+parseInt(this.props.activeSem[2])).toString();
            fetch(uris.FETCH_CLASS_LIST+this.props.activeTeacher, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+this.props.token
                }})
                .then(res => res.json())
                .then(res => {
                    this.props.setTeacherClasses({username:this.props.activeTeacher, data: res.data});
                    this.props.setActiveTeacherClassesIndex(this.props.teacherClasses.length-1);
                })
                .catch(err => console.log(err));
        }
    }

    onCardSelectHandler(data){
        this.props.selectCard(data.batch+data.subCode+data.group, data.sem, data.group);
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
        let datas = this.props.teacherClasses[this.props.activeTeacherClassesIndex];
        return(
            <Row className="styles">
                {datas ?
                    datas.data.map((data, index) => {
                    return <Col  xs={8} sm={8} md={4} lg={3} key={index}>
                        <Card body inverse color="dark myCardS" onClick={() => this.onCardSelectHandler(data)} >
                            <CardText>Batch: {data.batch}</CardText>
                            <CardText>Subject Code: {data.subCode}</CardText>
                            <CardText>Subject: {data.subName}</CardText>
                            <CardText>Group: {data.group}</CardText>
                        </Card>
                    </Col>
                }) : null}
            </Row>
        );
    }

}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        teacherClasses: state.admin.teacherClasses,
        activeTeacher: state.admin.activeTeacher,
        activeTeacherClassesIndex: state.admin.activeTeacherClassesIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCard: (data, sem, group) => dispatch(actions.setActiveClass(data, sem, group)),
        selectActiveComponent: (comp) => dispatch(actions.setActiveComponent(comp)),
        setActiveTeacherClassesIndex: (value) => dispatch(actions.setActiveTeacherClassesIndex(value)),
        setTeacherClasses: (values) => dispatch(actions.setTeacherClasses(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherPage);