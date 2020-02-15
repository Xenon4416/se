import React, { Component, Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Admin from './pages/Admin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import StudentView from './components/TeacherStudentView/StudentView';
import './App.css';


class App extends Component {
    /*state = {
        displayMode: 'SignIn',
        signin: { username: null, password: null },
        isAuth: false
    };*/

/*    usernameChangeHandler = (event) => {
        let temp = {...this.state.signin};
        temp.username = event.target.value;
        console.log('asd');
        this.setState({signin: temp})
    };

    passwordChangeHandler = (event) => {
        let temp = {...this.state.signin};
        temp.password = event.target.value;
        this.setState({signin: temp})
    };

    onSignInHandler = () => {
        /!*fetch('http://localhost:3000/signin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.signin.username,
                password: this.state.signin.password
            })
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))*!/
        this.setState({displayMode:'Teacher', isAuth: true})
    };*/

    render(){
        let mode = <Switch>
            <Route path='/' exact render={() => <SignIn/>}/>
            <Route path='/admin' exact render={() => <Admin/>}/>
            <Redirect to='/'/>
        </Switch>;
        /*if (this.state.displayMode === 'SignIn'){
            mode = <SignIn
                username={this.usernameChangeHandler}
                password={this.passwordChangeHandler}
                signin={this.onSignInHandler}/>
        }
        else if (this.state.displayMode === 'Admin'){ mode = null }
        else if (this.state.displayMode === 'Teacher'){ mode = null }
        else if (this.state.displayMode === 'Student'){ mode = null }*/
        return (
            <Fragment>
                { mode }
                {/*<StudentView roll={'asd'} name={'asdas'} pract_fm={'asd'}/>*/}
            </Fragment>
        )
    }
}

export default App;
