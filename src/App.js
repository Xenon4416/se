import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
//import {StudentList} from "./pages/Teacher/StudentList";
// import SignIn from './pages/SignIn';
import LogIn from '../src/NewUI/pages/Login';
import Admin from '../src/NewUI/pages/Admin/Admin';
import Navbars from './NewUI/components/NavBar/Navbars'
//import {NavBars} from './NewUI/components/NavBar/Navbars.js'
import {StudentList} from './NewUI/pages/Student/StudentList';
import {MarksEntry} from './NewUI/pages/Teacher/MarksEntry';
import Teacher from './NewUI/pages/Teacher/Teacher';
import Student from './NewUI/pages/Student/Student';
//import Student from './pages/Student';
import SidebarTeacher from "./NewUI/components/Slidebar/SidebarTeacher";
import SidebarAdmin from "./NewUI/components/Slidebar/SidebarAdmin";
// import {SSidebar} from "./NewUI/components/Slidebar/SSidebar";
// import {ASidebar} from "./NewUI/components/Slidebar/ASidebar";

//import {MarksEntry} from './pages/Teacher/MarksEntry';
import * as actions from '../src/NewUI/store/actions/auth';
import { connect } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    componentDidMount(){
        this.props.onTryAutoSignup();
        console.log("in main page",this.props);
    }
    
    render(){
        let routes =null;
        let Switches=null;
        let Sidebar=null;
        if (!this.props.isAuthenticated){
            routes=(
                <Switch>
                    <Route path="/" component={LogIn}/>
                </Switch>)
        }
        else {
            if(this.props.isAuthenticated && this.props.role==="admin"){
                Switches = (
                    <Switch>
                        <Route path="/" component={Admin}/>
                    </Switch>);
                Sidebar = <SidebarAdmin/>
            }
            else if(this.props.isAuthenticated && this.props.role==="teacher"){
                Switches = (
                    <Switch>
                        {/* <Route path="/" component={StudentListM}/> */}
                        <Route path="/" component={Teacher}/>
                    </Switch>);
                Sidebar = <SidebarTeacher/>
            }
            else if(this.props.isAuthenticated && this.props.role==="student"){
                Switches = (
                    <Switch>
                        {/* <Route path="/" component={StudentListM}/> */}
                        <Route path="/" component={Student}/>
                    </Switch>);
                Sidebar = <SidebarTeacher/>
            }

            routes=(
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Navbars/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>
                            {Sidebar}
                        </Col>
                        <Col xs={11}>
                            {Switches}
                        </Col>
                    </Row>
                </Container>
            )
        }
        return (
            <Fragment>
                { routes }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        role: state.auth.role,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch( actions.authCheckState() )
    };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
