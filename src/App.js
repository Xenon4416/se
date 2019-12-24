import React, { Component, Fragment } from 'react';
import SignIn from './Login';
import './App.css';

class App extends Component {
    state = {
        displayMode: 'SignUp',
        signup: { email: null, password: null }
    };

    render(){
        let mode = null;
        if (this.state.displayMode === 'SignUp'){ mode = <SignIn/> }
        else if (this.state.displayMode === 'Admin'){ mode = null }
        else if (this.state.displayMode === 'Teacher'){ mode = null }
        else if (this.state.displayMode === 'Student'){ mode = null }
        return (
            <Fragment>
                { this.state.displayMode === 'SignUp' ? mode : null }
            </Fragment>
        )
    }
}

export default App;
