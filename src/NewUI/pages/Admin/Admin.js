import React,{Component, Fragment} from "react";
import { connect } from 'react-redux';
import AdminMainPage from "./AdminMainPage";
import * as uris from '../../store/uris';
import * as actions from "../../store/actions/admin";
class Teacher extends Component {
    componentDidMount(){
        // fetch(uris.FETCH_CLASSLIST+this.props.username, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer '+this.props.token
        //     }
        // })
        //     .then(res => res.json())
        //     .then(res => this.props.onSetClass(res.data))
        //     .catch(err => console.log("Teacher err", err))
    }

    render() {
        let renderComp = null;
        switch (this.props.activeComponent) {
            case 'mainPage':
                renderComp = <AdminMainPage/>;
                break;
            // case 'marksEntry':
            //     renderComp = <MarksEntry/>;
            //     break;
            // case 'studentList':
            //     renderComp = <StudentList/>;
            //     break;
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
        teachers: state.admin.classes
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetTeacher: (values) => dispatch(actions.setTeachers(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
