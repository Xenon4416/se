import React,{Component, Fragment} from "react";
import {Container} from "reactstrap";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "../../components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
//import {StudentList} from "./StudentList";
import {Navbars} from "../../components/NavBar/Navbars";
import { connect } from 'react-redux';
import StudentList from "./StudentList";
// import {TeacherV} from "./TeacherV";
import TeacherMainPage from "./StudentMainPage";
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/student";
// import {AdminV} from "../../../Pages/AdminDashBoard/AdminV";
class Teacher extends Component {
    componentDidMount(){
        fetch(uris.FETCH_CLASSLIST+this.props.username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.props.token
            }
        })
            .then(res => res.json())
            .then(res => this.props.setStudentMarks(res.data))
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
        loading:state.student.loading,
        activeSem:state.student.activeSem,
        marks:state.student.marks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetSem: (sem) => dispatch(actions.setCurrentSem(sem)),
        onFetched:(marks)=>dispatch(actions.setStudentMarks(marks))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
