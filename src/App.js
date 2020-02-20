import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
import {StudentList} from "./pages/Teacher/StudentList";
// import SignIn from './pages/SignIn';
import LogIn from './pages/Login';
import Admin from './pages/Admin';
import Teacher from './pages/Teacher/Teacher';
import Student from './pages/Student';
import {SidebarUI} from "./components/Slidebar/SidebarUI";
import {MarksEntry} from './pages/Teacher/MarksEntry';
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    componentDidMount(){
        this.props.onTryAutoSignup();
        console.log("in main page",this.props);
    }
    render(){
        let routes = (
            <Switch>
                <Route path="/" component={LogIn}/>
            </Switch>
        );

        if(this.props.isAuthenticated && this.props.role==="admin"){
            routes = (
                <Container fluid={true}>
               <Row>
                   <Col>

                   </Col>
               </Row>
               <Row>
                   <Col xs={1}>
                        <SidebarUI/>
                   </Col>
                   <Col xs={11}>
                    <Switch>
                        <Route path="/" component={Admin}/>
                    </Switch>
                   </Col>
               </Row>
           </Container>
                
            );
        }
        if(this.props.isAuthenticated && this.props.role==="teacher"){
            routes = (
                <Container fluid={true}>
                <Row>
                    <Col>
 
                    </Col>
                </Row>
                <Row>
                    <Col xs={1}>
                         <SidebarUI/>
                    </Col>
                    <Col xs={11}>
                     <Switch>
                         <Route path="/" component={MarksEntry}/>
                     </Switch>
                    </Col>
                </Row>
            </Container>
            );
        }
        // else if(this.props.isAuthenticated && this.props.role==="student"){
        //     routes = (
        //         <Switch>
        //             <Route path="/" component={Student}/>
        //         </Switch>
        //     );
        // }

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
