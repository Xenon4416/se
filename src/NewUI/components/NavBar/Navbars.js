import React  from 'react';
import {Navbar, NavbarBrand,NavbarText, Button} from 'reactstrap';
import { connect } from 'react-redux';
import './NavBar.css'
import tuLogo from "../../assests/tu logo official.png";
import * as actions from "../../store/actions/auth";
import {resetTeacherState} from "../../store/actions/teacher";
class Navbars extends React.Component{
    onLogutHandler(event){
        event.preventDefault();
        this.props.resetTeacherState();
        this.props.onLogOut();
    }
    render()
    {
            return (
                <div>
                    <Navbar className="myNavBar">
                        <NavbarBrand className="text-white" href="/">
                            <img width="40vh" height="50vh" src={tuLogo} alt="." /> Internal Marks Management System
                            </NavbarBrand>
                            <NavbarText className="text-white">
                                <Button className="btn btn-dark myButton" onClick={(event) => this.onLogutHandler(event)}>Log Out <i className="fa fa-sign-out text-danger"> </i></Button>
                                {/*<a className="text-white" onClick={(event) => this.onLogutHandler(event)}><h6>Logout <i className="fa fa-sign-out text-danger"> </i></h6></a>*/}
                            </NavbarText>
                    </Navbar>
                </div>
            );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetTeacherState: () => dispatch(resetTeacherState()),
        onLogOut: () => dispatch(actions.logout())
    }
};

export default connect(null, mapDispatchToProps)(Navbars);