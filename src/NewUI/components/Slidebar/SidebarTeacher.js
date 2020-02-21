import { Navbar} from "react-bootstrap";
import { connect } from 'react-redux';
import React, {Fragment} from "react";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import './SideBar.css'
import {UncontrolledTooltip} from 'reactstrap';
import * as action from '../../store/actions/teacher';

class SidebarTeacher extends React.Component{
    onComponentShiftHandler(prop){
        this.props.setActiveComponent(prop);
    }
    render(){
        let conditionRender = null;
        if (this.props.activeClass){
            conditionRender = (
                <Fragment>
                <NavbarBrand className="myNavBrand text-success" onClick={() => this.onComponentShiftHandler('marksEntry')}>
                    <UncontrolledTooltip placement="right" target="marksentry">
                        Marks Entry
                    </UncontrolledTooltip>
                    <i  className="fa fa-pencil-square-o text-center" id="marksentry" ></i>
                </NavbarBrand>
                <NavbarBrand className="myNavBrand text-success" onClick={() => this.onComponentShiftHandler('studentList')}>
                    <UncontrolledTooltip placement="right" target="marksview">
                    Marks View
                    </UncontrolledTooltip>
                    <i  className="fa fa-television text-center" id="marksview"></i>
                </NavbarBrand>
                </Fragment>
            )
        }
        return (
                <Navbar  className="myNav flex-column" >
                            <NavbarBrand className="myNavBrand text-success" onClick={() => this.onComponentShiftHandler('mainPage')}>
                                <UncontrolledTooltip placement="right" target="teacher">
                                    Teacher Dashboard
                                </UncontrolledTooltip>
                                <i className="fa fa-television text-center" id="teacher"></i>
                            </NavbarBrand>
                            {conditionRender}

                </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {
        activeComponent: state.teacher.activeComponent,
        activeClass: state.teacher.activeClass,
        classes: state.teacher.classes
    }
};

const mapDispatchToProp = (dispatch) => {
    return {
        setActiveComponent: (value) => dispatch(action.setActiveComponent(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProp)(SidebarTeacher);