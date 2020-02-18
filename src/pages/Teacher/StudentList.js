import React from 'react';
import {Button, Form, FormGroup,Row, Col, Label, Input, Table} from 'reactstrap';
import {Card} from "react-bootstrap";

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
                <tr style={{color:"white"}}>
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
            <div>

                <br/>
                <Card style={{padding:'5px', backgroundColor: '#2a2438', width:'800px',height:'700px', border: '0px', overflow: 'scroll',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                    <Table responsive bordered style={{backgroundColor: '#2a2438'}} >
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
                        {recordDatas}
                        </tbody>
                    </Table>
                </Card>
         </div>
        );
    }
}