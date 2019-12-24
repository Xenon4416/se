import React, { Component, Fragment } from 'react';
import SignIn from './Login';
import './App.css';

class App extends Component {
    state = {
        displayMode: 'SignUp'
    };

    render(){
        return (
            <Fragment>
                { this.state.displayMode === 'SignUp' ? <SignIn/> : null }
            </Fragment>
        )
    }
}

export default App;
