import React,{Component, Fragment} from "react";
import {Container} from "reactstrap";
import Col from "reactstrap/es/Col";
import {SidebarUI} from "../../components/Slidebar/SidebarUI";
import Row from "reactstrap/es/Row";
//import {StudentList} from "./StudentList";
import {Navbars} from "../../components/NavBar/Navbars";
import { connect } from 'react-redux';
import {MarksEntry} from "./MarksEntry";
import StudentList from "./StudentList";
// import {TeacherV} from "./TeacherV";
import TeacherMainPage from "./TeacherMainPage";
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/teacher";
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
            .then(res => this.props.onSetClass(res.data))
            .catch(err => console.log("Teacher err", err))
    }

    render() {
        let renderComp = null;
        switch (this.props.activeComponent) {
            case 'mainPage':
                renderComp = <TeacherMainPage/>;
                break;
            case 'marksEntry':
                renderComp = <MarksEntry/>;
                break;
            case 'studentList':
                renderComp = <StudentList/>;
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
        activeComponent: state.teacher.activeComponent,
        classes: state.teacher.classes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetClass: (values) => dispatch(actions.setClasses(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
