import React from 'react';
import {Table, CardSubtitle, Row, Col} from 'reactstrap';
import {Card, CardText, Label, CardBody,CardTitle} from "reactstrap";
import './StudentList.css';
import Button from "reactstrap/es/Button";
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Form from "reactstrap/es/Form";
export class StudentList extends React.Component {
    state = {
        classes:[],
        batch:"",
        subcode:"",
        studentRecords:[]
    };
    componentDidMount(){
        console.log("In Teacher",this.props); // TODO: change the url to uris.js
        //fetch(`http://localhost:3000/api/record/class?class=${this.props.tutorClass}&subjectCode=${this.props.subjectCode}&sem=1`)
        fetch(`http://localhost:3000/api/record/class?class=074BCT&subjectCode=SH401&sem=1`)
                .then(res => res.json())
                .then(res => {
                    console.log("second then",res.data);
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
                    <td>{record.test}</td>
                    <td>Excellent</td>
                 </tr>
            ))
        }
        return(

            <Card className="myCardStyle">

                    <div className="studentClassTitle">
                        <CardTitle>Tribhuwan University</CardTitle>
                        <CardSubtitle>IOE, Pulchowk Campus, Lalitpur</CardSubtitle>
                        <CardBody>
                        <CardText>Bachelor's Degree in Computer Engineering</CardText>
                        <CardText>Group<Form className="GroupSelectForm" >
                                    <Input type="select">
                                        <option>A</option>
                                        <option>B</option>
                                    </Input>
                                    </Form>
                        </CardText>
                        <CardText className="groupYPB">

                            <Row form>
                                <Col  md={2}>
                                    <FormGroup>
                                        <Label for="">Year</Label>
                                        <Input type="select" name="year" id="year">
                                            <option>Select Year</option>
                                            <option>First</option>
                                            <option>Second</option>
                                            <option>Third</option>
                                            <option>Four</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="part">Part</Label>
                                        <Input type="select" name="state" id="part">
                                            <option>Select Part </option>
                                        <option>Odd</option>
                                            <option>Even</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="batch">Batch</Label>
                                        <Input type="text" name="batch" id="batch"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>

                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="">Subject</Label>
                                            <Input  type="select" name="subject" id="subject">
                                                <option>Select Subject</option>
                                                <option>Computer Graphics</option>
                                                <option>Computer Architecture and Organization</option>
                                                <option>Software Engineering</option>
                                                <option>Probability and Statistics</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                            </Row>
                            <Row className="paB">
                                <Col md={6}>
                                    <Button outline color="success" >Proceed</Button>
                                </Col>
                            </Row>

                          </CardText>
                        </CardBody>

                    </div>

                    <div>
                        <Table className="studentListTable text-white" responsive >
                            <thead className="studentTableHead">
                            <tr>
                                <th>S.N</th>
                                <th>Roll No</th>
                                <th>Full Name</th>
                                <th>Full Marks</th>
                                <th>Pass Marks</th>
                                <th>Marks Obtained</th>
                            </tr>
                            </thead>
                            <tbody className="scroll">

                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>
                            <tr>
                                <td>S.N</td>
                                <td>Roll No</td>
                                <td>Full Name</td>
                                <td>Full Marks</td>
                                <td>Pass Marks</td>
                                <td>Marks Obtained</td>
                            </tr>

                            </tbody>



                        </Table>
                    </div>
            </Card>

        );
    }
}