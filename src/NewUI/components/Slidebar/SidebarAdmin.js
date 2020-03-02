import { Navbar} from "react-bootstrap";
import { connect } from 'react-redux';
import React, {Fragment} from "react";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import './SideBar.css'
import {UncontrolledTooltip} from 'reactstrap';
import * as action from '../../store/actions/admin';

class SidebarAdmin extends React.Component{
    onComponentShiftHandler(prop){
        this.props.setActiveComponent(prop);
    }
    render()
    {
        let classOption, teacherOption = null;
        if (this.props.activeTeacher) {
            teacherOption = ( // TODO: set appropriate sidebar icons
                <NavbarBrand className="myNavBrand text-success" onClick={() => this.onComponentShiftHandler('teacherPage')}>
                    <UncontrolledTooltip placement="right" target="teacher">
                        Teacher
                    </UncontrolledTooltip>
                    <i  className="fa fa-pencil-square-o text-center" id="teacher" ></i>
                </NavbarBrand>
            )
        }
        if (this.props.activeClass) {
            classOption = (
                <NavbarBrand className="myNavBrand text-success" onClick={() => this.onComponentShiftHandler('studentList')}>
                    <UncontrolledTooltip placement="right" target="class">
                        Class
                    </UncontrolledTooltip>
                    <i  className="fa fa-pencil-square-o text-center" id="class" ></i>
                </NavbarBrand>
            )
        }
        return (
            <Navbar  className="myNav flex-column" >

                <NavbarBrand className="myNavBrand text-success" onClick={() => this.onComponentShiftHandler('mainPage')}>
                    <UncontrolledTooltip placement="right" target="mainPage">
                        Admin Panel
                    </UncontrolledTooltip>
                    <i className="fa fa-address-card-o text-center" id="mainPage">   </i>
                </NavbarBrand>
                {teacherOption}
                {classOption}

            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeComponent: state.admin.activeComponent,
        activeTeacher: state.admin.activeTeacher,
        activeClass: state.admin.activeClass
    }
};

const mapDispatchToProp = (dispatch) => {
    return {
        setActiveComponent: (value) => dispatch(action.setActiveComponent(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProp)(SidebarAdmin);