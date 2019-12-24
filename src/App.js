import React, { Component, Fragment } from 'react';
import SignIn from './SignIn';
import './App.css';

class App extends Component {
    state = {
        displayMode: 'SignUp',
        signup: { email: null, password: null }
    };

    emailChangeHandler = (event) => {
        let temp = {...this.state.signup};
        temp.email = event.target.value;
        this.setState({signup: temp})
    };

    passwordChangeHandler = (event) => {
        let temp = {...this.state.signup};
        temp.password = event.target.value;
        this.setState({signup: temp})
    };

    onSignInHandler = () => {
        //request here
    };

    render(){
        let mode = null;
        if (this.state.displayMode === 'SignUp'){
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
