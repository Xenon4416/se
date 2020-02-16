import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Table} from 'reactstrap';
import {Card} from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Teacher extends Component{
    state = {
        classes:[],
        batch:"",
        subcode:"",
        studentRecords:[]
    };
    componentDidMount(){
        console.log("In Teacher",this.props);
        fetch(`http://localhost:3000/api/record?class=${this.props.tutorClass}&subjectCode=${this.props.subjectCode}&sem=1`)
                .then(res => res.json())
                .then(res => {
                    console.log("second then",res);
                    if (res.status === 'success'){
                        this.setState({studentRecords:[...res.data]})
                    }
                })
                .catch(err => console.log(err));
    }

    render() {
        let recordDatas=null;
        if(this.state.studentRecords.length){
            recordDatas=this.state.studentRecords.map((record,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{record.username}</td>
                    <td>20</td>
                    <td>8</td>
                    <td>{record.mark}</td>
                    <td>Excellent</td>
                 </tr>
            ))
        }
        return(
            <div>
            <div>
                <Card   text={"white"} body inverse style={{ backgroundColor: '#353A40', borderColor: '#333' }}>

                    <div className="media">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/VirtualBox_logo_64px.png" className="mr-3" alt=""/>
                            <div className="media-body">
                                <Table borderless>
                                    <tr>
                                    <td className="text-white">
                                        Dr. Aman Shakya
                                    </td>
                                    </tr>
                                    <tr className="text-white">
                                        <td>Software Engineering</td>
                                    </tr>

                                </Table>
                            </div>
                    </div>

            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Select Year for Student Sync.</Label>

                </FormGroup>

                {/*<FormGroup>
                    <Label className="w-25" for="SelectYear">Year</Label>
                    <Input type="select" name="select" id="exampleSelect" o>
                        <option>First Year</option>
                        <option>Second Year</option>
                        <option>Third Year</option>
                        <option>Forth Year</option>
                    </Input>
                </FormGroup>*/}
            </Form>
                </Card>
            </div>
            <div>
                <Card>
                    <Table className="myTable" bordered dark responsive >
                        <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Roll No</th>
                            <th>Full Marks</th>
                            <th>Pass Marks</th>
                            <th>Marks Obtained</th>
                            <th>Remarks</th>
                        </tr>

                        </thead>
                        <tbody>
                        { recordDatas}
                        </tbody>


                    </Table>
                </Card>
                </div>
                <a href="http://localhost:3000/api/record/report?class=073BEX&subjectCode=SH401&sem=1"><Button>Get EXCEL Report</Button></a>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
