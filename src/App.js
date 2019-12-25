import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import './App.css';


class App extends Component {
    state = {
        displayMode: 'SignIn',
        signin: { email: null, password: null },
        isAuth: false
    };

    emailChangeHandler = (event) => {
        let temp = {...this.state.signin};
        temp.email = event.target.value;
        console.log('asd');
        this.setState({signin: temp})
    };

    passwordChangeHandler = (event) => {
        let temp = {...this.state.signin};
        temp.password = event.target.value;
        this.setState({signin: temp})
    };

    onSignInHandler = () => {
        fetch('http://localhost:3000/signin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signin.email,
                password: this.state.signin.password
            })
        }).then()
    };

    render(){
        let mode = <Switch>
            <Route path='/' exact render={() => <SignIn
                email={this.emailChangeHandler}
                password={this.passwordChangeHandler}
                signin={this.onSignInHandler}/>}/>
            <Redirect to='/'/>
        </Switch>;
        /*if (this.state.displayMode === 'SignIn'){
            mode = <SignIn
                email={this.emailChangeHandler}
                password={this.passwordChangeHandler}
                signin={this.onSignInHandler}/>
        }
        else if (this.state.displayMode === 'Admin'){ mode = null }
        else if (this.state.displayMode === 'Teacher'){ mode = null }
        else if (this.state.displayMode === 'Student'){ mode = null }*/
        return (
            <Fragment>
                { mode }
            </Fragment>
        )
    }
}

export default App;
