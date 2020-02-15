/*
import { React, Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                pcampus.edu.np
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class SignIn extends Component {
    usernameChangeHandler = (event) => {
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
    };

    render() {
        const classes = useStyles();
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={this.usernameChangeHandler()}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={this.passwordChangeHandler}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.onSignInHandler}
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    };
}

const mapStateToProps = state => {
    return {
        displayMode: state.displayMode,
        signin: state.signin,
        isAuth: state.isAuth
    };
};

export default connect(mapStateToProps)(SignIn);*/

import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './SignIn.css';

class SignIn extends Component {
    state = {
        username: '',
        password: '',
        redir: null
    };

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
            <form>
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
        );
    }
}

const mapStateToProps = state => {
    return {
        displayMode: state.loginReducer.displayMode,
        signin: state.loginReducer.signin,
        isAuth: state.loginReducer.isAuth
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