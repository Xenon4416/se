import React from 'react';
import "./Login.css";
import {
    Form, FormGroup,Row,  Col, Label, Input, Button,
} from 'reactstrap';
import LOGO from '../../assests/tu logo official.png';

export class LoginForm extends React.Component{
    render()
    {
        return(
            <Container>
                <Row>
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

                </Col>
            </Row>
            </Container>


        );
    }

    submitForm(e) {

    }
}
