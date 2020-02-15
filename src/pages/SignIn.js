
import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {Container,Row,Col} from 'reactstrap';
import './SignIn.css';

class SignIn extends Component {
    state = {
        username: '',
        password: '',
        redir: null
    };
    componentDidMount(){
        console.log("in sign in page",this.props)
    }
    usernameChangeHandler = (event) => {
        // let temp = {...this.state.signin};
        // temp.username = event.target.value;
        // console.log('asd');
        this.setState({username: event.target.value});
        // this.props.usrnme(event.target.value);
    };

    passwordChangeHandler = (event) => {
        // let temp = {...this.state.signin};
        // temp.password = event.target.value;
        this.setState({password: event.target.value})
        // this.props.passwrd(event.target.value);
    };

    onSignInHandler = (event) => {
        event.preventDefault();
        // this.setState({displayMode:'Teacher', isAuth: true})
        if (this.state.username === '' || this.state.password === ''){
            alert('Username and Password field must not be empty!!')
        }
        else {
            fetch('http://localhost:3000/api/users/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if (res.status === 'success'){
                        console.log(res);
                        localStorage.setItem('token', res.token);
                        this.setState({redir: <Redirect to='/admin'/>})
                    }
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container className="signContainer">
            <Row>
                <Col xl={4}>
                <form className="signForm">
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" onChange={this.usernameChangeHandler} placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={this.passwordChangeHandler} placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                    <button type='button' onClick={this.onSignInHandler} className="btn btn-primary btn-block">Login</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                    {this.state.redir}
            </form>
            </Col>
            </Row>
            </Container>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        displayMode: state.loginReducer.displayMode,
        signin: state.loginReducer.signin,
        isAuth: state.loginReducer.isAuth,
        token:state.loginReducer.token,
        name:state.loginReducer.name
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // usrnme: (val) => dispatch({type: 'USRNM_CHNG', value: val}),
        // passwrd: (val) => dispatch({type: 'PASSWRD_CHNG', value: val}),
        // submit: () => dispatch({type: 'SUBMIT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);