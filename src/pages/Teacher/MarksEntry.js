import React from 'react';
import { Table} from 'reactstrap';
import {Card} from "react-bootstrap";
import Input from "reactstrap/es/Input";
import CardText from "reactstrap/es/CardText";
import Button from "reactstrap/es/Button";
import Form from "reactstrap/es/Form";
import {Col, Row} from 'reactstrap';
import {Fragment } from 'react'
export class MarksEntry extends React.Component {
    constructor(props){
        super(props);
        this.inputs=[];
        this.myRef=React.createRef();
    }
    buttonHandler=()=>{
        console.log("In button handler: ",this.inputs);
        
        this.inputs["input2"].focus();
    }
    componentDidMount(){
        //this.inputs["input2"].focus();
        console.log(this.myRef.current);
        this.myRef.current.focus();
    }
    componentDidUpdate(){
        console.log("here:",this.myRef);
        this.myRef.current.focus();
    }
    render() {
        return(
            <Fragment>
                <input type="text" ref={this.myRef} id="name" name="name" required minlength="4" maxlength="8" size="10"></input>
                <input type="text" ref={input=>{this.inputs["input2"]=input}} id="name2" name="name2" required minlength="4" maxlength="8" size="10"></input>
                <Card style={{padding:'5px', backgroundColor: '#2a2438', width:'800px',height:'600px', border: '0px', overflow: 'scroll',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                    <CardText className="text-white shadow">Enter Marks</CardText>
                    <Form style={{backgroundColor:'#2a2438', padding:'20px'}}>

                        <Row>
                            <Col sm={6}>
                                <Input  type="select">
                                    <option>Select Subject</option>
                                    <option>Software Engineering</option>
                                </Input>
                            </Col>

                        </Row>


                    </Form>
                    
                    <Table borderless striped  bordered style={{backgroundColor: '#2a2438'}} >
                        <thead>
                        <tr className="text-white">
                            <th>S.N</th>
                            <th>Roll No</th>
                            <th>Full Name</th>
                            <th>Full Marks</th>
                            <th>Pass Marks</th>
                            <th>Marks Obtained</th>
                            <th>Total</th>
                            <th>Remarks</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="text-white">
                            <td>1</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>2</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input>Enter HERE</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>3</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input  style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        
                        <tr className="text-white">
                            <td>4</td>
                            <td>PUL074BCT005</td>
                            <td>Anjil Bishowkarma</td>
                            <td>100</td>
                            <td>80</td>
                            <td><Input style={{backgroundColor: '#2a2438'}}>Enter HERE</Input></td>
                            <td>75</td>
                            <td>Excellent</td>
                        </tr>
                        </tbody>
                        <tr><Button onClick={this.buttonHandler} outline color="success">Submit</Button></tr>
                    </Table>
                </Card>
            </Fragment>
        );
    }
}