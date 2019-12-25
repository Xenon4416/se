import React, { Component, Fragment } from 'react';
import SignIn from './SignIn';
import './App.css';

class App extends Component {
    state = {
        displayMode: 'SignIn',
        signin: { email: null, password: null }
    };

    emailChangeHandler = (event) => {
        let temp = {...this.state.signin};
        temp.email = event.target.value;
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
        let mode = null;
        if (this.state.displayMode === 'SignIn'){
            mode = <SignIn
                email={this.emailChangeHandler}
                password={this.passwordChangeHandler}
                signin={this.onSignInHandler}/>
        }
        else if (this.state.displayMode === 'Admin'){ mode = null }
        else if (this.state.displayMode === 'Teacher'){ mode = null }
        else if (this.state.displayMode === 'Student'){ mode = null }
        return (
            <Fragment>
                { mode }
            </Fragment>
        )
    }
}

export default App;
