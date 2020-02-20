import React,{ Component } from 'react';
import './admin.css';
import { Col, Button, Form, Container, Row, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody  } from 'reactstrap';
import { connect } from 'react-redux';

const Option = props => {
    return <option>{props.value}</option>
};

class Admin extends Component {
    constructor (props){
        super (props);
        this.onAddClickHandler = this.onAddClickHandler.bind(this);
        this.onSubmithandler = this.onSubmithandler.bind(this);
    }
    state = {
        classes:[],
        batch:['073BCT','074BEX','073BEX'],
        subcodes:['SH401','CE655','CT655'],
        displaySelection: true
    };

    onSubmithandler(){
        let name = document.getElementById("name").value;
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let reqBody = {username: username,classId:"073BCTCE655AB"};
        fetch('http://localhost:3000/api/classes/addTeacher',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
        })
            .then(res => res.json())
            .then(res => {
                alert('New Teacher Assigned');
                console.log(res)})
            .catch(err => console.log(err));
    }

    onAddClickHandler(event){
        // eslint-disable-next-line default-case
        switch (event.target.name) {
            case 'add':
                let sel_batch = document.getElementById("batch");
                let sel_sub = document.getElementById('subcode');
                let cls = {class:sel_batch.options[sel_batch.selectedIndex].text, subjectCode:sel_sub.options[sel_sub.selectedIndex].text};
                let i = 0;
                for (i=0;i<this.state.classes.length;i++){
                    if (this.state.classes[i].class === cls.class && this.state.classes[i].subjectCode === cls.subjectCode){
                        break
                    }
                }
                if (i === this.state.classes.length || this.state.classes.length === 0){
                    this.setState({classes: [...this.state.classes, cls]});
                }
                // this.setState({name: event.target.value});
                break;
            // case 'username':
            //     this.setState({username: event.target.value});
            //     break;
            // case 'password':
            //     this.setState({password: event.target.value});
        }
    }

    toggleView(){ this.setState({displaySelection: !this.state.displaySelection}); }

    render(){
        return (
            <div>
                <Form className="myContainer text-white">
                    <FormGroup>
                        <h2>Add Teacher</h2>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Name</Label>
                        <Col sm={9}>
                            <Input type="text"  id="name" placeholder="Enter the Teacher name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Username</Label>
                        <Col sm={9}>
                            <Input type="text" id="username" placeholder="Enter the Username" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Password</Label>
                        <Col sm={9}>
                            <Input type="password" id="password" placeholder="Enter the Password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Select Batch</Label>
                        <Col sm={3}>
                            <Input type="select" name="batch" id='batch'>
                                {this.state.batch.map((value) => <option>{value}</option>)}
                            </Input>
                        </Col>
                        <Col sm={3}>
                            <Input type="select" name="subcode" id='subcode'>
                                {this.state.subcodes.map((value) => <option>{value}</option>)}
                            </Input>
                        </Col>
                        <Col sm={2}>
                            <Button name='add' onClick={this.onAddClickHandler}>Add</Button>
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
                    <Button onClick={this.onSubmithandler}>Submit</Button>
                </Form>
                <Form className='myContainer1'>
                    <h2>Add Students</h2>
                    <Input id='year'></Input>
                </Form>
            </div>
        );
    }
}

export default Admin;