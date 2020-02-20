import {Card, Col, Container, Row} from "react-bootstrap";

import React from "react";
import {CardBody, ButtonGroup, Button, CardTitle, Table} from "reactstrap";
import CardText from "reactstrap/es/CardText";
import Input from "reactstrap/es/Input";
import {StudentList} from "./StudentList";


export class TeacherV extends React.Component{
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
                    console.log("second then",res);
                    if (res.status === 'success'){
                        this.setState({studentRecords:[...res.data]})
                    }
                })
                .catch(err => console.log(err));
    }

    render()
    {
        let recordDatas=null;
        if(this.state.studentRecords.length){
            recordDatas=this.state.studentRecords.map((record,index)=>(
                <tr key={record.username}>
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
                
            <Container style={{backgroundColor: '#272a3d'}}>
                <Row style={{marginTop:'30px'}}>
                    <Col sm={3}  md={3} lg={3}>
                        <Card  body style={{backgroundColor: '#272a3d', overflow: 'scroll',height:'600px', overflowX: '100px', border: '0px',boxShadow:'2px 2px 10px 0.01px #121212' }}>
                                <CardTitle  className="text-white text-center "><h4>Available Subjects</h4></CardTitle>
                                <CardBody>
                                    <ButtonGroup style={{padding:'5px'}} vertical size="sm" >
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>
                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'5px'}}>
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                       
                                       
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>
                                        
                                        <ButtonGroup style={{padding:'10px'}} size="lg">
                                            <Button outline color="info">074BCT Software Engineering</Button>

                                        </ButtonGroup>

                                    </ButtonGroup>
                                </CardBody>
                        </Card>
                    </Col>

                    <Col sm={9}  md={9} lg={9}>
                        
                        <Card style={{overflow:'scroll',overflowX:'hidden',height:"600px", backgroundColor: '#272a3d'}}>
                        <a href="http://localhost:3000/api/record/classReport?class=073BCT&subjectCode=SH401&sem=1" download><Button>Get Excel file</Button></a>
                                <StudentList/>
                        </Card>     
                    </Col>
                    {
                    /* <Col>
                        <Card style={{padding:'5px', backgroundColor: '#2a2438', width:'800px',height:'700px', border: '0px', overflow: 'scroll',boxShadow:'2px 2px 10px 0.01px #121212'}}>
                            <CardText className="text-white shadow">Enter Marks</CardText>
                            <Table borderless striped style={{backgroundColor: '#2a2438'}} >
                                <thead>
                                <tr className="text-white">
                                    <th>S.N</th>
                                    <th>Roll No</th>
                                    <th>Full Marks</th>
                                    <th>Pass Marks</th>
                                    <th>Marks Obtained</th>
                                </tr>
                                </thead>
                                <tbody>
                                {recordDatas}
                                </tbody>
                                <tr><Button outline color="success">Submit</Button></tr>
                            </Table>
                        </Card>
                    </Col> */
                    }
                </Row>
            </Container>
            
        );
    }
}