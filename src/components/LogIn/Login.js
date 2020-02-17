import React from 'react';
import "./Login.css";
import {
    Form, FormGroup, Label, Input, Button,
} from 'reactstrap';

export class Login extends React.Component{
    render()
    {
        return(
                <Form className="body" onSubmit={ (e) => this.submitForm(e) }>
                    <img className="img" src="http://pcampus.edu.np/wp-content/uploads/2019/05/cropped-pcamus-header-image.jpg" alt="dfdsfdf"/>
                    <br/>
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

        );
    }

    submitForm(e) {

    }
}
