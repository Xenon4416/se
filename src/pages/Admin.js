import React,{ Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody  } from 'reactstrap';
import { connect } from 'react-redux';

const Option = props => {
    return <option>{props.value}</option>
};

class Admin extends Component {
    state = {
        name:'',
        username:'',
        password:'',
        classes:[{class:'074BCT',subjectCode:'SHA401'},{class:'074BCT',subjectCode:'SHA401'}],
        batch:['074BCT','074BEX'],
        subcodes:['SH401'],
        displaySelection: true
    };

    onTextChangeHandler(event){
        switch (event.target.name) {
            case 'name':
                this.setState({name: event.target.value});
                break;
            case 'username':
                this.setState({username: event.target.value});
                break;
            case 'password':
                this.setState({password: event.target.value});
        }
    }

    onButtonClickHandler(event){
        // switch (event.target.name) {
        //     case 'add':
        //         this.setState({name: event.target.value});
        //         break;
        //     case 'username':
        //         this.setState({username: event.target.value});
        //         break;
        //     case 'password':
        //         this.setState({password: event.target.value});
        // }
    }

    toggleView(){ this.setState({displaySelection: !this.state.displaySelection}); }

    render(){
        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Label sm={2}>Name</Label>
                        <Col sm={9}>
                            <Input type="text" name="name" placeholder="Enter the Teacher name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Username</Label>
                        <Col sm={9}>
                            <Input type="text" name="username" placeholder="Enter the Username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Password</Label>
                        <Col sm={9}>
                            <Input type="password" name="password" placeholder="Enter the Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Select Batch</Label>
                        <Col sm={2}>
                            <Input type="select" name="batch">
                                {this.state.batch.map((value) => <option>{value}</option>)}
                            </Input>
                        </Col>
                        <Col sm={2}>
                            <Input type="select" name="subcode">
                                {this.state.subcodes.map((value) => <option>{value}</option>)}
                            </Input>
                        </Col>
                        <Col sm={2}>
                            <Button name='add'>Add</Button>
                        </Col>
                        {/*<Col sm={3}>
                            <Button id="viewSelected">View Selected</Button>
                            <Popover placement="bottom" isOpen={this.state.displaySelection} target="viewSelected" toggle={this.toggleView}>
                                <PopoverHeader>Selected Batches</PopoverHeader>
                                <PopoverBody>
                                    sdfdsdf
                                </PopoverBody>
                            </Popover>
                        </Col>*/}
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Admin;