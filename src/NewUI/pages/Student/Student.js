import React,{Component, Fragment} from "react";
import {Container} from "reactstrap";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "../../components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
//import {StudentList} from "./StudentList";
import {Navbars} from "../../components/NavBar/Navbars";
import { connect } from 'react-redux';
import MarksDisplay from "./MarksDisplay";
// import {TeacherV} from "./TeacherV";
import StudentMainPage from "./StudentMainPage";
//import MarksDisplay from "./MarksDisplay"
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/student";
// import {AdminV} from "../../../Pages/AdminDashBoard/AdminV";
class Student extends Component {
    componentDidMount(){
        fetch(uris.STUDENT_MARKS+this.props.username+"?fields=s1,s2,s3,s4,s5,s6,s7,s8", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.props.token
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log("Here data:",res.data);
                this.props.onFetched(res.data)})
            .catch(err => console.log("Student err", err))
    }

    render() {
        let renderComp = null;
        switch (this.props.activeComponent) {
            case 'mainPage':
                renderComp = <StudentMainPage/>;
                break;
            case 'marksDisplay':
                renderComp = <MarksDisplay/>;
                break;
            default:
                break;
        }
        return (
            <Fragment>
                {renderComp}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        username: state.auth.username,
        activeComponent:state.student.activeComponent,
        loading:state.student.loading,
        activeSem:state.student.activeSem,
        marks:state.student.marks,
        subjects:state.student.subjects
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetSem: (sem) => dispatch(actions.setCurrentSem(sem)),
        onFetched:(marks,subjects)=>{
            dispatch(actions.setStudentMarks(marks));
            dispatch(actions.setSubjects(subjects))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
