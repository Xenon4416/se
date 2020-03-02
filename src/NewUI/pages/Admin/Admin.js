import React,{Component, Fragment} from "react";
import { connect } from 'react-redux';
import AdminMainPage from "./AdminMainPage";
import TeacherPage from './TeacherPage';
import StudentList from './StudentList';
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/admin";
class Admin extends Component {
    componentDidMount(){
        this.props.resetAdminState();
        fetch(uris.FETCH_TEACHER_LIST, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.props.token
            }
        })
            .then(res => res.json())
            .then(res => this.props.onSetTeacher(res.data.users))
            .catch(err => console.log("Teacher err", err))
    }

    render() {
        let renderComp = null;
        switch (this.props.activeComponent) {
            case 'mainPage':
                renderComp = <AdminMainPage/>;
                break;
            case 'teacherPage':
                renderComp = <TeacherPage/>;
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
        activeComponent: state.admin.activeComponent,
        teachers: state.admin.teachers,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTeacher: (values) => dispatch(actions.setTeachers(values)),
        resetAdminState: () => dispatch(actions.resetAdminState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
