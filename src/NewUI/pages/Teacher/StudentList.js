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