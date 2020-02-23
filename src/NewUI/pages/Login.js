import React from 'react';
import "./Login.css";
import { Form, FormGroup, Container,Label, Input, Row,Col,Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LOGO from '../assests/tu logo official.png';
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
                <p>{this.props.error}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return(
            <React.Fragment>
            {errorMessage ? errorMessage : (
            <Container fluid >
                <Row>                    
                    {/* <Col xs={12} md={8} lg={6}>
                        <Form className="loginBody loginForm">
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
                        </Form>
                        </Col>
                        <Col>
                        <Col xs={10} sm={8} md={6} lg={4}>
                        <Form className="body" onSubmit={ (e) => this.submitForm(e) }>
                        <img className="img" alt="logo" src={LOGO}/>
                        
                        <h2 className="hd2">Internal Marks Management</h2>
                        <FormGroup className="text-white">
                        
                        <Label>Username</Label>
                        <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="074BCT505"
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
                        <Label className="text-white" for="examplePassword">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        //value={ password }
                        onChange={ (e) => this.handleChange(e) }
                        />
                        </FormGroup>
                        
                        <Button className="text-white">Submit</Button>
                        </Form>
                    </Col> */}
                    <Col xs={{span:8}} sm={{span:8,offset:1}} md={{span:6,offset:3}} lg={{span:6,offset:3}} xl={{span:4,offset:4}}>
                        <Form className="fBody">
                            <img className="img" alt="logo" src={LOGO}/>

                            <h2 className="hd2">Internal Marks Management</h2>
                            <FormGroup className="text-white">

                                <Label>Username</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="074BCT505"
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
                                <Label className="text-white" for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="********"
                                    //value={ password }
                                    //onChange={ (e) => this.handleChange(e) }
                                />
                            </FormGroup>

                            <Button className="btn btn-dark" onClick={(event) => this.onSubmitHandler(event)}>Submit</Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
            )}
                {authRedirect}
            </React.Fragment>
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