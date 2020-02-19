import React from 'react';
import {Button, Container,Form, FormGroup,Row, Col, Label, Input, Table, CardSubtitle} from 'reactstrap';
import {Card,CardBody,CardTitle} from "reactstrap";
import './StudentList.css';
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
            
            <Card  className="studentListCard" >
                <CardBody>
                    <div className="studentClassTitle">
                        <CardTitle >Tribhuwan University</CardTitle>
                        <CardSubtitle>IOE,Pulchowk Campus Lalitpur</CardSubtitle>
                    </div>
                    <div className='StudentListScroll'>
                        <Table className="studentListTable" bordered striped dark responsive >
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
                            {recordDatas}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
                
            </Card>
        );
    }
}