import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
// import SignIn from './pages/SignIn';
import LogIn from './pages/Login';
import Admin from './pages/Admin';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import * as actions from './store/actions/auth';
import { connect } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


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
                <Switch>
                    <Route path="/admin" component={Admin}/>
                </Switch>
            );
        }
        else if(this.props.isAuthenticated && this.props.role==="teacher"){
            routes = (
                <Switch>
                    <Route path="/teacher" component={Teacher}/>
                </Switch>
            );
        }
        else if(this.props.isAuthenticated && this.props.role==="student"){
            routes = (
                <Switch>
                    <Route path="/student" component={Student}/>
                </Switch>
            );
        }

        return (
            <Fragment>
                { routes }
                {/*<StudentView roll={'asd'} name={'asdas'} pract_fm={'asd'}/>*/}
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
