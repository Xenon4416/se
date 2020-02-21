import React from 'react';
import "./Login.css";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

class Login extends React.Component{
    // constructor (props){
    //     super (props);
    //     this.onSubmitHandler = this.onSubmitHandler.bind(this);
    // }

    onSubmitHandler(event){
        event.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        this.props.onSignIn(username, password);
        console.log('gyjgj')
    }

    render(){
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return(
            <div>
            {errorMessage ? errorMessage : (
            <Form className="loginBody loginForm" onSubmit={ (e) => this.submitForm(e) }>
                    <img className="img" src="http://pcampus.edu.np/wp-content/uploads/2019/05/cropped-pcamus-header-image.jpg" alt="dfdsfdf"/>
                    
                    <h2 className="hd2">Internal Marks Management</h2>
                    <FormGroup className="text-white">

                        <Label style={{color:"#9cdcfe"}}>Username</Label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Enter the Username"
                            //value={ email }
                            //valid={ this.state.validate.emailState === 'has-success' }
                            //invalid={ this.state.validate.emailState === 'has-danger' }
                            // onChange={ (e) => {
                            //  this.validateEmail(e)
                            //   this.handleChange(e)
                            // } }
                        />

                    </FormGroup>


                    <FormGroup>
                        <Label style={{color:"#9cdcfe"}}  for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter the Password"
                            
                            //value={ password }
                            // onChange={ (e) => this.handleChange(e) }
                        />
                    </FormGroup>

                    <Button className="btn btn-dark" onClick={(event) => this.onSubmitHandler(event)}>Submit</Button>
                </Form>)}
                {authRedirect}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (username, password) => dispatch(actions.auth(username, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);